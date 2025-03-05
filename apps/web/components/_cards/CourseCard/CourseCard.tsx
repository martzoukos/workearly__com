import CoursePrices from "@/components/CoursePrices";
import StatLabel from "@/components/StatLabel";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { UserFilled } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./CourseCard.module.scss";

const variants = cva(styles.root, {
  variants: {
    size: {
      normal: styles.normal,
      wide: styles.wide,
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

interface PropsType extends VariantProps<typeof variants> {
  page: QueryItem["Page"];
  className?: string;
}

const CourseCard = ({ page, size = "normal", className }: PropsType) => {
  const { courseDetails } = usePageResolver(page);

  if (!courseDetails) {
    return null;
  }

  return (
    <Link
      href={page.slug || "/"}
      className={clsx(
        variants({
          size,
        }),
        className
      )}
    >
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
            <StatLabel
              icon={<UserFilled />}
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
    </Link>
  );
};

export default CourseCard;
