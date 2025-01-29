import styles from "./CourseDetailsCard.module.scss";

type PropsType = {};

const CourseDetailsCard = () => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>DURATION</p>
      <p className={styles.value}>4-6 MONTHS</p>
    </div>
  );
};

export default CourseDetailsCard;
