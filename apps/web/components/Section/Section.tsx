import styles from "./Section.module.scss";
import clsx from "clsx";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Accordion from "@/components/Accordion/Accordion";
import useSectionResolver from "@/hooks/useSectionResolver";
import CardGrid from "@/components/CardGrid/CardGrid";
import LogoShowcase from "@/components/LogoShowcase/LogoShowcase";
import RelatedCourses from "@/components/RelatedCourses/RelatedCourses";
import { CardVariantType } from "@/hooks/useCardResolver";
import { isDefined, QueryItem } from "@workearly/api";
import StepsShowcase from "@/components/StepsShowcase/StepsShowcase";
import FeaturesShowcase from "@/components/FeaturesShowcase/FeaturesShowcase";
import RelatedArticles from "@/components/RelatedArticles/RelatedArticles";
import LogoCarousel from "../LogoCarousel/LogoCarousel";
import TabSection from "../TabSection/TabSection";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function Section({ section, className }: PropsType) {
  const { cardsCount, flexAlignment, variant, getReferences } =
    useSectionResolver(section);

  const cards = getReferences("Card");
  const accordionCards = getReferences("AccordionCard");
  const actions = getReferences("Action");
  const sections = getReferences("Section");

  const assets = section.assetsCollection?.items.filter(isDefined) || [];

  const hasContent =
    cards.length > 0 ||
    assets.length > 0 ||
    accordionCards.length > 0 ||
    sections.length > 0;

  const style = {
    "--flex-alignment": flexAlignment,
  } as React.CSSProperties;

  if (variant === "Related Classes") {
    return <RelatedCourses section={section} />;
  } else if (variant === "Related Articles") {
    return <RelatedArticles section={section} />;
  }

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

          {/* Dependent on Section */}
          {variant === "Steps Showcase" && <StepsShowcase section={section} />}

          {/* Dependent on Section */}
          {variant === "Features Showcase" && (
            <FeaturesShowcase section={section} />
          )}

          {variant === "Logo Carousel" && (
            <LogoCarousel assets={assets} section={section} />
          )}

          {variant === "Tabs" && <TabSection section={section} />}
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
