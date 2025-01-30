import Text from "@/components/Text/Text";
import { AccordionCardQueryItem } from "@workearly/api";
import clsx from "clsx";
import { Accordion as RadixAccordion } from "radix-ui";
import { forwardRef } from "react";
import styles from "./Accordion.module.scss";

type PropsType = {
  accordionCards: AccordionCardQueryItem[];
};

export default function Accordion({ accordionCards }: PropsType) {
  return (
    <RadixAccordion.Root
      className={styles.root}
      type="single"
      defaultValue={accordionCards[0]?.sys.id}
      collapsible
    >
      {accordionCards.map((accordionCard, index) => (
        <AccordionCard
          key={accordionCard.sys.id}
          accordionCard={accordionCard}
          count={accordionCard.skipNumber ? undefined : index + 1}
          className={styles.item}
        />
      ))}
    </RadixAccordion.Root>
  );
}

function AccordionCard({
  accordionCard,
  className,
  count,
}: {
  accordionCard: AccordionCardQueryItem;
  className?: string;
  count?: number;
}) {
  return (
    <RadixAccordion.Item value={accordionCard.sys.id} className={className}>
      <AccordionTrigger className={styles.trigger}>
        {count && (
          <Text size="caption" className={styles.icon}>
            {count}
          </Text>
        )}
        {accordionCard.title}
        {accordionCard.topNotes && (
          <Text size="small" className={styles.topNotes}>
            {accordionCard.topNotes.join(",")}
          </Text>
        )}
      </AccordionTrigger>
      <AccordionContent className={clsx(styles.content)}>
        <div className={styles.grid}>
          <div>
            <Text as="h6" size="small" className={styles.columnTitle}>
              {accordionCard.column1Title}
            </Text>
            <Text size="small">{accordionCard.column1Text}</Text>
          </div>
          <div>
            <Text size="small" className={styles.columnTitle}>
              {accordionCard.column2Title}
            </Text>
            <Text size="small">{accordionCard.column2Text}</Text>
          </div>
        </div>
      </AccordionContent>
    </RadixAccordion.Item>
  );
}

Accordion.Card = AccordionCard;

interface AccordionTriggerProps
  extends React.ComponentProps<typeof RadixAccordion.Trigger> {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <RadixAccordion.Header asChild>
      <Text as="h3" size="h6">
        <RadixAccordion.Trigger
          className={className}
          {...props}
          ref={forwardedRef}
        >
          {children}
        </RadixAccordion.Trigger>
      </Text>
    </RadixAccordion.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps
  extends React.ComponentProps<typeof RadixAccordion.Content> {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <RadixAccordion.Content className={className} {...props} ref={forwardedRef}>
      {children}
    </RadixAccordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";
