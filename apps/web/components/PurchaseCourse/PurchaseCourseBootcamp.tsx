import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import { PurchaseButton } from "@/components/CoursePrices/CoursePrices";
import ShareMenu from "@/components/ShareMenu";
import StickyPurchase from "@/components/StickyPurchase";
import Text from "@/components/Text";
import Tooltip from "@/components/Tooltip";
import { Gift, Link, Play, Share, Time } from "@carbon/icons-react";
import styles from "./PurchaseCourse.module.scss";
import EmailGatherForm from "../EmailGatherForm/EmailGatherForm";
import { useState } from "react";
import { useContentful } from "@/stores/ContentfulStore";
import usePageResolver from "@/hooks/usePageResolver";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import useTranslate from "@/hooks/useTranslate";
import { TranslationTextType } from "@workearly/api";

interface PropsType {
  hideFooter?: boolean;
  hideQuickPurchase?: boolean;
}

export default function PurchaseCourseBootcamp({
  hideFooter,
  hideQuickPurchase,
}: PropsType) {
  const [ctaGroup, setCtaGroup] = useState<"Information" | "Participate">(
    "Information",
  );
  const [showEmailForm, setShowEmailForm] = useState(false);
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { timeLeft, gift } = useCourseDetailsResolver(courseDetails);

  const { translate } = useTranslate();

  const [showMenu, setShowMenu] = useState(false);

  if (!courseDetails) {
    return null;
  }

  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.buttons}>
            <Button
              colorSchemes={{
                light: ctaGroup === "Information" ? "Green" : "Black",
                dark: ctaGroup === "Information" ? "Green" : "White",
              }}
              variant={ctaGroup === "Information" ? "Solid" : "Outlined"}
              onClick={() => setCtaGroup("Information")}
              data-state={ctaGroup === "Information" ? "active" : "inactive"}
            >
              {/* @TODO: Translate */}
              Πληροφορίες
            </Button>
            <Button
              colorSchemes={{
                light: ctaGroup === "Participate" ? "Green" : "Black",
                dark: ctaGroup === "Participate" ? "Green" : "White",
              }}
              variant={ctaGroup === "Participate" ? "Solid" : "Outlined"}
              onClick={() => setCtaGroup("Participate")}
              data-state={ctaGroup === "Participate" ? "active" : "inactive"}
            >
              {/* @TODO: Translate */}
              Συμμετοχή
            </Button>
            <div className={styles.shareWrapper}>
              <Button
                variant="Outlined"
                isFullWidth
                data-state={showMenu ? "active" : "inactive"}
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <Share size="24" />
              </Button>
              {showMenu && <ShareMenu />}
            </div>
          </div>

          <Text size="small" className={styles.description}>
            {ctaGroup === "Information"
              ? "Δοκίμασε δωρεάν το μάθημα πριν το αγοράσεις ή ζήτησε περισσότερες πληροφορίες για το μάθημα."
              : "Ζήτησε περισσότερες πληροφορίες για το μάθημα ή αγόρασέ το απευθείας."}
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

        {showEmailForm && (
          <>
            <EmailGatherForm hideFormFn={() => setShowEmailForm(false)} />
          </>
        )}

        {!hideFooter && !showEmailForm && (
          <footer className={styles.footer}>
            {ctaGroup === "Information" ? (
              <>
                <Button
                  variant="Outlined"
                  isFullWidth
                  size="medium"
                  onClick={() => setShowEmailForm(true)}
                >
                  <Play size="24" />
                  Δοκίμασε Δωρεάν
                </Button>
                {courseDetails.applicationFormUrl && page.slug && (
                  <InterestButton groupNumber={1} pageSlug={page.slug} />
                )}
              </>
            ) : (
              <>
                {courseDetails.applicationFormUrl && page.slug && (
                  <InterestButton groupNumber={1} pageSlug={page.slug} />
                )}
                <PurchaseButton page={page} isFullWidth size="medium" />
              </>
            )}
          </footer>
        )}
      </div>
      {!hideQuickPurchase && <StickyPurchase />}
    </>
  );
  function InterestButton({
    groupNumber = 1,
    pageSlug,
  }: {
    groupNumber: number;
    pageSlug: string;
  }) {
    return (
      <Button variant="Solid" colorScheme="Green" isFullWidth size="medium">
        <Link href={`/interest/${pageSlug}`}>
          {translate(`group${groupNumber}_form_cta` as TranslationTextType, {
            fallbackCode: "Apply",
          })}
          {/* {groupNumber === 4 && <KlarnaPrice courseDetails={courseDetails} />} */}
        </Link>
      </Button>
    );
  }
}
