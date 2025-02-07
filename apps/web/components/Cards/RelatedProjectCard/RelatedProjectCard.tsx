import styles from "./RelatedProjectCard.module.scss";
import Text from "@/components/Text/Text";
import { UserIcon } from "@workearly/icons";
import clsx from "clsx";

export default function RelatedProjectCard() {
  return (
    <div className={styles.root}>
      <div>
        <Text size="h6">Exploring London’s Travel Network</Text>
        <Text size="small" className={styles.description}>
          Master data-driven insights to improve healthcare systems, patient
          outcomes, and decision-making in the medical field.
        </Text>
      </div>

      <StatLabel
        icon={<UserIcon />}
        label="500 Students"
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
