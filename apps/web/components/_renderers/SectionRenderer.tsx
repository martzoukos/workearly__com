import CardShowcase from "@/components/_sections/CardShowcase";
import Hero from "@/components/_sections/Hero";
import HeroBackground from "@/components/_sections/HeroBackground";
import MediaShowcase from "@/components/_sections/MediaShowcase";
import Standard from "@/components/_sections/Standard";
import StandardFramed from "@/components/_sections/StandardFramed";
import Accordion from "@/components/Accordion";
import CardGrid from "@/components/CardGrid";
import CardSlider from "@/components/CardSlider";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import LogoCarousel from "@/components/LogoCarousel/LogoCarousel";
import LogoShowcase from "@/components/LogoShowcase";
import Section from "@/components/Section";
import StepsShowcase from "@/components/StepsShowcase";
import { useViewport } from "@/components/Viewport";
import { CardVariantType } from "@/hooks/useCardResolver";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem, isDefined } from "@workearly/api";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function SectionRenderer({ section, className }: PropsType) {
  const { cardsCount, variant, getReferences, layout, cardTheme } =
    useSectionResolver(section);
  const isUntilMd = useViewport({ showUntil: "md" });

  const SectionLayout =
    layout === "Alt" ? Section.AltLayout : Section.DefaultLayout;

  if (variant === "Card Grid") {
    const cards = getReferences("Card");
    const pages = getReferences("Page");

    return (
      <SectionLayout section={section} className={className}>
        <CardGrid
          cards={cards}
          pages={pages}
          fallbackVariant={section.cardVariant as CardVariantType}
          columnCount={cardsCount}
          cardTheme={cardTheme}
        />
      </SectionLayout>
    );
  } else if (variant === "Card Slider") {
    const cards = getReferences("Card");
    const pages = getReferences("Page");

    return (
      <SectionLayout section={section} className={className}>
        <CardSlider
          cards={cards}
          pages={pages}
          fallbackVariant={section.cardVariant as CardVariantType}
          columnCount={cardsCount}
          cardTheme={cardTheme}
        />
      </SectionLayout>
    );
  } else if (variant === "Card Hybrid") {
    const cards = getReferences("Card");
    const pages = getReferences("Page");

    return (
      <SectionLayout section={section} className={className}>
        {isUntilMd ? (
          <CardSlider
            cards={cards}
            pages={pages}
            fallbackVariant={section.cardVariant as CardVariantType}
            columnCount={cardsCount}
            cardTheme={cardTheme}
          />
        ) : (
          <CardGrid
            cards={cards}
            pages={pages}
            fallbackVariant={section.cardVariant as CardVariantType}
            columnCount={cardsCount}
            cardTheme={cardTheme}
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
