import Card from "@/components/Card";
import Media from "@/components/Media";
import Text from "@/components/Text";
import { StarFilled } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import { ThemeType } from "@workearly/theme";
import clsx from "clsx";
import styles from "./VideoTestimonialCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
  theme: ThemeType;
};

export default function VideoTestimonialCard({
  card,
  theme,
  className,
}: PropsType) {
  return (
    <Card.Root theme={theme} className={clsx(styles.card, className)}>
      <div className={styles.content}>
        {card.asset && (
          <div className={styles.playerWrapper}>
            <Media asset={card.asset} aspectRatio="auto" />
          </div>
        )}

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
    </Card.Root>
  );
}
