import Text from "@/components/Text";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import styles from "./StatCard.module.scss";

const variants = cva(styles.root, {
  variants: {
    variant: {
      default: styles.variantDefault,
      pronounced: styles.variantPronounced,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface PropsType extends VariantProps<typeof variants> {
  label: string;
  value: string;
  className?: string;
}

export default function StatCard({
  value,
  variant,
  className,
  label,
}: PropsType) {
  return (
    <div
      className={clsx(
        variants({
          variant,
        }),
        className
      )}
    >
      <Text as="label" size="caption">
        {label}
      </Text>
      <Text>{value}</Text>
    </div>
  );
}
