import { TextProps } from "@/components/Text/Text";
import { CardVariantType } from "@/hooks/useCardResolver";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { isDefined, QueryItem, SectionReferenceTypeName } from "@workearly/api";
import { ThemeType } from "@workearly/theme";

type ReferenceFieldsType = {
  [key in SectionReferenceTypeName]: "contentCollection" | "actionsCollection";
};

type MetadataType = {
  title?: string;
  values: Array<{ title: string; amount: string; percentage: string }>;
};

const DATA_MAP = {
  layout: ["Default", "Alt"],
  referenceFields: {
    AccordionCard: "contentCollection",
    Action: "actionsCollection",
    Card: "contentCollection",
    ContentTypeRichText: "contentCollection",
    Page: "contentCollection",
    Section: "contentCollection",
    UniqueComponent: "contentCollection",
  } as ReferenceFieldsType,
  variants: [
    "Card Grid",
    "Card Slider",
    "Card Hybrid",
    "Card Showcase",
    "Media Slider",
    "Accordion",
    "Logo Showcase",
    "Logo Carousel",
    "Steps Showcase",
    "Features Showcase",
    "Hero",
    "Hero With Background",
    "Standard Component",
    "Standard Component Framed",
    "Map",
    "Mentors",
    "Mentors (No Filters)",
    "Partners",
    "Partners (No Filters)",
    "Courses",
    "Courses (No Filters)",
    "Form",
    "Articles",
    "Articles (No Filters)",
  ],
} as const;

export default function useSectionResolver(section: QueryItem["Section"]) {
  const {
    getReferences: getContentfulReferences,
    getTaggedReferences,
    page,
  } = useContentful();
  const { theme: pageTheme } = usePageResolver(page);
  const cardsCount = section.cardsCount ?? 3;
  const variant = (section.variant ??
    "Default") as (typeof DATA_MAP.variants)[number];
  const layout = (section.layout ??
    "Default") as (typeof DATA_MAP.layout)[number];
  const cardTheme = (section.cardTheme?.toLowerCase() ??
    pageTheme) as ThemeType;
  const cardVariant = section.cardVariant as CardVariantType;
  const metadata: MetadataType | undefined = section.metadata;
  const titleSize = section.titleSize as TextProps["size"];

  function getReferences<T extends SectionReferenceTypeName>(
    typename: T
  ): Pick<QueryItem, SectionReferenceTypeName>[T][] {
    const references: Pick<QueryItem, SectionReferenceTypeName>[T][] = [];

    const tagIds = section.contentfulMetadata.tags.map(
      (tag) => tag?.id as string
    );

    references.push(...getTaggedReferences(typename, tagIds));

    const referenceFieldKey = DATA_MAP.referenceFields[typename];
    const ids =
      section[referenceFieldKey]?.items
        .filter(isDefined)
        .filter((item) => item.__typename === typename)
        .map((item) => item.sys.id) || [];

    references.push(...getContentfulReferences(typename, ids));

    return references;
  }

  function hasReferences(typenames?: SectionReferenceTypeName[]) {
    if (!typenames) {
      return Object.values(DATA_MAP.referenceFields).some(
        (key) => section[key]?.items.length
      );
    }

    return typenames.some((typename) => {
      const referenceFieldKey = DATA_MAP.referenceFields[typename];

      return Boolean(
        section[referenceFieldKey]?.items.filter(
          (item) => item?.__typename === typename
        ).length
      );
    });
  }

  const tags = section.contentfulMetadata.tags
    .map((tag) => ({ ...tag, name: tag?.name?.split(":").at(0)?.trim() }))
    .filter(isDefined);

  return {
    cardsCount,
    variant,
    getReferences,
    hasReferences,
    metadata,
    titleSize,
    layout,
    cardTheme,
    tags,
    cardVariant,
  };
}
