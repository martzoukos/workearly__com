import { CardQueryItem, CardVariantType } from "@workearly/api";
import IconTextCard from "./IconTextCard/IconTextCard";
import styles from "./CardGrid.module.scss";
import clsx from "clsx";

type PropsType = {
  cards: CardQueryItem[];
  variant: CardVariantType;
  className?: string;
};

export default function CardGrid({ cards, variant, className }: PropsType) {
  return (
    <div className={clsx(styles.root, className)}>
      {cards
        .filter((card) => card.variant === variant)
        .map((card) => (
          <Card key={card.sys.id} card={card} />
        ))}
    </div>
  );
}

type CardPropsType = {
  card: CardQueryItem;
};

function Card({ card }: CardPropsType) {
  const variant = card.variant as CardVariantType;

  if (variant === "Icon and Text") {
    return <IconTextCard card={card} />;
  }

  return null;
}
