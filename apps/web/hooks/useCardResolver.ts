import { QueryItem } from "@workearly/api";

const CARD_VARIANTS = [
  "Icon and Text",
  "Title and Text",
  "Project",
  "Rich Card",
  "Certificate",
  "Key Metrics",
  "People",
] as const;

export type CardVariantType = (typeof CARD_VARIANTS)[number] | undefined;

export default function useCardResolver(card: QueryItem["Card"]) {
  const variant = card.variant as CardVariantType;

  return {
    variant,
  };
}
