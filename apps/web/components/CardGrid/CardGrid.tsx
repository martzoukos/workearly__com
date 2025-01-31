import { CardQueryItem, CardVariantType } from "@workearly/api";
import IconTextCard from "@/components/Cards/IconTextCard/IconTextCard";
import styles from "./CardGrid.module.scss";
import clsx from "clsx";
import TitleTextCard from "@/components/Cards/TitleTextCard/TitleTextCard";

type PropsType = {
  cards: CardQueryItem[];
  fallbackVariant: CardVariantType;
  cardsCount: number;
  className?: string;
};

export default function CardGrid({
  cards,
  fallbackVariant,
  className,
  cardsCount,
}: PropsType) {
  const style = {
    "--cards-count": cardsCount,
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
  card: CardQueryItem;
  fallbackVariant?: CardVariantType;
};

function Card({ card, fallbackVariant }: CardPropsType) {
  const variant = (card.variant || fallbackVariant) as CardVariantType;

  if (variant === "Icon and Text") {
    return <IconTextCard card={card} />;
  } else if (variant === "Title and Text") {
    return <TitleTextCard title={card.title} text={card.text} />;
  }
}
