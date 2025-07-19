import StatCard from "@/components/StatCard";
import StatLabel from "@/components/StatLabel";
import Text from "@/components/Text/Text";
import Viewport from "@/components/Viewport";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
import { useContentful } from "@/stores/ContentfulStore";
import { StarFilled, UserFilled } from "@carbon/icons-react";
import Image from "next/image";
import styles from "./CourseCover.module.scss";
import GoogleReviewsStars from "../_pages/GoogleReviewsStars/GoogleReviewsStars";

export default function CourseCover() {
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
      <Viewport showUntil="md">
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
      <header className={styles.header}>
        <Text as="h1" size="p">
          {courseDetails?.h1Title}
        </Text>
        <Text as="h2">{page.name}</Text>
        <GoogleReviewsStars />
        <Text>{courseDetails?.summary}</Text>
      </header>
      <div className={styles.statLabels}>
        <StatLabel icon={<UserFilled />} label={translate("CourseLearners")} />
        <StatLabel
          icon={<StarFilled />}
          label={translate("CourseAverageRating")}
        />
      </div>
      <div
        className={styles.statCards}
        style={{ "--min-card-width": cardWidth } as React.CSSProperties}
      >
        {duration && (
          <StatCard label={translate("Duration")} value={translate(duration)} />
        )}
        {pace && <StatCard label={translate("Pace")} value={translate(pace)} />}
        {courseDetails?.applicationDeadline && courseDetails?.finalCost && (
          <StatCard
            isInverse={true}
            label={translate("Offer")}
            value={`€${courseDetails.finalCost} έως ${courseDetails.applicationDeadline}`}
          />
        )}
        {courseDetails?.programStarts && (
          <StatCard
            label={translate("Program Starts")}
            value={courseDetails.programStarts.toString()}
          />
        )}
        {courseDetails?.language && (
          <StatCard
            label={translate("Language")}
            value={courseDetails.language.toString()}
          />
        )}
        {mentorship && (
          <StatCard
            label={translate("Mentorship")}
            value={translate(mentorship)}
          />
        )}
      </div>
    </section>
  );
}
