import { CardQueryItem, CardVariantType } from "@workearly/api";
import IconTextCard from "./IconTextCard/IconTextCard";

type PropsType = {
  cards: CardQueryItem[];
  variant: CardVariantType;
};

export default function Cards({ cards, variant }: PropsType) {
  return cards
    .filter((card) => card.variant === variant)
    .map((card) => <Card key={card.sys.id} card={card} />);
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
