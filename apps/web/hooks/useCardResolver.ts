import { useContentful } from "@/stores/ContentfulStore";
import { CardReferenceTypeName, isDefined, QueryItem } from "@workearly/api";

const DATA_MAP = {
  referenceFields: {
    Action: "actionsCollection",
  },
  variants: [
    "Title and Text",
    "Icon and Text",
    "Key Metric",
    "Rich",
    "Project",
    "Business Testimonial",
    "Video Testimonial",
    "Call Out",
    "Category",
  ],
} as const;

export type CardVariantType = (typeof DATA_MAP.variants)[number] | undefined;

export default function useCardResolver(card: QueryItem["Card"]) {
  const { getReferences: getContentfulReferences } = useContentful();
  const variant = card.variant as CardVariantType;

  function getReferences<T extends CardReferenceTypeName>(
    typename: T
  ): Pick<QueryItem, CardReferenceTypeName>[T][] {
    const referenceFieldKey = DATA_MAP.referenceFields[typename];
    const ids =
      card[referenceFieldKey]?.items
        .filter(isDefined)
        .filter((item) => item.__typename === typename)
        .map((item) => item.sys.id) || [];

    return getContentfulReferences(typename, ids);
  }

  return {
    variant,
    getReferences,
  };
}
