import Image from "next/image";
import styles from "./CourseCard.module.scss";
import Text from "@/components/Text/Text";

type PropsType = {};

const CourseCard = () => {
  return (
    <div className={styles.card} data-color="Dark" data-size={"normal"}>
      <Image
        src="/course-card.png"
        alt=""
        width={100}
        height={100}
        className={styles.media}
      />

      <div className={styles.content}>
        <Text size="h6" className={styles.title}>
          Healthcare Analytics Bootcamp
        </Text>

        <Text size="small" className={styles.description}>
          Master data-driven insights to improve healthcare systems, patient
          outcomes, and decision-making in the medical field.
        </Text>

        <div className={styles.details}>
          <Text size="caption">4-6 Months</Text>
          <Text size="caption">563 Students</Text>
        </div>

        <Text size="h6" className={styles.price}>
          €9.99
        </Text>
      </div>
    </div>
  );
};

export default CourseCard;
