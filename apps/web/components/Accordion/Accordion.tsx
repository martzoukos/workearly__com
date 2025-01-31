import Text from "@/components/Text/Text";
import { AccordionCardQueryItem } from "@workearly/api";
import { Accordion as RadixAccordion } from "radix-ui";
import { forwardRef } from "react";
import styles from "./Accordion.module.scss";
import RichText from "../RichText/RichText";
import getRichTextResolver from "../../utils/getRichTextResolver";
import { ArrowUpIcon, CircleIcon } from "@workearly/icons";

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
        <div className={styles.icon}>
          {count ? (
            <div className={styles.circle}>
              <Text size="caption">{count}</Text>
              <CircleIcon />
            </div>
          ) : (
            <ArrowUpIcon className={styles.arrow} />
          )}
        </div>
        {accordionCard.title}
        {accordionCard.topNotes && (
          <Text size="small" className={styles.topNotes}>
            {accordionCard.topNotes.join(",")}
          </Text>
        )}
      </AccordionTrigger>
      <AccordionContent className={styles.content}>
        <div className={styles.grid}>
          {accordionCard.column1Title && (
            <div>
              <Text as="h6" size="small" className={styles.columnTitle}>
                {accordionCard.column1Title}
              </Text>
              <Text size="small">{accordionCard.column1Text}</Text>
            </div>
          )}
          {accordionCard.column2Title && (
            <div>
              <Text size="small" className={styles.columnTitle}>
                {accordionCard.column2Title}
              </Text>
              <Text size="small">{accordionCard.column2Text}</Text>
            </div>
          )}
          {accordionCard.text?.json && (
            <RichText
              json={accordionCard.text.json}
              resolver={getRichTextResolver()}
              className={styles.contentText}
            />
          )}
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
