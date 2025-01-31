import { CardQueryItem } from "@workearly/api";

const CARD_VARIANTS = ["Icon and Text", "Title and Text"] as const;

export type CardVariantType = (typeof CARD_VARIANTS)[number] | undefined;

export default function useCardResolver(card: CardQueryItem) {
  const variant = card.variant as CardVariantType;

  return {
    variant,
  };
}
