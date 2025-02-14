import Text from "@/components/Text";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./CoursePrices.module.scss";

type PropsType = {
  courseDetails: QueryItem["CourseDetails"];
  className?: string;
};

export default function CoursePrices({ courseDetails, className }: PropsType) {
  return (
    <div className={clsx(styles.root, className)}>
      <Text size="h6" className={clsx(styles.price, styles.finalPrice)}>
        {courseDetails?.finalCost}
      </Text>
      <Text size="h6" className={clsx(styles.price, styles.startingPrice)}>
        {courseDetails?.startingCost}
      </Text>
    </div>
  );
}
