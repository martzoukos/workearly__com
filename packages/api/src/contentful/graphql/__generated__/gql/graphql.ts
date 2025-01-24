/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
};

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/accordionCard) */
export type AccordionCard = Entry & _Node & {
  __typename?: 'AccordionCard';
  _id: Scalars['ID']['output'];
  column1Text?: Maybe<Scalars['String']['output']>;
  column1Title?: Maybe<Scalars['String']['output']>;
  column2Text?: Maybe<Scalars['String']['output']>;
  column2Title?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AccordionCardLinkingCollections>;
  skipNumber?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topNotes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/accordionCard) */
export type AccordionCardColumn1TextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/accordionCard) */
export type AccordionCardColumn1TitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/accordionCard) */
export type AccordionCardColumn2TextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/accordionCard) */
export type AccordionCardColumn2TitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/accordionCard) */
export type AccordionCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/accordionCard) */
export type AccordionCardSkipNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/accordionCard) */
export type AccordionCardTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/accordionCard) */
export type AccordionCardTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/accordionCard) */
export type AccordionCardTopNotesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AccordionCardCollection = {
  __typename?: 'AccordionCardCollection';
  items: Array<Maybe<AccordionCard>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AccordionCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<AccordionCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AccordionCardFilter>>>;
  column1Text?: InputMaybe<Scalars['String']['input']>;
  column1Text_contains?: InputMaybe<Scalars['String']['input']>;
  column1Text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  column1Text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column1Text_not?: InputMaybe<Scalars['String']['input']>;
  column1Text_not_contains?: InputMaybe<Scalars['String']['input']>;
  column1Text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column1Title?: InputMaybe<Scalars['String']['input']>;
  column1Title_contains?: InputMaybe<Scalars['String']['input']>;
  column1Title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  column1Title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column1Title_not?: InputMaybe<Scalars['String']['input']>;
  column1Title_not_contains?: InputMaybe<Scalars['String']['input']>;
  column1Title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column2Text?: InputMaybe<Scalars['String']['input']>;
  column2Text_contains?: InputMaybe<Scalars['String']['input']>;
  column2Text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  column2Text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column2Text_not?: InputMaybe<Scalars['String']['input']>;
  column2Text_not_contains?: InputMaybe<Scalars['String']['input']>;
  column2Text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column2Title?: InputMaybe<Scalars['String']['input']>;
  column2Title_contains?: InputMaybe<Scalars['String']['input']>;
  column2Title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  column2Title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column2Title_not?: InputMaybe<Scalars['String']['input']>;
  column2Title_not_contains?: InputMaybe<Scalars['String']['input']>;
  column2Title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  skipNumber?: InputMaybe<Scalars['Boolean']['input']>;
  skipNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  skipNumber_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topNotes_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topNotes_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topNotes_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topNotes_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccordionCardLinkingCollections = {
  __typename?: 'AccordionCardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AccordionCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AccordionCardOrder {
  Column1TitleAsc = 'column1Title_ASC',
  Column1TitleDesc = 'column1Title_DESC',
  Column2TitleAsc = 'column2Title_ASC',
  Column2TitleDesc = 'column2Title_DESC',
  SkipNumberAsc = 'skipNumber_ASC',
  SkipNumberDesc = 'skipNumber_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type Action = Entry & _Node & {
  __typename?: 'Action';
  _id: Scalars['ID']['output'];
  behaviour?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  external?: Maybe<Scalars['String']['output']>;
  externalType?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  iconPlacement?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Page>;
  linkedFrom?: Maybe<ActionLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  variant?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type ActionBehaviourArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type ActionColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type ActionContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type ActionExternalArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type ActionExternalTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type ActionIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type ActionIconPlacementArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type ActionInternalArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type ActionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type ActionNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type ActionVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ActionCollection = {
  __typename?: 'ActionCollection';
  items: Array<Maybe<Action>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ActionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ActionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ActionFilter>>>;
  behaviour?: InputMaybe<Scalars['String']['input']>;
  behaviour_contains?: InputMaybe<Scalars['String']['input']>;
  behaviour_exists?: InputMaybe<Scalars['Boolean']['input']>;
  behaviour_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  behaviour_not?: InputMaybe<Scalars['String']['input']>;
  behaviour_not_contains?: InputMaybe<Scalars['String']['input']>;
  behaviour_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_contains?: InputMaybe<Scalars['String']['input']>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_not?: InputMaybe<Scalars['String']['input']>;
  color_not_contains?: InputMaybe<Scalars['String']['input']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external?: InputMaybe<Scalars['String']['input']>;
  externalType?: InputMaybe<Scalars['String']['input']>;
  externalType_contains?: InputMaybe<Scalars['String']['input']>;
  externalType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  externalType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalType_not?: InputMaybe<Scalars['String']['input']>;
  externalType_not_contains?: InputMaybe<Scalars['String']['input']>;
  externalType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_contains?: InputMaybe<Scalars['String']['input']>;
  external_exists?: InputMaybe<Scalars['Boolean']['input']>;
  external_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_not?: InputMaybe<Scalars['String']['input']>;
  external_not_contains?: InputMaybe<Scalars['String']['input']>;
  external_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconPlacement?: InputMaybe<Scalars['String']['input']>;
  iconPlacement_contains?: InputMaybe<Scalars['String']['input']>;
  iconPlacement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconPlacement_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconPlacement_not?: InputMaybe<Scalars['String']['input']>;
  iconPlacement_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconPlacement_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internal?: InputMaybe<CfPageNestedFilter>;
  internal_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ActionLinkingCollections = {
  __typename?: 'ActionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ActionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ActionLinkingCollectionsSectionCollectionOrder {
  VariantAsc = 'Variant_ASC',
  VariantDesc = 'Variant_DESC',
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  CardsPerRowAsc = 'cardsPerRow_ASC',
  CardsPerRowDesc = 'cardsPerRow_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  SupertitleAsc = 'supertitle_ASC',
  SupertitleDesc = 'supertitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ActionOrder {
  BehaviourAsc = 'behaviour_ASC',
  BehaviourDesc = 'behaviour_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  ExternalTypeAsc = 'externalType_ASC',
  ExternalTypeDesc = 'externalType_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  IconPlacementAsc = 'iconPlacement_ASC',
  IconPlacementDesc = 'iconPlacement_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  actionCollection?: Maybe<ActionCollection>;
  cardCollection?: Maybe<CardCollection>;
  entryCollection?: Maybe<EntryCollection>;
  imagesGroupCollection?: Maybe<ImagesGroupCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type AssetLinkingCollectionsActionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsImagesGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type Card = Entry & _Node & {
  __typename?: 'Card';
  _id: Scalars['ID']['output'];
  asset?: Maybe<Asset>;
  cardType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CardLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardAssetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardCardTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CardCollection = {
  __typename?: 'CardCollection';
  items: Array<Maybe<Card>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CardFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  asset_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardType?: InputMaybe<Scalars['String']['input']>;
  cardType_contains?: InputMaybe<Scalars['String']['input']>;
  cardType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardType_not?: InputMaybe<Scalars['String']['input']>;
  cardType_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CardLinkingCollections = {
  __typename?: 'CardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CardOrder {
  CardTypeAsc = 'cardType_ASC',
  CardTypeDesc = 'cardType_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichText = Entry & _Node & {
  __typename?: 'ContentTypeRichText';
  _id: Scalars['ID']['output'];
  body?: Maybe<ContentTypeRichTextBody>;
  bulletTranformation?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentTypeRichTextLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextBulletTranformationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentTypeRichTextBody = {
  __typename?: 'ContentTypeRichTextBody';
  json: Scalars['JSON']['output'];
  links: ContentTypeRichTextBodyLinks;
};

export type ContentTypeRichTextBodyAssets = {
  __typename?: 'ContentTypeRichTextBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentTypeRichTextBodyEntries = {
  __typename?: 'ContentTypeRichTextBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentTypeRichTextBodyLinks = {
  __typename?: 'ContentTypeRichTextBodyLinks';
  assets: ContentTypeRichTextBodyAssets;
  entries: ContentTypeRichTextBodyEntries;
  resources: ContentTypeRichTextBodyResources;
};

export type ContentTypeRichTextBodyResources = {
  __typename?: 'ContentTypeRichTextBodyResources';
  block: Array<ContentTypeRichTextBodyResourcesBlock>;
  hyperlink: Array<ContentTypeRichTextBodyResourcesHyperlink>;
  inline: Array<ContentTypeRichTextBodyResourcesInline>;
};

export type ContentTypeRichTextBodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentTypeRichTextBodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentTypeRichTextBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentTypeRichTextBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentTypeRichTextBodyResourcesInline = ResourceLink & {
  __typename?: 'ContentTypeRichTextBodyResourcesInline';
  sys: ResourceSys;
};

export type ContentTypeRichTextCollection = {
  __typename?: 'ContentTypeRichTextCollection';
  items: Array<Maybe<ContentTypeRichText>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentTypeRichTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentTypeRichTextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentTypeRichTextFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  bulletTranformation?: InputMaybe<Scalars['String']['input']>;
  bulletTranformation_contains?: InputMaybe<Scalars['String']['input']>;
  bulletTranformation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bulletTranformation_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bulletTranformation_not?: InputMaybe<Scalars['String']['input']>;
  bulletTranformation_not_contains?: InputMaybe<Scalars['String']['input']>;
  bulletTranformation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentTypeRichTextLinkingCollections = {
  __typename?: 'ContentTypeRichTextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ContentTypeRichTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentTypeRichTextOrder {
  BulletTranformationAsc = 'bulletTranformation_ASC',
  BulletTranformationDesc = 'bulletTranformation_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseCard) */
export type CourseCard = Entry & _Node & {
  __typename?: 'CourseCard';
  _id: Scalars['ID']['output'];
  column1Text?: Maybe<Scalars['String']['output']>;
  column1Title?: Maybe<Scalars['String']['output']>;
  column2Text?: Maybe<Scalars['String']['output']>;
  column2Title?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CourseCardLinkingCollections>;
  skipNumber?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  text?: Maybe<CourseCardText>;
  title?: Maybe<Scalars['String']['output']>;
  topNotes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseCard) */
export type CourseCardColumn1TextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseCard) */
export type CourseCardColumn1TitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseCard) */
export type CourseCardColumn2TextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseCard) */
export type CourseCardColumn2TitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseCard) */
export type CourseCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseCard) */
export type CourseCardSkipNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseCard) */
export type CourseCardTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseCard) */
export type CourseCardTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseCard) */
export type CourseCardTopNotesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCardCollection = {
  __typename?: 'CourseCardCollection';
  items: Array<Maybe<CourseCard>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CourseCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<CourseCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CourseCardFilter>>>;
  column1Text?: InputMaybe<Scalars['String']['input']>;
  column1Text_contains?: InputMaybe<Scalars['String']['input']>;
  column1Text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  column1Text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column1Text_not?: InputMaybe<Scalars['String']['input']>;
  column1Text_not_contains?: InputMaybe<Scalars['String']['input']>;
  column1Text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column1Title?: InputMaybe<Scalars['String']['input']>;
  column1Title_contains?: InputMaybe<Scalars['String']['input']>;
  column1Title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  column1Title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column1Title_not?: InputMaybe<Scalars['String']['input']>;
  column1Title_not_contains?: InputMaybe<Scalars['String']['input']>;
  column1Title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column2Text?: InputMaybe<Scalars['String']['input']>;
  column2Text_contains?: InputMaybe<Scalars['String']['input']>;
  column2Text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  column2Text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column2Text_not?: InputMaybe<Scalars['String']['input']>;
  column2Text_not_contains?: InputMaybe<Scalars['String']['input']>;
  column2Text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column2Title?: InputMaybe<Scalars['String']['input']>;
  column2Title_contains?: InputMaybe<Scalars['String']['input']>;
  column2Title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  column2Title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column2Title_not?: InputMaybe<Scalars['String']['input']>;
  column2Title_not_contains?: InputMaybe<Scalars['String']['input']>;
  column2Title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  skipNumber?: InputMaybe<Scalars['Boolean']['input']>;
  skipNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  skipNumber_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topNotes_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topNotes_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topNotes_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topNotes_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CourseCardLinkingCollections = {
  __typename?: 'CourseCardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CourseCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CourseCardOrder {
  Column1TitleAsc = 'column1Title_ASC',
  Column1TitleDesc = 'column1Title_DESC',
  Column2TitleAsc = 'column2Title_ASC',
  Column2TitleDesc = 'column2Title_DESC',
  SkipNumberAsc = 'skipNumber_ASC',
  SkipNumberDesc = 'skipNumber_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CourseCardText = {
  __typename?: 'CourseCardText';
  json: Scalars['JSON']['output'];
  links: CourseCardTextLinks;
};

export type CourseCardTextAssets = {
  __typename?: 'CourseCardTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CourseCardTextEntries = {
  __typename?: 'CourseCardTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CourseCardTextLinks = {
  __typename?: 'CourseCardTextLinks';
  assets: CourseCardTextAssets;
  entries: CourseCardTextEntries;
  resources: CourseCardTextResources;
};

export type CourseCardTextResources = {
  __typename?: 'CourseCardTextResources';
  block: Array<CourseCardTextResourcesBlock>;
  hyperlink: Array<CourseCardTextResourcesHyperlink>;
  inline: Array<CourseCardTextResourcesInline>;
};

export type CourseCardTextResourcesBlock = ResourceLink & {
  __typename?: 'CourseCardTextResourcesBlock';
  sys: ResourceSys;
};

export type CourseCardTextResourcesHyperlink = ResourceLink & {
  __typename?: 'CourseCardTextResourcesHyperlink';
  sys: ResourceSys;
};

export type CourseCardTextResourcesInline = ResourceLink & {
  __typename?: 'CourseCardTextResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetails = Entry & _Node & {
  __typename?: 'CourseDetails';
  _id: Scalars['ID']['output'];
  applicationDeadline?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  courseCount?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  finalCost?: Maybe<Scalars['Float']['output']>;
  language?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  level?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<CourseDetailsLinkingCollections>;
  pace?: Maybe<Scalars['String']['output']>;
  programStarts?: Maybe<Scalars['String']['output']>;
  startingCost?: Maybe<Scalars['Float']['output']>;
  studentsCount?: Maybe<Scalars['Int']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  timeLeft?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userReviews?: Maybe<Scalars['Float']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsApplicationDeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsCourseCountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsDurationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsFinalCostArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsLanguageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsLevelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsPaceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsProgramStartsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsStartingCostArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsStudentsCountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsSummaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsTimeLeftArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsUserReviewsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CourseDetailsCollection = {
  __typename?: 'CourseDetailsCollection';
  items: Array<Maybe<CourseDetails>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CourseDetailsFilter = {
  AND?: InputMaybe<Array<InputMaybe<CourseDetailsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CourseDetailsFilter>>>;
  applicationDeadline?: InputMaybe<Scalars['String']['input']>;
  applicationDeadline_contains?: InputMaybe<Scalars['String']['input']>;
  applicationDeadline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  applicationDeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  applicationDeadline_not?: InputMaybe<Scalars['String']['input']>;
  applicationDeadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  applicationDeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  courseCount?: InputMaybe<Scalars['String']['input']>;
  courseCount_contains?: InputMaybe<Scalars['String']['input']>;
  courseCount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  courseCount_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  courseCount_not?: InputMaybe<Scalars['String']['input']>;
  courseCount_not_contains?: InputMaybe<Scalars['String']['input']>;
  courseCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  duration_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  duration_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  duration_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  duration_exists?: InputMaybe<Scalars['Boolean']['input']>;
  finalCost?: InputMaybe<Scalars['Float']['input']>;
  finalCost_exists?: InputMaybe<Scalars['Boolean']['input']>;
  finalCost_gt?: InputMaybe<Scalars['Float']['input']>;
  finalCost_gte?: InputMaybe<Scalars['Float']['input']>;
  finalCost_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  finalCost_lt?: InputMaybe<Scalars['Float']['input']>;
  finalCost_lte?: InputMaybe<Scalars['Float']['input']>;
  finalCost_not?: InputMaybe<Scalars['Float']['input']>;
  finalCost_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  language_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language_exists?: InputMaybe<Scalars['Boolean']['input']>;
  level_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  level_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  level_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  level_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pace?: InputMaybe<Scalars['String']['input']>;
  pace_contains?: InputMaybe<Scalars['String']['input']>;
  pace_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pace_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pace_not?: InputMaybe<Scalars['String']['input']>;
  pace_not_contains?: InputMaybe<Scalars['String']['input']>;
  pace_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  programStarts?: InputMaybe<Scalars['String']['input']>;
  programStarts_contains?: InputMaybe<Scalars['String']['input']>;
  programStarts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  programStarts_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  programStarts_not?: InputMaybe<Scalars['String']['input']>;
  programStarts_not_contains?: InputMaybe<Scalars['String']['input']>;
  programStarts_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startingCost?: InputMaybe<Scalars['Float']['input']>;
  startingCost_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startingCost_gt?: InputMaybe<Scalars['Float']['input']>;
  startingCost_gte?: InputMaybe<Scalars['Float']['input']>;
  startingCost_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startingCost_lt?: InputMaybe<Scalars['Float']['input']>;
  startingCost_lte?: InputMaybe<Scalars['Float']['input']>;
  startingCost_not?: InputMaybe<Scalars['Float']['input']>;
  startingCost_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  studentsCount?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  studentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  studentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  style?: InputMaybe<Scalars['String']['input']>;
  style_contains?: InputMaybe<Scalars['String']['input']>;
  style_exists?: InputMaybe<Scalars['Boolean']['input']>;
  style_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  style_not?: InputMaybe<Scalars['String']['input']>;
  style_not_contains?: InputMaybe<Scalars['String']['input']>;
  style_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summary_contains?: InputMaybe<Scalars['String']['input']>;
  summary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  summary_not?: InputMaybe<Scalars['String']['input']>;
  summary_not_contains?: InputMaybe<Scalars['String']['input']>;
  summary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  timeLeft?: InputMaybe<Scalars['String']['input']>;
  timeLeft_contains?: InputMaybe<Scalars['String']['input']>;
  timeLeft_exists?: InputMaybe<Scalars['Boolean']['input']>;
  timeLeft_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timeLeft_not?: InputMaybe<Scalars['String']['input']>;
  timeLeft_not_contains?: InputMaybe<Scalars['String']['input']>;
  timeLeft_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userReviews?: InputMaybe<Scalars['Float']['input']>;
  userReviews_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userReviews_gt?: InputMaybe<Scalars['Float']['input']>;
  userReviews_gte?: InputMaybe<Scalars['Float']['input']>;
  userReviews_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  userReviews_lt?: InputMaybe<Scalars['Float']['input']>;
  userReviews_lte?: InputMaybe<Scalars['Float']['input']>;
  userReviews_not?: InputMaybe<Scalars['Float']['input']>;
  userReviews_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type CourseDetailsLinkingCollections = {
  __typename?: 'CourseDetailsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CourseDetailsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CourseDetailsOrder {
  ApplicationDeadlineAsc = 'applicationDeadline_ASC',
  ApplicationDeadlineDesc = 'applicationDeadline_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  CourseCountAsc = 'courseCount_ASC',
  CourseCountDesc = 'courseCount_DESC',
  FinalCostAsc = 'finalCost_ASC',
  FinalCostDesc = 'finalCost_DESC',
  PaceAsc = 'pace_ASC',
  PaceDesc = 'pace_DESC',
  ProgramStartsAsc = 'programStarts_ASC',
  ProgramStartsDesc = 'programStarts_DESC',
  StartingCostAsc = 'startingCost_ASC',
  StartingCostDesc = 'startingCost_DESC',
  StudentsCountAsc = 'studentsCount_ASC',
  StudentsCountDesc = 'studentsCount_DESC',
  StyleAsc = 'style_ASC',
  StyleDesc = 'style_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimeLeftAsc = 'timeLeft_ASC',
  TimeLeftDesc = 'timeLeft_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UserReviewsAsc = 'userReviews_ASC',
  UserReviewsDesc = 'userReviews_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/imagesGroup) */
export type ImagesGroup = Entry & _Node & {
  __typename?: 'ImagesGroup';
  _id: Scalars['ID']['output'];
  assetsCollection?: Maybe<AssetCollection>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ImagesGroupLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/imagesGroup) */
export type ImagesGroupAssetsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/imagesGroup) */
export type ImagesGroupContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/imagesGroup) */
export type ImagesGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImagesGroupCollection = {
  __typename?: 'ImagesGroupCollection';
  items: Array<Maybe<ImagesGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ImagesGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImagesGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImagesGroupFilter>>>;
  assetsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ImagesGroupLinkingCollections = {
  __typename?: 'ImagesGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ImagesGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ImagesGroupOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type Page = Entry & _Node & {
  __typename?: 'Page';
  _id: Scalars['ID']['output'];
  contentCollection?: Maybe<PageContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  extensions?: Maybe<Entry>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoImage?: Maybe<Asset>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageExtensionsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageSeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageSeoImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageSeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageContentCollection = {
  __typename?: 'PageContentCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extensions_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoDescription_contains?: InputMaybe<Scalars['String']['input']>;
  seoDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoDescription_not?: InputMaybe<Scalars['String']['input']>;
  seoDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  seoDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  seoTitle_contains?: InputMaybe<Scalars['String']['input']>;
  seoTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoTitle_not?: InputMaybe<Scalars['String']['input']>;
  seoTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  seoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  actionCollection?: Maybe<ActionCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsActionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsActionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageLinkingCollectionsActionCollectionOrder {
  BehaviourAsc = 'behaviour_ASC',
  BehaviourDesc = 'behaviour_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  ExternalTypeAsc = 'externalType_ASC',
  ExternalTypeDesc = 'externalType_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  IconPlacementAsc = 'iconPlacement_ASC',
  IconPlacementDesc = 'iconPlacement_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum PageOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  accordionCard?: Maybe<AccordionCard>;
  accordionCardCollection?: Maybe<AccordionCardCollection>;
  action?: Maybe<Action>;
  actionCollection?: Maybe<ActionCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  card?: Maybe<Card>;
  cardCollection?: Maybe<CardCollection>;
  contentTypeRichText?: Maybe<ContentTypeRichText>;
  contentTypeRichTextCollection?: Maybe<ContentTypeRichTextCollection>;
  courseCard?: Maybe<CourseCard>;
  courseCardCollection?: Maybe<CourseCardCollection>;
  courseDetails?: Maybe<CourseDetails>;
  courseDetailsCollection?: Maybe<CourseDetailsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  imagesGroup?: Maybe<ImagesGroup>;
  imagesGroupCollection?: Maybe<ImagesGroupCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  section?: Maybe<Section>;
  sectionCollection?: Maybe<SectionCollection>;
  uniqueComponent?: Maybe<UniqueComponent>;
  uniqueComponentCollection?: Maybe<UniqueComponentCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAccordionCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAccordionCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccordionCardFilter>;
};


export type QueryActionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryActionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardFilter>;
};


export type QueryContentTypeRichTextArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentTypeRichTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentTypeRichTextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentTypeRichTextFilter>;
};


export type QueryCourseCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCourseCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CourseCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CourseCardFilter>;
};


export type QueryCourseDetailsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCourseDetailsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CourseDetailsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CourseDetailsFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryImagesGroupArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryImagesGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ImagesGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ImagesGroupFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageFilter>;
};


export type QuerySectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionFilter>;
};


export type QueryUniqueComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUniqueComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<UniqueComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UniqueComponentFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type Section = Entry & _Node & {
  __typename?: 'Section';
  _id: Scalars['ID']['output'];
  actionsCollection?: Maybe<SectionActionsCollection>;
  alignment?: Maybe<Scalars['String']['output']>;
  assetsCollection?: Maybe<AssetCollection>;
  cardsPerRow?: Maybe<Scalars['Int']['output']>;
  contentCollection?: Maybe<SectionContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SectionLinkingCollections>;
  supertitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionActionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionActionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionAssetsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionCardsPerRowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionSupertitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SectionActionsCollection = {
  __typename?: 'SectionActionsCollection';
  items: Array<Maybe<Action>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SectionActionsCollectionOrder {
  BehaviourAsc = 'behaviour_ASC',
  BehaviourDesc = 'behaviour_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  ExternalTypeAsc = 'externalType_ASC',
  ExternalTypeDesc = 'externalType_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  IconPlacementAsc = 'iconPlacement_ASC',
  IconPlacementDesc = 'iconPlacement_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type SectionCollection = {
  __typename?: 'SectionCollection';
  items: Array<Maybe<Section>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SectionContentCollection = {
  __typename?: 'SectionContentCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  Variant?: InputMaybe<Scalars['String']['input']>;
  Variant_contains?: InputMaybe<Scalars['String']['input']>;
  Variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  Variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Variant_not?: InputMaybe<Scalars['String']['input']>;
  Variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  Variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  actions?: InputMaybe<CfActionNestedFilter>;
  actionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alignment?: InputMaybe<Scalars['String']['input']>;
  alignment_contains?: InputMaybe<Scalars['String']['input']>;
  alignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alignment_not?: InputMaybe<Scalars['String']['input']>;
  alignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  alignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardsPerRow?: InputMaybe<Scalars['Int']['input']>;
  cardsPerRow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardsPerRow_gt?: InputMaybe<Scalars['Int']['input']>;
  cardsPerRow_gte?: InputMaybe<Scalars['Int']['input']>;
  cardsPerRow_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  cardsPerRow_lt?: InputMaybe<Scalars['Int']['input']>;
  cardsPerRow_lte?: InputMaybe<Scalars['Int']['input']>;
  cardsPerRow_not?: InputMaybe<Scalars['Int']['input']>;
  cardsPerRow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  supertitle?: InputMaybe<Scalars['String']['input']>;
  supertitle_contains?: InputMaybe<Scalars['String']['input']>;
  supertitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  supertitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  supertitle_not?: InputMaybe<Scalars['String']['input']>;
  supertitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  supertitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionLinkingCollections = {
  __typename?: 'SectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SectionOrder {
  VariantAsc = 'Variant_ASC',
  VariantDesc = 'Variant_DESC',
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  CardsPerRowAsc = 'cardsPerRow_ASC',
  CardsPerRowDesc = 'cardsPerRow_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  SupertitleAsc = 'supertitle_ASC',
  SupertitleDesc = 'supertitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/uniqueComponent) */
export type UniqueComponent = Entry & _Node & {
  __typename?: 'UniqueComponent';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<UniqueComponentLinkingCollections>;
  sys: Sys;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/uniqueComponent) */
export type UniqueComponentContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/uniqueComponent) */
export type UniqueComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/uniqueComponent) */
export type UniqueComponentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type UniqueComponentCollection = {
  __typename?: 'UniqueComponentCollection';
  items: Array<Maybe<UniqueComponent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type UniqueComponentFilter = {
  AND?: InputMaybe<Array<InputMaybe<UniqueComponentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UniqueComponentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UniqueComponentLinkingCollections = {
  __typename?: 'UniqueComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type UniqueComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum UniqueComponentOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfActionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfActionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfActionNestedFilter>>>;
  behaviour?: InputMaybe<Scalars['String']['input']>;
  behaviour_contains?: InputMaybe<Scalars['String']['input']>;
  behaviour_exists?: InputMaybe<Scalars['Boolean']['input']>;
  behaviour_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  behaviour_not?: InputMaybe<Scalars['String']['input']>;
  behaviour_not_contains?: InputMaybe<Scalars['String']['input']>;
  behaviour_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_contains?: InputMaybe<Scalars['String']['input']>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_not?: InputMaybe<Scalars['String']['input']>;
  color_not_contains?: InputMaybe<Scalars['String']['input']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external?: InputMaybe<Scalars['String']['input']>;
  externalType?: InputMaybe<Scalars['String']['input']>;
  externalType_contains?: InputMaybe<Scalars['String']['input']>;
  externalType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  externalType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalType_not?: InputMaybe<Scalars['String']['input']>;
  externalType_not_contains?: InputMaybe<Scalars['String']['input']>;
  externalType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_contains?: InputMaybe<Scalars['String']['input']>;
  external_exists?: InputMaybe<Scalars['Boolean']['input']>;
  external_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_not?: InputMaybe<Scalars['String']['input']>;
  external_not_contains?: InputMaybe<Scalars['String']['input']>;
  external_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconPlacement?: InputMaybe<Scalars['String']['input']>;
  iconPlacement_contains?: InputMaybe<Scalars['String']['input']>;
  iconPlacement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconPlacement_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconPlacement_not?: InputMaybe<Scalars['String']['input']>;
  iconPlacement_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconPlacement_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internal_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extensions_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoDescription_contains?: InputMaybe<Scalars['String']['input']>;
  seoDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoDescription_not?: InputMaybe<Scalars['String']['input']>;
  seoDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  seoDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  seoTitle_contains?: InputMaybe<Scalars['String']['input']>;
  seoTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoTitle_not?: InputMaybe<Scalars['String']['input']>;
  seoTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  seoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageFieldsFragment = { __typename: 'Page', name?: string | null, slug?: string | null, seoTitle?: string | null, seoDescription?: string | null, sys: { __typename?: 'Sys', id: string }, seoImage?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, description?: string | null } | null };

export type PageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type PageSlugsQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug?: string | null } | null> } | null };

export type PageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type PageQuery = { __typename?: 'Query', pageCollection?: { __typename: 'PageCollection', items: Array<{ __typename: 'Page', name?: string | null, slug?: string | null, seoTitle?: string | null, seoDescription?: string | null, sys: { __typename?: 'Sys', id: string }, seoImage?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, description?: string | null } | null } | null> } | null };

export const PageFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"seoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"seoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"seoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<PageFieldsFragment, unknown>;
export const PageSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_not_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"404","block":false}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<PageSlugsQuery, PageSlugsQueryVariables>;
export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"seoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"seoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"seoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;