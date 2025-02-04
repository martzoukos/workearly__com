import styles from "./CallOutCard.module.scss";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";

type PropsType = {};

const CallOutCard = ({}: PropsType) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Text size="h3">
          Call out Card. $78,208 was the average yearly salary of students* who
          took these Workearly courses
        </Text>
        <Button colorScheme={"Black"} className={styles.button}>
          View Workearly Featured Courses
        </Button>
      </div>
    </div>
  );
};

export default CallOutCard;
