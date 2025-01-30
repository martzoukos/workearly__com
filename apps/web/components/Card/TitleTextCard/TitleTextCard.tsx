import Text from "@/components/Text/Text";
import styles from "./TitleTextCard.module.scss";

const TitleTextCard = () => {
  return (
    <div className={styles.card}>
      <Text size="h6">87.7 Million Jobs</Text>
      <Text size="small">
        By 2027, there will be a global demand for 87.7 million project
        management professionals.
      </Text>
    </div>
  );
};

export default TitleTextCard;
