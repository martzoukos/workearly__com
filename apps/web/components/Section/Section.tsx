import { CardVariantType, SectionQueryItem } from "@workearly/api";
import styles from "./Section.module.scss";
import clsx from "clsx";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Accordion from "@/components/Accordion/Accordion";
import CardGrid from "@/components/Cards/CardGrid";
import useSectionResolver from "../../hooks/useSectionResolver";

type PropsType = {
  section: SectionQueryItem;
  className?: string;
};

export default function Section({ section, className }: PropsType) {
  const {
    cardItems,
    cardsCount,
    alignment,
    accordionItems,
    actions,
    hasContentItems,
    variant,
  } = useSectionResolver(section);

  const style = {
    "--cards-count": cardsCount,
    "--flex-alignment": alignment,
  } as React.CSSProperties;

  return (
    <section className={clsx(styles.root, className)} style={style}>
      <header className={styles.header}>
        <Text as="h4">{section.title}</Text>
        {section.text && <Text>{section.text}</Text>}
      </header>
      {hasContentItems && (
        <div>
          {variant === "Default" && cardItems.length > 0 && (
            <CardGrid
              cards={cardItems}
              variant={section.cardVariant as CardVariantType}
            />
          )}

          {variant === "Accordion" && accordionItems.length > 0 && (
            <Accordion accordionCards={accordionItems} />
          )}
        </div>
      )}

      {actions.length > 0 && (
        <footer className={styles.footer}>
          {actions.map((action) => (
            <Button key={action.sys.id} variant="Chip" colorScheme="White">
              {action.name}
            </Button>
          ))}
        </footer>
      )}
    </section>
  );
}
