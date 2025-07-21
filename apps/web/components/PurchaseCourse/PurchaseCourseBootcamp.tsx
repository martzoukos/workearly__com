import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import ShareMenu from "@/components/ShareMenu";
import Text from "@/components/Text";
import {
  Document,
  Phone,
  Play,
  Share,
  ShoppingCart,
  Time,
} from "@carbon/icons-react";
import styles from "./PurchaseCourse.module.scss";
import EmailGatherForm from "../EmailGatherForm/EmailGatherForm";
import { useState } from "react";
import { useContentful } from "@/stores/ContentfulStore";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { useRouter } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import Viewport from "../Viewport";

export default function PurchaseCourseBootcamp() {
  const [ctaGroup, setCtaGroup] = useState<"Information" | "Participate">(
    "Information",
  );
  const { page } = useContentful();
  const router = useRouter();
  const { courseDetails } = usePageResolver(page);
  const { groupNumber } = useCourseDetailsResolver(courseDetails);

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
              {translate("Information")}
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
              {translate("Participation")}
            </Button>
            <div className={styles.shareWrapper}>
              <Button
                variant="Outlined"
                isFullWidth
                data-state={showMenu ? "active" : "inactive"}
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <Share size="20" />
              </Button>
              {showMenu && <ShareMenu />}
            </div>
          </div>

          {ctaGroup === "Information" ? (
            <>
              <div className={styles.infoContainer}>
                <Text size="p">{translate("InformationText")}</Text>
                <DateCallout
                  label={translate("FreeDemo")}
                  value={
                    translate("Until") +
                    " " +
                    courseDetails?.applicationDeadline
                  }
                />
              </div>
              <footer className={styles.footer}>
                <Button
                  variant="Solid"
                  colorScheme="Green"
                  isFullWidth
                  size="medium"
                  onClick={() => {
                    router.push(`/interest/${page.slug}`);
                  }}
                >
                  <Phone size="20" />
                  {translate("CallMe")}
                </Button>
                <DemoButton show={courseDetails.group === 1} />
              </footer>
            </>
          ) : (
            <>
              <div className={styles.infoContainer}>
                <Text size="p">{translate("ParticipationText")}</Text>
                <Text size="p">{translate("RunningOffer")}</Text>
                {courseDetails && (
                  <CoursePrices
                    courseDetails={courseDetails}
                    orientation="vertical"
                    finalCostSize="h3"
                    showKlarna
                  />
                )}
                <Text size="small">{translate("PreorderCTA")}</Text>
                <DateCallout
                  label="Για αιτήσεις"
                  value={"έως " + courseDetails?.applicationDeadline}
                />
              </div>
              <footer className={styles.footer}>
                <Button
                  variant="Solid"
                  colorScheme="Green"
                  isFullWidth
                  size="medium"
                  onClick={() => {
                    router.push(`/interest/${page.slug}`);
                  }}
                >
                  <Document />
                  {translate("Application")}
                </Button>
                {/* <Button
                  isFullWidth
                  variant="Ghost"
                  id={`purchase-button-${courseDetails.id}`}
                  onClick={() => {
                    sendGTMEvent({
                      event: "purchaseButtonClick",
                      courseId: courseDetails.id,
                      pageSlug: page.slug,
                      groupNumber,
                    });
                    router.push(`/payment/${page.slug}`);
                  }}
                >
                  <ShoppingCart size={20} />
                  {translate("BuyDirectly")}
                </Button> */}
              </footer>
            </>
          )}
        </div>
      </div>
      <StickyBootcampCTA
        applicationDeadline={courseDetails.applicationDeadline!}
      />
    </>
  );

  function DemoButton(show: boolean) {
    if (!show) {
      return null;
    }

    const [showEmailForm, setShowEmailForm] = useState(false);

    if (showEmailForm) {
      return <EmailGatherForm hideFormFn={() => setShowEmailForm(false)} />;
    }

    return (
      <Button
        variant="Solid"
        isFullWidth
        size="medium"
        className={styles.demoButtonGreenBorder}
        onClick={() => setShowEmailForm(true)}
      >
        <Play size="20" />
        {translate("FreeDemo")}
      </Button>
    );
  }

  function DateCallout({ label, value }: { label: string; value: string }) {
    return (
      <div className={styles.dateCallout}>
        <Time size="20" />
        <Text size="small" className={styles.dataCalloutLabel}>
          {label}
        </Text>
        <Text size="h6" className={styles.dataCalloutValue}>
          {value}
        </Text>
      </div>
    );
  }

  function StickyBootcampCTA({
    applicationDeadline,
  }: {
    applicationDeadline: string;
  }) {
    return (
      <Viewport showUntil="md">
        <div className={styles.stickyBootcampCTA}>
          {applicationDeadline && (
            <div className={styles.stickyApplicationDeadline}>
              <Time />
              <Text size="caption">
                {translate("TryOutFreeUntil")}{" "}
                <strong>{applicationDeadline}</strong>
              </Text>
            </div>
          )}
          <Button
            variant="Solid"
            colorScheme="Green"
            isFullWidth
            size="medium"
            onClick={() => {
              router.push(`/interest/${page.slug}`);
            }}
          >
            <Phone size="20" />
            {translate("CallMe")}
          </Button>
        </div>
      </Viewport>
    );
  }
}
