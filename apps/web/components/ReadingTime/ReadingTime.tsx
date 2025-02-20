import Text from "@/components/Text/Text";
import { Time } from "@carbon/icons-react";
import styles from "./ReadingTime.module.scss";

type PropsType = {
  time: number;
};

export default function ReadingTime({ time }: PropsType) {
  return (
    <div className={styles.root}>
      <Time />
      <Text size="caption">{time} mins</Text>
    </div>
  );
}
