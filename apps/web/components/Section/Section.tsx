import Accordion from "@/components/Accordion";
import Button from "@/components/Button/Button";
import CardGrid from "@/components/CardGrid/CardGrid";
import FeaturesShowcase from "@/components/FeaturesShowcase/FeaturesShowcase";
import LogoShowcase from "@/components/LogoShowcase/LogoShowcase";
import StepsShowcase from "@/components/StepsShowcase/StepsShowcase";
import Text from "@/components/Text/Text";
import CardShowcase from "@/components/_sections/CardShowcase";
import Hero from "@/components/_sections/Hero";
import MediaShowcase from "@/components/_sections/MediaShowcase";
import RelatedArticles from "@/components/_sections/RelatedArticles";
import TabsAlt from "@/components/_sections/TabsAlt";
import { CardVariantType } from "@/hooks/useCardResolver";
import useSectionResolver from "@/hooks/useSectionResolver";
import { isDefined, QueryItem } from "@workearly/api";
import { Themed } from "@workearly/theme";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import LogoCarousel from "../LogoCarousel/LogoCarousel";
import Tabs from "../_sections/Tabs";
import styles from "./Section.module.scss";
import StandardFramed from "@/components/_sections/StandardFramed";
import Standard from "@/components/_sections/Standard";
import HeroBackground from "@/components/_sections/HeroBackground";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function Section({ section, className }: PropsType) {
  const { cardsCount, variant, getReferences } = useSectionResolver(section);

  if (
    variant === "Card Grid" ||
    variant === "Card Slider" ||
    variant === "Card Hybrid"
  ) {
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
      <StepsShowcase
        cards={cards}
        title={section.title || ""}
        supertitle={section.supertitle || ""}
        description={section.text || ""}
      />
    );
  } else if (variant === "Features Showcase") {
    const cards = getReferences("Card");
    return <FeaturesShowcase cards={cards} title={section.title || ""} />;
  } else if (variant === "Card Showcase") {
    return <CardShowcase section={section} />;
  } else if (variant === "Media Showcase") {
    return <MediaShowcase section={section} />;
  } else if (variant === "Related Articles") {
    return <RelatedArticles section={section} />;
  } else if (variant === "Tabs") {
    const sections = getReferences("Section");
    const actions = getReferences("Action");

    return <Tabs sections={sections} actions={actions} />;
  } else if (variant === "Tabs Alt") {
    const sections = getReferences("Section");

    return <TabsAlt sections={sections} />;
  } else if (variant === "Hero") {
    return <Hero section={section} />;
  } else if (variant === "Standard Component Framed") {
    return <StandardFramed section={section} />;
  } else if (variant === "Standard Component") {
    return <Standard section={section} />;
  } else if (variant === "Hero With Background") {
    return <HeroBackground section={section} />;
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
  const { flexAlignment, getReferences, titleSize } =
    useSectionResolver(section);
  const hasHeader = section.supertitle || section.title || section.text;
  const style = {
    "--flex-alignment": flexAlignment,
  } as React.CSSProperties;

  const actions = getReferences("Action");

  return (
    <Themed as="section" className={clsx(styles.root, className)} style={style}>
      {hasHeader && (
        <header className={styles.header}>
          {section.supertitle && <Text>{section.supertitle}</Text>}
          {section.title && (
            <Text as="h4" size={titleSize}>
              {section.title}
            </Text>
          )}
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
    </Themed>
  );
}
