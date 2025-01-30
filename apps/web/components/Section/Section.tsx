import { CardVariantType, SectionQueryItem } from "@workearly/api";
import styles from "./Section.module.scss";
import clsx from "clsx";
import Text from "@/components/Text/Text";
import { useContentful } from "@/stores/ContentfulStore";
import Button from "@/components/Button/Button";
import Accordion from "@/components/Accordion/Accordion";
import Cards from "@/components/Cards/Cards";

type PropsType = {
  section: SectionQueryItem;
  className?: string;
};

export default function Section({ section, className }: PropsType) {
  const { resolver } = useContentful();

  const style = {
    "--cards-count": resolver.section.cardsCount(section),
    "--flex-alignment": resolver.section.alignment(section),
  } as React.CSSProperties;

  const cardItems = resolver.section.cardItems(section);
  const accordionItems = resolver.section.accordionItems(section);
  const actions = resolver.section.actions(section);

  return (
    <section
      className={clsx(styles.root, className)}
      data-card-variant={section.cardVariant}
      style={style}
    >
      <header className={styles.header}>
        <Text as="h4">{section.title}</Text>
        {section.text && <Text>{section.text}</Text>}
      </header>
      <div className={clsx(styles.content)}>
        {section.variant === "Default" && cardItems.length > 0 && (
          <Cards
            cards={cardItems}
            variant={section.cardVariant as CardVariantType}
          />
        )}

        {section.variant === "Accordion" && accordionItems.length > 0 && (
          <Accordion accordionCards={accordionItems} />
        )}
      </div>

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
