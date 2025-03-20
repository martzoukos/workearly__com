import Button from "@/components/Button";
import { Checkmark, ChevronDown, ChevronUp } from "@carbon/icons-react";
import clsx from "clsx";
import { Select as RadixSelect } from "radix-ui";
import { ElementRef, forwardRef } from "react";
import styles from "./Select.module.scss";

type PropsType = {
  placeholder?: string;
  className?: string;
} & RadixSelect.SelectProps;

export default function Select({
  children,
  placeholder = "Select",
  className,
  ...props
}: PropsType) {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger asChild>
        <Button variant="Outlined" className={className}>
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon>
            <ChevronDown />
          </RadixSelect.Icon>
        </Button>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={styles.content}>
          <RadixSelect.ScrollUpButton className={styles.scrollButton}>
            <ChevronUp />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className={styles.scrollButton}>
            <ChevronDown />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

const SelectItem = forwardRef<ElementRef<"div">, RadixSelect.SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={clsx(styles.item, className)}
        {...props}
        ref={forwardedRef}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className={styles.itemIndicator}>
          <Checkmark />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";
Select.Item = SelectItem;
