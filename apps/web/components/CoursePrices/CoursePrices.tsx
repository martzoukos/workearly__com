import Text from "@/components/Text";
import { QueryItem, translate } from "@workearly/api";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import styles from "./CoursePrices.module.scss";
import Image from "next/image";
import useTranslate from "@/hooks/useTranslate";

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
  showKlarna?: boolean;
  className?: string;
}

export default function CoursePrices({
  courseDetails,
  className,
  orientation,
  showKlarna,
}: PropsType) {
  const { translate } = useTranslate();

  return (
    <div
      className={clsx(
        variants({
          orientation,
        }),
        className
      )}
    >
      <div className={styles.priceContainer}>
        <Text size="h6" className={clsx(styles.price, styles.finalPrice)}>
          {courseDetails?.finalCost}
        </Text>
        <Text size="h6" className={clsx(styles.price, styles.startingPrice)}>
          {courseDetails?.startingCost}
        </Text>
      </div>
      {courseDetails?.finalCost && showKlarna && (
        <div className={styles.klarna}>
          <Image src="/icons/klarna-mini.svg" alt="" width={24} height={24} />
          <Text>
            {(Math.ceil((courseDetails.finalCost / 3) * 100) / 100).toFixed(2)}
          </Text>
          <Text className={styles.translate}> {translate("3Times")}</Text>
        </div>
      )}
    </div>
  );
}
