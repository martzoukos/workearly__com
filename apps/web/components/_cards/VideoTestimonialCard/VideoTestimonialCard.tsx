import Card from "@/components/Card";
import Media from "@/components/Media";
import Markdown from "@/components/RichText/Markdown";
import Text from "@/components/Text";
import { StarFilled } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import { ThemeType } from "@workearly/theme";
import clsx from "clsx";
import styles from "./VideoTestimonialCard.module.scss";
import { PlayIcon } from "@workearly/svg";
import Image from "next/image";
import { useState } from "react";

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
  const [isThumbnail, setisThumbnail] = useState(Boolean(card?.thumbnail?.url));

  return (
    <Card.Root theme={theme} className={clsx(styles.root, className)}>
      <div className={styles.card}>
        <div className={styles.content}>
          {card.asset && (
            <div className={styles.playerWrapper}>
              <Media
                className={`${isThumbnail && styles.placeholder}`}
                asset={card.asset}
                aspectRatio="auto"
                videoProps={{ playing: !isThumbnail, light: isThumbnail }}
              />
              {isThumbnail && (
                <div
                  className={styles.thumbnailWrapper}
                  onClick={() => setisThumbnail(false)}
                >
                  <Image
                    src={card?.thumbnail?.url || ""}
                    className={styles.thumbnail}
                    alt=""
                    width={card?.thumbnail?.width || 100}
                    height={card?.thumbnail?.height || 100}
                  />
                  <PlayIcon className={styles.playIcon} />
                </div>
              )}
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
            {card.text && <Markdown>{card.text}</Markdown>}
          </div>
        </div>
      </div>
    </Card.Root>
  );
}
