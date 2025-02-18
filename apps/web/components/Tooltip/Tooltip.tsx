import Button from "@/components/Button";
import { Information } from "@carbon/icons-react";
import { Tooltip as RadixTooltip } from "radix-ui";
import styles from "./Tooltip.module.scss";

export default function Tooltip({
  children,
}: RadixTooltip.TooltipContentProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <Button>
            <Information />
          </Button>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className={styles.content} sideOffset={5}>
            {children} <RadixTooltip.Arrow className={styles.arrow} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
