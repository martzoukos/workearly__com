import IconTextCard from "@/components/_cards/IconTextCard/IconTextCard";
import ProjectCard from "@/components/_cards/RelatedProjectCard/ProjectCard";
import TitleTextCard from "@/components/_cards/TitleTextCard/TitleTextCard";
import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import CertificateCard from "../_cards/CertificateCard/CertificateCard";
import KeyMetricsCard from "../_cards/KeyMetricsCard/KeyMetricsCard";
import PeopleCard from "../_cards/PeopleCard/PeopleCard";
import RichCard from "../_cards/RichCard/RichCard";
import styles from "./CardGrid.module.scss";

type PropsType = {
  cards: QueryItem["Card"][];
  fallbackVariant: CardVariantType;
  columnCount: number;
  className?: string;
};

export default function CardGrid({
  cards,
  fallbackVariant,
  className,
  columnCount,
}: PropsType) {
  const style = {
    "--column-count": columnCount,
  } as React.CSSProperties;

  return (
    <div className={clsx(styles.root, className)} style={style}>
      {cards.map((card) => (
        <Card
          key={card.sys.id}
          card={card}
          fallbackVariant={fallbackVariant}
          columnCount={columnCount}
        />
      ))}
    </div>
  );
}

type CardPropsType = {
  card: QueryItem["Card"];
  fallbackVariant?: CardVariantType;
  columnCount: number;
};

export function Card({ card, fallbackVariant }: CardPropsType) {
  const variant = (card.variant || fallbackVariant) as CardVariantType;

  if (variant === "Icon and Text") {
    return <IconTextCard card={card} />;
  } else if (variant === "Title and Text") {
    return <TitleTextCard title={card.title} text={card.text} />;
  } else if (variant === "Project") {
    return <ProjectCard card={card} />;
  } else if (variant === "Certificate") {
    return <CertificateCard card={card} columnCount={0} />;
  } else if (variant === "Key Metrics") {
    return <KeyMetricsCard card={card} />;
  } else if (variant === "People") {
    return <PeopleCard card={card} />;
  } else if (variant === "Rich Card") {
    return <RichCard card={card} />;
  }
}
