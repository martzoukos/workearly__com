import { Information } from "@carbon/icons-react";
import { Tooltip as RadixTooltip } from "radix-ui";
import styles from "./Tooltip.module.scss";
import clsx from "clsx";

export default function Tooltip({
  children,
  className,
}: RadixTooltip.TooltipContentProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <Information />
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={clsx(styles.content, className)}
            sideOffset={5}
          >
            {children} <RadixTooltip.Arrow className={styles.arrow} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
