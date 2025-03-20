import CoursePrices from "@/components/CoursePrices";
import StatLabel from "@/components/StatLabel";
import Text from "@/components/Text";
import useCourseDetailsResolver from "@/hooks/useCourseDetailsResolver";
import usePageResolver from "@/hooks/usePageResolver";
import useTranslate from "@/hooks/useTranslate";
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
  const { translate } = useTranslate();
  const { duration } = useCourseDetailsResolver(courseDetails);

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
            width={courseDetails?.videoThumbnail?.width || 0}
            height={courseDetails?.videoThumbnail?.height || 0}
            alt={page.name || ""}
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
          {duration && <Text size="caption">{translate(duration)}</Text>}
          <StatLabel
            icon={<UserFilled />}
            label={translate("CourseLearners")}
            className={styles.statLabel}
          />
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
