import Text from "@/components/Text";
import { StarFilled } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import Image from "next/image";
import ReactPlayer from "react-player";
import styles from "./VideoTestimonialCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
};

export default function VideoTestimonialCard({ card }: PropsType) {
  const asset = card.asset;
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.playerWrapper}>
          {asset?.url && (
            <>
              {asset?.contentType?.includes("video/") && (
                <ReactPlayer
                  url={asset.url}
                  width="100%"
                  height="100%"
                  controls
                />
              )}
              {asset?.contentType?.includes("image/") && (
                <Image
                  src={asset.url}
                  width={asset.width || 0}
                  height={asset.height || 0}
                  alt=""
                  className={styles.asset}
                />
              )}
            </>
          )}
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
