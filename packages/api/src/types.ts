import { TranslationTextType } from "./airtable";
import TRANSLATIONS from "./airtable/__generated__/translations.json";
import { LOCALES } from "./constants";
import {
  AccordionCardCollectionQuery,
  ActionCollectionQuery,
  AssetCollectionQuery,
  CardCollectionQuery,
  ContentTypeRichTextCollectionQuery,
  CourseDetailsCollectionQuery,
  PageCollectionQuery,
  PageContentItem,
  SectionCollectionQuery,
  SectionContentItem,
  UniqueComponentCollectionQuery,
} from "./contentful/graphql/__generated__/gql/graphql";

export type LocaleType = (typeof LOCALES)[number];
export type TranslationType = (typeof TRANSLATIONS)[number];
export type TranslateOptionsType = {
  fallbackCode?: TranslationTextType;
  allowMissing?: boolean;
};
export type ContentfulExchangeOptionsType = {
  isPreview?: boolean;
};

export type PageQueryItem = NonNullable<
  NonNullable<PageCollectionQuery["pageCollection"]>["items"][number]
>;

export type SectionQueryItem = NonNullable<
  NonNullable<SectionCollectionQuery["sectionCollection"]>["items"][number]
>;

export type CourseDetailsQueryItem = NonNullable<
  NonNullable<
    CourseDetailsCollectionQuery["courseDetailsCollection"]
  >["items"][number]
>;

export type ContentTypeRichTextQueryItem = NonNullable<
  NonNullable<
    ContentTypeRichTextCollectionQuery["contentTypeRichTextCollection"]
  >["items"][number]
>;

export type UniqueComponentQueryItem = NonNullable<
  NonNullable<
    UniqueComponentCollectionQuery["uniqueComponentCollection"]
  >["items"][number]
>;

export type ActionQueryItem = NonNullable<
  NonNullable<ActionCollectionQuery["actionCollection"]>["items"][number]
>;

export type AssetQueryItem = NonNullable<
  NonNullable<AssetCollectionQuery["assetCollection"]>["items"][number]
>;

export type AccordionCardQueryItem = NonNullable<
  NonNullable<
    AccordionCardCollectionQuery["accordionCardCollection"]
  >["items"][number]
>;

export type CardQueryItem = NonNullable<
  NonNullable<CardCollectionQuery["cardCollection"]>["items"][number]
>;

type QueryItemMap = {
  CourseDetails: CourseDetailsQueryItem;
  ContentTypeRichText: ContentTypeRichTextQueryItem;
  Section: SectionQueryItem;
  UniqueComponent: UniqueComponentQueryItem;
  AccordionCard: AccordionCardQueryItem;
  Card: CardQueryItem;
  Page: PageQueryItem;
  Action: ActionQueryItem;
  Asset: AssetQueryItem;
};

export type RelationshipMapType = {
  [K in Exclude<
    RelationshipMapContentType,
    undefined
  > as `${Uncapitalize<K>}Collection`]: K extends keyof QueryItemMap
    ? QueryItemMap[K][]
    : never;
};

export type RelationshipMapContentType =
  | Exclude<PageChildContentType, undefined>
  | Exclude<SectionChildContentType, undefined>;

export type PageChildContentType =
  | PageContentItem["__typename"]
  | NonNullable<PageQueryItem["details"]>["__typename"];

export type SectionChildContentType =
  | SectionContentItem["__typename"]
  | NonNullable<
      NonNullable<SectionQueryItem["actionsCollection"]>["items"][number]
    >["__typename"]
  | NonNullable<
      NonNullable<SectionQueryItem["assetsCollection"]>["items"][number]
    >["__typename"];

export type CardVariantType = "Icon and Text" | "Course Outline";
