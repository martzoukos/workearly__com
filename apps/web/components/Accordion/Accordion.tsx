import { forwardRef } from "react";
import styles from "./Accordion.module.scss";
import { Accordion as RadixAccordion } from "radix-ui";
import clsx from "clsx";
import { AccordionCardQueryItem } from "@workearly/api";

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
      {accordionCards.map((accordionCard) => (
        <AccordionCard
          key={accordionCard.sys.id}
          accordionCard={accordionCard}
        />
      ))}
    </RadixAccordion.Root>
  );
}

function AccordionCard({
  accordionCard,
  className,
}: {
  accordionCard: AccordionCardQueryItem;
  className?: string;
}) {
  return (
    <RadixAccordion.Item
      value={accordionCard.sys.id}
      className={clsx(styles.item, className)}
    >
      <AccordionTrigger>{accordionCard.title}</AccordionTrigger>
      <AccordionContent>{accordionCard.topNotes}</AccordionContent>
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
    <RadixAccordion.Header className={styles.header}>
      <RadixAccordion.Trigger
        className={clsx(styles.trigger, className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  )
);

interface AccordionContentProps
  extends React.ComponentProps<typeof RadixAccordion.Content> {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <RadixAccordion.Content
      className={clsx(styles.content, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </RadixAccordion.Content>
  )
);
