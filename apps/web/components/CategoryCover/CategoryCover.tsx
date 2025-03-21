import StatLabel from "@/components/StatLabel";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { StarFilled, UserFilled } from "@carbon/icons-react";
import clsx from "clsx";
import Image from "next/image";
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
        <Image
          src={categoryOrJobDetails.asset.url}
          alt={categoryOrJobDetails.title || ""}
          style={{
            width: "100%",
            height: "auto",
            alignSelf: "flex-end",
          }}
          width={categoryOrJobDetails.asset.width || 21}
          height={categoryOrJobDetails.asset.height || 16}
        />
      )}
    </div>
  );
}
