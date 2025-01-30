import getRichTextResolver from "@/utils/getRichTextResolver";
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

function getOptions(resolver: ReturnType<typeof getRichTextResolver>) {
  const {
    columnCount,
    IconComponent,
    renderListAsCards,
    renderListAsChips,
    hasBulletTranformation,
  } = resolver;

  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Text as="h1">{children}</Text>,
      [BLOCKS.HEADING_2]: (node, children) => (
        <Text as="h2" className={clsx(!hasBulletTranformation && styles.h2)}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Text as="h3" className={clsx(!hasBulletTranformation && styles.h3)}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Text as="h4" className={clsx(!hasBulletTranformation && styles.h4)}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Text as="h5" className={clsx(!hasBulletTranformation && styles.h5)}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Text as="h6" className={clsx(!hasBulletTranformation && styles.h6)}>
          {children}
        </Text>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text as="p" className={clsx(!hasBulletTranformation && styles.p)}>
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
            className={clsx(!hasBulletTranformation && styles.li)}
          >
            {children}
          </ListItem>
        );
      },
    },
  };

  return options;
}

type PropsType = {
  json: Document;
  resolver: ReturnType<typeof getRichTextResolver>;
  className?: string;
};

export default function RichText({ json, resolver, className }: PropsType) {
  return (
    <section className={clsx(styles.root, className)}>
      {documentToReactComponents(json, getOptions(resolver))}
    </section>
  );
}
