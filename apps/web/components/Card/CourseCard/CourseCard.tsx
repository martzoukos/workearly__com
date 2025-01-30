import Image from "next/image";
import styles from "./CourseCard.module.scss";

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
        <p className={styles.title}>Healthcare Analytics Bootcamp</p>

        <p className={styles.description}>
          Master data-driven insights to improve healthcare systems, patient
          outcomes, and decision-making in the medical field.
        </p>

        <div className={styles.details}>
          <p className={styles.duration}>4-6 Months</p>
          <p className={styles.students}>563 Students</p>
        </div>

        <p className={styles.price}>€9.99</p>
      </div>
    </div>
  );
};

export default CourseCard;
