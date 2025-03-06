import { useContentful } from "@/stores/ContentfulStore";
import {
  CompositeReferenceTypeName,
  isDefined,
  QueryItem,
} from "@workearly/api";

const DATA_MAP = {
  layout: ["Default", "Alt"],
  spacing: ["Small", "Medium", "Large"],
  referenceFields: {
    Section: "contentCollection",
    Action: "contentCollection",
  },
  variants: ["Default", "Tabs", "Tabs Alt"],
} as const;

export default function useCompositeResolver(
  composite: QueryItem["Composite"]
) {
  const { getReferences: getContentfulReferences } = useContentful();
  const variant = (composite?.variant ??
    "Default") as (typeof DATA_MAP)["variants"][number];
  const layout = (composite?.layout ??
    "Default") as (typeof DATA_MAP.layout)[number];
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
    spacing,
  };
}
