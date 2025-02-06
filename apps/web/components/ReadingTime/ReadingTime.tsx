import Text from "@/components/Text/Text";
import { ClockIcon } from "@workearly/icons";
import styles from "./ReadingTime.module.scss";

type PropsType = {
  time: number;
};

export default function ReadingTime({ time }: PropsType) {
  return (
    <div className={styles.root}>
      <ClockIcon />
      <Text size="caption">{time} mins</Text>
    </div>
  );
}
