import Text from "@/components/Text";
import clsx from "clsx";
import styles from "./StatCard.module.scss";

interface PropsType {
  label: string;
  value: string;
  className?: string;
  isInverse?: boolean;
}

export default function StatCard({
  value,
  className,
  label,
  isInverse,
}: PropsType) {
  return (
    <div className={clsx(styles.root, className, isInverse && styles.inverse)}>
      <Text as="label" size="caption">
        {label}
      </Text>
      <Text>{value}</Text>
    </div>
  );
}
