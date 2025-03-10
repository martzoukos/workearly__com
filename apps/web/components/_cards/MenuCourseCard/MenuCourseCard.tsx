import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { UserFilled } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import Link from "next/link";
import styles from "./MenuCourseCard.module.scss";

type PropsType = {
  page: QueryItem["Page"];
};

export default function MenuCourseCard({ page }: PropsType) {
  const { courseDetails } = usePageResolver(page);

  if (!courseDetails) {
    return null;
  }

  return (
    <Link href={page.slug || "/"} className={styles.root}>
      <Text>{page.name}</Text>

      <div className={styles.details}>
        <Text size="caption">{courseDetails.duration}</Text>
        <Text size="caption">
          <UserFilled size={12} /> {courseDetails.studentsCount} Students
        </Text>
      </div>
    </Link>
  );
}
