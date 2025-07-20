import Button, { ButtonProps } from "@/components/Button";
import Text from "@/components/Text";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { ShoppingCart } from "@carbon/icons-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { QueryItem, TranslationTextType } from "@workearly/api";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./CoursePrices.module.scss";

const variants = cva(styles.root, {
  variants: {
    orientation: {
      horizontal: styles.orientationHorizontal,
      vertical: styles.orientationVertical,
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

interface PropsType extends VariantProps<typeof variants> {
  courseDetails?: QueryItem["CourseDetails"];
  showKlarna?: boolean;
  className?: string;
  startingCostSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  finalCostSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function CoursePrices({
  courseDetails,
  className,
  orientation,
  showKlarna,
  startingCostSize = "h6",
  finalCostSize = "h6",
}: PropsType) {
  const { translate } = useTranslate();

  return (
    <div
      className={clsx(
        variants({
          orientation,
        }),
        className,
      )}
    >
      <div className={styles.priceContainer}>
        <Text
          size={finalCostSize}
          className={clsx(styles.price, styles.finalPrice)}
        >
          <span className={styles.finalPriceMobileModifier}>
            {courseDetails?.finalCost}
          </span>
        </Text>
        <Text
          size={startingCostSize}
          className={clsx(styles.price, styles.startingPrice)}
        >
          {courseDetails?.startingCost}
        </Text>
      </div>
      {courseDetails?.finalCost && showKlarna && (
        <div className={styles.klarna}>
          <Image src="/icons/klarna-mini.svg" alt="" width={24} height={24} />
          <Text>
            {(Math.ceil((courseDetails.finalCost / 3) * 100) / 100).toFixed(2)}
          </Text>
          <Text className={styles.translate}> {translate("3Times")}</Text>
        </div>
      )}
    </div>
  );
}

type KlarnaPriceProps = {
  courseDetails: QueryItem["CourseDetails"];
};

function KlarnaPrice({ courseDetails }: KlarnaPriceProps) {
  if (!courseDetails.finalCost) {
    return null;
  }

  return (
    <div className={styles.klarnaAlt}>
      <Text>
        €{(Math.ceil((courseDetails.finalCost / 3) * 100) / 100).toFixed(0)}
      </Text>
      <Image
        src="/icons/klarna-mini.svg"
        alt="klarna logo"
        width={24}
        height={24}
        className={styles.klarnaLogo}
      />
    </div>
  );
}

type PurchaseButtonProps = {
  page: QueryItem["Page"];
} & ButtonProps;

export function PurchaseButton({ page, ...props }: PurchaseButtonProps) {
  const { translate } = useTranslate();
  const { courseDetails } = usePageResolver(page);
  const { groupNumber } = useCourseDetailsResolver(courseDetails);
  const router = useRouter();

  if (!courseDetails) {
    return null;
  }

  return (
    <>
      {courseDetails.hasApplicationFormCta ? (
        <>
          <Button asChild {...props}>
            <Link href={`/interest/${page.slug}`}>
              {translate("InterestFormCTA1")}
              {/* {groupNumber === 4 && <KlarnaPrice courseDetails={courseDetails} />} */}
            </Link>
          </Button>
          <Link
            href={`/payment/${page.slug}`}
            className={styles.fallbackPurchaseCTA}
          >
            <ShoppingCart /> {translate("InterestFormFallbackCTA")}
          </Link>
        </>
      ) : (
        <Button
          id={`purchase-button-${courseDetails.id}`}
          onClick={() => {
            sendGTMEvent({
              event: "purchaseButtonClick",
              courseId: courseDetails.id,
              pageSlug: page.slug,
              groupNumber: groupNumber,
            });

            router.push(`/payment/${page.slug}`);
          }}
          {...props}
        >
          {translate(
            `group${groupNumber}_purchase_cta` as TranslationTextType,
            {
              fallbackCode: "Purchase",
            },
          )}
          {/* {groupNumber === 4 && <KlarnaPrice courseDetails={courseDetails} />} */}
        </Button>
      )}
    </>
  );
}
