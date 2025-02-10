import styles from "./ProjectCard.module.scss";
import Text from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import { UserIcon } from "@workearly/icons";
import clsx from "clsx";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

export default function ProjectCard({ card, className }: PropsType) {
  return (
    <div className={clsx(styles.root, className)}>
      <div>
        <Text size="h6">{card.title}</Text>
        <Text size="small" className={styles.description}>
          {card.text}
        </Text>
      </div>

      <StatLabel
        icon={<UserIcon />}
        label={`${card.studentsCount} Students`}
        className={styles.icon}
      />
    </div>
  );
}

type StatLabelPropsType = {
  label: string;
  icon: React.ReactNode;
  className?: string;
};

function StatLabel({ icon, label, className }: StatLabelPropsType) {
  return (
    <div className={clsx(styles.statLabel, className)}>
      {icon} <Text size="caption">{label}</Text>
    </div>
  );
}
