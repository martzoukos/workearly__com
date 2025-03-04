import BusinessTestimonialCard from "@/components/_cards/BusinessTestimonialCard";
import CertificateCard from "@/components/_cards/CertificateCard";
import IconTextCard from "@/components/_cards/IconTextCard";
import KeyMetricsCard from "@/components/_cards/KeyMetricsCard";
import ProjectCard from "@/components/_cards/ProjectCard";
import RichCard from "@/components/_cards/RichCard";
import TestimonialCard from "@/components/_cards/TestimonialCard";
import TitleTextCard from "@/components/_cards/TitleTextCard";
import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";

type PropsType = {
  card: QueryItem["Card"];
  fallbackVariant?: CardVariantType;
  className?: string;
};

export default function CardRenderer({
  card,
  fallbackVariant,
  className,
}: PropsType) {
  const variant = (card.variant || fallbackVariant) as CardVariantType;

  if (!variant) {
    return null;
  }

  if (variant === "Testimonial") {
    return <TestimonialCard card={card} className={className} />;
  } else if (variant === "Icon and Text") {
    return <IconTextCard card={card} className={className} />;
  } else if (variant === "Title and Text") {
    return (
      <TitleTextCard
        title={card.title}
        text={card.text}
        className={className}
      />
    );
  } else if (variant === "Project") {
    return <ProjectCard card={card} className={className} />;
  } else if (variant === "Certificate") {
    return (
      <CertificateCard card={card} columnCount={0} className={className} />
    );
  } else if (variant === "Key Metrics") {
    return <KeyMetricsCard card={card} className={className} />;
  } else if (variant === "Rich Card") {
    return <RichCard card={card} />;
  } else if (variant === "Business Testimonial") {
    return <BusinessTestimonialCard card={card} className={className} />;
  }
}
