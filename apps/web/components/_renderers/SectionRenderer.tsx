import ArticleIndex from "@/components/_sections/ArticleIndex";
import CardGrid from "@/components/_sections/CardGrid";
import CardShowcase from "@/components/_sections/CardShowcase";
import CardSlider from "@/components/_sections/CardSlider";
import CertificateIndex from "@/components/_sections/CertificateIndex";
import CourseIndex from "@/components/_sections/CourseIndex";
import Form from "@/components/_sections/Form";
import Hero from "@/components/_sections/Hero";
import HeroBackground from "@/components/_sections/HeroBackground";
import HeroDetails from "@/components/_sections/HeroDetails";
import Map from "@/components/_sections/Map";
import MediaSlider from "@/components/_sections/MediaSlider";
import PeopleIndex from "@/components/_sections/PeopleIndex";
import Standard from "@/components/_sections/Standard";
import StandardFramed from "@/components/_sections/StandardFramed";
import Accordion from "@/components/Accordion";
import AdvancedLogoCarousel from "@/components/AdvancedLogoCarousel/AdvancedLogoCarousel";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import LogoCarousel from "@/components/LogoCarousel/LogoCarousel";
import LogoShowcase from "@/components/LogoShowcase";
import Shell from "@/components/Shell";
import StepsShowcase from "@/components/StepsShowcase";
import { useViewport } from "@/components/Viewport";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem, isDefined } from "@workearly/api";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function SectionRenderer({ section, className }: PropsType) {
  const { cardsCount, variant, getReferences, noFilters } =
    useSectionResolver(section);
  const isUntilMd = useViewport({ showUntil: "md" });

  if (variant === "Card Grid") {
    return <CardGrid section={section} className={className} />;
  } else if (variant === "Card Slider") {
    return <CardSlider section={section} className={className} />;
  } else if (variant === "Card Hybrid") {
    return (
      <>
        {isUntilMd ? (
          <CardSlider section={section} className={className} />
        ) : (
          <CardGrid section={section} className={className} />
        )}
      </>
    );
  } else if (variant === "Accordion") {
    const accordionCards = getReferences("AccordionCard");

    return (
      <Shell.Section section={section} className={className}>
        <Accordion accordionCards={accordionCards} />
      </Shell.Section>
    );
  } else if (variant === "Logo Showcase") {
    const assets = section.assetsCollection?.items.filter(isDefined) || [];

    return (
      <Shell.Section section={section} className={className}>
        <LogoShowcase assets={assets} columnCount={cardsCount} />
      </Shell.Section>
    );
  } else if (variant === "Logo Carousel") {
    const assets = section.assetsCollection?.items.filter(isDefined) || [];

    return (
      <LogoCarousel assets={assets} section={section} className={className} />
    );
  } else if (variant === "Advanced Logo Carousel") {
    const assets = section.assetsCollection?.items.filter(isDefined) || [];

    return <AdvancedLogoCarousel section={section} className={className} />;
  } else if (variant === "Steps Showcase") {
    return <StepsShowcase section={section} className={className} />;
  } else if (variant === "Features Showcase") {
    const cards = getReferences("Card");
    return (
      <FeaturesShowcase
        cards={cards}
        title={section.title || ""}
        className={className}
        section={section}
      />
    );
  } else if (variant === "Card Showcase") {
    return <CardShowcase section={section} className={className} />;
  } else if (variant === "Media Slider") {
    return <MediaSlider section={section} className={className} />;
  } else if (variant === "Hero") {
    return <Hero section={section} className={className} />;
  } else if (variant === "Standard Component Framed") {
    return <StandardFramed section={section} className={className} />;
  } else if (variant === "Standard Component") {
    return <Standard section={section} className={className} />;
  } else if (variant === "Hero With Background") {
    return <HeroBackground section={section} className={className} />;
  } else if (variant === "Hero With Details") {
    return <HeroDetails section={section} className={className} />;
  } else if (variant === "Mentors") {
    return (
      <PeopleIndex
        section={section}
        hideFilters={noFilters}
        className={className}
      />
    );
  } else if (variant === "Partners") {
    return (
      <PeopleIndex
        section={section}
        hideFilters={noFilters}
        className={className}
      />
    );
  } else if (variant === "Courses") {
    return <CourseIndex section={section} className={className} />;
  } else if (variant === "Map") {
    return <Map section={section} className={className} />;
  } else if (variant === "Form") {
    return <Form section={section} className={className} />;
  } else if (variant === "Articles") {
    return (
      <ArticleIndex
        section={section}
        hideFilters={noFilters}
        className={className}
      />
    );
  } else if (variant === "Certificates") {
    return (
      <CertificateIndex
        section={section}
        hideFilters={noFilters}
        className={className}
      />
    );
  }

  return null;
}
