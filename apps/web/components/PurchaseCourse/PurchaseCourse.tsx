import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import ShareMenu from "@/components/ShareMenu";
import StickyPurchase from "@/components/StickyPurchase";
import Text from "@/components/Text";
import Tooltip from "@/components/Tooltip";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import { Gift, Share, Time } from "@carbon/icons-react";
import { TranslationTextType } from "@workearly/api";
import { Themed } from "@workearly/theme";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const [purchaseType, setPurchaseType] = useState<"Personal" | "Team">(
    "Personal"
  );
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { timeLeft, gift, groupNumber } =
    useCourseDetailsResolver(courseDetails);

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
                : "CourseCardTeam"
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
            {courseDetails.applicationFormUrl ? (
              <Button asChild isFullWidth size="medium">
                <Link href={courseDetails.applicationFormUrl}>
                  {translate(
                    `group${groupNumber}_form_cta` as TranslationTextType,
                    {
                      fallbackCode: "Apply",
                    }
                  )}
                  {groupNumber === 4 && (
                    <Image
                      src="/icons/klarna-mini.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  )}
                </Link>
              </Button>
            ) : (
              <Button
                id={`purchase-button-${courseDetails.id}`}
                isFullWidth
                size="medium"
                onClick={() => {
                  router.push(`/payment/${page.slug}`);
                }}
              >
                {translate(
                  `group${groupNumber}_purchase_cta` as TranslationTextType,
                  {
                    fallbackCode: "Purchase",
                  }
                )}
                {groupNumber === 4 && (
                  <Image
                    src="/icons/klarna-mini.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                )}
              </Button>
            )}

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
