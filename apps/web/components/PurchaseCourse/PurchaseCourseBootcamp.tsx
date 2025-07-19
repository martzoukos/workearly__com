import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import { PurchaseButton } from "@/components/CoursePrices/CoursePrices";
import ShareMenu from "@/components/ShareMenu";
import StickyPurchase from "@/components/StickyPurchase";
import Text from "@/components/Text";
import { Phone, Play, Share, Time } from "@carbon/icons-react";
import styles from "./PurchaseCourse.module.scss";
import EmailGatherForm from "../EmailGatherForm/EmailGatherForm";
import { useState } from "react";
import { useContentful } from "@/stores/ContentfulStore";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { useRouter } from "next/navigation";

interface PropsType {
  hideQuickPurchase?: boolean;
}

export default function PurchaseCourseBootcamp({
  hideQuickPurchase,
}: PropsType) {
  const [ctaGroup, setCtaGroup] = useState<"Information" | "Participate">(
    "Information",
  );
  const { page } = useContentful();
  const router = useRouter();
  const { courseDetails } = usePageResolver(page);

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
                <Share size="20" />
              </Button>
              {showMenu && <ShareMenu />}
            </div>
          </div>

          {ctaGroup === "Information" ? (
            <>
              <div className={styles.infoContainer}>
                <Text size="p">
                  {/* @TODO: Translate */}
                  Δες το μάθημα στην πράξη με ένα δωρεάν demo ή μίλησε με έναν
                  σύμβουλο για 15 λεπτά.
                </Text>
                <DateCallout label="Δωρεάν Δοκιμή" value="έως 18 Ιουλίου" />
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
                  {/* @TODO: Translate */}
                  <Phone size="20" />
                  Καλέστε με
                </Button>
                <DemoButton />
              </footer>
            </>
          ) : (
            <>
              <div className={styles.infoContainer}>
                <Text size="p">
                  {/* @TODO: Translate */}
                  Κάνε αίτηση συμμετοχής για να λάβεις τον οδηγό σπουδών και την
                  αναλυτική προσφορά. Με την αίτηση κατοχυρώνεις την προσφορά
                  χωρίς καμία άμεση πληρωμή.
                </Text>
                <Text>Προκράτηση με 67 ευρώ.</Text>
                {courseDetails && (
                  <CoursePrices
                    courseDetails={courseDetails}
                    className={styles.prices}
                    showKlarna
                  />
                )}
                <DateCallout label="Για αιτήσεις" value="έως 18 Ιουλίου" />
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
                  {/* @TODO: Translate */}
                  <Phone />
                  Καλέστε με
                </Button>
                <PurchaseButton page={page} isFullWidth size="medium" />
              </footer>
            </>
          )}
        </div>
      </div>
      {!hideQuickPurchase && <StickyPurchase />}
    </>
  );

  function DemoButton() {
    const [showEmailForm, setShowEmailForm] = useState(false);

    if (showEmailForm) {
      return <EmailGatherForm hideFormFn={() => setShowEmailForm(false)} />;
    }

    return (
      <Button
        variant="Solid"
        isFullWidth
        size="medium"
        onClick={() => setShowEmailForm(true)}
      >
        <Play size="20" />
        {/* @TODO: Translate */}
        Δωρεάν Δοκιμή
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
}
