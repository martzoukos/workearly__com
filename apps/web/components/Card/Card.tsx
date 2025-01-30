import { CardQueryItem, CardVariantType } from "@workearly/api";
import IconTextCard from "./IconTextCard/IconTextCard";

type PropsType = {
  card: CardQueryItem;
  fallbackVariant: CardVariantType;
};

export default function Card({ card, fallbackVariant }: PropsType) {
  const variant = card.variant || fallbackVariant;

  if (variant === "Icon and Text") {
    return <IconTextCard card={card} />;
  }

  return null;
}
