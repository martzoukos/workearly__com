import BusinessTestimonialCard from "@/components/_cards/BusinessTestimonialCard";
import CallOutCard from "@/components/_cards/CallOutCard";
import CategoryCard from "@/components/_cards/CategoryCard";
import IconTextCard from "@/components/_cards/IconTextCard";
import KeyMetricCard from "@/components/_cards/KeyMetricCard";
import ProjectCard from "@/components/_cards/ProjectCard";
import RichCard from "@/components/_cards/RichCard";
import TitleTextCard from "@/components/_cards/TitleTextCard";
import VideoTestimonialCard from "@/components/_cards/VideoTestimonialCard";
import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import { ThemeType } from "@workearly/theme";

type PropsType = {
  card: QueryItem["Card"];
  fallbackVariant?: CardVariantType;
  className?: string;
  fallbackTheme: ThemeType;
};

export default function CardRenderer({
  card,
  fallbackVariant,
  className,
  fallbackTheme,
}: PropsType) {
  const variant = (card.variant || fallbackVariant) as CardVariantType;
  const theme = (card.theme?.toLowerCase() || fallbackTheme) as ThemeType;

  if (!variant) {
    return null;
  }

  if (variant === "Icon and Text") {
    return <IconTextCard card={card} className={className} theme={theme} />;
  } else if (variant === "Title and Text") {
    return (
      <TitleTextCard
        title={card.title}
        text={card.text}
        className={className}
        theme={theme}
      />
    );
  } else if (variant === "Project") {
    return <ProjectCard card={card} className={className} theme={theme} />;
  } else if (variant === "Key Metric") {
    return <KeyMetricCard card={card} className={className} theme={theme} />;
  } else if (variant === "Rich") {
    return <RichCard card={card} theme={theme} />;
  } else if (variant === "Business Testimonial") {
    return (
      <BusinessTestimonialCard
        card={card}
        className={className}
        theme={theme}
      />
    );
  } else if (variant === "Video Testimonial") {
    return (
      <VideoTestimonialCard card={card} className={className} theme={theme} />
    );
  } else if (variant === "Call Out") {
    return <CallOutCard card={card} className={className} theme={theme} />;
  } else if (variant === "Category") {
    return <CategoryCard card={card} className={className} theme={theme} />;
  }

  return null;
}
