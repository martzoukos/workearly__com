import Text from "@/components/Text";
import styles from "./VideoTetimonialCard.module.scss";
import { QueryItem } from "@workearly/api";
import ReactPlayer from "react-player";
import Image from "next/image";

type PropsType = {
  card: QueryItem["Card"];
};

export default function VideoTetimonialCard({ card }: PropsType) {
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
                <Image src="/images/star.svg" alt="" width={16} height={16} />
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
