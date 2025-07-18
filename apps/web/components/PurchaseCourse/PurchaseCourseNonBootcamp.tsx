import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import { PurchaseButton } from "@/components/CoursePrices/CoursePrices";
import ShareMenu from "@/components/ShareMenu";
import StickyPurchase from "@/components/StickyPurchase";
import Text from "@/components/Text";
import Tooltip from "@/components/Tooltip";
import { Gift, Play, Share, Time } from "@carbon/icons-react";
import styles from "./PurchaseCourse.module.scss";
import EmailGatherForm from "../EmailGatherForm/EmailGatherForm";
import { useContentful } from "@/stores/ContentfulStore";
import usePageResolver from "@/hooks/usePageResolver";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import useTranslate from "@/hooks/useTranslate";
import { useState } from "react";

interface PropsType {
  hideFooter?: boolean;
  hideQuickPurchase?: boolean;
}

export default function PurchaseCourseNonBootcamp({
  hideFooter,
  hideQuickPurchase,
}: PropsType) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { timeLeft, gift } = useCourseDetailsResolver(courseDetails);
  const { translate } = useTranslate();

  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
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

        {showEmailForm && (
          <>
            <EmailGatherForm hideFormFn={() => setShowEmailForm(false)} />
          </>
        )}

        {!hideFooter && !showEmailForm && (
          <footer className={styles.footer}>
            {courseDetails && courseDetails.demoUrl && (
              <Button
                variant="Outlined"
                isFullWidth
                size="medium"
                onClick={() => window.open(courseDetails.demoUrl!, "_blank")}
              >
                <Play size="24" />
                {translate("CourseCardDemo")}
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
    </>
  );
}
