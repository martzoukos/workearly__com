import { ContentTypeRichTextQueryItem } from "@workearly/api";
import styles from "./RichText.module.scss";
import clsx from "clsx";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Text from "../Text/Text";
import List from "./List";
import ListItem from "./ListItem";
import useRichTextResolver from "@/hooks/useRichTextResolver";
import TitleTextCard from "../Cards/TitleTextCard/TitleTextCard";

function getOptions(resolver: ReturnType<typeof useRichTextResolver>) {
  const { columnCount, IconComponent, renderListItemAsCard } = resolver;

  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Text as="h1">{children}</Text>,
      [BLOCKS.HEADING_2]: (node, children) => <Text as="h2">{children}</Text>,
      [BLOCKS.HEADING_3]: (node, children) => <Text as="h3">{children}</Text>,
      [BLOCKS.HEADING_4]: (node, children) => <Text as="h4">{children}</Text>,
      [BLOCKS.HEADING_5]: (node, children) => <Text as="h5">{children}</Text>,
      [BLOCKS.HEADING_6]: (node, children) => <Text as="h5">{children}</Text>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text as="p">{children}</Text>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <List columnCount={columnCount}>{children}</List>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => {
        if (renderListItemAsCard) {
          return <TitleTextCard>{children}</TitleTextCard>;
        }

        return (
          <ListItem icon={IconComponent ? <IconComponent /> : null}>
            {children}
          </ListItem>
        );
      },
    },
  };

  return options;
}

type PropsType = {
  richText: ContentTypeRichTextQueryItem;
  className?: string;
};

export default function RichText({ richText, className }: PropsType) {
  const resolver = useRichTextResolver(richText);

  return (
    <section className={clsx(className)}>
      {documentToReactComponents(richText.body?.json, getOptions(resolver))}
    </section>
  );
}
