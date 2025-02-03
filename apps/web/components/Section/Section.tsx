import styles from "./Section.module.scss";
import clsx from "clsx";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Accordion from "@/components/Accordion/Accordion";
import useSectionResolver from "@/hooks/useSectionResolver";
import CardGrid from "@/components/CardGrid/CardGrid";
import LogoShowcase from "@/components/LogoShowcase/LogoShowcase";
import CardShowcase from "@/components/CardShowcase/CardShowcase";
import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import StepsShowcase from "../StepsShowcase/StepsShowcase";
import FeaturesShowcase from "../FeaturesShowcase/FeaturesShowcase";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function Section({ section, className }: PropsType) {
  const { cardsCount, flexAlignment, variant, getReferences } =
    useSectionResolver(section);

  const cards = getReferences("Card");
  const accordionCards = getReferences("AccordionCard");
  const assets = getReferences("Asset");
  const actions = getReferences("Action");

  const hasContent =
    cards.length > 0 || assets.length > 0 || accordionCards.length > 0;

  const style = {
    "--flex-alignment": flexAlignment,
  } as React.CSSProperties;

  return (
    <section className={clsx(styles.root, className)} style={style}>
      <header className={styles.header}>
        <Text as="h4">{section.title}</Text>
        {section.text && <Text>{section.text}</Text>}
      </header>
      {hasContent && (
        <div className={styles.content}>
          {variant === "Default" && cards.length > 0 && (
            <CardGrid
              cards={cards}
              fallbackVariant={section.cardVariant as CardVariantType}
              columnCount={cardsCount}
            />
          )}

          {variant === "Accordion" && accordionCards.length > 0 && (
            <Accordion accordionCards={accordionCards} />
          )}

          {variant === "Logo Showcase" && assets.length > 0 && (
            <LogoShowcase assets={assets} columnCount={cardsCount} />
          )}

          {variant === "Card Showcase" && <CardShowcase section={section} />}

          {variant === "Steps Showcase" && <StepsShowcase section={section} />}

          {variant === "Features Showcase" && (
            <FeaturesShowcase section={section} />
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
