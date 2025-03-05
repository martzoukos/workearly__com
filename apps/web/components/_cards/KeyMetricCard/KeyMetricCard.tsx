import Card from "@/components/Card";
import Text from "@/components/Text/";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./KeyMetricCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

const KeyMetricCard = ({ card, className }: PropsType) => {
  return (
    <Card.Root className={clsx(styles.card, className)}>
      {card?.title && (
        <Text size="d2" className={styles.title}>
          {card.title}
        </Text>
      )}

      {card?.text && (
        <Text size="h4" className={styles.subtitle}>
          {card.text}
        </Text>
      )}
    </Card.Root>
  );
};

export default KeyMetricCard;
