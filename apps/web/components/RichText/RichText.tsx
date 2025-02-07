import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  Document,
  Text as ContentfulText,
  INLINES,
} from "@contentful/rich-text-types";
import clsx from "clsx";
import TitleTextCard from "../Cards/TitleTextCard/TitleTextCard";
import Text from "../Text/Text";
import List from "./List";
import ListItem from "./ListItem";
import Button from "../Button/Button";
import styles from "./RichText.module.scss";
import useRichTextResolver from "../../hooks/useRichTextResolver";
import { QueryItem } from "@workearly/api";
import snakeCase from "lodash-es/snakeCase";
import Image from "next/image";
import React from "react";
import Person from "../Person/Person";
import CallOutCard from "../Cards/CallOutCard/CallOutCard";

function getOptions(resolver: ReturnType<typeof useRichTextResolver>) {
  const {
    columnCount,
    IconComponent,
    renderListAsCards,
    renderListAsChips,
    variant,
    richText,
    getReference,
  } = resolver;

  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (_, children) => <Text as="h1">{children}</Text>,
      [BLOCKS.HEADING_2]: (node, children) => {
        const textNode = node.content.find(
          (node) => node.nodeType === "text"
        ) as ContentfulText;

        return (
          <Text
            id={snakeCase(`h2_${textNode.value}`)}
            as="h2"
            className={clsx(variant === "Default" && styles.h2)}
          >
            {children}
          </Text>
        );
      },
      [BLOCKS.HEADING_3]: (_, children) => (
        <Text as="h3" className={clsx(variant === "Default" && styles.h3)}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_4]: (_, children) => (
        <Text as="h4" className={clsx(variant === "Default" && styles.h4)}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_5]: (_, children) => (
        <Text as="h5" className={clsx(variant === "Default" && styles.h5)}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_6]: (_, children) => (
        <Text as="h6" className={clsx(variant === "Default" && styles.h6)}>
          {children}
        </Text>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <Text as="p" className={clsx(variant === "Default" && styles.p)}>
          {children}
        </Text>
      ),
      [BLOCKS.UL_LIST]: (_, children) => {
        if (renderListAsChips) {
          return (
            <List
              columnCount={columnCount}
              className={clsx(renderListAsChips && styles.chips)}
            >
              {children}
            </List>
          );
        }

        return <ul className={styles.ul}>{children}</ul>;
      },
      [BLOCKS.LIST_ITEM]: (_, children) => {
        if (renderListAsCards) {
          return <TitleTextCard>{children}</TitleTextCard>;
        } else if (renderListAsChips) {
          return <Button variant="Chip">{children}</Button>;
        } else if (variant !== "Default") {
          return (
            <ListItem icon={IconComponent ? <IconComponent /> : null}>
              {children}
            </ListItem>
          );
        }

        return <li className={styles.li}>{children}</li>;
      },
      [BLOCKS.QUOTE]: (_, children) => {
        return (
          <div className={styles.blockquoteContainer}>
            <blockquote>
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.props.as === "p") {
                  return (
                    <Text size="h4" as="div" className={styles.blockquoteInner}>
                      {child.props.children}
                    </Text>
                  );
                }
                return child;
              })}
            </blockquote>
          </div>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = richText?.body?.links.assets.block.find(
          (item) => item?.sys.id === node.data.target.sys.id
        );

        if (!asset?.url) {
          return null;
        }

        if (asset.contentType?.includes("image/")) {
          return (
            <div className={styles.media}>
              <figure className={styles.figure}>
                <Image
                  src={asset.url}
                  width={asset.width || 600}
                  height={asset.height || 450}
                  alt={asset.description || ""}
                />
                {asset.title && <figcaption>{asset.title}</figcaption>}
              </figure>
            </div>
          );
        }

        if (asset.contentType?.includes("video/")) {
          return (
            <div className={styles.media}>
              <video controls>
                <source src={asset.url} type={asset.contentType} />
              </video>
            </div>
          );
        }
      },
      [BLOCKS.TABLE]: (_, children) => {
        return (
          <table className={styles.table}>
            <tbody>{children}</tbody>
          </table>
        );
      },
      [BLOCKS.TABLE_HEADER_CELL]: (_, children) => {
        return <th className={styles.th}>{children}</th>;
      },
      [BLOCKS.TABLE_CELL]: (_, children) => {
        return <td className={styles.td}>{children}</td>;
      },
      [BLOCKS.TABLE_ROW]: (_, children) => {
        return <tr className={styles.tr}>{children}</tr>;
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const blockEntry = richText?.body?.links.entries.block.find(
          (item) => item?.sys.id === node.data.target.sys.id
        );

        if (!blockEntry?.__typename) {
          return null;
        }

        const reference = getReference(
          blockEntry.__typename,
          blockEntry.sys.id
        );

        if (
          reference?.__typename === "Card" &&
          reference.variant === "Call out Card"
        ) {
          return (
            <CallOutCard card={reference} className={styles.embeddedBlock} />
          );
        }

        return null;
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const inlineEntry = richText?.body?.links.entries.inline.find(
          (item) => item?.sys.id === node.data.target.sys.id
        );

        if (!inlineEntry?.__typename) {
          return null;
        }

        const reference = getReference(
          inlineEntry.__typename,
          inlineEntry.sys.id
        );

        if (reference?.__typename === "PeopleDetails") {
          return (
            <Person
              imageUrl={reference.asset?.url || ""}
              name={reference.name || ""}
              size="small"
            />
          );
        }

        return null;
      },
    },
    renderText: (text) => {
      const parts = text.split("\n");

      if (!parts.filter(Boolean).length) {
        return null;
      }

      return text.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ));
    },
  };

  return options;
}

interface BaseProps {
  className?: string;
}

interface JsonProps extends BaseProps {
  json: Document;
  richText?: never;
}

interface RichTextProps extends BaseProps {
  richText: QueryItem["ContentTypeRichText"];
  json?: never;
}

type PropsType = JsonProps | RichTextProps;

export default function RichText({ json, richText, className }: PropsType) {
  const resolver = useRichTextResolver(richText);

  return (
    <section className={clsx(styles.root, className)}>
      {documentToReactComponents(
        richText?.body?.json || json,
        getOptions(resolver)
      )}
    </section>
  );
}
