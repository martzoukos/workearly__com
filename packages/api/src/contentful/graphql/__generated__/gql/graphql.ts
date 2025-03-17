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
  contentfulName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<AccordionCardLinkingCollections>;
  skipNumber?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  text?: Maybe<AccordionCardText>;
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
export type AccordionCardContentfulNameArgs = {
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
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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

export type AccordionCardLinkingCollections = {
  __typename?: 'AccordionCardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type AccordionCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionCardLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionCardLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AccordionCardLinkingCollectionsSectionCollectionOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  CardThemeAsc = 'cardTheme_ASC',
  CardThemeDesc = 'cardTheme_DESC',
  CardVariantAsc = 'cardVariant_ASC',
  CardVariantDesc = 'cardVariant_DESC',
  CardsCountAsc = 'cardsCount_ASC',
  CardsCountDesc = 'cardsCount_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum AccordionCardOrder {
  Column1TitleAsc = 'column1Title_ASC',
  Column1TitleDesc = 'column1Title_DESC',
  Column2TitleAsc = 'column2Title_ASC',
  Column2TitleDesc = 'column2Title_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
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

export type AccordionCardText = {
  __typename?: 'AccordionCardText';
  json: Scalars['JSON']['output'];
  links: AccordionCardTextLinks;
};

export type AccordionCardTextAssets = {
  __typename?: 'AccordionCardTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AccordionCardTextEntries = {
  __typename?: 'AccordionCardTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AccordionCardTextLinks = {
  __typename?: 'AccordionCardTextLinks';
  assets: AccordionCardTextAssets;
  entries: AccordionCardTextEntries;
  resources: AccordionCardTextResources;
};

export type AccordionCardTextResources = {
  __typename?: 'AccordionCardTextResources';
  block: Array<AccordionCardTextResourcesBlock>;
  hyperlink: Array<AccordionCardTextResourcesHyperlink>;
  inline: Array<AccordionCardTextResourcesInline>;
};

export type AccordionCardTextResourcesBlock = ResourceLink & {
  __typename?: 'AccordionCardTextResourcesBlock';
  sys: ResourceSys;
};

export type AccordionCardTextResourcesHyperlink = ResourceLink & {
  __typename?: 'AccordionCardTextResourcesHyperlink';
  sys: ResourceSys;
};

export type AccordionCardTextResourcesInline = ResourceLink & {
  __typename?: 'AccordionCardTextResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/action) */
export type Action = Entry & _Node & {
  __typename?: 'Action';
  _id: Scalars['ID']['output'];
  behaviour?: Maybe<Scalars['String']['output']>;
  colorScheme?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  external?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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
export type ActionColorSchemeArgs = {
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
export type ActionFeaturesArgs = {
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
  colorScheme?: InputMaybe<Scalars['String']['input']>;
  colorScheme_contains?: InputMaybe<Scalars['String']['input']>;
  colorScheme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorScheme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorScheme_not?: InputMaybe<Scalars['String']['input']>;
  colorScheme_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorScheme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external?: InputMaybe<Scalars['String']['input']>;
  external_contains?: InputMaybe<Scalars['String']['input']>;
  external_exists?: InputMaybe<Scalars['Boolean']['input']>;
  external_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_not?: InputMaybe<Scalars['String']['input']>;
  external_not_contains?: InputMaybe<Scalars['String']['input']>;
  external_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  compositeCollection?: Maybe<CompositeCollection>;
  entryCollection?: Maybe<EntryCollection>;
  menuCollection?: Maybe<MenuCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ActionLinkingCollectionsCompositeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionLinkingCollectionsCompositeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionLinkingCollectionsMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionLinkingCollectionsMenuCollectionOrder>>>;
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

export enum ActionLinkingCollectionsCompositeCollectionOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  ContentfulTitleAsc = 'contentfulTitle_ASC',
  ContentfulTitleDesc = 'contentfulTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum ActionLinkingCollectionsMenuCollectionOrder {
  ContentfulTitleAsc = 'contentfulTitle_ASC',
  ContentfulTitleDesc = 'contentfulTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ActionLinkingCollectionsSectionCollectionOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  CardThemeAsc = 'cardTheme_ASC',
  CardThemeDesc = 'cardTheme_DESC',
  CardVariantAsc = 'cardVariant_ASC',
  CardVariantDesc = 'cardVariant_DESC',
  CardsCountAsc = 'cardsCount_ASC',
  CardsCountDesc = 'cardsCount_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum ActionOrder {
  BehaviourAsc = 'behaviour_ASC',
  BehaviourDesc = 'behaviour_DESC',
  ColorSchemeAsc = 'colorScheme_ASC',
  ColorSchemeDesc = 'colorScheme_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
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
  categoryOrJobDetailsCollection?: Maybe<CategoryOrJobDetailsCollection>;
  courseDetailsCollection?: Maybe<CourseDetailsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  peopleDetailsCollection?: Maybe<PeopleDetailsCollection>;
  resourceDetailsCollection?: Maybe<ResourceDetailsCollection>;
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


export type AssetLinkingCollectionsCategoryOrJobDetailsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCourseDetailsCollectionArgs = {
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


export type AssetLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPeopleDetailsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsResourceDetailsCollectionArgs = {
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
  actionsCollection?: Maybe<CardActionsCollection>;
  asset?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CardLinkingCollections>;
  rating?: Maybe<Scalars['Int']['output']>;
  studentsCount?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  text?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardActionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardAssetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
export type CardRatingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardStudentsCountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardThemeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/card) */
export type CardVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CardActionsCollection = {
  __typename?: 'CardActionsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
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
  actionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  asset_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating_gt?: InputMaybe<Scalars['Int']['input']>;
  rating_gte?: InputMaybe<Scalars['Int']['input']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rating_lt?: InputMaybe<Scalars['Int']['input']>;
  rating_lte?: InputMaybe<Scalars['Int']['input']>;
  rating_not?: InputMaybe<Scalars['Int']['input']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  studentsCount?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  studentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  studentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_contains?: InputMaybe<Scalars['String']['input']>;
  theme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  theme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  theme_not?: InputMaybe<Scalars['String']['input']>;
  theme_not_contains?: InputMaybe<Scalars['String']['input']>;
  theme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CardLinkingCollections = {
  __typename?: 'CardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type CardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CardLinkingCollectionsSectionCollectionOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  CardThemeAsc = 'cardTheme_ASC',
  CardThemeDesc = 'cardTheme_DESC',
  CardVariantAsc = 'cardVariant_ASC',
  CardVariantDesc = 'cardVariant_DESC',
  CardsCountAsc = 'cardsCount_ASC',
  CardsCountDesc = 'cardsCount_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum CardOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  StudentsCountAsc = 'studentsCount_ASC',
  StudentsCountDesc = 'studentsCount_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/categoryOrJobDetails) */
export type CategoryOrJobDetails = Entry & _Node & {
  __typename?: 'CategoryOrJobDetails';
  _id: Scalars['ID']['output'];
  asset?: Maybe<Asset>;
  averageEuSalary?: Maybe<Scalars['String']['output']>;
  averageUsSalary?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CategoryOrJobDetailsLinkingCollections>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  studentsCount?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  userReviews?: Maybe<Scalars['Float']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/categoryOrJobDetails) */
export type CategoryOrJobDetailsAssetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/categoryOrJobDetails) */
export type CategoryOrJobDetailsAverageEuSalaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/categoryOrJobDetails) */
export type CategoryOrJobDetailsAverageUsSalaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/categoryOrJobDetails) */
export type CategoryOrJobDetailsContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/categoryOrJobDetails) */
export type CategoryOrJobDetailsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/categoryOrJobDetails) */
export type CategoryOrJobDetailsShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/categoryOrJobDetails) */
export type CategoryOrJobDetailsStudentsCountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/categoryOrJobDetails) */
export type CategoryOrJobDetailsSummaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/categoryOrJobDetails) */
export type CategoryOrJobDetailsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/categoryOrJobDetails) */
export type CategoryOrJobDetailsUserReviewsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryOrJobDetailsCollection = {
  __typename?: 'CategoryOrJobDetailsCollection';
  items: Array<Maybe<CategoryOrJobDetails>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CategoryOrJobDetailsFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryOrJobDetailsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryOrJobDetailsFilter>>>;
  asset_exists?: InputMaybe<Scalars['Boolean']['input']>;
  averageEuSalary?: InputMaybe<Scalars['String']['input']>;
  averageEuSalary_contains?: InputMaybe<Scalars['String']['input']>;
  averageEuSalary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  averageEuSalary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  averageEuSalary_not?: InputMaybe<Scalars['String']['input']>;
  averageEuSalary_not_contains?: InputMaybe<Scalars['String']['input']>;
  averageEuSalary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  averageUsSalary?: InputMaybe<Scalars['String']['input']>;
  averageUsSalary_contains?: InputMaybe<Scalars['String']['input']>;
  averageUsSalary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  averageUsSalary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  averageUsSalary_not?: InputMaybe<Scalars['String']['input']>;
  averageUsSalary_not_contains?: InputMaybe<Scalars['String']['input']>;
  averageUsSalary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  studentsCount?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  studentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  studentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  studentsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summary_contains?: InputMaybe<Scalars['String']['input']>;
  summary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  summary_not?: InputMaybe<Scalars['String']['input']>;
  summary_not_contains?: InputMaybe<Scalars['String']['input']>;
  summary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
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

export type CategoryOrJobDetailsLinkingCollections = {
  __typename?: 'CategoryOrJobDetailsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type CategoryOrJobDetailsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryOrJobDetailsLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryOrJobDetailsLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CategoryOrJobDetailsLinkingCollectionsPageCollectionOrder {
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum CategoryOrJobDetailsOrder {
  AverageEuSalaryAsc = 'averageEuSalary_ASC',
  AverageEuSalaryDesc = 'averageEuSalary_DESC',
  AverageUsSalaryAsc = 'averageUsSalary_ASC',
  AverageUsSalaryDesc = 'averageUsSalary_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
  StudentsCountAsc = 'studentsCount_ASC',
  StudentsCountDesc = 'studentsCount_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UserReviewsAsc = 'userReviews_ASC',
  UserReviewsDesc = 'userReviews_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type Composite = Entry & _Node & {
  __typename?: 'Composite';
  _id: Scalars['ID']['output'];
  alignment?: Maybe<Scalars['String']['output']>;
  contentCollection?: Maybe<CompositeContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  contentfulTitle?: Maybe<Scalars['String']['output']>;
  layout?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CompositeLinkingCollections>;
  size?: Maybe<Scalars['String']['output']>;
  spacing?: Maybe<Scalars['String']['output']>;
  supertitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompositeContentFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeContentfulTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeLayoutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeSpacingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeSupertitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeThemeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/composite) */
export type CompositeVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CompositeCollection = {
  __typename?: 'CompositeCollection';
  items: Array<Maybe<Composite>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CompositeContentCollection = {
  __typename?: 'CompositeContentCollection';
  items: Array<Maybe<CompositeContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CompositeContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<CompositeContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CompositeContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CompositeContentItem = Action | Section;

export type CompositeFilter = {
  AND?: InputMaybe<Array<InputMaybe<CompositeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CompositeFilter>>>;
  alignment?: InputMaybe<Scalars['String']['input']>;
  alignment_contains?: InputMaybe<Scalars['String']['input']>;
  alignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alignment_not?: InputMaybe<Scalars['String']['input']>;
  alignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  alignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulTitle?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulTitle_not?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout?: InputMaybe<Scalars['String']['input']>;
  layout_contains?: InputMaybe<Scalars['String']['input']>;
  layout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_not?: InputMaybe<Scalars['String']['input']>;
  layout_not_contains?: InputMaybe<Scalars['String']['input']>;
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['String']['input']>;
  size_contains?: InputMaybe<Scalars['String']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size_not?: InputMaybe<Scalars['String']['input']>;
  size_not_contains?: InputMaybe<Scalars['String']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  spacing_contains?: InputMaybe<Scalars['String']['input']>;
  spacing_exists?: InputMaybe<Scalars['Boolean']['input']>;
  spacing_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  spacing_not?: InputMaybe<Scalars['String']['input']>;
  spacing_not_contains?: InputMaybe<Scalars['String']['input']>;
  spacing_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_contains?: InputMaybe<Scalars['String']['input']>;
  theme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  theme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  theme_not?: InputMaybe<Scalars['String']['input']>;
  theme_not_contains?: InputMaybe<Scalars['String']['input']>;
  theme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CompositeLinkingCollections = {
  __typename?: 'CompositeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type CompositeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CompositeLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CompositeLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CompositeLinkingCollectionsPageCollectionOrder {
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum CompositeOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  ContentfulTitleAsc = 'contentfulTitle_ASC',
  ContentfulTitleDesc = 'contentfulTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichText = Entry & _Node & {
  __typename?: 'ContentTypeRichText';
  _id: Scalars['ID']['output'];
  alignment?: Maybe<Scalars['String']['output']>;
  body?: Maybe<ContentTypeRichTextBody>;
  columnCount?: Maybe<Scalars['Int']['output']>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  extractHeadings?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<ContentTypeRichTextLinkingCollections>;
  listItemType?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  theme?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextColumnCountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextExtractHeadingsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextListItemTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextThemeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/richText) */
export type ContentTypeRichTextVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
  alignment?: InputMaybe<Scalars['String']['input']>;
  alignment_contains?: InputMaybe<Scalars['String']['input']>;
  alignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alignment_not?: InputMaybe<Scalars['String']['input']>;
  alignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  alignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  columnCount?: InputMaybe<Scalars['Int']['input']>;
  columnCount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  columnCount_gt?: InputMaybe<Scalars['Int']['input']>;
  columnCount_gte?: InputMaybe<Scalars['Int']['input']>;
  columnCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  columnCount_lt?: InputMaybe<Scalars['Int']['input']>;
  columnCount_lte?: InputMaybe<Scalars['Int']['input']>;
  columnCount_not?: InputMaybe<Scalars['Int']['input']>;
  columnCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extractHeadings_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extractHeadings_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extractHeadings_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extractHeadings_exists?: InputMaybe<Scalars['Boolean']['input']>;
  listItemType?: InputMaybe<Scalars['String']['input']>;
  listItemType_contains?: InputMaybe<Scalars['String']['input']>;
  listItemType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  listItemType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listItemType_not?: InputMaybe<Scalars['String']['input']>;
  listItemType_not_contains?: InputMaybe<Scalars['String']['input']>;
  listItemType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['String']['input']>;
  size_contains?: InputMaybe<Scalars['String']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size_not?: InputMaybe<Scalars['String']['input']>;
  size_not_contains?: InputMaybe<Scalars['String']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_contains?: InputMaybe<Scalars['String']['input']>;
  theme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  theme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  theme_not?: InputMaybe<Scalars['String']['input']>;
  theme_not_contains?: InputMaybe<Scalars['String']['input']>;
  theme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentTypeRichTextLinkingCollections = {
  __typename?: 'ContentTypeRichTextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ContentTypeRichTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentTypeRichTextLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentTypeRichTextLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentTypeRichTextLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentTypeRichTextLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentTypeRichTextLinkingCollectionsPageCollectionOrder {
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum ContentTypeRichTextLinkingCollectionsSectionCollectionOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  CardThemeAsc = 'cardTheme_ASC',
  CardThemeDesc = 'cardTheme_DESC',
  CardVariantAsc = 'cardVariant_ASC',
  CardVariantDesc = 'cardVariant_DESC',
  CardsCountAsc = 'cardsCount_ASC',
  CardsCountDesc = 'cardsCount_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum ContentTypeRichTextOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  ColumnCountAsc = 'columnCount_ASC',
  ColumnCountDesc = 'columnCount_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  ListItemTypeAsc = 'listItemType_ASC',
  ListItemTypeDesc = 'listItemType_DESC',
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
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

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetails = Entry & _Node & {
  __typename?: 'CourseDetails';
  _id: Scalars['ID']['output'];
  applicationDeadline?: Maybe<Scalars['String']['output']>;
  applicationUrl?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  courseCount?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  finalCost?: Maybe<Scalars['Float']['output']>;
  h1Title?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  level?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<CourseDetailsLinkingCollections>;
  pace?: Maybe<Scalars['String']['output']>;
  programStarts?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  startingCost?: Maybe<Scalars['Float']['output']>;
  studentsCount?: Maybe<Scalars['Int']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  timeLeft?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userReviews?: Maybe<Scalars['Float']['output']>;
  videoThumbnail?: Maybe<Asset>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsApplicationDeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsApplicationUrlArgs = {
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
export type CourseDetailsH1TitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsIdArgs = {
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
export type CourseDetailsShortDescriptionArgs = {
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


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsVideoThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/courseDetails) */
export type CourseDetailsVideoUrlArgs = {
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
  applicationUrl?: InputMaybe<Scalars['String']['input']>;
  applicationUrl_contains?: InputMaybe<Scalars['String']['input']>;
  applicationUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  applicationUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  applicationUrl_not?: InputMaybe<Scalars['String']['input']>;
  applicationUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  applicationUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  h1Title?: InputMaybe<Scalars['String']['input']>;
  h1Title_contains?: InputMaybe<Scalars['String']['input']>;
  h1Title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  h1Title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  h1Title_not?: InputMaybe<Scalars['String']['input']>;
  h1Title_not_contains?: InputMaybe<Scalars['String']['input']>;
  h1Title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  videoThumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  videoUrl_contains?: InputMaybe<Scalars['String']['input']>;
  videoUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl_not?: InputMaybe<Scalars['String']['input']>;
  videoUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CourseDetailsLinkingCollections = {
  __typename?: 'CourseDetailsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type CourseDetailsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseDetailsLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CourseDetailsLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CourseDetailsLinkingCollectionsPageCollectionOrder {
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum CourseDetailsOrder {
  ApplicationDeadlineAsc = 'applicationDeadline_ASC',
  ApplicationDeadlineDesc = 'applicationDeadline_DESC',
  ApplicationUrlAsc = 'applicationUrl_ASC',
  ApplicationUrlDesc = 'applicationUrl_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  CourseCountAsc = 'courseCount_ASC',
  CourseCountDesc = 'courseCount_DESC',
  FinalCostAsc = 'finalCost_ASC',
  FinalCostDesc = 'finalCost_DESC',
  H1TitleAsc = 'h1Title_ASC',
  H1TitleDesc = 'h1Title_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PaceAsc = 'pace_ASC',
  PaceDesc = 'pace_DESC',
  ProgramStartsAsc = 'programStarts_ASC',
  ProgramStartsDesc = 'programStarts_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
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
  UserReviewsDesc = 'userReviews_DESC',
  VideoUrlAsc = 'videoUrl_ASC',
  VideoUrlDesc = 'videoUrl_DESC'
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

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/menu) */
export type Menu = Entry & _Node & {
  __typename?: 'Menu';
  _id: Scalars['ID']['output'];
  action?: Maybe<Action>;
  contentCollection?: Maybe<MenuContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  contentfulTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MenuLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/menu) */
export type MenuActionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ActionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/menu) */
export type MenuContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/menu) */
export type MenuContentfulTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/menu) */
export type MenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuCollection = {
  __typename?: 'MenuCollection';
  items: Array<Maybe<Menu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuContentCollection = {
  __typename?: 'MenuContentCollection';
  items: Array<Maybe<Menu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum MenuContentCollectionOrder {
  ContentfulTitleAsc = 'contentfulTitle_ASC',
  ContentfulTitleDesc = 'contentfulTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type MenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuFilter>>>;
  action?: InputMaybe<CfActionNestedFilter>;
  action_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<CfMenuNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulTitle?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulTitle_not?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MenuLinkingCollections = {
  __typename?: 'MenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  menuCollection?: Maybe<MenuCollection>;
  uniqueComponentCollection?: Maybe<UniqueComponentCollection>;
};


export type MenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MenuLinkingCollectionsMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuLinkingCollectionsMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MenuLinkingCollectionsUniqueComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuLinkingCollectionsUniqueComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MenuLinkingCollectionsMenuCollectionOrder {
  ContentfulTitleAsc = 'contentfulTitle_ASC',
  ContentfulTitleDesc = 'contentfulTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MenuLinkingCollectionsUniqueComponentCollectionOrder {
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
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum MenuOrder {
  ContentfulTitleAsc = 'contentfulTitle_ASC',
  ContentfulTitleDesc = 'contentfulTitle_DESC',
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
  linkedFrom?: Maybe<PageLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoImage?: Maybe<Asset>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  theme?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageContentFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
export type PageThemeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/page) */
export type PageVariantArgs = {
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
  items: Array<Maybe<PageContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PageContentItem = CategoryOrJobDetails | Composite | ContentTypeRichText | CourseDetails | PeopleDetails | ResourceDetails | Section | UniqueComponent;

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_contains?: InputMaybe<Scalars['String']['input']>;
  theme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  theme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  theme_not?: InputMaybe<Scalars['String']['input']>;
  theme_not_contains?: InputMaybe<Scalars['String']['input']>;
  theme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  actionCollection?: Maybe<ActionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
  uniqueComponentCollection?: Maybe<UniqueComponentCollection>;
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


export type PageLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsUniqueComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsUniqueComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageLinkingCollectionsActionCollectionOrder {
  BehaviourAsc = 'behaviour_ASC',
  BehaviourDesc = 'behaviour_DESC',
  ColorSchemeAsc = 'colorScheme_ASC',
  ColorSchemeDesc = 'colorScheme_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
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

export enum PageLinkingCollectionsSectionCollectionOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  CardThemeAsc = 'cardTheme_ASC',
  CardThemeDesc = 'cardTheme_DESC',
  CardVariantAsc = 'cardVariant_ASC',
  CardVariantDesc = 'cardVariant_DESC',
  CardsCountAsc = 'cardsCount_ASC',
  CardsCountDesc = 'cardsCount_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum PageLinkingCollectionsUniqueComponentCollectionOrder {
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetails = Entry & _Node & {
  __typename?: 'PeopleDetails';
  _id: Scalars['ID']['output'];
  asset?: Maybe<Asset>;
  company?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  courseCount?: Maybe<Scalars['String']['output']>;
  expertise?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<PeopleDetailsLinkingCollections>;
  linkedIn?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text?: Maybe<PeopleDetailsText>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsAssetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsCompanyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsCourseCountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsExpertiseArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsLinkedInArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsRoleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/peopleDetails) */
export type PeopleDetailsVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PeopleDetailsCollection = {
  __typename?: 'PeopleDetailsCollection';
  items: Array<Maybe<PeopleDetails>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PeopleDetailsFilter = {
  AND?: InputMaybe<Array<InputMaybe<PeopleDetailsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PeopleDetailsFilter>>>;
  asset_exists?: InputMaybe<Scalars['Boolean']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_contains?: InputMaybe<Scalars['String']['input']>;
  company_exists?: InputMaybe<Scalars['Boolean']['input']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company_not?: InputMaybe<Scalars['String']['input']>;
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  expertise_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  expertise_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  expertise_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  expertise_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  linkedIn_contains?: InputMaybe<Scalars['String']['input']>;
  linkedIn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkedIn_not?: InputMaybe<Scalars['String']['input']>;
  linkedIn_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_exists?: InputMaybe<Scalars['Boolean']['input']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PeopleDetailsLinkingCollections = {
  __typename?: 'PeopleDetailsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type PeopleDetailsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PeopleDetailsLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PeopleDetailsLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PeopleDetailsLinkingCollectionsPageCollectionOrder {
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum PeopleDetailsOrder {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  CourseCountAsc = 'courseCount_ASC',
  CourseCountDesc = 'courseCount_DESC',
  LinkedInAsc = 'linkedIn_ASC',
  LinkedInDesc = 'linkedIn_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
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

export type PeopleDetailsText = {
  __typename?: 'PeopleDetailsText';
  json: Scalars['JSON']['output'];
  links: PeopleDetailsTextLinks;
};

export type PeopleDetailsTextAssets = {
  __typename?: 'PeopleDetailsTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PeopleDetailsTextEntries = {
  __typename?: 'PeopleDetailsTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PeopleDetailsTextLinks = {
  __typename?: 'PeopleDetailsTextLinks';
  assets: PeopleDetailsTextAssets;
  entries: PeopleDetailsTextEntries;
  resources: PeopleDetailsTextResources;
};

export type PeopleDetailsTextResources = {
  __typename?: 'PeopleDetailsTextResources';
  block: Array<PeopleDetailsTextResourcesBlock>;
  hyperlink: Array<PeopleDetailsTextResourcesHyperlink>;
  inline: Array<PeopleDetailsTextResourcesInline>;
};

export type PeopleDetailsTextResourcesBlock = ResourceLink & {
  __typename?: 'PeopleDetailsTextResourcesBlock';
  sys: ResourceSys;
};

export type PeopleDetailsTextResourcesHyperlink = ResourceLink & {
  __typename?: 'PeopleDetailsTextResourcesHyperlink';
  sys: ResourceSys;
};

export type PeopleDetailsTextResourcesInline = ResourceLink & {
  __typename?: 'PeopleDetailsTextResourcesInline';
  sys: ResourceSys;
};

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
  categoryOrJobDetails?: Maybe<CategoryOrJobDetails>;
  categoryOrJobDetailsCollection?: Maybe<CategoryOrJobDetailsCollection>;
  composite?: Maybe<Composite>;
  compositeCollection?: Maybe<CompositeCollection>;
  contentTypeRichText?: Maybe<ContentTypeRichText>;
  contentTypeRichTextCollection?: Maybe<ContentTypeRichTextCollection>;
  courseDetails?: Maybe<CourseDetails>;
  courseDetailsCollection?: Maybe<CourseDetailsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  menu?: Maybe<Menu>;
  menuCollection?: Maybe<MenuCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  peopleDetails?: Maybe<PeopleDetails>;
  peopleDetailsCollection?: Maybe<PeopleDetailsCollection>;
  resourceDetails?: Maybe<ResourceDetails>;
  resourceDetailsCollection?: Maybe<ResourceDetailsCollection>;
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


export type QueryCategoryOrJobDetailsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryOrJobDetailsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryOrJobDetailsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryOrJobDetailsFilter>;
};


export type QueryCompositeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCompositeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CompositeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompositeFilter>;
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


export type QueryMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuFilter>;
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


export type QueryPeopleDetailsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPeopleDetailsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PeopleDetailsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PeopleDetailsFilter>;
};


export type QueryResourceDetailsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryResourceDetailsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ResourceDetailsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ResourceDetailsFilter>;
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

/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/resourceDetails) */
export type ResourceDetails = Entry & _Node & {
  __typename?: 'ResourceDetails';
  _id: Scalars['ID']['output'];
  asset?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ResourceDetailsLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  publicationDate?: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  topics?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/resourceDetails) */
export type ResourceDetailsAssetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/resourceDetails) */
export type ResourceDetailsContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/resourceDetails) */
export type ResourceDetailsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/resourceDetails) */
export type ResourceDetailsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/resourceDetails) */
export type ResourceDetailsNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/resourceDetails) */
export type ResourceDetailsPublicationDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/resourceDetails) */
export type ResourceDetailsTopicsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceDetailsCollection = {
  __typename?: 'ResourceDetailsCollection';
  items: Array<Maybe<ResourceDetails>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ResourceDetailsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ResourceDetailsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ResourceDetailsFilter>>>;
  asset_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publicationDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publicationDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  topics_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topics_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topics_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topics_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResourceDetailsLinkingCollections = {
  __typename?: 'ResourceDetailsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ResourceDetailsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ResourceDetailsLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ResourceDetailsLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ResourceDetailsLinkingCollectionsPageCollectionOrder {
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum ResourceDetailsOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

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
  cardTheme?: Maybe<Scalars['String']['output']>;
  cardVariant?: Maybe<Scalars['String']['output']>;
  cardsCount?: Maybe<Scalars['Int']['output']>;
  contentCollection?: Maybe<SectionContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layout?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SectionLinkingCollections>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  supertitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleSize?: Maybe<Scalars['String']['output']>;
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
export type SectionCardThemeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionCardVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionCardsCountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionContentFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionFeaturesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionLayoutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
export type SectionThemeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/section) */
export type SectionTitleSizeArgs = {
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
  ColorSchemeAsc = 'colorScheme_ASC',
  ColorSchemeDesc = 'colorScheme_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
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
  items: Array<Maybe<SectionContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SectionContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<SectionContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionContentFilter>>>;
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

export type SectionContentItem = AccordionCard | Card | ContentTypeRichText | Page;

export type SectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
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
  cardTheme?: InputMaybe<Scalars['String']['input']>;
  cardTheme_contains?: InputMaybe<Scalars['String']['input']>;
  cardTheme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardTheme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardTheme_not?: InputMaybe<Scalars['String']['input']>;
  cardTheme_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardTheme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardVariant?: InputMaybe<Scalars['String']['input']>;
  cardVariant_contains?: InputMaybe<Scalars['String']['input']>;
  cardVariant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardVariant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardVariant_not?: InputMaybe<Scalars['String']['input']>;
  cardVariant_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardVariant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardsCount?: InputMaybe<Scalars['Int']['input']>;
  cardsCount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  cardsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  cardsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  cardsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  cardsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  cardsCount_not?: InputMaybe<Scalars['Int']['input']>;
  cardsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_exists?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<Scalars['String']['input']>;
  layout_contains?: InputMaybe<Scalars['String']['input']>;
  layout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_not?: InputMaybe<Scalars['String']['input']>;
  layout_not_contains?: InputMaybe<Scalars['String']['input']>;
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  size_contains?: InputMaybe<Scalars['String']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size_not?: InputMaybe<Scalars['String']['input']>;
  size_not_contains?: InputMaybe<Scalars['String']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_contains?: InputMaybe<Scalars['String']['input']>;
  theme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  theme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  theme_not?: InputMaybe<Scalars['String']['input']>;
  theme_not_contains?: InputMaybe<Scalars['String']['input']>;
  theme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleSize?: InputMaybe<Scalars['String']['input']>;
  titleSize_contains?: InputMaybe<Scalars['String']['input']>;
  titleSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleSize_not?: InputMaybe<Scalars['String']['input']>;
  titleSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionLinkingCollections = {
  __typename?: 'SectionLinkingCollections';
  compositeCollection?: Maybe<CompositeCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type SectionLinkingCollectionsCompositeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionLinkingCollectionsCompositeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SectionLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SectionLinkingCollectionsCompositeCollectionOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  ContentfulTitleAsc = 'contentfulTitle_ASC',
  ContentfulTitleDesc = 'contentfulTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum SectionLinkingCollectionsPageCollectionOrder {
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum SectionOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  CardThemeAsc = 'cardTheme_ASC',
  CardThemeDesc = 'cardTheme_DESC',
  CardVariantAsc = 'cardVariant_ASC',
  CardVariantDesc = 'cardVariant_DESC',
  CardsCountAsc = 'cardsCount_ASC',
  CardsCountDesc = 'cardsCount_DESC',
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
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
  contentCollection?: Maybe<UniqueComponentContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
  linkedFrom?: Maybe<UniqueComponentLinkingCollections>;
  sys: Sys;
  variant?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/uniqueComponent) */
export type UniqueComponentContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UniqueComponentContentFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/uniqueComponent) */
export type UniqueComponentContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/uniqueComponent) */
export type UniqueComponentJsonArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/uniqueComponent) */
export type UniqueComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fmxc36tvwra3/content_types/uniqueComponent) */
export type UniqueComponentVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type UniqueComponentCollection = {
  __typename?: 'UniqueComponentCollection';
  items: Array<Maybe<UniqueComponent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type UniqueComponentContentCollection = {
  __typename?: 'UniqueComponentContentCollection';
  items: Array<Maybe<UniqueComponentContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type UniqueComponentContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<UniqueComponentContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UniqueComponentContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type UniqueComponentContentItem = Menu | Page;

export type UniqueComponentFilter = {
  AND?: InputMaybe<Array<InputMaybe<UniqueComponentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UniqueComponentFilter>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  json_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UniqueComponentLinkingCollections = {
  __typename?: 'UniqueComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type UniqueComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type UniqueComponentLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<UniqueComponentLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum UniqueComponentLinkingCollectionsPageCollectionOrder {
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
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

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
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
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
  colorScheme?: InputMaybe<Scalars['String']['input']>;
  colorScheme_contains?: InputMaybe<Scalars['String']['input']>;
  colorScheme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorScheme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorScheme_not?: InputMaybe<Scalars['String']['input']>;
  colorScheme_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorScheme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulName?: InputMaybe<Scalars['String']['input']>;
  contentfulName_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulName_not?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external?: InputMaybe<Scalars['String']['input']>;
  external_contains?: InputMaybe<Scalars['String']['input']>;
  external_exists?: InputMaybe<Scalars['Boolean']['input']>;
  external_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_not?: InputMaybe<Scalars['String']['input']>;
  external_not_contains?: InputMaybe<Scalars['String']['input']>;
  external_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  features_exists?: InputMaybe<Scalars['Boolean']['input']>;
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

export type CfMenuNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMenuNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMenuNestedFilter>>>;
  action_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentfulTitle?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulTitle_not?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
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
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_contains?: InputMaybe<Scalars['String']['input']>;
  theme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  theme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  theme_not?: InputMaybe<Scalars['String']['input']>;
  theme_not_contains?: InputMaybe<Scalars['String']['input']>;
  theme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfcontentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

type EntryFields_AccordionCard_Fragment = { __typename?: 'AccordionCard', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_Action_Fragment = { __typename?: 'Action', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_Card_Fragment = { __typename?: 'Card', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_CategoryOrJobDetails_Fragment = { __typename?: 'CategoryOrJobDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_Composite_Fragment = { __typename?: 'Composite', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_ContentTypeRichText_Fragment = { __typename?: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_CourseDetails_Fragment = { __typename?: 'CourseDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_Menu_Fragment = { __typename?: 'Menu', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_Page_Fragment = { __typename?: 'Page', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_PeopleDetails_Fragment = { __typename?: 'PeopleDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_ResourceDetails_Fragment = { __typename?: 'ResourceDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_Section_Fragment = { __typename?: 'Section', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

type EntryFields_UniqueComponent_Fragment = { __typename?: 'UniqueComponent', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type EntryFieldsFragment = EntryFields_AccordionCard_Fragment | EntryFields_Action_Fragment | EntryFields_Card_Fragment | EntryFields_CategoryOrJobDetails_Fragment | EntryFields_Composite_Fragment | EntryFields_ContentTypeRichText_Fragment | EntryFields_CourseDetails_Fragment | EntryFields_Menu_Fragment | EntryFields_Page_Fragment | EntryFields_PeopleDetails_Fragment | EntryFields_ResourceDetails_Fragment | EntryFields_Section_Fragment | EntryFields_UniqueComponent_Fragment;

export type AssetFieldsFragment = { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } };

export type AccordionCardFieldsFragment = { __typename?: 'AccordionCard', title?: string | null, column1Title?: string | null, column1Text?: string | null, column2Title?: string | null, column2Text?: string | null, topNotes?: Array<string | null> | null, skipNumber?: boolean | null, text?: { __typename?: 'AccordionCardText', json: any } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type ActionFieldsFragment = { __typename?: 'Action', name?: string | null, features?: Array<string | null> | null, external?: string | null, iconPlacement?: string | null, colorScheme?: string | null, variant?: string | null, behaviour?: string | null, internal?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type CardFieldsFragment = { __typename?: 'Card', title?: string | null, text?: string | null, variant?: string | null, studentsCount?: number | null, rating?: number | null, tags?: Array<string | null> | null, theme?: string | null, asset?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, thumbnail?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, actionsCollection?: { __typename?: 'CardActionsCollection', items: Array<{ __typename?: 'AccordionCard', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Action', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Card', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'CategoryOrJobDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Composite', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'CourseDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Menu', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'PeopleDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'ResourceDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Section', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'UniqueComponent', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type CourseDetailsFieldsFragment = { __typename?: 'CourseDetails', h1Title?: string | null, title?: string | null, summary?: string | null, shortDescription?: string | null, duration?: Array<string | null> | null, language?: Array<string | null> | null, pace?: string | null, level?: Array<string | null> | null, style?: string | null, courseCount?: string | null, programStarts?: string | null, applicationDeadline?: string | null, studentsCount?: number | null, userReviews?: number | null, startingCost?: number | null, finalCost?: number | null, timeLeft?: string | null, videoThumbnail?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type CategoryOrJobDetailsFieldsFragment = { __typename?: 'CategoryOrJobDetails', title?: string | null, summary?: string | null, shortDescription?: string | null, studentsCount?: number | null, userReviews?: number | null, averageUsSalary?: string | null, averageEuSalary?: string | null, asset?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type PeopleDetailsFieldsFragment = { __typename?: 'PeopleDetails', name?: string | null, variant?: string | null, role?: string | null, company?: string | null, shortDescription?: string | null, expertise?: Array<string | null> | null, linkedIn?: string | null, text?: { __typename?: 'PeopleDetailsText', json: any } | null, asset?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type ResourceDetailsFieldsFragment = { __typename?: 'ResourceDetails', name?: string | null, description?: string | null, topics?: Array<string | null> | null, publicationDate?: any | null, asset?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type ContentTypeRichTextFieldsFragment = { __typename?: 'ContentTypeRichText', variant?: string | null, alignment?: string | null, size?: string | null, theme?: string | null, body?: { __typename?: 'ContentTypeRichTextBody', json: any, links: { __typename?: 'ContentTypeRichTextBodyLinks', entries: { __typename?: 'ContentTypeRichTextBodyEntries', block: Array<{ __typename: 'AccordionCard', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Action', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Card', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'CategoryOrJobDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Composite', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'CourseDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Menu', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'PeopleDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'ResourceDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Section', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'UniqueComponent', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null>, inline: Array<{ __typename: 'AccordionCard', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Action', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Card', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'CategoryOrJobDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Composite', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'CourseDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Menu', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'PeopleDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'ResourceDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Section', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'UniqueComponent', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> }, assets: { __typename?: 'ContentTypeRichTextBodyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type UniqueComponentFieldsFragment = { __typename?: 'UniqueComponent', variant?: string | null, json?: any | null, contentCollection?: { __typename?: 'UniqueComponentContentCollection', items: Array<{ __typename?: 'Menu', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type SectionFieldsFragment = { __typename?: 'Section', alignment?: string | null, layout?: string | null, size?: string | null, theme?: string | null, title?: string | null, supertitle?: string | null, text?: string | null, titleSize?: string | null, cardVariant?: string | null, cardsCount?: number | null, cardTheme?: string | null, variant?: string | null, metadata?: any | null, features?: Array<string | null> | null, actionsCollection?: { __typename?: 'SectionActionsCollection', items: Array<{ __typename?: 'Action', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, assetsCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, contentCollection?: { __typename?: 'SectionContentCollection', items: Array<{ __typename?: 'AccordionCard', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Card', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type CompositeFieldsFragment = { __typename?: 'Composite', variant?: string | null, alignment?: string | null, layout?: string | null, size?: string | null, theme?: string | null, title?: string | null, supertitle?: string | null, text?: string | null, spacing?: string | null, contentCollection?: { __typename?: 'CompositeContentCollection', items: Array<{ __typename?: 'Action', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Section', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type PageFieldsFragment = { __typename?: 'Page', variant?: string | null, name?: string | null, slug?: string | null, seoTitle?: string | null, seoDescription?: string | null, theme?: string | null, seoImage?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, contentCollection?: { __typename?: 'PageContentCollection', items: Array<{ __typename?: 'CategoryOrJobDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Composite', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'CourseDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'PeopleDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'ResourceDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Section', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'UniqueComponent', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type PlaygroundPageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlaygroundPageSlugsQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug?: string | null } | null> } | null };

export type PageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type PageSlugsQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug?: string | null } | null> } | null };

export type PageCollectionQueryVariables = Exact<{
  where?: InputMaybe<PageFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PageCollectionQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', total: number, skip: number, limit: number, items: Array<{ __typename?: 'Page', variant?: string | null, name?: string | null, slug?: string | null, seoTitle?: string | null, seoDescription?: string | null, theme?: string | null, seoImage?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, contentCollection?: { __typename?: 'PageContentCollection', items: Array<{ __typename?: 'CategoryOrJobDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Composite', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'CourseDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'PeopleDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'ResourceDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Section', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'UniqueComponent', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type CourseDetailsCollectionQueryVariables = Exact<{
  where?: InputMaybe<CourseDetailsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CourseDetailsCollectionQuery = { __typename?: 'Query', courseDetailsCollection?: { __typename?: 'CourseDetailsCollection', items: Array<{ __typename?: 'CourseDetails', h1Title?: string | null, title?: string | null, summary?: string | null, shortDescription?: string | null, duration?: Array<string | null> | null, language?: Array<string | null> | null, pace?: string | null, level?: Array<string | null> | null, style?: string | null, courseCount?: string | null, programStarts?: string | null, applicationDeadline?: string | null, studentsCount?: number | null, userReviews?: number | null, startingCost?: number | null, finalCost?: number | null, timeLeft?: string | null, videoThumbnail?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type CateogoryOrJobDetailsCollectionQueryVariables = Exact<{
  where?: InputMaybe<CategoryOrJobDetailsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CateogoryOrJobDetailsCollectionQuery = { __typename?: 'Query', categoryOrJobDetailsCollection?: { __typename?: 'CategoryOrJobDetailsCollection', items: Array<{ __typename?: 'CategoryOrJobDetails', title?: string | null, summary?: string | null, shortDescription?: string | null, studentsCount?: number | null, userReviews?: number | null, averageUsSalary?: string | null, averageEuSalary?: string | null, asset?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type PeopleDetailsCollectionQueryVariables = Exact<{
  where?: InputMaybe<PeopleDetailsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PeopleDetailsCollectionQuery = { __typename?: 'Query', peopleDetailsCollection?: { __typename?: 'PeopleDetailsCollection', items: Array<{ __typename?: 'PeopleDetails', name?: string | null, variant?: string | null, role?: string | null, company?: string | null, shortDescription?: string | null, expertise?: Array<string | null> | null, linkedIn?: string | null, text?: { __typename?: 'PeopleDetailsText', json: any } | null, asset?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type ResourceDetailsCollectionQueryVariables = Exact<{
  where?: InputMaybe<ResourceDetailsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ResourceDetailsCollectionQuery = { __typename?: 'Query', resourceDetailsCollection?: { __typename?: 'ResourceDetailsCollection', items: Array<{ __typename?: 'ResourceDetails', name?: string | null, description?: string | null, topics?: Array<string | null> | null, publicationDate?: any | null, asset?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type ContentTypeRichTextCollectionQueryVariables = Exact<{
  where?: InputMaybe<ContentTypeRichTextFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ContentTypeRichTextCollectionQuery = { __typename?: 'Query', contentTypeRichTextCollection?: { __typename?: 'ContentTypeRichTextCollection', items: Array<{ __typename?: 'ContentTypeRichText', variant?: string | null, alignment?: string | null, size?: string | null, theme?: string | null, body?: { __typename?: 'ContentTypeRichTextBody', json: any, links: { __typename?: 'ContentTypeRichTextBodyLinks', entries: { __typename?: 'ContentTypeRichTextBodyEntries', block: Array<{ __typename: 'AccordionCard', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Action', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Card', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'CategoryOrJobDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Composite', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'CourseDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Menu', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'PeopleDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'ResourceDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Section', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'UniqueComponent', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null>, inline: Array<{ __typename: 'AccordionCard', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Action', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Card', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'CategoryOrJobDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Composite', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'CourseDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Menu', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'PeopleDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'ResourceDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'Section', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename: 'UniqueComponent', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> }, assets: { __typename?: 'ContentTypeRichTextBodyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type UniqueComponentCollectionQueryVariables = Exact<{
  where?: InputMaybe<UniqueComponentFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UniqueComponentCollectionQuery = { __typename?: 'Query', uniqueComponentCollection?: { __typename?: 'UniqueComponentCollection', items: Array<{ __typename?: 'UniqueComponent', variant?: string | null, json?: any | null, contentCollection?: { __typename?: 'UniqueComponentContentCollection', items: Array<{ __typename?: 'Menu', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type AccordionCardCollectionQueryVariables = Exact<{
  where?: InputMaybe<AccordionCardFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AccordionCardCollectionQuery = { __typename?: 'Query', accordionCardCollection?: { __typename?: 'AccordionCardCollection', items: Array<{ __typename?: 'AccordionCard', title?: string | null, column1Title?: string | null, column1Text?: string | null, column2Title?: string | null, column2Text?: string | null, topNotes?: Array<string | null> | null, skipNumber?: boolean | null, text?: { __typename?: 'AccordionCardText', json: any } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type CardCollectionQueryVariables = Exact<{
  where?: InputMaybe<CardFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CardCollectionQuery = { __typename?: 'Query', cardCollection?: { __typename?: 'CardCollection', items: Array<{ __typename?: 'Card', title?: string | null, text?: string | null, variant?: string | null, studentsCount?: number | null, rating?: number | null, tags?: Array<string | null> | null, theme?: string | null, asset?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, thumbnail?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, actionsCollection?: { __typename?: 'CardActionsCollection', items: Array<{ __typename?: 'AccordionCard', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Action', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Card', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'CategoryOrJobDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Composite', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'CourseDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Menu', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'PeopleDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'ResourceDetails', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Section', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'UniqueComponent', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type SectionCollectionQueryVariables = Exact<{
  where?: InputMaybe<SectionFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SectionCollectionQuery = { __typename?: 'Query', sectionCollection?: { __typename?: 'SectionCollection', items: Array<{ __typename?: 'Section', alignment?: string | null, layout?: string | null, size?: string | null, theme?: string | null, title?: string | null, supertitle?: string | null, text?: string | null, titleSize?: string | null, cardVariant?: string | null, cardsCount?: number | null, cardTheme?: string | null, variant?: string | null, metadata?: any | null, features?: Array<string | null> | null, actionsCollection?: { __typename?: 'SectionActionsCollection', items: Array<{ __typename?: 'Action', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, assetsCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, contentCollection?: { __typename?: 'SectionContentCollection', items: Array<{ __typename?: 'AccordionCard', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Card', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type CompositeCollectionQueryVariables = Exact<{
  where?: InputMaybe<CompositeFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CompositeCollectionQuery = { __typename?: 'Query', compositeCollection?: { __typename?: 'CompositeCollection', items: Array<{ __typename?: 'Composite', variant?: string | null, alignment?: string | null, layout?: string | null, size?: string | null, theme?: string | null, title?: string | null, supertitle?: string | null, text?: string | null, spacing?: string | null, contentCollection?: { __typename?: 'CompositeContentCollection', items: Array<{ __typename?: 'Action', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | { __typename?: 'Section', sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type AssetCollectionQueryVariables = Exact<{
  where?: InputMaybe<AssetFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AssetCollectionQuery = { __typename?: 'Query', assetCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type ActionCollectionQueryVariables = Exact<{
  where?: InputMaybe<ActionFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ActionCollectionQuery = { __typename?: 'Query', actionCollection?: { __typename?: 'ActionCollection', items: Array<{ __typename?: 'Action', name?: string | null, features?: Array<string | null> | null, external?: string | null, iconPlacement?: string | null, colorScheme?: string | null, variant?: string | null, behaviour?: string | null, internal?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export const EntryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<EntryFieldsFragment, unknown>;
export const AccordionCardFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordionCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccordionCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"column1Title"}},{"kind":"Field","name":{"kind":"Name","value":"column1Text"}},{"kind":"Field","name":{"kind":"Name","value":"column2Title"}},{"kind":"Field","name":{"kind":"Name","value":"column2Text"}},{"kind":"Field","name":{"kind":"Name","value":"topNotes"}},{"kind":"Field","name":{"kind":"Name","value":"skipNumber"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AccordionCardFieldsFragment, unknown>;
export const AssetFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<AssetFieldsFragment, unknown>;
export const ActionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Action"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"iconPlacement"}},{"kind":"Field","name":{"kind":"Name","value":"colorScheme"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"behaviour"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<ActionFieldsFragment, unknown>;
export const CardFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"studentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actionsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<CardFieldsFragment, unknown>;
export const CourseDetailsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDetailsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CourseDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"h1Title"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"pace"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"courseCount"}},{"kind":"Field","name":{"kind":"Name","value":"programStarts"}},{"kind":"Field","name":{"kind":"Name","value":"applicationDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"studentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"userReviews"}},{"kind":"Field","name":{"kind":"Name","value":"startingCost"}},{"kind":"Field","name":{"kind":"Name","value":"finalCost"}},{"kind":"Field","name":{"kind":"Name","value":"timeLeft"}},{"kind":"Field","name":{"kind":"Name","value":"videoThumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<CourseDetailsFieldsFragment, unknown>;
export const CategoryOrJobDetailsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryOrJobDetailsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryOrJobDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"studentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"userReviews"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"averageUsSalary"}},{"kind":"Field","name":{"kind":"Name","value":"averageEuSalary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<CategoryOrJobDetailsFieldsFragment, unknown>;
export const PeopleDetailsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PeopleDetailsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PeopleDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"expertise"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<PeopleDetailsFieldsFragment, unknown>;
export const ResourceDetailsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResourceDetailsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResourceDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"topics"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<ResourceDetailsFieldsFragment, unknown>;
export const ContentTypeRichTextFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentTypeRichTextFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentTypeRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<ContentTypeRichTextFieldsFragment, unknown>;
export const UniqueComponentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UniqueComponentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UniqueComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UniqueComponentFieldsFragment, unknown>;
export const SectionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Section"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"supertitle"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"titleSize"}},{"kind":"Field","name":{"kind":"Name","value":"cardVariant"}},{"kind":"Field","name":{"kind":"Name","value":"cardsCount"}},{"kind":"Field","name":{"kind":"Name","value":"cardTheme"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"actionsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assetsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<SectionFieldsFragment, unknown>;
export const CompositeFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Composite"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"supertitle"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"spacing"}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CompositeFieldsFragment, unknown>;
export const PageFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"seoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"seoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"seoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<PageFieldsFragment, unknown>;
export const PlaygroundPageSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlaygroundPageSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_not_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"404","block":false}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"variant_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"Playground","block":false}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<PlaygroundPageSlugsQuery, PlaygroundPageSlugsQueryVariables>;
export const PageSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_not_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"404","block":false}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"variant_not_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"Playground","block":false}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<PageSlugsQuery, PageSlugsQueryVariables>;
export const PageCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PageFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"seoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"seoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"seoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PageCollectionQuery, PageCollectionQueryVariables>;
export const CourseDetailsCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CourseDetailsCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CourseDetailsFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseDetailsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDetailsFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDetailsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CourseDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"h1Title"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"pace"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"courseCount"}},{"kind":"Field","name":{"kind":"Name","value":"programStarts"}},{"kind":"Field","name":{"kind":"Name","value":"applicationDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"studentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"userReviews"}},{"kind":"Field","name":{"kind":"Name","value":"startingCost"}},{"kind":"Field","name":{"kind":"Name","value":"finalCost"}},{"kind":"Field","name":{"kind":"Name","value":"timeLeft"}},{"kind":"Field","name":{"kind":"Name","value":"videoThumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}}]}}]} as unknown as DocumentNode<CourseDetailsCollectionQuery, CourseDetailsCollectionQueryVariables>;
export const CateogoryOrJobDetailsCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CateogoryOrJobDetailsCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryOrJobDetailsFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryOrJobDetailsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryOrJobDetailsFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryOrJobDetailsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryOrJobDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"studentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"userReviews"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"averageUsSalary"}},{"kind":"Field","name":{"kind":"Name","value":"averageEuSalary"}}]}}]} as unknown as DocumentNode<CateogoryOrJobDetailsCollectionQuery, CateogoryOrJobDetailsCollectionQueryVariables>;
export const PeopleDetailsCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PeopleDetailsCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PeopleDetailsFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"peopleDetailsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PeopleDetailsFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PeopleDetailsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PeopleDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"expertise"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}}]}}]} as unknown as DocumentNode<PeopleDetailsCollectionQuery, PeopleDetailsCollectionQueryVariables>;
export const ResourceDetailsCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ResourceDetailsCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ResourceDetailsFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resourceDetailsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResourceDetailsFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResourceDetailsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResourceDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"topics"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}}]}}]} as unknown as DocumentNode<ResourceDetailsCollectionQuery, ResourceDetailsCollectionQueryVariables>;
export const ContentTypeRichTextCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContentTypeRichTextCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContentTypeRichTextFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentTypeRichTextCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentTypeRichTextFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentTypeRichTextFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentTypeRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]} as unknown as DocumentNode<ContentTypeRichTextCollectionQuery, ContentTypeRichTextCollectionQueryVariables>;
export const UniqueComponentCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UniqueComponentCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UniqueComponentFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueComponentCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UniqueComponentFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UniqueComponentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UniqueComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UniqueComponentCollectionQuery, UniqueComponentCollectionQueryVariables>;
export const AccordionCardCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccordionCardCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccordionCardFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accordionCardCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordionCardFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordionCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccordionCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"column1Title"}},{"kind":"Field","name":{"kind":"Name","value":"column1Text"}},{"kind":"Field","name":{"kind":"Name","value":"column2Title"}},{"kind":"Field","name":{"kind":"Name","value":"column2Text"}},{"kind":"Field","name":{"kind":"Name","value":"topNotes"}},{"kind":"Field","name":{"kind":"Name","value":"skipNumber"}}]}}]} as unknown as DocumentNode<AccordionCardCollectionQuery, AccordionCardCollectionQueryVariables>;
export const CardCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CardCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CardFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cardCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"studentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actionsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CardCollectionQuery, CardCollectionQueryVariables>;
export const SectionCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SectionCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SectionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sectionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SectionFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Section"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"supertitle"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"titleSize"}},{"kind":"Field","name":{"kind":"Name","value":"cardVariant"}},{"kind":"Field","name":{"kind":"Name","value":"cardsCount"}},{"kind":"Field","name":{"kind":"Name","value":"cardTheme"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"actionsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assetsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SectionCollectionQuery, SectionCollectionQueryVariables>;
export const CompositeCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CompositeCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompositeFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"compositeCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositeFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Composite"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"supertitle"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"spacing"}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CompositeCollectionQuery, CompositeCollectionQueryVariables>;
export const AssetCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AssetCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AssetFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<AssetCollectionQuery, AssetCollectionQueryVariables>;
export const ActionCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ActionCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ActionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActionFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Action"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFields"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"iconPlacement"}},{"kind":"Field","name":{"kind":"Name","value":"colorScheme"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"behaviour"}}]}}]} as unknown as DocumentNode<ActionCollectionQuery, ActionCollectionQueryVariables>;