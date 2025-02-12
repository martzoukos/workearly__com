import styles from "./Section.module.scss";
import clsx from "clsx";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Accordion from "@/components/Accordion/Accordion";
import useSectionResolver from "@/hooks/useSectionResolver";
import CardGrid from "@/components/CardGrid/CardGrid";
import LogoShowcase from "@/components/LogoShowcase/LogoShowcase";
import Slider from "@/components/_sections/Slider/Slider";
import { CardVariantType } from "@/hooks/useCardResolver";
import { isDefined, QueryItem } from "@workearly/api";
import StepsShowcase from "@/components/StepsShowcase/StepsShowcase";
import FeaturesShowcase from "@/components/FeaturesShowcase/FeaturesShowcase";
import RelatedArticles from "@/components/_sections/RelatedArticles/RelatedArticles";
import LogoCarousel from "../LogoCarousel/LogoCarousel";
import Tabs from "../_sections/Tabs/Tabs";
import { PropsWithChildren } from "react";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function Section({ section, className }: PropsType) {
  const { cardsCount, variant, getReferences } = useSectionResolver(section);

  if (variant === "Default") {
    const cards = getReferences("Card");

    return (
      <SectionLayout section={section} className={className}>
        {Boolean(cards.length) && (
          <CardGrid
            cards={cards}
            fallbackVariant={section.cardVariant as CardVariantType}
            columnCount={cardsCount}
          />
        )}
      </SectionLayout>
    );
  } else if (variant === "Accordion") {
    const accordionCards = getReferences("AccordionCard");

    return (
      <SectionLayout section={section} className={className}>
        <Accordion accordionCards={accordionCards} />
      </SectionLayout>
    );
  } else if (variant === "Logo Showcase") {
    const assets = section.assetsCollection?.items.filter(isDefined) || [];

    return (
      <SectionLayout section={section} className={className}>
        <LogoShowcase assets={assets} columnCount={cardsCount} />
      </SectionLayout>
    );
  } else if (variant === "Logo Carousel") {
    const assets = section.assetsCollection?.items.filter(isDefined) || [];

    return (
      <SectionLayout section={section} className={className}>
        <LogoCarousel assets={assets} title={section.title || ""} />
      </SectionLayout>
    );
  } else if (variant === "Steps Showcase") {
    const cards = getReferences("Card");

    return (
      <SectionLayout section={section} className={className}>
        <StepsShowcase
          cards={cards}
          title={section.title || ""}
          supertitle={section.supertitle || ""}
          description={section.text || ""}
        />
      </SectionLayout>
    );
  } else if (variant === "Features Showcase") {
    const cards = getReferences("Card");
    return (
      <SectionLayout section={section} className={className}>
        <FeaturesShowcase cards={cards} title={section.title || ""} />
      </SectionLayout>
    );
  } else if (variant === "Slider") {
    return <Slider section={section} />;
  } else if (variant === "Related Articles") {
    return <RelatedArticles section={section} />;
  } else if (variant === "Tabs") {
    const sections = getReferences("Section");
    const actions = getReferences("Action");

    return <Tabs sections={sections} actions={actions} />;
  }

  return null;
}

type SectionLayoutPropsType = PropsWithChildren<{
  section: QueryItem["Section"];
  className?: string;
}>;

function SectionLayout({
  section,
  className,
  children,
}: SectionLayoutPropsType) {
  const { flexAlignment, getReferences } = useSectionResolver(section);
  const hasHeader = section.title || section.text;
  const style = {
    "--flex-alignment": flexAlignment,
  } as React.CSSProperties;

  const actions = getReferences("Action");

  return (
    <section className={clsx(styles.root, className)} style={style}>
      {hasHeader && (
        <header className={styles.header}>
          <Text as="h4">{section.title}</Text>
          {section.text && <Text>{section.text}</Text>}
        </header>
      )}
      {children && <div className={styles.content}>{children}</div>}
      {actions.length > 0 && (
        <footer className={styles.footer}>
          {actions.map((action) => (
            <Button
              key={action.sys.id}
              variant="Solid"
              isRounded={true}
              colorScheme="White"
            >
              {action.name}
            </Button>
          ))}
        </footer>
      )}
    </section>
  );
}
