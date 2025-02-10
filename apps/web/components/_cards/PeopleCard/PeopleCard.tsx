import Image from "next/image";
import styles from "./PeopleCard.module.scss";
import Text from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

const PeopleCard = ({ card, className }: PropsType) => {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.content}>
        {card?.asset?.url && (
          <Image
            src={card.asset.url}
            alt=""
            width={card.asset.width || 100}
            height={card.asset.height || 100}
            className={styles.media}
          />
        )}

        <div className={styles.label}>
          {card?.title && (
            <Text className={styles.labelText}>{card.title}</Text>
          )}

          {card?.text && (
            <Text size="small" className={styles.labelText}>
              {card.text}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
