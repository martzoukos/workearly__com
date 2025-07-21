import Text from "@/components/Text";
import { Play, Time } from "@carbon/icons-react";
import styles from "./FormCourseDetails.module.scss";
import { useContentful } from "@/stores/ContentfulStore";
import usePageResolver from "@/hooks/usePageResolver";

export default function FormCourseDetails() {
  const { page } = useContentful();
  const { courseDetails } = usePageResolver(page);
  return (
    <div className={styles.root}>
      <Text size="h5" className={styles.courseTitle}>
        {courseDetails?.title || ""}
      </Text>
      {courseDetails?.programStarts && (
        <Text size="small">
          <Time size="20" /> Ξεκινάει: {courseDetails.programStarts}
        </Text>
      )}
      {courseDetails?.applicationDeadline && (
        <Text size="small">
          <Play size="20" /> Δωρεάν δοκιμή έως{" "}
          {courseDetails.applicationDeadline}
        </Text>
      )}
    </div>
  );
}
