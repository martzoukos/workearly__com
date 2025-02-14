import StatCard from "@/components/StatCard";
import StatLabel from "@/components/StatLabel";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { StarIcon, UserIcon } from "@workearly/icons";
import styles from "./JobDetails.module.scss";

export default function JobDetails() {
  const { page } = useContentful();
  const { categoryOrJobDetails } = usePageResolver(page);

  if (!categoryOrJobDetails) {
    return null;
  }

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <Text as="h1">{page.name}</Text>
        <Text>{categoryOrJobDetails?.summary}</Text>
      </header>
      {(categoryOrJobDetails.studentsCount ||
        categoryOrJobDetails.userReviews) && (
        <div className={styles.statLabels}>
          {categoryOrJobDetails?.studentsCount && (
            <StatLabel
              icon={<UserIcon />}
              label={`${categoryOrJobDetails.studentsCount} Students`}
            />
          )}
          {categoryOrJobDetails?.userReviews && (
            <StatLabel
              icon={<StarIcon />}
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
            variant="pronounced"
          />
        )}
        {categoryOrJobDetails?.averageEuSalary && (
          <StatCard
            label="Language"
            value={categoryOrJobDetails.averageEuSalary}
            variant="pronounced"
          />
        )}
      </div>
    </section>
  );
}
