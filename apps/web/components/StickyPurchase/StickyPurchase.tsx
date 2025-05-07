import Button from "@/components/Button";
import CoursePrices from "@/components/CoursePrices";
import Text from "@/components/Text";
import Viewport from "@/components/Viewport";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import { Time } from "@carbon/icons-react";
import { TranslationTextType } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./StickyPurchase.module.scss";

export default function StickyPurchase() {
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { groupNumber, timeLeft } = useCourseDetailsResolver(courseDetails);
  const { translate } = useTranslate();
  const router = useRouter();

  if (!courseDetails) {
    return null;
  }

  return (
    <Viewport showUntil="md">
      <aside className={clsx(styles.root)}>
        {timeLeft && (
          <div className={styles.timeLeft}>
            <Time />
            <Text size="caption">{timeLeft}</Text>
          </div>
        )}
        <div className={styles.content}>
          {groupNumber !== 4 && (
            <CoursePrices
              courseDetails={courseDetails}
              orientation="vertical"
            />
          )}
          {courseDetails.applicationFormUrl ? (
            <Button asChild isFullWidth size="large">
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
              size="large"
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
        </div>
      </aside>
    </Viewport>
  );
}
