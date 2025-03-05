import Media from "@/components/Media";
import Text from "@/components/Text";
import { StarFilled } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./VideoTestimonialCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

export default function VideoTestimonialCard({ card, className }: PropsType) {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.content}>
        <div className={styles.playerWrapper}>
          {card.asset && <Media asset={card.asset} aspectRatio="auto" />}
        </div>

        <div className={styles.details}>
          {card.rating && (
            <div className={styles.stars}>
              {Array.from({ length: card.rating }).map((_, index) => (
                <StarFilled key={index} />
              ))}
            </div>
          )}

          {card.title && <Text>{card.title}</Text>}
          {card.text && <Text>{card.text}</Text>}
        </div>
      </div>
    </div>
  );
}
