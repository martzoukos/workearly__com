import Media from "@/components/Media";
import StatLabel from "@/components/StatLabel";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { StarFilled, UserFilled } from "@carbon/icons-react";
import clsx from "clsx";
import styles from "./CategoryCover.module.scss";

type PropsType = {
  className?: string;
};

export default function CategoryCover({ className }: PropsType) {
  const { page } = useContentful();
  const { categoryOrJobDetails } = usePageResolver(page);

  if (!categoryOrJobDetails) {
    return null;
  }

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.content}>
        <Text as="h1">{categoryOrJobDetails.title}</Text>
        <Text size="small">{categoryOrJobDetails.summary}</Text>
        {(categoryOrJobDetails.studentsCount ||
          categoryOrJobDetails.userReviews) && (
          <div className={styles.statLabels}>
            {categoryOrJobDetails?.studentsCount && (
              <StatLabel
                icon={<UserFilled />}
                label={`${categoryOrJobDetails.studentsCount} Students`}
              />
            )}
            {categoryOrJobDetails?.userReviews && (
              <StatLabel
                icon={<StarFilled />}
                label={`${categoryOrJobDetails.userReviews} Reviews`}
              />
            )}
          </div>
        )}
      </div>

      {categoryOrJobDetails.asset?.url && (
        <Media
          asset={categoryOrJobDetails.asset}
          aspectRatio="21 / 16"
          className={styles.svg}
        />
      )}
    </div>
  );
}
