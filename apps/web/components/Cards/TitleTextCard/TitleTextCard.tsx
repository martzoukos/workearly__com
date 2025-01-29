import styles from "./TitleTextCard.module.scss";

type PropsType = {};

const TitleTextCard = () => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>87.7 Million Jobs</p>
      <p className={styles.text}>
        By 2027, there will be a global demand for 87.7 million project
        management professionals.
      </p>
    </div>
  );
};

export default TitleTextCard;
