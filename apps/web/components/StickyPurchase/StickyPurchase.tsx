import CoursePrices from "@/components/CoursePrices";
import { PurchaseButton } from "@/components/CoursePrices/CoursePrices";
import Text from "@/components/Text";
import Viewport from "@/components/Viewport";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { Time } from "@carbon/icons-react";
import clsx from "clsx";
import styles from "./StickyPurchase.module.scss";

export default function StickyPurchase() {
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { groupNumber, timeLeft } = useCourseDetailsResolver(courseDetails);

  if (!courseDetails) {
    return null;
  }

  return (
    <Viewport showUntil="md">
      <aside className={clsx(styles.root)}>
        {timeLeft && (
          <div className={styles.timeLeft}>
            <Time />
            <Text size="caption">{timeLeft}</Text>
          </div>
        )}
        <div className={styles.content}>
          {groupNumber !== 4 && (
            <CoursePrices
              courseDetails={courseDetails}
              orientation="vertical"
            />
          )}
          <PurchaseButton page={page} isFullWidth size="large" />
        </div>
      </aside>
    </Viewport>
  );
}
