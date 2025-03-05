import Card from "@/components/Card";
import Text from "@/components/Text";
import { QueryItem } from "@workearly/api";
import Image from "next/image";
import styles from "./BusinessTestimonialCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

export default function BusinessTestimonialCard({ card }: PropsType) {
  const asset = card?.asset;
  const titles = card?.title?.split("|") || [];
  const tags = card?.tags || [];

  return (
    <Card.Root className={styles.card}>
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
            {tags.length > 0 && (
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <Text key={tag} size="caption" className={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </div>
            )}
            {card.text && <Text>{card.text}</Text>}
          </div>
          {titles.length > 0 && (
            <div>
              {titles.map((title) => (
                <Text key={title} className={styles.title}>
                  {title}
                </Text>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card.Root>
  );
}
