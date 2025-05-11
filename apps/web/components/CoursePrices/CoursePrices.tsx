import Button, { ButtonProps } from "@/components/Button";
import Text from "@/components/Text";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
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
}

export default function CoursePrices({
  courseDetails,
  className,
  orientation,
  showKlarna,
}: PropsType) {
  const { translate } = useTranslate();

  return (
    <div
      className={clsx(
        variants({
          orientation,
        }),
        className
      )}
    >
      <div className={styles.priceContainer}>
        <Text size="h6" className={clsx(styles.price, styles.finalPrice)}>
          {courseDetails?.finalCost}
        </Text>
        <Text size="h6" className={clsx(styles.price, styles.startingPrice)}>
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
      {courseDetails.applicationFormUrl ? (
        <Button asChild {...props}>
          <Link href={courseDetails.applicationFormUrl}>
            {translate(`group${groupNumber}_form_cta` as TranslationTextType, {
              fallbackCode: "Apply",
            })}
            {/* {groupNumber === 4 && <KlarnaPrice courseDetails={courseDetails} />} */}
          </Link>
        </Button>
      ) : (
        <Button
          id={`purchase-button-${courseDetails.id}`}
          onClick={() => {
            router.push(`/payment/${page.slug}`);
          }}
          {...props}
        >
          {translate(
            `group${groupNumber}_purchase_cta` as TranslationTextType,
            {
              fallbackCode: "Purchase",
            }
          )}
          {/* {groupNumber === 4 && <KlarnaPrice courseDetails={courseDetails} />} */}
        </Button>
      )}
    </>
  );
}
