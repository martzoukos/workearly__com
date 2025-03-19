import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import ShareMenu from "@/components/ShareMenu";
import Text from "@/components/Text";
import Viewport from "@/components/Viewport";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import { Gift, Share, Time } from "@carbon/icons-react";
import { Themed } from "@workearly/theme";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import styles from "./PurchaseCourse.module.scss";
import Image from "next/image";

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
    "Personal"
  );
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { translate } = useTranslate();
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  const [showBanner, setShowBanner] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setHasAppeared(true);
    }

    if (hasAppeared) {
      setShowBanner(!isIntersecting);
    }
  }, [isIntersecting, hasAppeared]);

  if (!courseDetails) {
    return null;
  }

  return (
    <Themed
      className={clsx(styles.root, className)}
      isInverted={isInverted}
      ref={ref}
    >
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
                : "CourseCardTeam"
            )}
          </Text>

          <div className={styles.timeLeft}>
            <Time />
            <Text size="caption">{courseDetails?.timeLeft}</Text>
          </div>

          {courseDetails && (
            <CoursePrices
              courseDetails={courseDetails}
              className={styles.prices}
            />
          )}
        </div>

        {!hideFooter && (
          <footer className={styles.footer}>
            <Button asChild isFullWidth size="large">
              <Link
                href={
                  courseDetails.applicationFormUrl || `/payment/${page.slug}`
                }
              >
                {courseDetails.applicationFormUrl
                  ? translate("Apply")
                  : translate("Purchase")}
              </Link>
            </Button>

            <div className={styles.shareWrapper}>
              <Button
                variant="Outlined"
                isFullWidth
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <Share /> {translate("CourseCardShare")}
              </Button>
              {showMenu && <ShareMenu />}
            </div>

            <Button asChild variant="Outlined" isFullWidth>
              <Link href="https://www.holy.gd/">
                <Gift /> Gift this Course
              </Link>
            </Button>
          </footer>
        )}
      </div>
      {!hideQuickPurchase && hasAppeared && (
        <Viewport showUntil="md">
          <aside className={clsx(styles.banner, showBanner && styles.visible)}>
            <CoursePrices
              courseDetails={courseDetails}
              orientation="vertical"
            />
            <Button asChild isFullWidth size="large">
              <Link
                href={
                  courseDetails.applicationFormUrl || `/payment/${page.slug}`
                }
              >
                {courseDetails.applicationFormUrl
                  ? translate("Apply")
                  : translate("Purchase")}
              </Link>
            </Button>
          </aside>
        </Viewport>
      )}
    </Themed>
  );
}
