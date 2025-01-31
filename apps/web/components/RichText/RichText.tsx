import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import clsx from "clsx";
import TitleTextCard from "../Cards/TitleTextCard/TitleTextCard";
import Text from "../Text/Text";
import List from "./List";
import ListItem from "./ListItem";
import Button from "../Button/Button";
import styles from "./RichText.module.scss";
import useRichTextResolver from "../../hooks/useRichTextResolver";
import { ContentTypeRichTextQueryItem } from "@workearly/api";

function getOptions(resolver: ReturnType<typeof useRichTextResolver>) {
  const {
    columnCount,
    IconComponent,
    renderListAsCards,
    renderListAsChips,
    variant,
  } = resolver;

  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Text as="h1">{children}</Text>,
      [BLOCKS.HEADING_2]: (node, children) => (
        <Text as="h2" className={clsx(variant === "Default" && styles.h2)}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Text as="h3" className={clsx(variant === "Default" && styles.h3)}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Text as="h4" className={clsx(variant === "Default" && styles.h4)}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Text as="h5" className={clsx(variant === "Default" && styles.h5)}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Text as="h6" className={clsx(variant === "Default" && styles.h6)}>
          {children}
        </Text>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text as="p" className={clsx(variant === "Default" && styles.p)}>
          {children}
        </Text>
      ),
      [BLOCKS.UL_LIST]: (node, children) => {
        return (
          <List
            columnCount={columnCount}
            className={clsx(renderListAsChips && styles.chips)}
          >
            {children}
          </List>
        );
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        if (renderListAsCards) {
          return <TitleTextCard>{children}</TitleTextCard>;
        } else if (renderListAsChips) {
          return <Button variant="Chip">{children}</Button>;
        }

        return (
          <ListItem
            icon={IconComponent ? <IconComponent /> : null}
            className={clsx(variant === "Default" && styles.li)}
          >
            {children}
          </ListItem>
        );
      },
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
  richText: ContentTypeRichTextQueryItem;
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
