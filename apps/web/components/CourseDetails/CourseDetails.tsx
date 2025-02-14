import StatCard from "@/components/StatCard";
import StatLabel from "@/components/StatLabel";
import Text from "@/components/Text/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { StarIcon, UserIcon } from "@workearly/icons";
import { useContentful } from "../../stores/ContentfulStore";
import styles from "./CourseDetails.module.scss";

export default function CourseDetails() {
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);

  if (!courseDetails) {
    return null;
  }

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <Text as="h1">{page.name}</Text>
        <Text>{courseDetails?.summary}</Text>
      </header>
      {(courseDetails.studentsCount || courseDetails.userReviews) && (
        <div className={styles.statLabels}>
          {courseDetails?.studentsCount && (
            <StatLabel
              icon={<UserIcon />}
              label={`${courseDetails.studentsCount} Students`}
            />
          )}
          {courseDetails?.userReviews && (
            <StatLabel
              icon={<StarIcon />}
              label={`${courseDetails.userReviews} Reviews`}
            />
          )}
        </div>
      )}
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
        {courseDetails?.level && (
          <StatCard label="Level" value={courseDetails.level.toString()} />
        )}
        {courseDetails?.style && (
          <StatCard label="Style" value={courseDetails.style.toString()} />
        )}
        {courseDetails?.courseCount && (
          <StatCard
            label="Content"
            value={courseDetails.courseCount.toString()}
          />
        )}
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
