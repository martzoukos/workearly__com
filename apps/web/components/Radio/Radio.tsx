import { RadioButton, RadioButtonChecked } from "@carbon/icons-react";
import clsx from "clsx";
import { RadioGroup } from "radix-ui";
import { useId } from "react";
import styles from "./Radio.module.scss";

export default function Radio({
  children,
  className,
  ...props
}: RadioGroup.RadioGroupItemProps) {
  const id = useId();

  return (
    <div className={clsx(styles.root, className)}>
      <RadioGroup.Item className={styles.radio} id={id} {...props}>
        <RadioButton className={clsx(styles.icon, styles.iconUnchecked)} />
        <RadioGroup.Indicator>
          <RadioButtonChecked
            className={clsx(styles.icon, styles.iconChecked)}
          />
        </RadioGroup.Indicator>
      </RadioGroup.Item>
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
    </div>
  );
}
