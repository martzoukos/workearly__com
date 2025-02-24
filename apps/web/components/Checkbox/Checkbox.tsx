import {
  CheckboxCheckedFilled,
  Checkbox as CheckboxIcon,
} from "@carbon/icons-react";
import clsx from "clsx";
import { Checkbox as RadixCheckbox } from "radix-ui";
import { useId } from "react";
import styles from "./Checkbox.module.scss";

export default function Checkbox({
  children,
  className,
  checked,
  ...props
}: RadixCheckbox.CheckboxProps) {
  const id = useId();

  return (
    <div className={clsx(styles.root, className)}>
      <RadixCheckbox.Root
        className={styles.checkbox}
        id={id}
        checked={checked}
        {...props}
      >
        <CheckboxIcon className={clsx(styles.icon, styles.iconUnchecked)} />
        <RadixCheckbox.Indicator>
          <CheckboxCheckedFilled
            className={clsx(styles.icon, styles.iconChecked)}
          />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
    </div>
  );
}
