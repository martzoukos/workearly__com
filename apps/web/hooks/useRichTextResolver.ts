import { ContentTypeRichTextQueryItem } from "@workearly/api";
import { RoundedCheckIcon } from "@workearly/icons";

export default function useRichTextResolver(
  richText?: ContentTypeRichTextQueryItem
) {
  const hasBulletTranformation = richText?.bulletTranformation !== "None";
  const renderListAsCards = Boolean(
    richText?.bulletTranformation?.includes("Plain Card")
  );
  const renderListAsChips = Boolean(
    richText?.bulletTranformation?.includes("Chips")
  );

  const columnCount = richText?.bulletTranformation?.includes("Double") ? 2 : 1;
  let IconComponent = undefined;

  if (richText?.bulletTranformation?.includes("Checkmark")) {
    IconComponent = RoundedCheckIcon;
  }

  return {
    hasBulletTranformation,
    columnCount,
    IconComponent,
    renderListAsCards,
    renderListAsChips,
  };
}
