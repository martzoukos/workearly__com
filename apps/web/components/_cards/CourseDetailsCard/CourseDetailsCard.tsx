import Text from "@/components/Text/Text";
import styles from "./CourseDetailsCard.module.scss";

type PropsType = {};

const CourseDetailsCard = () => {
  return (
    <div className={styles.card}>
      <Text size="h6">DURATION</Text>
      <Text>4-6 MONTHS</Text>
    </div>
  );
};

export default CourseDetailsCard;
