import Text from "@/components/Text/Text";
import styles from "./KeyMetricsCard.module.scss";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

const KeyMetricsCard = ({ card, className }: PropsType) => {
  return (
    <div className={clsx(styles.card, className)}>
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
    </div>
  );
};

export default KeyMetricsCard;
