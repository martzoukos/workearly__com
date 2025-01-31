import { QueryItem } from "@workearly/api";
import { RoundedCheckIcon } from "@workearly/icons";

export default function useRichTextResolver(
  richText?: QueryItem["ContentTypeRichText"]
) {
  const variant = (richText?.variant ?? "Default") as
    | "Default"
    | "Single Column Checkmark"
    | "Double Column Checkmark"
    | "Single Column Plain Card"
    | "Double Column Plain Card"
    | "Chips";
  const renderListAsCards =
    variant === "Single Column Plain Card" ||
    variant === "Double Column Plain Card";
  const renderListAsChips = variant === "Chips";

  const columnCount = variant.includes("Double") ? 2 : 1;
  let IconComponent = undefined;

  if (richText?.variant?.includes("Checkmark")) {
    IconComponent = RoundedCheckIcon;
  }

  return {
    variant,
    columnCount,
    IconComponent,
    renderListAsCards,
    renderListAsChips,
  };
}
