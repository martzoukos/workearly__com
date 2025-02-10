import useSectionResolver from "@/hooks/useSectionResolver";
import styles from "./ProjectCard.module.scss";
import Text from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import { UserIcon } from "@workearly/icons";
import clsx from "clsx";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

export default function ProjectCard({ card }: PropsType) {
  return (
    <div className={styles.root}>
      <div>
        <Text size="h6">{card.title}</Text>
        <Text size="small" className={styles.description}>
          {card.text}
        </Text>
      </div>

      <StatLabel
        icon={<UserIcon />}
        label={`${500} Students`}
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
