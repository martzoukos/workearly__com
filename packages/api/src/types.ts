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

type QueryItemMap = {
  CourseDetails: NonNullable<
    NonNullable<
      CourseDetailsCollectionQuery["courseDetailsCollection"]
    >["items"][number]
  >;
  ContentTypeRichText: NonNullable<
    NonNullable<
      ContentTypeRichTextCollectionQuery["contentTypeRichTextCollection"]
    >["items"][number]
  >;
  Section: NonNullable<
    NonNullable<SectionCollectionQuery["sectionCollection"]>["items"][number]
  >;
  UniqueComponent: NonNullable<
    NonNullable<
      UniqueComponentCollectionQuery["uniqueComponentCollection"]
    >["items"][number]
  >;
  AccordionCard: NonNullable<
    NonNullable<
      AccordionCardCollectionQuery["accordionCardCollection"]
    >["items"][number]
  >;
  Card: NonNullable<
    NonNullable<CardCollectionQuery["cardCollection"]>["items"][number]
  >;
  Page: NonNullable<
    NonNullable<PageCollectionQuery["pageCollection"]>["items"][number]
  >;
  Action: NonNullable<
    NonNullable<ActionCollectionQuery["actionCollection"]>["items"][number]
  >;
  Asset: NonNullable<
    NonNullable<AssetCollectionQuery["assetCollection"]>["items"][number]
  >;
};

export type PageQueryItem = QueryItemMap["Page"];
export type SectionQueryItem = QueryItemMap["Section"];
export type CourseDetailsQueryItem = QueryItemMap["CourseDetails"];
export type ContentTypeRichTextQueryItem = QueryItemMap["ContentTypeRichText"];
export type UniqueComponentQueryItem = QueryItemMap["UniqueComponent"];
export type ActionQueryItem = QueryItemMap["Action"];
export type AssetQueryItem = QueryItemMap["Asset"];
export type AccordionCardQueryItem = QueryItemMap["AccordionCard"];
export type CardQueryItem = QueryItemMap["Card"];

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
