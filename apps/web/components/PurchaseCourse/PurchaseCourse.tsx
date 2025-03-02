import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import Media from "@/components/Media";
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

interface PropsType {
  className?: string;
  hideMedia?: boolean;
}

export default function PurchaseCourse({ className, hideMedia }: PropsType) {
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
      isInverted={true}
      ref={ref}
    >
      {!hideMedia && (
        <Media
          canHoldPlace={true}
          asset={courseDetails.videoThumbnail}
          aspectRatio="16 / 9"
          imageProps={{
            quality: 100,
            sizes: "30vw",
          }}
        />
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

        <footer className={styles.footer}>
          <Button asChild isFullWidth size="large">
            <Link href="https://www.holy.gd/">
              {translate("CourseCardCTA")}
            </Link>
          </Button>

          <Button asChild variant="Outlined" isFullWidth>
            <Link href="https://www.holy.gd/">
              <Share /> {translate("CourseCardShare")}
            </Link>
          </Button>

          <Button asChild variant="Outlined" isFullWidth>
            <Link href="https://www.holy.gd/">
              <Gift /> Gift this Course
            </Link>
          </Button>
        </footer>
      </div>
      {hasAppeared && (
        <Viewport showUntil="md">
          <aside className={clsx(styles.banner, showBanner && styles.visible)}>
            <CoursePrices
              courseDetails={courseDetails}
              orientation="vertical"
            />
            <Button isFullWidth size="large">
              {translate("CourseCardCTA")}
            </Button>
          </aside>
        </Viewport>
      )}
    </Themed>
  );
}
