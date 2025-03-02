import Text from "@/components/Text";
import { QueryItem } from "@workearly/api";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import styles from "./CoursePrices.module.scss";

const variants = cva(styles.root, {
  variants: {
    orientation: {
      horizontal: styles.orientationHorizontal,
      vertical: styles.orientationVertical,
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

interface PropsType extends VariantProps<typeof variants> {
  courseDetails?: QueryItem["CourseDetails"];
  className?: string;
}

export default function CoursePrices({
  courseDetails,
  className,
  orientation,
}: PropsType) {
  return (
    <div
      className={clsx(
        variants({
          orientation,
        }),
        className
      )}
    >
      <Text size="h6" className={clsx(styles.price, styles.finalPrice)}>
        {courseDetails?.finalCost}
      </Text>
      <Text size="h6" className={clsx(styles.price, styles.startingPrice)}>
        {courseDetails?.startingCost}
      </Text>
    </div>
  );
}
