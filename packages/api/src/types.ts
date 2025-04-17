import { TranslationTextType } from "./airtable";
import TRANSLATIONS from "./airtable/__generated__/translations.json";
import { LOCALES } from "./constants";
import {
  AccordionCardCollectionQuery,
  ActionCollectionQuery,
  AssetCollectionQuery,
  CardCollectionQuery,
  CategoryOrJobDetailsCollectionQuery,
  CompositeCollectionQuery,
  ContentTypeRichTextCollectionQuery,
  CourseDetailsCollectionQuery,
  PageCollectionQuery,
  PeopleDetailsCollectionQuery,
  ResourceDetailsCollectionQuery,
  SectionCollectionQuery,
  UniqueComponentCollectionQuery,
} from "./contentful/graphql/__generated__/gql/graphql";

export type LocaleType = (typeof LOCALES)[number];
export type TranslationType = (typeof TRANSLATIONS)[number];
export type TranslateOptionsType = {
  fallbackCode?: TranslationTextType;
  allowMissing?: boolean;
};

export type QueryItem = {
  CourseDetails: NonNullable<
    NonNullable<
      CourseDetailsCollectionQuery["courseDetailsCollection"]
    >["items"][number]
  >;
  PeopleDetails: NonNullable<
    NonNullable<
      PeopleDetailsCollectionQuery["peopleDetailsCollection"]
    >["items"][number]
  >;
  ResourceDetails: NonNullable<
    NonNullable<
      ResourceDetailsCollectionQuery["resourceDetailsCollection"]
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
  CategoryOrJobDetails: NonNullable<
    NonNullable<
      CategoryOrJobDetailsCollectionQuery["categoryOrJobDetailsCollection"]
    >["items"]
  >[number];
  Composite: NonNullable<
    NonNullable<
      NonNullable<CompositeCollectionQuery["compositeCollection"]>["items"]
    >[number]
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

export type ToRelationshipUnion<
  T extends string,
  Q extends Record<string, any>,
> = {
  [K in Exclude<T, undefined>]: K extends keyof Q
    ? { __typename: K; data: Q[K] }
    : never;
}[Exclude<T, undefined>];

export type CardReference = Exclude<
  NonNullable<
    NonNullable<QueryItem["Section"]["actionsCollection"]>["items"][number]
  >,
  null | undefined
>;

export type CardReferenceTypeName = Exclude<
  CardReference["__typename"],
  undefined
>;

export type UniqueComponentReference = Exclude<
  NonNullable<
    NonNullable<
      QueryItem["UniqueComponent"]["contentCollection"]
    >["items"][number]
  >,
  null | undefined
>;

export type UniqueComponentReferenceTypeName = Exclude<
  UniqueComponentReference["__typename"],
  undefined
>;

export type CompositeReference = Exclude<
  NonNullable<
    NonNullable<QueryItem["Composite"]>["contentCollection"]
  >["items"][number],
  null | undefined
>;

export type CompositeReferenceTypeName = Exclude<
  CompositeReference["__typename"],
  undefined
>;

export type SectionReference = Exclude<
  | NonNullable<QueryItem["Section"]["contentCollection"]>["items"][number]
  | NonNullable<
      NonNullable<QueryItem["Section"]["actionsCollection"]>["items"][number]
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

export type PageReferenceTypeName = Exclude<
  Exclude<
    NonNullable<QueryItem["Page"]["contentCollection"]>["items"][number],
    null | undefined
  >["__typename"],
  undefined
>;

export type PageRelationshipMap = ToRelationshipMap<
  PageReferenceTypeName,
  QueryItem
>;

export type PageReferenceUnion = ToRelationshipUnion<
  PageReferenceTypeName,
  QueryItem
>;

export type PageReference<
  T extends PageReferenceTypeName = PageReferenceTypeName,
> = Extract<PageReferenceUnion, { __typename: T }>["data"];

export type RelationshipMapTypeName =
  | PageReferenceTypeName
  | SectionReferenceTypeName;

export type RelationshipMap = ToRelationshipMap<
  RelationshipMapTypeName,
  QueryItem
>;

export type LinkItemType = {
  name: string;
  to: string;
  variant?: string;
  type: "link";
};

export type ReferenceItemType = {
  name: string;
  referenceId: string;
  referenceType: RelationshipMapTypeName;
  type: "reference";
};

export type DecorativeItemType = {
  name: string;
  to: string;
  referenceId: string;
  referenceType: RelationshipMapTypeName;
  type: "decorative";
};

export type NormalSubItemType = {
  name: string;
  description: string;
  items: Array<LinkItemType | DecorativeItemType | NormalSubItemType>;
  type: "normal-sub";
};

export type CategorySubItemType = {
  name: string;
  description: string;
  itemGroups: Array<{
    name?: string;
    items: Array<LinkItemType | ReferenceItemType>;
  }>;
  type: "category-sub";
};

export type MenuGroupType = {
  name?: string;
  items: Array<
    | LinkItemType
    | NormalSubItemType
    | CategorySubItemType
    | DecorativeItemType
    | ReferenceItemType
    | MenuType
  >;
};

export type MenuType = {
  name: string;
  to?: string;
  variant?: string;
  type: "menu";
  itemGroups: Array<MenuGroupType>;
};
