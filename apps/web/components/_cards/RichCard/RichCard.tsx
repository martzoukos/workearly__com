import styles from "./RichCard.module.scss";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { QueryItem } from "@workearly/api";
import Markdown from "@/components/RichText/Markdown";

type PropsType = {
  card: QueryItem["Card"];
};

export default function RichCard({ card }: PropsType) {
  return (
    <div className={styles.root}>
      <Text className={styles.title}>For Individuals</Text>
      <div className={styles.content}>
        <div className={styles.richText}>
          <Text size="h3">Unlock your full career potential</Text>
          {card.text && (
            <Markdown variant="Single Column Checkmark">{card.text}</Markdown>
          )}
        </div>

        <Image
          src="/cards.png"
          alt=""
          width={320}
          height={160}
          className={styles.media}
        />
      </div>
      <Button colorScheme={"Green"} className={styles.button}>
        <Text size="h6">Browse Courses</Text>
      </Button>
    </div>
  );
}
