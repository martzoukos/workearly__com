import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Text as ContentfulText } from "@contentful/rich-text-types";
import clsx from "clsx";
import snakeCase from "lodash-es/snakeCase";
import useHeadingsObserver from "../../hooks/useHeadingsObserver";
import usePageResolver from "../../hooks/usePageResolver";
import { useContentful } from "../../stores/ContentfulStore";
import Text from "../Text/Text";
import styles from "./PostOutline.module.scss";

type OptionsType = {
  activeHeadingHash: string;
};

function getOptions({ activeHeadingHash }: OptionsType): Options {
  return {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        const textNode = node.content.find(
          (node) => node.nodeType === "text"
        ) as ContentfulText;

        const hash = `#${snakeCase(`h2_${textNode.value}`)}`;

        return (
          <li
            data-active={activeHeadingHash === hash}
            className={styles.item}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(hash)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {children}
          </li>
        );
      },
    },
  };
}

export default function PostOutline() {
  const { page } = useContentful();
  const { getHeadingsDoc, resourceDetails } = usePageResolver(page);
  const { activeId } = useHeadingsObserver({ selectors: "h2" });
  const activeHash = `#${activeId}`;
  const options = getOptions({ activeHeadingHash: activeHash });
  const headingsDoc = getHeadingsDoc();

  if (!headingsDoc) {
    return null;
  }

  return (
    <aside className={styles.root}>
      <Text as="h6" className={styles.title}>
        {resourceDetails.name}
      </Text>
      <ul className={styles.list}>
        {documentToReactComponents(headingsDoc, options)}
      </ul>
    </aside>
  );
}
