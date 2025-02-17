import Text from "@/components/Text/";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./KeyMetricsCard.module.scss";

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
