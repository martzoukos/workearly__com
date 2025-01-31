import { useContentful } from "../../stores/ContentfulStore";
import styles from "./CourseDetails.module.scss";
import Text from "@/components/Text/Text";
import { StarIcon, UserIcon } from "../Icons";
import useCoursePageResolver from "@/hooks/useCoursePageResolver";

export default function CourseDetails() {
  const { page } = useContentful();
  const { courseDetails, hasStatLabels } = useCoursePageResolver();

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <Text as="h1">{page.name}</Text>
        <Text>{courseDetails?.summary}</Text>
      </header>
      {hasStatLabels && (
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

type StatLabelPropsType = {
  label: string;
  icon: React.ReactNode;
};

function StatLabel({ icon, label }: StatLabelPropsType) {
  return (
    <div className={styles.statLabel}>
      {icon} <Text size="caption">{label}</Text>
    </div>
  );
}

type StatCardPropsType = {
  label: string;
  value: string;
};

function StatCard({ value, label }: StatCardPropsType) {
  return (
    <div className={styles.statCard}>
      <Text as="label" size="caption">
        {label}
      </Text>
      <Text>{value}</Text>
    </div>
  );
}
