import Image from "next/image";
import styles from "./CourseCard.module.scss";
import Text from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import CourseDetails from "../../CourseDetails/CourseDetails";
import { UserIcon } from "@workearly/icons";
import usePageResolver from "../../../hooks/usePageResolver";
import CoursePrices from "../../CoursePrices/CoursePrices";
import clsx from "clsx";

type PropsType = {
  page: QueryItem["Page"];
  className?: string;
};

const CourseCard = ({ page, className }: PropsType) => {
  const { courseDetails } = usePageResolver(page);

  if (!courseDetails) {
    return null;
  }

  return (
    <div className={clsx(styles.root, className)} data-size={"normal"}>
      {courseDetails?.videoThumbnail?.url && (
        <div className={styles.media}>
          <Image
            src={courseDetails.videoThumbnail.url}
            fill={true}
            alt={page.name || ""}
            quality={100}
            sizes="30vw"
          />
        </div>
      )}

      <div className={styles.content}>
        <Text size="h6" className={styles.title}>
          {page.name}
        </Text>

        {courseDetails?.shortDescription && (
          <Text size="small" className={styles.description}>
            {courseDetails.shortDescription}
          </Text>
        )}

        <div className={styles.stats}>
          {courseDetails?.duration && (
            <Text size="caption">{courseDetails.duration}</Text>
          )}
          {courseDetails?.studentsCount && (
            <CourseDetails.StatLabel
              icon={<UserIcon />}
              label={`${courseDetails.studentsCount} Students`}
              className={styles.statLabel}
            />
          )}
        </div>

        {courseDetails && (
          <CoursePrices
            courseDetails={courseDetails}
            className={styles.prices}
          />
        )}
      </div>
    </div>
  );
};

export default CourseCard;
