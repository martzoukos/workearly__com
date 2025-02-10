import IconTextCard from "@/components/Cards/IconTextCard/IconTextCard";
import styles from "./CardGrid.module.scss";
import clsx from "clsx";
import TitleTextCard from "@/components/Cards/TitleTextCard/TitleTextCard";
import { CardVariantType } from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import ProjectCard from "../Cards/RelatedProjectCard/ProjectCard";

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
        <Card key={card.sys.id} card={card} fallbackVariant={fallbackVariant} />
      ))}
    </div>
  );
}

type CardPropsType = {
  card: QueryItem["Card"];
  fallbackVariant?: CardVariantType;
};

function Card({ card, fallbackVariant }: CardPropsType) {
  const variant = (card.variant || fallbackVariant) as CardVariantType;

  if (variant === "Icon and Text") {
    return <IconTextCard card={card} />;
  } else if (variant === "Title and Text") {
    return <TitleTextCard title={card.title} text={card.text} />;
  } else if (variant === "Project") {
    return <ProjectCard card={card} />;
  }
}
