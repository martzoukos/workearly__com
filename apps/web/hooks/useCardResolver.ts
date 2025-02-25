import { useContentful } from "@/stores/ContentfulStore";
import { isDefined, QueryItem, CardReferenceTypeName } from "@workearly/api";

const DATA_MAP = {
  referenceFields: {
    Action: "actionsCollection",
  },
  variants: [
    "Testimonial",
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
  const { getReferences: getContentfulReferences, page } = useContentful();
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
