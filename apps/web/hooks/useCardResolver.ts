import { QueryItem } from "@workearly/api";

const DATA_MAP = {
  variants: [
    "Icon and Text",
    "Title and Text",
    "Project",
    "Rich Card",
    "Certificate",
    "Key Metrics",
  ],
} as const;

export type CardVariantType = (typeof DATA_MAP.variants)[number] | undefined;

export default function useCardResolver(card: QueryItem["Card"]) {
  const variant = card.variant as CardVariantType;

  return {
    variant,
  };
}
