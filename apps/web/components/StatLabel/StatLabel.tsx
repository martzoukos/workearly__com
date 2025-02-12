import Text from "@/components/Text";
import clsx from "clsx";
import styles from "./StatLabel.module.scss";

type PropsType = {
  label: string;
  icon: React.ReactNode;
  className?: string;
};

export default function StatLabel({ icon, label, className }: PropsType) {
  return (
    <div className={clsx(styles.root, className)}>
      {icon} <Text size="caption">{label}</Text>
    </div>
  );
}
