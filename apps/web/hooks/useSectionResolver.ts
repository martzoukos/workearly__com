import { TextProps } from "@/components/Text/Text";
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

export type SectionSize = (typeof DATA_MAP.size)[number];

const DATA_MAP = {
  size: ["Narrow", "Wide", "Full"],
  alignment: {
    Left: "flex-start",
    Centered: "center",
  },
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
    "Accordion",
    "Tabs",
    "Tabs Alt",
    "Media Showcase",
    "Logo Showcase",
    "Logo Carousel",
    "Related Articles",
    "Steps Showcase",
    "Features Showcase",
    "Project",
    "Hero",
    "Standard Component",
    "Standard Component Framed",
    "Hero With Background",
    "Video Testimonials",
  ],
} as const;

export default function useSectionResolver(section: QueryItem["Section"]) {
  const { getReferences: getContentfulReferences, page } = useContentful();
  const { theme: pageTheme } = usePageResolver(page);
  const flexAlignment =
    DATA_MAP.alignment[section.alignment as keyof typeof DATA_MAP.alignment] ??
    DATA_MAP.alignment.Left;
  const cardsCount = section.cardsCount ?? 1;
  const variant = (section.variant ??
    "Default") as (typeof DATA_MAP.variants)[number];

  function getReferences<T extends SectionReferenceTypeName>(
    typename: T
  ): Pick<QueryItem, SectionReferenceTypeName>[T][] {
    const referenceFieldKey = DATA_MAP.referenceFields[typename];
    const ids =
      section[referenceFieldKey]?.items
        .filter(isDefined)
        .filter((item) => item.__typename === typename)
        .map((item) => item.sys.id) || [];

    return getContentfulReferences(typename, ids);
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

  const metadata: MetadataType | undefined = section.metadata;
  const theme = (section.theme?.toLowerCase() || pageTheme) as ThemeType;
  const titleSize = section.titleSize as TextProps["size"];
  const size = (section.size ?? "Full") as SectionSize;

  return {
    flexAlignment,
    cardsCount,
    variant,
    getReferences,
    hasReferences,
    metadata,
    theme,
    titleSize,
    size,
  };
}
