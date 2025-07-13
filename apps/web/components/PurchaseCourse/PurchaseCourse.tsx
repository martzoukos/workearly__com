import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import { PurchaseButton } from "@/components/CoursePrices/CoursePrices";
import ShareMenu from "@/components/ShareMenu";
import StickyPurchase from "@/components/StickyPurchase";
import Text from "@/components/Text";
import Tooltip from "@/components/Tooltip";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import { Gift, Play, Share, Time } from "@carbon/icons-react";
import { Themed } from "@workearly/theme";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import styles from "./PurchaseCourse.module.scss";

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
  const [purchaseType, setPurchaseType] = useState<"Personal" | "Team">(
    "Personal",
  );
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { timeLeft, gift } = useCourseDetailsResolver(courseDetails);

  const { translate } = useTranslate();

  const [showMenu, setShowMenu] = useState(false);

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

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.buttons}>
            <Button
              colorSchemes={{
                light: purchaseType === "Personal" ? "Green" : "Black",
                dark: purchaseType === "Personal" ? "Green" : "White",
              }}
              variant={purchaseType === "Personal" ? "Solid" : "Outlined"}
              onClick={() => setPurchaseType("Personal")}
              data-state={purchaseType === "Personal" ? "active" : "inactive"}
            >
              {translate("Personal")}
            </Button>
            <Button
              colorSchemes={{
                light: purchaseType === "Team" ? "Green" : "Black",
                dark: purchaseType === "Team" ? "Green" : "White",
              }}
              variant={purchaseType === "Team" ? "Solid" : "Outlined"}
              onClick={() => setPurchaseType("Team")}
              data-state={purchaseType === "Team" ? "active" : "inactive"}
            >
              {translate("Team")}
            </Button>
          </div>

          <Text size="small" className={styles.description}>
            {translate(
              purchaseType === "Personal"
                ? "CourseCardPersonal"
                : "CourseCardTeam",
            )}
          </Text>

          <div className={styles.giftAndTimeleft}>
            {gift && (
              <div className={styles.gift}>
                <Gift />
                <Text>{translate("1plus1")}</Text>
                <Tooltip className={styles.infoBox}>
                  <Text size="caption"> {translate("1plus1InfoBox")}</Text>
                </Tooltip>
              </div>
            )}

            {timeLeft && (
              <div className={styles.timeLeft}>
                <Time />
                <Text size="caption">{timeLeft}</Text>
              </div>
            )}
          </div>

          {courseDetails && (
            <CoursePrices
              courseDetails={courseDetails}
              className={styles.prices}
              showKlarna
            />
          )}
        </div>

        {!hideFooter && (
          <footer className={styles.footer}>
            {/* {courseDetails?.demoUrl && ( */}
            {courseDetails.applicationFormUrl && (
              <Button
                variant="Outlined"
                isFullWidth
                size="medium"
                onClick={() =>
                  window.open(
                    "https://sql-demo.workearly.ai/chapter/3/slide/2",
                    "_blank",
                  )
                }
                // onClick={() => window.open(courseDetails.demoUrl, "_blank")}
              >
                <Play size="24" />
                Δοκίμασέ το πριν το αγοράσεις
                {/* {translate("CourseCardDemo")} */}
              </Button>
            )}

            <PurchaseButton page={page} isFullWidth size="medium" />

            <div className={styles.shareWrapper}>
              <Button
                variant="Outlined"
                isFullWidth
                size="medium"
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <Share size="24" /> {translate("CourseCardShare")}
              </Button>
              {showMenu && <ShareMenu />}
            </div>
          </footer>
        )}
      </div>
      {!hideQuickPurchase && <StickyPurchase />}
    </Themed>
  );
}
