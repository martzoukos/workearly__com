import { CardVariantType, SectionQueryItem } from "@workearly/api";
import styles from "./Section.module.scss";
import clsx from "clsx";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Accordion from "@/components/Accordion/Accordion";
import useSectionResolver from "../../hooks/useSectionResolver";
import CardGrid from "@/components/CardGrid/CardGrid";
import LogoShowcase from "@/components/LogoShowcase/LogoShowcase";
import CardShowcase from "../CardShowcase/CardShowcase";

type PropsType = {
  section: SectionQueryItem;
  className?: string;
};

export default function Section({ section, className }: PropsType) {
  const {
    cardItems,
    cardsCount,
    flexAlignment,
    accordionItems,
    actionItems,
    assetItems,
    hasContentItems,
    variant,
  } = useSectionResolver(section);

  const style = {
    "--flex-alignment": flexAlignment,
  } as React.CSSProperties;

  return (
    <section className={clsx(styles.root, className)} style={style}>
      <header className={styles.header}>
        <Text as="h4">{section.title}</Text>
        {section.text && <Text>{section.text}</Text>}
      </header>
      {hasContentItems && (
        <div className={styles.content}>
          {variant === "Default" && cardItems.length > 0 && (
            <CardGrid
              cards={cardItems}
              fallbackVariant={section.cardVariant as CardVariantType}
              columnCount={cardsCount}
            />
          )}

          {variant === "Accordion" && accordionItems.length > 0 && (
            <Accordion accordionCards={accordionItems} />
          )}

          {variant === "Logo Showcase" && assetItems.length > 0 && (
            <LogoShowcase assets={assetItems} columnCount={cardsCount} />
          )}

          {variant === "Card Showcase" && <CardShowcase section={section} />}
        </div>
      )}

      {actionItems.length > 0 && (
        <footer className={styles.footer}>
          {actionItems.map((action) => (
            <Button key={action.sys.id} variant="Chip" colorScheme="White">
              {action.name}
            </Button>
          ))}
        </footer>
      )}
    </section>
  );
}
