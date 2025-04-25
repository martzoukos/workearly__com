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
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./StickyPurchase.module.scss";

interface PropsType {
  isIntersecting: boolean;
}

export default function StickyPurchase({ isIntersecting }: PropsType) {
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { groupNumber, timeLeft } = useCourseDetailsResolver(courseDetails);
  const { translate } = useTranslate();
  const router = useRouter();

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

  if (!courseDetails || !hasAppeared) {
    return null;
  }

  return (
    <Viewport showUntil="md">
      <aside className={clsx(styles.root, showBanner && styles.visible)}>
        {timeLeft && (
          <div className={styles.timeLeft}>
            <Time />
            <Text size="caption">{timeLeft}</Text>
          </div>
        )}
        <div className={styles.content}>
          <CoursePrices courseDetails={courseDetails} orientation="vertical" />
          {courseDetails.applicationFormUrl ? (
            <Button asChild isFullWidth size="large">
              <Link href={courseDetails.applicationFormUrl}>
                {translate(
                  `group${groupNumber}_form_cta` as TranslationTextType,
                  {
                    fallbackCode: "Apply",
                  }
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
            </Button>
          )}
        </div>
      </aside>
    </Viewport>
  );
}
