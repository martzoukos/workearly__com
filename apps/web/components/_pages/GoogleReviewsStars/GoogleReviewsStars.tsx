import Text from "@/components/Text";
import { StarFilled } from "@carbon/icons-react";
import Link from "next/link";
import styles from "./GoogleReviewsStars.module.scss";

export default function GoogleReviewsStars() {
  return (
    <div className={styles.container}>
      <div className={styles.stars}>
        <StarFilled className={styles.star} />
        <StarFilled className={styles.star} />
        <StarFilled className={styles.star} />
        <StarFilled className={styles.star} />
        <StarFilled className={styles.star} />
      </div>
      <Text asChild size="small">
        <Link className={styles.link} href="https://g.co/kgs/scMBg4f">
          900+ Google Reviews
        </Link>
      </Text>
    </div>
  );
}
