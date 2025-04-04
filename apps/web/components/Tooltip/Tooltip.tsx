import { Information } from "@carbon/icons-react";
import { Popover, Tooltip as RadixTooltip } from "radix-ui";
import styles from "./Tooltip.module.scss";
import clsx from "clsx";
import Viewport from "@/components/Viewport";

export default function Tooltip({
  children,
  className,
}: RadixTooltip.TooltipContentProps) {
  return (
    <>
      <RadixTooltip.Provider delayDuration={0}>
        <RadixTooltip.Root>
          <Viewport showAfter="md">
            <RadixTooltip.Trigger asChild>
              <Information />
            </RadixTooltip.Trigger>
          </Viewport>

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
      <Popover.Root>
        <Viewport showUntil="md">
          <Popover.Trigger asChild>
            <Information />
          </Popover.Trigger>
        </Viewport>

        <Popover.Portal>
          <Popover.Content
            className={clsx(styles.content, className)}
            sideOffset={5}
          >
            {children}
            <Popover.Arrow className={styles.arrow} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
