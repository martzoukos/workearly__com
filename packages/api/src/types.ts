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
  SectionCollectionQuery,
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

export type QueryItem = {
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

export type ToRelationshipMap<
  T extends string,
  Q extends Record<string, any>,
> = {
  [K in Exclude<
    T,
    undefined
  > as `${Uncapitalize<K>}Collection`]: K extends keyof Q ? Q[K][] : never;
};

export type SectionReference = Exclude<
  | NonNullable<QueryItem["Section"]["contentCollection"]>["items"][number]
  | NonNullable<
      NonNullable<QueryItem["Section"]["actionsCollection"]>["items"][number]
    >
  | NonNullable<
      NonNullable<QueryItem["Section"]["assetsCollection"]>["items"][number]
    >,
  null | undefined
>;

export type SectionReferenceTypeName = Exclude<
  SectionReference["__typename"],
  undefined
>;

export type SectionRelationshipMap = ToRelationshipMap<
  SectionReferenceTypeName,
  QueryItem
>;

export type PageReference = Exclude<
  | NonNullable<QueryItem["Page"]["contentCollection"]>["items"][number]
  | NonNullable<QueryItem["Page"]["details"]>,
  null | undefined
>;

export type PageReferenceTypeName = Exclude<
  PageReference["__typename"],
  undefined
>;

export type PageRelationshipMap = ToRelationshipMap<
  PageReferenceTypeName,
  QueryItem
>;

export type RelationshipMapTypeName =
  | PageReferenceTypeName
  | SectionReferenceTypeName;

export type RelationshipMap = ToRelationshipMap<
  RelationshipMapTypeName,
  QueryItem
>;
