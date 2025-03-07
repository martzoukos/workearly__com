import Card from "@/components/Card";
import StatLabel from "@/components/StatLabel";
import Text from "@/components/Text/Text";
import { UserFilled } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import { ThemeType } from "@workearly/theme";
import clsx from "clsx";
import styles from "./ProjectCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
  theme: ThemeType;
};

export default function ProjectCard({ card, className, theme }: PropsType) {
  return (
    <Card.Root theme={theme} className={clsx(styles.root, className)}>
      <div>
        {card?.title && <Text size="h6">{card.title}</Text>}

        {card?.text && (
          <Text size="small" className={styles.description}>
            {card.text}
          </Text>
        )}
      </div>

      <StatLabel
        icon={<UserFilled />}
        label={`${card.studentsCount} Students`}
        className={styles.statLabel}
      />
    </Card.Root>
  );
}
