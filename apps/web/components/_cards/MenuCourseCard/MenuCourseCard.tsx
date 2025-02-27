import Text from "@/components/Text";
import styles from "./MenuCourseCard.module.scss";
import { UserFilled } from "@carbon/icons-react";

export default function MenuCourseCard() {
  return (
    <div className={styles.root}>
      <Text>Healthcare Analytics Bootcamp</Text>

      <div className={styles.details}>
        <Text size="caption">4-6 Months</Text>
        <Text size="caption" className={styles.students}>
          <UserFilled size={12} /> 563 Students
        </Text>
      </div>
    </div>
  );
}
