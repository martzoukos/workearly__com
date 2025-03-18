import Media from "@/components/Media";
import Text from "@/components/Text";
import { ChevronDown } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import { Accordion as RadixAccordion } from "radix-ui";
import { useState } from "react";
import styles from "./FeaturesAccordion.module.scss";
import Shell from "@/components/Shell";
import useShellResolver from "@/hooks/useShellResolver";

type PropsType = {
  cards: QueryItem["Card"][];
  section: QueryItem["Section"];
  title?: string;
  className?: string;
};

export default function FeaturesAccordion({
  cards,
  section,
  title,
  className,
}: PropsType) {
  const [value, setValue] = useState(cards[0]?.sys.id);
  const shell = useShellResolver(section);
  return (
    <Shell.Root className={clsx(styles.root, className)} {...shell}>
      {title && (
        <Text as="h2" className={styles.title}>
          {title}
        </Text>
      )}
      <RadixAccordion.Root
        type="single"
        value={value}
        onValueChange={setValue}
        className={styles.accordion}
        collapsible
      >
        {cards.map((card) => (
          <RadixAccordion.Item key={card.sys.id} value={card.sys.id}>
            {value !== card.sys.id && (
              <RadixAccordion.Header asChild>
                <Text as="h5" size="p">
                  <RadixAccordion.Trigger className={styles.trigger}>
                    {card.title} <ChevronDown />
                  </RadixAccordion.Trigger>
                </Text>
              </RadixAccordion.Header>
            )}

            <RadixAccordion.Content className={styles.content}>
              <div className={styles.contentInner}>
                <div className={styles.contentTitleContainer}>
                  <Text as="h3" size="h2" className={styles.contentTitle}>
                    {card?.title}
                  </Text>
                  <Text size="h5">{card?.text}</Text>
                </div>
                {card?.asset && <Media asset={card.asset} height="12.5rem" />}
              </div>
            </RadixAccordion.Content>
          </RadixAccordion.Item>
        ))}
      </RadixAccordion.Root>
    </Shell.Root>
  );
}
