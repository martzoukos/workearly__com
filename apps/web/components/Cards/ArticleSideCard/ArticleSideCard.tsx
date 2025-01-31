import Text from "@/components/Text/Text";
import styles from "./ArticleSideCard.module.scss";
import Image from "next/image";

export default function () {
  return (
    <div className={styles.card}>
      <Text size="small">Author</Text>
      <div className={styles.profileCard}>
        <Image
          src="/profile-card.png"
          alt=""
          width={50}
          height={50}
          className={styles.media}
        />

        <div>
          <Text size="small">Chris Gotsis</Text>
          <Text size="small">CEO of Yayu</Text>
        </div>
      </div>

      <div className={styles.related}>
        <Text size="small">Related Topics</Text>

        <div className={styles.tags}>
          <Text size="small" className={styles.tag}>
            Students
          </Text>
          <Text size="small" className={styles.tag}>
            Technology
          </Text>
          <Text size="small" className={styles.tag}>
            Design
          </Text>
        </div>
      </div>
    </div>
  );
}
