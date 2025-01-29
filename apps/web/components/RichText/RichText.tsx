import { ContentTypeRichTextQueryItem } from "@workearly/api";
import styles from "./RichText.module.scss";
import clsx from "clsx";

type PropsType = {
  richText: ContentTypeRichTextQueryItem;
  className?: string;
};

export default function RichText({ richText, className }: PropsType) {
  return (
    <section className={clsx(styles.root, className)}>
      {richText.__typename}
    </section>
  );
}
