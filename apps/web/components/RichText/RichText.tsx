import CallOutCard from "@/components/_cards/CallOutCard";
import Person from "@/components/Person";
import Shell from "@/components/Shell";
import Text from "@/components/Text";
import useRichTextResolver, {
  RichTextVariantType,
} from "@/hooks/useRichTextResolver";
import useShellResolver from "@/hooks/useShellResolver";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  Text as ContentfulText,
  Document,
  INLINES,
} from "@contentful/rich-text-types";
import { QueryItem, RelationshipMapTypeName } from "@workearly/api";
import { ThemeType } from "@workearly/theme";
import clsx from "clsx";
import snakeCase from "lodash-es/snakeCase";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Fragment } from "react";
import styles from "./RichText.module.scss";
import {
  BlockQuote,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LI,
  P,
  UL,
} from "./RichTextPrimitives";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function getOptions(
  resolver: ReturnType<typeof useRichTextResolver>,
  richText?: QueryItem["ContentTypeRichText"]
) {
  const { getReference } = resolver;

  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (_, children) => (
        <H1 resolver={resolver}>{children}</H1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => {
        const textNode = node.content.find(
          (node) => node.nodeType === "text"
        ) as ContentfulText;

        return (
          <H2 resolver={resolver} id={snakeCase(`h2_${textNode.value}`)}>
            {children}
          </H2>
        );
      },
      [BLOCKS.HEADING_3]: (_, children) => (
        <H3 resolver={resolver}>{children}</H3>
      ),
      [BLOCKS.HEADING_4]: (_, children) => (
        <H4 resolver={resolver}>{children}</H4>
      ),
      [BLOCKS.HEADING_5]: (_, children) => (
        <H5 resolver={resolver}>{children}</H5>
      ),
      [BLOCKS.HEADING_6]: (_, children) => (
        <H6 resolver={resolver}>{children}</H6>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node &&
          Array.isArray(node.content) &&
          node.content.length === 1 &&
          (node.content.at(0) as ContentfulText)?.value?.trim() === ""
        ) {
          return null;
        }

        return <P resolver={resolver}>{children}</P>;
      },
      [BLOCKS.UL_LIST]: (_, children) => (
        <UL resolver={resolver}>{children}</UL>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => (
        <LI resolver={resolver}>{children}</LI>
      ),
      [BLOCKS.QUOTE]: (_, children) => (
        <BlockQuote resolver={resolver}>{children}</BlockQuote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = richText?.body?.links.assets.block.find(
          (item) => item?.sys.id === node.data.target.sys.id
        );

        if (!asset?.url) {
          return null;
        }

        if (asset.contentType?.includes("image/")) {
          return (
            <div className={styles.figureContainer}>
              <figure className={styles.figure}>
                <div className={styles.imageContainer}>
                  <Image
                    src={asset.url}
                    fill={true}
                    sizes="50vw"
                    alt={asset.description || ""}
                  />
                </div>
                {asset.title && <figcaption>{asset.title}</figcaption>}
              </figure>
            </div>
          );
        }

        if (asset.contentType?.includes("video/")) {
          return <Video url={asset.url} caption={asset.title} />;
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
          blockEntry.__typename as RelationshipMapTypeName,
          blockEntry.sys.id
        );

        if (
          reference?.__typename === "Card" &&
          reference.variant === "Call Out"
        ) {
          return (
            <CallOutCard
              card={reference}
              className={styles.embeddedBlock}
              theme={(reference.theme || resolver.theme) as ThemeType}
            />
          );
        }

        return null;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const text = (node.content.at(0) as ContentfulText)?.value.trim();
        const uri = node.data.uri.trim();

        if (
          text === uri &&
          (uri.includes("youtube.com") || uri.includes("vimeo.com"))
        ) {
          return <Video url={uri} />;
        }

        return (
          <a className={styles.a} href={node.data.uri}>
            {children}
          </a>
        );
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const inlineEntry = richText?.body?.links.entries.inline.find(
          (item) => item?.sys.id === node.data.target.sys.id
        );

        if (!inlineEntry?.__typename) {
          return null;
        }

        const reference = getReference(
          inlineEntry.__typename as RelationshipMapTypeName,
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
      return text.split("\n").map((line, index, arr) => (
        <Fragment key={index}>
          {line}
          {index < arr.length - 1 && <br />}
        </Fragment>
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
  const resolver = useRichTextResolver(
    richText?.variant as RichTextVariantType
  );
  const shell = useShellResolver(richText);

  return (
    <Shell.Root
      {...shell}
      data-alignment={shell.alignment}
      className={clsx(
        styles.root,
        resolver.renderListAsChips && styles.chipsContainer,
        className
      )}
    >
      {documentToReactComponents(
        richText?.body?.json || json,
        getOptions(resolver, richText)
      )}
    </Shell.Root>
  );
}

type VideoPropsType = {
  url: string;
  caption?: string | null;
};

function Video({ url, caption }: VideoPropsType) {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.playerContainer}>
        <div className={styles.playerWrapper}>
          <ReactPlayer url={url} width="100%" height="100%" controls={true} />
        </div>
        {caption && (
          <Text as="h4" className={styles.videoCaption}>
            {caption}
          </Text>
        )}
      </div>
    </div>
  );
}
