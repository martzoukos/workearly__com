import { CardQueryItem, CardVariantType } from "@workearly/api";
import IconTextCard from "./IconTextCard/IconTextCard";

type PropsType = {
  card: CardQueryItem;
  fallbackVariant: CardVariantType;
};

export default function Cards({ card, fallbackVariant }: PropsType) {
  const variant = (card.variant || fallbackVariant) as CardVariantType;

  if (variant === "Icon and Text") {
    return <IconTextCard card={card} />;
  }

  return null;
}
