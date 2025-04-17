import StatCard from "@/components/StatCard";
import Text from "@/components/Text/Text";
import Viewport from "@/components/Viewport";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import Image from "next/image";
import styles from "./SummerCourseCover.module.scss";
import Button from "@/components/Button";
import Link from "next/link";
import CoursePrices from "@/components/CoursePrices";

export default function SummerCourseCover() {
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  const { translate } = useTranslate();
  const { duration, mentorship, pace, cardWidth } =
    useCourseDetailsResolver(courseDetails);

  if (!courseDetails) {
    return null;
  }

  return (
    <section className={styles.root}>
      <Viewport showUntil="lg">
        <div className={styles.mediaWrapper}>
          <Image
            src={courseDetails?.videoThumbnail?.url || ""}
            alt={page.name || ""}
            width={courseDetails?.videoThumbnail?.width || 0}
            height={courseDetails?.videoThumbnail?.height || 0}
            className={styles.media}
          />
        </div>
      </Viewport>
      <div className={styles.content}>
        <header className={styles.header}>
          <Text as="h1">{page.name}</Text>
          <Text>{courseDetails?.summary}</Text>
        </header>

        <div
          className={styles.statCards}
          style={{ "--min-card-width": cardWidth } as React.CSSProperties}
        >
          {duration && (
            <StatCard
              label={translate("Duration")}
              value={translate(duration)}
              className={styles.statCard}
            />
          )}
          {pace && (
            <StatCard
              label={translate("Pace")}
              value={translate(pace)}
              className={styles.statCard}
            />
          )}
          {mentorship && (
            <StatCard
              label={translate("Mentorship")}
              value={translate(mentorship)}
              className={styles.statCard}
            />
          )}

          {courseDetails?.programStarts && (
            <StatCard
              label={translate("Program Starts")}
              value={courseDetails.programStarts.toString()}
              className={styles.statCard}
            />
          )}
          {courseDetails?.applicationDeadline && (
            <StatCard
              label={translate("Application Deadline")}
              value={courseDetails.applicationDeadline.toString()}
              className={styles.statCard}
            />
          )}
          {courseDetails?.language && (
            <StatCard
              label={translate("Language")}
              value={courseDetails.language.toString()}
              className={styles.statCard}
            />
          )}
        </div>

        <div className={styles.payments}>
          <Button asChild size="medium" colorScheme="Black">
            <Link
              href={courseDetails.applicationFormUrl || `/payment/${page.slug}`}
            >
              {courseDetails.applicationFormUrl
                ? translate("Apply")
                : translate("Purchase")}
            </Link>
          </Button>

          {courseDetails && (
            <CoursePrices
              courseDetails={courseDetails}
              className={styles.prices}
              showKlarna
            />
          )}
        </div>
      </div>

      <Viewport showAfter="lg">
        <div className={styles.mediaWrapper}>
          <Image
            src={courseDetails?.videoThumbnail?.url || ""}
            alt={page.name || ""}
            width={courseDetails?.videoThumbnail?.width || 0}
            height={courseDetails?.videoThumbnail?.height || 0}
            className={styles.media}
          />
        </div>
      </Viewport>
    </section>
  );
}
