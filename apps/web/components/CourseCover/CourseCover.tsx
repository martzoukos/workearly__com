import StatCard from "@/components/StatCard";
import Text from "@/components/Text/Text";
import Viewport from "@/components/Viewport";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import Image from "next/image";
import styles from "./CourseCover.module.scss";

export default function CourseCover() {
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);

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
        <Text>{courseDetails?.summary}</Text>
      </header>
      {/* {(courseDetails.studentsCount || courseDetails.userReviews) && (
        <div className={styles.statLabels}>
          {courseDetails?.studentsCount && (
            <StatLabel
              icon={<UserFilled />}
              label={`${courseDetails.studentsCount} Students`}
            />
          )}
          {courseDetails?.userReviews && (
            <StatLabel
              icon={<StarFilled />}
              label={`${courseDetails.userReviews} Reviews`}
            />
          )}
        </div>
      )} */}
      <div className={styles.statCards}>
        {courseDetails?.duration && (
          <StatCard
            label="Duration"
            value={courseDetails.duration.toString()}
          />
        )}
        {courseDetails?.language && (
          <StatCard
            label="Language"
            value={courseDetails.language.toString()}
          />
        )}
        {courseDetails?.pace && (
          <StatCard label="Pace" value={courseDetails.pace.toString()} />
        )}
        {/* {courseDetails?.level && (
          <StatCard label="Level" value={courseDetails.level.toString()} />
        )} */}
        {courseDetails?.style && (
          <StatCard label="Style" value={courseDetails.style.toString()} />
        )}
        {/* {courseDetails?.courseCount && (
          <StatCard
            label="Content"
            value={courseDetails.courseCount.toString()}
          />
        )} */}
        {courseDetails?.programStarts && (
          <StatCard
            label="Program Starts"
            value={courseDetails.programStarts.toString()}
          />
        )}
        {courseDetails?.applicationDeadline && (
          <StatCard
            label="Application Deadline"
            value={courseDetails.applicationDeadline.toString()}
          />
        )}
      </div>
    </section>
  );
}
