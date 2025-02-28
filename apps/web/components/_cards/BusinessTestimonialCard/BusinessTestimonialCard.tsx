import { QueryItem } from "@workearly/api";
import styles from "./BusinessTestimonialCard.module.scss";
import Image from "next/image";
import Text from "@/components/Text";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

export default function BusinessTestimonialCard({ card }: PropsType) {
  const asset = card?.asset;
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.mediaContainer}>
          {asset?.url && (
            <Image
              src={asset?.url}
              alt=""
              width={asset.width || 0}
              height={asset.height || 0}
              className={styles.media}
            />
          )}
        </div>

        <div className={styles.details}>
          <div>
            {card?.tags && card?.tags?.length > 0 && (
              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <Text size="caption" className={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </div>
            )}
            {card.text && <Text>{card.text}</Text>}
          </div>
          {card.title && <Text className={styles.title}>{card.title}</Text>}
        </div>
      </div>
    </div>
  );
}
