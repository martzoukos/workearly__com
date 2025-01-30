import { ContentTypeRichTextQueryItem } from "@workearly/api";
import { RoundedCheckIcon } from "../components/Icons";

export default function useRichTextResolver(
  richText: ContentTypeRichTextQueryItem
) {
  const hasBulletTranformation = richText.bulletTranformation !== "None";
  const renderListItemAsCard = Boolean(
    richText.bulletTranformation?.includes("Plain Card")
  );

  const columnCount = richText.bulletTranformation?.includes("Double") ? 2 : 1;
  let IconComponent = undefined;

  if (richText.bulletTranformation?.includes("Checkmark")) {
    IconComponent = RoundedCheckIcon;
  }

  return {
    hasBulletTranformation,
    columnCount,
    IconComponent,
    renderListItemAsCard,
  };
}
