import usePageResolver from "@/hooks/usePageResolver";
import { CheckmarkOutline } from "@carbon/icons-react";
import { useContentful } from "../stores/ContentfulStore";

const VARIANTS = [
  "Default",
  "Single Column Checkmark",
  "Double Column Checkmark",
  "Single Column Plain Card",
  "Double Column Plain Card",
  "Chips",
] as const;

export type RichTextVariantType = (typeof VARIANTS)[number];

export default function useRichTextResolver(
  variant: RichTextVariantType = "Default"
) {
  const { getReference, page } = useContentful();
  const { theme } = usePageResolver(page);

  const renderListAsCards =
    variant === "Single Column Plain Card" ||
    variant === "Double Column Plain Card";
  const renderListAsChips = variant === "Chips";

  const columnCount = variant.includes("Double") ? 2 : 1;
  let IconComponent = undefined;

  if (variant.includes("Checkmark")) {
    IconComponent = CheckmarkOutline;
  }

  return {
    variant,
    columnCount,
    IconComponent,
    renderListAsCards,
    renderListAsChips,
    getReference,
    theme,
  };
}
