import Image from "next/image";
import styles from "./ArticleCard.module.scss";
import Text from "@/components/Text/Text";

export default function ArticleCard() {
  const variant = "normal";
  return (
    <div className={styles.card} data-variant={variant}>
      <Image
        src="/article.png"
        alt=""
        width={100}
        height={100}
        className={styles.media}
        data-variant={variant}
      />

      <div className={styles.content} data-variant={variant}>
        <div className={styles.header}>
          <Text size={variant === "normal" ? "h5" : "h3"}>
            5 Steps to Transitioning from Math Teacher to Data Scientist
          </Text>
          <Text size="small">
            Discover how to transition from teaching to tech with our tailored
            data science programs. Learn essential skills and strategies to land
            your first role.
          </Text>
        </div>

        <div className={styles.footer}>
          <div className={styles.left}>
            <Text size="caption" className={styles.tag}>
              GUIDES
            </Text>

            <div className={styles.left}>
              <div className={styles.profileContainer}>
                <Image
                  src="/profile-card.png"
                  alt=""
                  width={20}
                  height={20}
                  className={styles.profile}
                />
                <Text size="small">Alex Olson</Text>
              </div>

              <Text size="small">December 9, 2024</Text>
            </div>
          </div>

          <div className={styles.right}>
            <Image src="/clock.svg" alt="" width={16} height={16} />
            <Text>14 mins</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
