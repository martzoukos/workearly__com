import Text from "@/components/Text/Text";
import { Time } from "@carbon/icons-react";
import clsx from "clsx";
import styles from "./ReadingTime.module.scss";

type PropsType = {
  time: number;
  className?: string;
};

export default function ReadingTime({ time, className }: PropsType) {
  return (
    <div className={clsx(styles.root, className)}>
      <Time />
      <Text size="caption">{time} mins</Text>
    </div>
  );
}
