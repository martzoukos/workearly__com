import StatCard from "@/components/StatCard";
import StatLabel from "@/components/StatLabel";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { StarFilled, UserFilled } from "@carbon/icons-react";
import clsx from "clsx";
import styles from "./JobCover.module.scss";

type PropsType = {
  className?: string;
};

export default function JobCover({ className }: PropsType) {
  const { page } = useContentful();
  const { categoryOrJobDetails } = usePageResolver(page);

  if (!categoryOrJobDetails) {
    return null;
  }

  return (
    <section className={clsx(styles.root, className)}>
      <header className={styles.header}>
        <Text as="h1">{page.name}</Text>
        <Text>{categoryOrJobDetails?.summary}</Text>
      </header>
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
      <div className={styles.statCards}>
        {categoryOrJobDetails?.averageUsSalary && (
          <StatCard
            label="Duration"
            value={categoryOrJobDetails.averageUsSalary}
          />
        )}
        {categoryOrJobDetails?.averageEuSalary && (
          <StatCard
            label="Language"
            value={categoryOrJobDetails.averageEuSalary}
          />
        )}
      </div>
    </section>
  );
}
