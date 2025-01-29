import { ClassValue } from "clsx";
import { ReactNode } from "react";
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
  PageContentItem,
  PageQuery,
  SectionCollectionQuery,
  SectionContentItem,
  UniqueComponentCollectionQuery,
} from "./contentful/graphql/__generated__/gql/graphql";

export type NextLinkPropsType = {
  className?: ClassValue;
  color?: "Green" | "White" | "Black";
  variant?:
    | "Filled"
    | "Outlined"
    | "Ghost"
    | "Underlined"
    | "Decorative"
    | "Chip";
  behaviour?: "Flex" | "Wrap";
  size?: "normal" | "medium" | "large";
  icon?: ReactNode;
  iconPlacement?: "Left" | "Right";
  href: string;
};

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
  NonNullable<PageQuery["pageCollection"]>["items"][number]
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

export type SectionRelationshipsType = {
  id: string;
  actions: ActionQueryItem[];
  assets: AssetQueryItem[];
  accordionCards: AccordionCardQueryItem[];
  cards: CardQueryItem[];
  contentTypeRichTextIds: ContentTypeRichTextQueryItem[];
};

export type PageRelationshipsType = {
  id: string;
  details: CourseDetailsQueryItem | undefined;
  contentTypeRichTexts: ContentTypeRichTextQueryItem[];
  uniqueComponents: UniqueComponentQueryItem[];
  sections: SectionRelationshipsType[];
};
