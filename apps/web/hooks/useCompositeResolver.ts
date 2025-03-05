import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import {
  CompositeReferenceTypeName,
  isDefined,
  QueryItem,
} from "@workearly/api";
import { ThemeType } from "@workearly/theme";

const DATA_MAP = {
  layout: ["Default", "Alt"],
  size: ["Narrow", "Wide", "Full"],
  alignment: ["Left", "Centered"],
  spacing: ["Small", "Medium", "Large"],
  referenceFields: {
    Section: "contentCollection",
    Action: "contentCollection",
  },
  variants: ["Default", "Tabs", "Tabs Alt"],
} as const;

export type SectionSize = (typeof DATA_MAP.size)[number];

export default function useCompositeResolver(
  composite: QueryItem["Composite"]
) {
  const { getReferences: getContentfulReferences, page } = useContentful();
  const { theme: pageTheme } = usePageResolver(page);
  const variant = (composite?.variant ??
    "Default") as (typeof DATA_MAP)["variants"][number];
  const layout = (composite?.layout ??
    "Default") as (typeof DATA_MAP.layout)[number];
  const alignment = (composite?.alignment ??
    "Left") as (typeof DATA_MAP.alignment)[number];
  const theme = (composite?.theme?.toLowerCase() || pageTheme) as ThemeType;
  const size = (composite?.size ?? "Full") as SectionSize;
  const spacing = (composite?.spacing ??
    "Small") as (typeof DATA_MAP.spacing)[number];

  function getReferences<T extends CompositeReferenceTypeName>(
    typename: T
  ): Pick<QueryItem, CompositeReferenceTypeName>[T][] {
    if (!composite) {
      return [];
    }

    const referenceFieldKey = DATA_MAP.referenceFields[typename];
    const ids =
      composite[referenceFieldKey]?.items
        .filter(isDefined)
        .filter((item) => item.__typename === typename)
        .map((item) => item.sys.id) || [];

    return getContentfulReferences(typename, ids);
  }
  return {
    variant,
    getReferences,
    layout,
    alignment,
    theme,
    size,
    spacing,
  };
}
