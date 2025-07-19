import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { Themed } from "@workearly/theme";
import clsx from "clsx";
import Image from "next/image";
import styles from "./PurchaseCourse.module.scss";
import PurchaseCourseBootcamp from "./PurchaseCourseBootcamp";
import PurchaseCourseNonBootcamp from "./PurchaseCourseNonBootcamp";

interface PropsType {
  className?: string;
  hideMedia?: boolean;
  hideFooter?: boolean;
  hideQuickPurchase?: boolean;
  isInverted: boolean;
}

export default function PurchaseCourse({
  className,
  hideMedia,
  isInverted,
  hideFooter,
  hideQuickPurchase,
}: PropsType) {
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);

  if (!courseDetails) {
    return null;
  }

  return (
    <Themed className={clsx(styles.root, className)} isInverted={isInverted}>
      {!hideMedia && courseDetails?.videoThumbnail && (
        <div className={styles.mediaWrapper}>
          <Image
            src={courseDetails.videoThumbnail?.url || ""}
            alt={page.name || ""}
            width={courseDetails?.videoThumbnail?.width || 0}
            height={courseDetails?.videoThumbnail?.height || 0}
            className={styles.media}
          />
        </div>
      )}

      {courseDetails.group === 1 ? (
        <PurchaseCourseBootcamp />
      ) : (
        <PurchaseCourseNonBootcamp
          hideFooter={hideFooter}
          hideQuickPurchase={hideQuickPurchase}
        />
      )}
    </Themed>
  );
}
