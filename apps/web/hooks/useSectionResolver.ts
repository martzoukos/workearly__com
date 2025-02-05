import { isDefined, QueryItem, SectionReferenceTypeName } from "@workearly/api";
import { useContentful } from "@/stores/ContentfulStore";
import { camelCase } from "lodash-es";

const DATA_MAP = {
  alignment: {
    Left: "flex-start",
    Centered: "center",
  },
  referenceFieldKeys: ["contentCollection", "actionsCollection"],
  variants: [
    "Default",
    "Accordion",
    "Tabs",
    "Logo Showcase",
    "Logo Carousel",
    "Related Classes",
    "Related Articles",
    "Steps Showcase",
    "Features Showcase",
  ],
} as const;

export default function useSectionResolver(section: QueryItem["Section"]) {
  const { relationshipMap } = useContentful();
  const flexAlignment =
    DATA_MAP.alignment[section.alignment as keyof typeof DATA_MAP.alignment] ??
    DATA_MAP.alignment.Left;
  const cardsCount = section.cardsCount ?? 1;
  const variant = (section.variant ??
    "Default") as (typeof DATA_MAP.variants)[number];

  function getReferenceFieldKey(typename: SectionReferenceTypeName) {
    let referenceFieldKey: (typeof DATA_MAP.referenceFieldKeys)[number] =
      "contentCollection";

    if (typename === "Action") {
      referenceFieldKey = "actionsCollection";
    }

    return referenceFieldKey;
  }

  function getReferences<T extends SectionReferenceTypeName>(
    typename: T
  ): Pick<QueryItem, SectionReferenceTypeName>[T][] {
    const relationshipKey = camelCase(
      `${typename}Collection`
    ) as keyof typeof relationshipMap;
    const referenceFieldKey = getReferenceFieldKey(typename);

    return (
      section[referenceFieldKey]?.items
        .filter((item) => item?.__typename === typename)
        .map((item) => {
          const collection = relationshipMap[relationshipKey];
          return collection?.find(
            (entry) => entry.sys.id === item?.sys.id
          ) as Pick<QueryItem, SectionReferenceTypeName>[T];
        })
        .filter(isDefined) || []
    );
  }

  function hasReferences(typenames?: SectionReferenceTypeName[]) {
    if (!typenames) {
      return DATA_MAP.referenceFieldKeys.some(
        (key) => section[key]?.items.length
      );
    }

    return typenames.some((typename) => {
      const referenceFieldKey = getReferenceFieldKey(typename);

      return Boolean(
        section[referenceFieldKey]?.items.filter(
          (item) => item?.__typename === typename
        ).length
      );
    });
  }

  return {
    flexAlignment,
    cardsCount,
    variant,
    getReferences,
    hasReferences,
  };
}
