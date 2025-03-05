import BusinessTestimonialCard from "@/components/_cards/BusinessTestimonialCard";
import CallOutCard from "@/components/_cards/CallOutCard";
import IconTextCard from "@/components/_cards/IconTextCard";
import KeyMetricCard from "@/components/_cards/KeyMetricCard";
import ProjectCard from "@/components/_cards/ProjectCard";
import RichCard from "@/components/_cards/RichCard";
import TitleTextCard from "@/components/_cards/TitleTextCard";
import VideoTestimonialCard from "@/components/_cards/VideoTestimonialCard";
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

  if (variant === "Icon and Text") {
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
  } else if (variant === "Key Metric") {
    return <KeyMetricCard card={card} className={className} />;
  } else if (variant === "Rich") {
    return <RichCard card={card} />;
  } else if (variant === "Business Testimonial") {
    return <BusinessTestimonialCard card={card} className={className} />;
  } else if (variant === "Video Testimonial") {
    return <VideoTestimonialCard card={card} className={className} />;
  } else if (variant === "Call Out") {
    return <CallOutCard card={card} className={className} />;
  }

  return null;
}
