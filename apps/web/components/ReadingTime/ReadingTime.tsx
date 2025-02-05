import { Document } from "@contentful/rich-text-types";
import styles from "./ReadingTime.module.scss";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { ClockIcon } from "@workearly/icons";
import Text from "@/components/Text/Text";

const WORDS_PER_MINUTE = 200;

const calculateReadingTime = (documents: Document[]): number => {
  const plainText = documents
    .map((document) => documentToPlainTextString(document))
    .join(" ");
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  return Math.ceil(wordCount / WORDS_PER_MINUTE);
};

type PropsType = {
  documents: Document[];
};

export default function ReadingTime({ documents }: PropsType) {
  const time = calculateReadingTime(documents);

  return (
    <div className={styles.root}>
      <ClockIcon />
      <Text size="caption">{time} mins</Text>
    </div>
  );
}
