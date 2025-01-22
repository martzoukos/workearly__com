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

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/actions) */
export type Actions = Entry & _Node & {
  __typename?: 'Actions';
  _id: Scalars['ID']['output'];
  arrow?: Maybe<Scalars['Boolean']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']['output']>;
  external?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Page>;
  linkedFrom?: Maybe<ActionsLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  popupUrl?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  telephone?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/actions) */
export type ActionsArrowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/actions) */
export type ActionsColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/actions) */
export type ActionsEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/actions) */
export type ActionsExternalArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/actions) */
export type ActionsInternalArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/actions) */
export type ActionsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/actions) */
export type ActionsNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/actions) */
export type ActionsPopupUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/actions) */
export type ActionsStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/actions) */
export type ActionsTelephoneArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ActionsCollection = {
  __typename?: 'ActionsCollection';
  items: Array<Maybe<Actions>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ActionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ActionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ActionsFilter>>>;
  arrow?: InputMaybe<Scalars['Boolean']['input']>;
  arrow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  arrow_not?: InputMaybe<Scalars['Boolean']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_contains?: InputMaybe<Scalars['String']['input']>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_not?: InputMaybe<Scalars['String']['input']>;
  color_not_contains?: InputMaybe<Scalars['String']['input']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external?: InputMaybe<Scalars['String']['input']>;
  external_contains?: InputMaybe<Scalars['String']['input']>;
  external_exists?: InputMaybe<Scalars['Boolean']['input']>;
  external_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_not?: InputMaybe<Scalars['String']['input']>;
  external_not_contains?: InputMaybe<Scalars['String']['input']>;
  external_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internal?: InputMaybe<CfPageNestedFilter>;
  internal_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupUrl?: InputMaybe<Scalars['String']['input']>;
  popupUrl_contains?: InputMaybe<Scalars['String']['input']>;
  popupUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupUrl_not?: InputMaybe<Scalars['String']['input']>;
  popupUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  popupUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  style?: InputMaybe<Scalars['String']['input']>;
  style_contains?: InputMaybe<Scalars['String']['input']>;
  style_exists?: InputMaybe<Scalars['Boolean']['input']>;
  style_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  style_not?: InputMaybe<Scalars['String']['input']>;
  style_not_contains?: InputMaybe<Scalars['String']['input']>;
  style_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  telephone?: InputMaybe<Scalars['String']['input']>;
  telephone_contains?: InputMaybe<Scalars['String']['input']>;
  telephone_exists?: InputMaybe<Scalars['Boolean']['input']>;
  telephone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  telephone_not?: InputMaybe<Scalars['String']['input']>;
  telephone_not_contains?: InputMaybe<Scalars['String']['input']>;
  telephone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ActionsLinkingCollections = {
  __typename?: 'ActionsLinkingCollections';
  benefitsCtaCollection?: Maybe<BenefitsCtaCollection>;
  cardDataCollection?: Maybe<CardDataCollection>;
  cardHolderCollection?: Maybe<CardHolderCollection>;
  caseStudyCollection?: Maybe<CaseStudyCollection>;
  contentTypeRichTextCollection?: Maybe<ContentTypeRichTextCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroCollection?: Maybe<HeroCollection>;
  sliceCollection?: Maybe<SliceCollection>;
  standardComponentCollection?: Maybe<StandardComponentCollection>;
  tabCollection?: Maybe<TabCollection>;
  tabHolderCollection?: Maybe<TabHolderCollection>;
};


export type ActionsLinkingCollectionsBenefitsCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionsLinkingCollectionsBenefitsCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionsLinkingCollectionsCardDataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionsLinkingCollectionsCardDataCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionsLinkingCollectionsCardHolderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionsLinkingCollectionsCardHolderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionsLinkingCollectionsCaseStudyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionsLinkingCollectionsCaseStudyCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionsLinkingCollectionsContentTypeRichTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionsLinkingCollectionsContentTypeRichTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionsLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionsLinkingCollectionsHeroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionsLinkingCollectionsSliceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionsLinkingCollectionsSliceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionsLinkingCollectionsStandardComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionsLinkingCollectionsStandardComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionsLinkingCollectionsTabCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionsLinkingCollectionsTabCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ActionsLinkingCollectionsTabHolderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionsLinkingCollectionsTabHolderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ActionsLinkingCollectionsBenefitsCtaCollectionOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorThemeAsc = 'colorTheme_ASC',
  ColorThemeDesc = 'colorTheme_DESC',
  DetailsAsc = 'details_ASC',
  DetailsDesc = 'details_DESC',
  MediaAlignmentAsc = 'mediaAlignment_ASC',
  MediaAlignmentDesc = 'mediaAlignment_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC'
}

export enum ActionsLinkingCollectionsCardDataCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ActionsLinkingCollectionsCardHolderCollectionOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorThemeAsc = 'colorTheme_ASC',
  ColorThemeDesc = 'colorTheme_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ActionsLinkingCollectionsCaseStudyCollectionOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorThemeAsc = 'colorTheme_ASC',
  ColorThemeDesc = 'colorTheme_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestimonialAuthorAsc = 'testimonialAuthor_ASC',
  TestimonialAuthorDesc = 'testimonialAuthor_DESC',
  TestimonialRoleAsc = 'testimonialRole_ASC',
  TestimonialRoleDesc = 'testimonialRole_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ActionsLinkingCollectionsContentTypeRichTextCollectionOrder {
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

export enum ActionsLinkingCollectionsHeroCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  DisclaimerAsc = 'disclaimer_ASC',
  DisclaimerDesc = 'disclaimer_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ActionsLinkingCollectionsSliceCollectionOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ActionsLinkingCollectionsStandardComponentCollectionOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextPositionAsc = 'textPosition_ASC',
  TextPositionDesc = 'textPosition_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC'
}

export enum ActionsLinkingCollectionsTabCollectionOrder {
  ContentTitleAsc = 'contentTitle_ASC',
  ContentTitleDesc = 'contentTitle_DESC',
  MediaAlignmentAsc = 'mediaAlignment_ASC',
  MediaAlignmentDesc = 'mediaAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabDescriptionAsc = 'tabDescription_ASC',
  TabDescriptionDesc = 'tabDescription_DESC',
  TabTitleAsc = 'tabTitle_ASC',
  TabTitleDesc = 'tabTitle_DESC'
}

export enum ActionsLinkingCollectionsTabHolderCollectionOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorSchemeAsc = 'colorScheme_ASC',
  ColorSchemeDesc = 'colorScheme_DESC',
  HeaderStyleAsc = 'headerStyle_ASC',
  HeaderStyleDesc = 'headerStyle_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ActionsOrder {
  ArrowAsc = 'arrow_ASC',
  ArrowDesc = 'arrow_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PopupUrlAsc = 'popupUrl_ASC',
  PopupUrlDesc = 'popupUrl_DESC',
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
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC'
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
  benefitsCtaCollection?: Maybe<BenefitsCtaCollection>;
  cardDataCollection?: Maybe<CardDataCollection>;
  cardHolderCollection?: Maybe<CardHolderCollection>;
  caseIntroCollection?: Maybe<CaseIntroCollection>;
  caseStudyCollection?: Maybe<CaseStudyCollection>;
  caseSummaryCollection?: Maybe<CaseSummaryCollection>;
  challengeWithQuoteCollection?: Maybe<ChallengeWithQuoteCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroCollection?: Maybe<HeroCollection>;
  logoSliderCollection?: Maybe<LogoSliderCollection>;
  pageCollection?: Maybe<PageCollection>;
  sliceCollection?: Maybe<SliceCollection>;
  standardComponentCollection?: Maybe<StandardComponentCollection>;
  tabCollection?: Maybe<TabCollection>;
  tabHolderCollection?: Maybe<TabHolderCollection>;
};


export type AssetLinkingCollectionsBenefitsCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCardDataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCardHolderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCaseIntroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCaseStudyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCaseSummaryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsChallengeWithQuoteCollectionArgs = {
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


export type AssetLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsLogoSliderCollectionArgs = {
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


export type AssetLinkingCollectionsSliceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsStandardComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTabCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTabHolderCollectionArgs = {
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

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCta = Entry & _Node & {
  __typename?: 'BenefitsCta';
  _id: Scalars['ID']['output'];
  bottomDistance?: Maybe<Scalars['String']['output']>;
  button?: Maybe<Actions>;
  colorTheme?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<BenefitsCtaDescription>;
  details?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<BenefitsCtaLinkingCollections>;
  media?: Maybe<Asset>;
  mediaAlignment?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  topDistance?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaButtonArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ActionsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaColorThemeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaMediaAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaPointsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/benefitsCta) */
export type BenefitsCtaTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BenefitsCtaCollection = {
  __typename?: 'BenefitsCtaCollection';
  items: Array<Maybe<BenefitsCta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BenefitsCtaDescription = {
  __typename?: 'BenefitsCtaDescription';
  json: Scalars['JSON']['output'];
  links: BenefitsCtaDescriptionLinks;
};

export type BenefitsCtaDescriptionAssets = {
  __typename?: 'BenefitsCtaDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BenefitsCtaDescriptionEntries = {
  __typename?: 'BenefitsCtaDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BenefitsCtaDescriptionLinks = {
  __typename?: 'BenefitsCtaDescriptionLinks';
  assets: BenefitsCtaDescriptionAssets;
  entries: BenefitsCtaDescriptionEntries;
  resources: BenefitsCtaDescriptionResources;
};

export type BenefitsCtaDescriptionResources = {
  __typename?: 'BenefitsCtaDescriptionResources';
  block: Array<BenefitsCtaDescriptionResourcesBlock>;
  hyperlink: Array<BenefitsCtaDescriptionResourcesHyperlink>;
  inline: Array<BenefitsCtaDescriptionResourcesInline>;
};

export type BenefitsCtaDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'BenefitsCtaDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type BenefitsCtaDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'BenefitsCtaDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type BenefitsCtaDescriptionResourcesInline = ResourceLink & {
  __typename?: 'BenefitsCtaDescriptionResourcesInline';
  sys: ResourceSys;
};

export type BenefitsCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<BenefitsCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BenefitsCtaFilter>>>;
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  button?: InputMaybe<CfActionsNestedFilter>;
  button_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorTheme?: InputMaybe<Scalars['String']['input']>;
  colorTheme_contains?: InputMaybe<Scalars['String']['input']>;
  colorTheme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorTheme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorTheme_not?: InputMaybe<Scalars['String']['input']>;
  colorTheme_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorTheme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  details_contains?: InputMaybe<Scalars['String']['input']>;
  details_exists?: InputMaybe<Scalars['Boolean']['input']>;
  details_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  details_not?: InputMaybe<Scalars['String']['input']>;
  details_not_contains?: InputMaybe<Scalars['String']['input']>;
  details_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mediaAlignment?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mediaAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mediaAlignment_not?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  points_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  points_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  points_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  points_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BenefitsCtaLinkingCollections = {
  __typename?: 'BenefitsCtaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type BenefitsCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BenefitsCtaLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BenefitsCtaLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BenefitsCtaLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum BenefitsCtaOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorThemeAsc = 'colorTheme_ASC',
  ColorThemeDesc = 'colorTheme_DESC',
  DetailsAsc = 'details_ASC',
  DetailsDesc = 'details_DESC',
  MediaAlignmentAsc = 'mediaAlignment_ASC',
  MediaAlignmentDesc = 'mediaAlignment_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardData) */
export type CardData = Entry & _Node & {
  __typename?: 'CardData';
  _id: Scalars['ID']['output'];
  action?: Maybe<Actions>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<CardDataDescription>;
  linkedFrom?: Maybe<CardDataLinkingCollections>;
  media?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  textColor?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardData) */
export type CardDataActionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ActionsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardData) */
export type CardDataDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardData) */
export type CardDataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardData) */
export type CardDataMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardData) */
export type CardDataNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardData) */
export type CardDataRoleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardData) */
export type CardDataTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardData) */
export type CardDataTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardData) */
export type CardDataTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CardDataCollection = {
  __typename?: 'CardDataCollection';
  items: Array<Maybe<CardData>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CardDataDescription = {
  __typename?: 'CardDataDescription';
  json: Scalars['JSON']['output'];
  links: CardDataDescriptionLinks;
};

export type CardDataDescriptionAssets = {
  __typename?: 'CardDataDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CardDataDescriptionEntries = {
  __typename?: 'CardDataDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CardDataDescriptionLinks = {
  __typename?: 'CardDataDescriptionLinks';
  assets: CardDataDescriptionAssets;
  entries: CardDataDescriptionEntries;
  resources: CardDataDescriptionResources;
};

export type CardDataDescriptionResources = {
  __typename?: 'CardDataDescriptionResources';
  block: Array<CardDataDescriptionResourcesBlock>;
  hyperlink: Array<CardDataDescriptionResourcesHyperlink>;
  inline: Array<CardDataDescriptionResourcesInline>;
};

export type CardDataDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'CardDataDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type CardDataDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'CardDataDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type CardDataDescriptionResourcesInline = ResourceLink & {
  __typename?: 'CardDataDescriptionResourcesInline';
  sys: ResourceSys;
};

export type CardDataFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardDataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardDataFilter>>>;
  action?: InputMaybe<CfActionsNestedFilter>;
  action_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  time?: InputMaybe<Scalars['String']['input']>;
  time_contains?: InputMaybe<Scalars['String']['input']>;
  time_exists?: InputMaybe<Scalars['Boolean']['input']>;
  time_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  time_not?: InputMaybe<Scalars['String']['input']>;
  time_not_contains?: InputMaybe<Scalars['String']['input']>;
  time_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CardDataLinkingCollections = {
  __typename?: 'CardDataLinkingCollections';
  cardHolderCollection?: Maybe<CardHolderCollection>;
  caseIntroCollection?: Maybe<CaseIntroCollection>;
  caseSummaryCollection?: Maybe<CaseSummaryCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type CardDataLinkingCollectionsCardHolderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardDataLinkingCollectionsCardHolderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardDataLinkingCollectionsCaseIntroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardDataLinkingCollectionsCaseIntroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardDataLinkingCollectionsCaseSummaryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardDataLinkingCollectionsCaseSummaryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardDataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CardDataLinkingCollectionsCardHolderCollectionOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorThemeAsc = 'colorTheme_ASC',
  ColorThemeDesc = 'colorTheme_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum CardDataLinkingCollectionsCaseIntroCollectionOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC'
}

export enum CardDataLinkingCollectionsCaseSummaryCollectionOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC'
}

export enum CardDataOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolder = Entry & _Node & {
  __typename?: 'CardHolder';
  _id: Scalars['ID']['output'];
  actionCollection?: Maybe<CardHolderActionCollection>;
  bottomDistance?: Maybe<Scalars['String']['output']>;
  cardDataCollection?: Maybe<CardHolderCardDataCollection>;
  colorTheme?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<CardHolderDescription>;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<CardHolderLinkingCollections>;
  media?: Maybe<Asset>;
  mediaMobile?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  titleSize?: Maybe<Scalars['String']['output']>;
  topDistance?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderActionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardHolderActionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderCardDataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardHolderCardDataCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardDataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderColorThemeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderMediaMobileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderTitleSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/cardHolder) */
export type CardHolderTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CardHolderActionCollection = {
  __typename?: 'CardHolderActionCollection';
  items: Array<Maybe<Actions>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CardHolderActionCollectionOrder {
  ArrowAsc = 'arrow_ASC',
  ArrowDesc = 'arrow_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PopupUrlAsc = 'popupUrl_ASC',
  PopupUrlDesc = 'popupUrl_DESC',
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
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC'
}

export type CardHolderCardDataCollection = {
  __typename?: 'CardHolderCardDataCollection';
  items: Array<Maybe<CardData>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CardHolderCardDataCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CardHolderCollection = {
  __typename?: 'CardHolderCollection';
  items: Array<Maybe<CardHolder>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CardHolderDescription = {
  __typename?: 'CardHolderDescription';
  json: Scalars['JSON']['output'];
  links: CardHolderDescriptionLinks;
};

export type CardHolderDescriptionAssets = {
  __typename?: 'CardHolderDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CardHolderDescriptionEntries = {
  __typename?: 'CardHolderDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CardHolderDescriptionLinks = {
  __typename?: 'CardHolderDescriptionLinks';
  assets: CardHolderDescriptionAssets;
  entries: CardHolderDescriptionEntries;
  resources: CardHolderDescriptionResources;
};

export type CardHolderDescriptionResources = {
  __typename?: 'CardHolderDescriptionResources';
  block: Array<CardHolderDescriptionResourcesBlock>;
  hyperlink: Array<CardHolderDescriptionResourcesHyperlink>;
  inline: Array<CardHolderDescriptionResourcesInline>;
};

export type CardHolderDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'CardHolderDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type CardHolderDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'CardHolderDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type CardHolderDescriptionResourcesInline = ResourceLink & {
  __typename?: 'CardHolderDescriptionResourcesInline';
  sys: ResourceSys;
};

export type CardHolderFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardHolderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardHolderFilter>>>;
  action?: InputMaybe<CfActionsNestedFilter>;
  actionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardData?: InputMaybe<CfCardDataNestedFilter>;
  cardDataCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorTheme?: InputMaybe<Scalars['String']['input']>;
  colorTheme_contains?: InputMaybe<Scalars['String']['input']>;
  colorTheme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorTheme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorTheme_not?: InputMaybe<Scalars['String']['input']>;
  colorTheme_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorTheme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mediaMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
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
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CardHolderLinkingCollections = {
  __typename?: 'CardHolderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type CardHolderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardHolderLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardHolderLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CardHolderLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum CardHolderOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorThemeAsc = 'colorTheme_ASC',
  ColorThemeDesc = 'colorTheme_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseIntro) */
export type CaseIntro = Entry & _Node & {
  __typename?: 'CaseIntro';
  _id: Scalars['ID']['output'];
  bottomDistance?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<CaseIntroDescription>;
  linkedFrom?: Maybe<CaseIntroLinkingCollections>;
  logo?: Maybe<Asset>;
  miniCardsCollection?: Maybe<CaseIntroMiniCardsCollection>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  topDistance?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseIntro) */
export type CaseIntroBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseIntro) */
export type CaseIntroDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseIntro) */
export type CaseIntroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseIntro) */
export type CaseIntroLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseIntro) */
export type CaseIntroMiniCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseIntroMiniCardsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardDataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseIntro) */
export type CaseIntroSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseIntro) */
export type CaseIntroTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseIntro) */
export type CaseIntroTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CaseIntroCollection = {
  __typename?: 'CaseIntroCollection';
  items: Array<Maybe<CaseIntro>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CaseIntroDescription = {
  __typename?: 'CaseIntroDescription';
  json: Scalars['JSON']['output'];
  links: CaseIntroDescriptionLinks;
};

export type CaseIntroDescriptionAssets = {
  __typename?: 'CaseIntroDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CaseIntroDescriptionEntries = {
  __typename?: 'CaseIntroDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CaseIntroDescriptionLinks = {
  __typename?: 'CaseIntroDescriptionLinks';
  assets: CaseIntroDescriptionAssets;
  entries: CaseIntroDescriptionEntries;
  resources: CaseIntroDescriptionResources;
};

export type CaseIntroDescriptionResources = {
  __typename?: 'CaseIntroDescriptionResources';
  block: Array<CaseIntroDescriptionResourcesBlock>;
  hyperlink: Array<CaseIntroDescriptionResourcesHyperlink>;
  inline: Array<CaseIntroDescriptionResourcesInline>;
};

export type CaseIntroDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'CaseIntroDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type CaseIntroDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'CaseIntroDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type CaseIntroDescriptionResourcesInline = ResourceLink & {
  __typename?: 'CaseIntroDescriptionResourcesInline';
  sys: ResourceSys;
};

export type CaseIntroFilter = {
  AND?: InputMaybe<Array<InputMaybe<CaseIntroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CaseIntroFilter>>>;
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  miniCards?: InputMaybe<CfCardDataNestedFilter>;
  miniCardsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseIntroLinkingCollections = {
  __typename?: 'CaseIntroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type CaseIntroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CaseIntroLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseIntroLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CaseIntroLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export type CaseIntroMiniCardsCollection = {
  __typename?: 'CaseIntroMiniCardsCollection';
  items: Array<Maybe<CardData>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CaseIntroMiniCardsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CaseIntroOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudy = Entry & _Node & {
  __typename?: 'CaseStudy';
  _id: Scalars['ID']['output'];
  actionCollection?: Maybe<CaseStudyActionCollection>;
  bottomDistance?: Maybe<Scalars['String']['output']>;
  colorTheme?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<CaseStudyDescription>;
  icon?: Maybe<Asset>;
  imageCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<CaseStudyLinkingCollections>;
  quoteMedia?: Maybe<Asset>;
  statistics?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  statisticsDescription?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  statisticsSymbol?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sys: Sys;
  testimonial?: Maybe<CaseStudyTestimonial>;
  testimonialAuthor?: Maybe<Scalars['String']['output']>;
  testimonialRole?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleSize?: Maybe<Scalars['String']['output']>;
  topDistance?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyActionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseStudyActionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyColorThemeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyQuoteMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyStatisticsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyStatisticsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyStatisticsSymbolArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyTestimonialArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyTestimonialAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyTestimonialRoleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyTitleSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseStudy) */
export type CaseStudyTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudyActionCollection = {
  __typename?: 'CaseStudyActionCollection';
  items: Array<Maybe<Actions>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CaseStudyActionCollectionOrder {
  ArrowAsc = 'arrow_ASC',
  ArrowDesc = 'arrow_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PopupUrlAsc = 'popupUrl_ASC',
  PopupUrlDesc = 'popupUrl_DESC',
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
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC'
}

export type CaseStudyCollection = {
  __typename?: 'CaseStudyCollection';
  items: Array<Maybe<CaseStudy>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CaseStudyDescription = {
  __typename?: 'CaseStudyDescription';
  json: Scalars['JSON']['output'];
  links: CaseStudyDescriptionLinks;
};

export type CaseStudyDescriptionAssets = {
  __typename?: 'CaseStudyDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CaseStudyDescriptionEntries = {
  __typename?: 'CaseStudyDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CaseStudyDescriptionLinks = {
  __typename?: 'CaseStudyDescriptionLinks';
  assets: CaseStudyDescriptionAssets;
  entries: CaseStudyDescriptionEntries;
  resources: CaseStudyDescriptionResources;
};

export type CaseStudyDescriptionResources = {
  __typename?: 'CaseStudyDescriptionResources';
  block: Array<CaseStudyDescriptionResourcesBlock>;
  hyperlink: Array<CaseStudyDescriptionResourcesHyperlink>;
  inline: Array<CaseStudyDescriptionResourcesInline>;
};

export type CaseStudyDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'CaseStudyDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type CaseStudyDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'CaseStudyDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type CaseStudyDescriptionResourcesInline = ResourceLink & {
  __typename?: 'CaseStudyDescriptionResourcesInline';
  sys: ResourceSys;
};

export type CaseStudyFilter = {
  AND?: InputMaybe<Array<InputMaybe<CaseStudyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CaseStudyFilter>>>;
  action?: InputMaybe<CfActionsNestedFilter>;
  actionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorTheme?: InputMaybe<Scalars['String']['input']>;
  colorTheme_contains?: InputMaybe<Scalars['String']['input']>;
  colorTheme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorTheme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorTheme_not?: InputMaybe<Scalars['String']['input']>;
  colorTheme_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorTheme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quoteMedia_exists?: InputMaybe<Scalars['Boolean']['input']>;
  statisticsDescription_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statisticsDescription_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statisticsDescription_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statisticsDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  statisticsSymbol_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statisticsSymbol_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statisticsSymbol_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statisticsSymbol_exists?: InputMaybe<Scalars['Boolean']['input']>;
  statistics_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statistics_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statistics_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statistics_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  testimonialAuthor?: InputMaybe<Scalars['String']['input']>;
  testimonialAuthor_contains?: InputMaybe<Scalars['String']['input']>;
  testimonialAuthor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  testimonialAuthor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testimonialAuthor_not?: InputMaybe<Scalars['String']['input']>;
  testimonialAuthor_not_contains?: InputMaybe<Scalars['String']['input']>;
  testimonialAuthor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testimonialRole?: InputMaybe<Scalars['String']['input']>;
  testimonialRole_contains?: InputMaybe<Scalars['String']['input']>;
  testimonialRole_exists?: InputMaybe<Scalars['Boolean']['input']>;
  testimonialRole_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testimonialRole_not?: InputMaybe<Scalars['String']['input']>;
  testimonialRole_not_contains?: InputMaybe<Scalars['String']['input']>;
  testimonialRole_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testimonial_contains?: InputMaybe<Scalars['String']['input']>;
  testimonial_exists?: InputMaybe<Scalars['Boolean']['input']>;
  testimonial_not_contains?: InputMaybe<Scalars['String']['input']>;
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
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyLinkingCollections = {
  __typename?: 'CaseStudyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type CaseStudyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CaseStudyLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseStudyLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CaseStudyLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum CaseStudyOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorThemeAsc = 'colorTheme_ASC',
  ColorThemeDesc = 'colorTheme_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestimonialAuthorAsc = 'testimonialAuthor_ASC',
  TestimonialAuthorDesc = 'testimonialAuthor_DESC',
  TestimonialRoleAsc = 'testimonialRole_ASC',
  TestimonialRoleDesc = 'testimonialRole_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type CaseStudyTestimonial = {
  __typename?: 'CaseStudyTestimonial';
  json: Scalars['JSON']['output'];
  links: CaseStudyTestimonialLinks;
};

export type CaseStudyTestimonialAssets = {
  __typename?: 'CaseStudyTestimonialAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CaseStudyTestimonialEntries = {
  __typename?: 'CaseStudyTestimonialEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CaseStudyTestimonialLinks = {
  __typename?: 'CaseStudyTestimonialLinks';
  assets: CaseStudyTestimonialAssets;
  entries: CaseStudyTestimonialEntries;
  resources: CaseStudyTestimonialResources;
};

export type CaseStudyTestimonialResources = {
  __typename?: 'CaseStudyTestimonialResources';
  block: Array<CaseStudyTestimonialResourcesBlock>;
  hyperlink: Array<CaseStudyTestimonialResourcesHyperlink>;
  inline: Array<CaseStudyTestimonialResourcesInline>;
};

export type CaseStudyTestimonialResourcesBlock = ResourceLink & {
  __typename?: 'CaseStudyTestimonialResourcesBlock';
  sys: ResourceSys;
};

export type CaseStudyTestimonialResourcesHyperlink = ResourceLink & {
  __typename?: 'CaseStudyTestimonialResourcesHyperlink';
  sys: ResourceSys;
};

export type CaseStudyTestimonialResourcesInline = ResourceLink & {
  __typename?: 'CaseStudyTestimonialResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseSummary) */
export type CaseSummary = Entry & _Node & {
  __typename?: 'CaseSummary';
  _id: Scalars['ID']['output'];
  bottomDistance?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  keyInsightCollection?: Maybe<CaseSummaryKeyInsightCollection>;
  linkedFrom?: Maybe<CaseSummaryLinkingCollections>;
  media?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  topDistance?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseSummary) */
export type CaseSummaryBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseSummary) */
export type CaseSummaryKeyInsightCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseSummaryKeyInsightCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardDataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseSummary) */
export type CaseSummaryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseSummary) */
export type CaseSummaryMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseSummary) */
export type CaseSummaryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/caseSummary) */
export type CaseSummaryTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CaseSummaryCollection = {
  __typename?: 'CaseSummaryCollection';
  items: Array<Maybe<CaseSummary>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CaseSummaryFilter = {
  AND?: InputMaybe<Array<InputMaybe<CaseSummaryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CaseSummaryFilter>>>;
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  keyInsight?: InputMaybe<CfCardDataNestedFilter>;
  keyInsightCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseSummaryKeyInsightCollection = {
  __typename?: 'CaseSummaryKeyInsightCollection';
  items: Array<Maybe<CardData>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CaseSummaryKeyInsightCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CaseSummaryLinkingCollections = {
  __typename?: 'CaseSummaryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type CaseSummaryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CaseSummaryLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseSummaryLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CaseSummaryLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum CaseSummaryOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/challengeWithQuote) */
export type ChallengeWithQuote = Entry & _Node & {
  __typename?: 'ChallengeWithQuote';
  _id: Scalars['ID']['output'];
  bottomDistance?: Maybe<Scalars['String']['output']>;
  challenge?: Maybe<ChallengeWithQuoteChallenge>;
  contentfulMetadata: ContentfulMetadata;
  jobTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ChallengeWithQuoteLinkingCollections>;
  media?: Maybe<Asset>;
  quote?: Maybe<ChallengeWithQuoteQuote>;
  quoteAuthor?: Maybe<Scalars['String']['output']>;
  quoteMedia?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  topDistance?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/challengeWithQuote) */
export type ChallengeWithQuoteBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/challengeWithQuote) */
export type ChallengeWithQuoteChallengeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/challengeWithQuote) */
export type ChallengeWithQuoteJobTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/challengeWithQuote) */
export type ChallengeWithQuoteLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/challengeWithQuote) */
export type ChallengeWithQuoteMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/challengeWithQuote) */
export type ChallengeWithQuoteQuoteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/challengeWithQuote) */
export type ChallengeWithQuoteQuoteAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/challengeWithQuote) */
export type ChallengeWithQuoteQuoteMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/challengeWithQuote) */
export type ChallengeWithQuoteTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/challengeWithQuote) */
export type ChallengeWithQuoteTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ChallengeWithQuoteChallenge = {
  __typename?: 'ChallengeWithQuoteChallenge';
  json: Scalars['JSON']['output'];
  links: ChallengeWithQuoteChallengeLinks;
};

export type ChallengeWithQuoteChallengeAssets = {
  __typename?: 'ChallengeWithQuoteChallengeAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ChallengeWithQuoteChallengeEntries = {
  __typename?: 'ChallengeWithQuoteChallengeEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ChallengeWithQuoteChallengeLinks = {
  __typename?: 'ChallengeWithQuoteChallengeLinks';
  assets: ChallengeWithQuoteChallengeAssets;
  entries: ChallengeWithQuoteChallengeEntries;
  resources: ChallengeWithQuoteChallengeResources;
};

export type ChallengeWithQuoteChallengeResources = {
  __typename?: 'ChallengeWithQuoteChallengeResources';
  block: Array<ChallengeWithQuoteChallengeResourcesBlock>;
  hyperlink: Array<ChallengeWithQuoteChallengeResourcesHyperlink>;
  inline: Array<ChallengeWithQuoteChallengeResourcesInline>;
};

export type ChallengeWithQuoteChallengeResourcesBlock = ResourceLink & {
  __typename?: 'ChallengeWithQuoteChallengeResourcesBlock';
  sys: ResourceSys;
};

export type ChallengeWithQuoteChallengeResourcesHyperlink = ResourceLink & {
  __typename?: 'ChallengeWithQuoteChallengeResourcesHyperlink';
  sys: ResourceSys;
};

export type ChallengeWithQuoteChallengeResourcesInline = ResourceLink & {
  __typename?: 'ChallengeWithQuoteChallengeResourcesInline';
  sys: ResourceSys;
};

export type ChallengeWithQuoteCollection = {
  __typename?: 'ChallengeWithQuoteCollection';
  items: Array<Maybe<ChallengeWithQuote>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ChallengeWithQuoteFilter = {
  AND?: InputMaybe<Array<InputMaybe<ChallengeWithQuoteFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ChallengeWithQuoteFilter>>>;
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  challenge_contains?: InputMaybe<Scalars['String']['input']>;
  challenge_exists?: InputMaybe<Scalars['Boolean']['input']>;
  challenge_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  jobTitle_contains?: InputMaybe<Scalars['String']['input']>;
  jobTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  jobTitle_not?: InputMaybe<Scalars['String']['input']>;
  jobTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  jobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAuthor?: InputMaybe<Scalars['String']['input']>;
  quoteAuthor_contains?: InputMaybe<Scalars['String']['input']>;
  quoteAuthor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAuthor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteAuthor_not?: InputMaybe<Scalars['String']['input']>;
  quoteAuthor_not_contains?: InputMaybe<Scalars['String']['input']>;
  quoteAuthor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteMedia_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ChallengeWithQuoteLinkingCollections = {
  __typename?: 'ChallengeWithQuoteLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ChallengeWithQuoteLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ChallengeWithQuoteLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ChallengeWithQuoteLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ChallengeWithQuoteLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum ChallengeWithQuoteOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  QuoteAuthorAsc = 'quoteAuthor_ASC',
  QuoteAuthorDesc = 'quoteAuthor_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC'
}

export type ChallengeWithQuoteQuote = {
  __typename?: 'ChallengeWithQuoteQuote';
  json: Scalars['JSON']['output'];
  links: ChallengeWithQuoteQuoteLinks;
};

export type ChallengeWithQuoteQuoteAssets = {
  __typename?: 'ChallengeWithQuoteQuoteAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ChallengeWithQuoteQuoteEntries = {
  __typename?: 'ChallengeWithQuoteQuoteEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ChallengeWithQuoteQuoteLinks = {
  __typename?: 'ChallengeWithQuoteQuoteLinks';
  assets: ChallengeWithQuoteQuoteAssets;
  entries: ChallengeWithQuoteQuoteEntries;
  resources: ChallengeWithQuoteQuoteResources;
};

export type ChallengeWithQuoteQuoteResources = {
  __typename?: 'ChallengeWithQuoteQuoteResources';
  block: Array<ChallengeWithQuoteQuoteResourcesBlock>;
  hyperlink: Array<ChallengeWithQuoteQuoteResourcesHyperlink>;
  inline: Array<ChallengeWithQuoteQuoteResourcesInline>;
};

export type ChallengeWithQuoteQuoteResourcesBlock = ResourceLink & {
  __typename?: 'ChallengeWithQuoteQuoteResourcesBlock';
  sys: ResourceSys;
};

export type ChallengeWithQuoteQuoteResourcesHyperlink = ResourceLink & {
  __typename?: 'ChallengeWithQuoteQuoteResourcesHyperlink';
  sys: ResourceSys;
};

export type ChallengeWithQuoteQuoteResourcesInline = ResourceLink & {
  __typename?: 'ChallengeWithQuoteQuoteResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/richText) */
export type ContentTypeRichText = Entry & _Node & {
  __typename?: 'ContentTypeRichText';
  _id: Scalars['ID']['output'];
  applyButton?: Maybe<Actions>;
  body?: Maybe<ContentTypeRichTextBody>;
  contentfulMetadata: ContentfulMetadata;
  extract?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<ContentTypeRichTextLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/richText) */
export type ContentTypeRichTextApplyButtonArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ActionsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/richText) */
export type ContentTypeRichTextBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/richText) */
export type ContentTypeRichTextExtractArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/richText) */
export type ContentTypeRichTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/richText) */
export type ContentTypeRichTextTitleArgs = {
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
  applyButton?: InputMaybe<CfActionsNestedFilter>;
  applyButton_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extract_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extract_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extract_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extract_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentTypeRichTextLinkingCollections = {
  __typename?: 'ContentTypeRichTextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
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

export enum ContentTypeRichTextLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum ContentTypeRichTextOrder {
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

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type Hero = Entry & _Node & {
  __typename?: 'Hero';
  _id: Scalars['ID']['output'];
  actionCollection?: Maybe<HeroActionCollection>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  bottomDistance?: Maybe<Scalars['String']['output']>;
  contentList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<HeroDescription>;
  disclaimer?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HeroLinkingCollections>;
  media?: Maybe<Asset>;
  mediaMobile?: Maybe<Asset>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  titleTags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  topDistance?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroActionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroActionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroContentListArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroDisclaimerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroMediaMobileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroTitleTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/hero) */
export type HeroTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeroActionCollection = {
  __typename?: 'HeroActionCollection';
  items: Array<Maybe<Actions>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HeroActionCollectionOrder {
  ArrowAsc = 'arrow_ASC',
  ArrowDesc = 'arrow_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PopupUrlAsc = 'popupUrl_ASC',
  PopupUrlDesc = 'popupUrl_DESC',
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
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC'
}

export type HeroCollection = {
  __typename?: 'HeroCollection';
  items: Array<Maybe<Hero>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroDescription = {
  __typename?: 'HeroDescription';
  json: Scalars['JSON']['output'];
  links: HeroDescriptionLinks;
};

export type HeroDescriptionAssets = {
  __typename?: 'HeroDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeroDescriptionEntries = {
  __typename?: 'HeroDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeroDescriptionLinks = {
  __typename?: 'HeroDescriptionLinks';
  assets: HeroDescriptionAssets;
  entries: HeroDescriptionEntries;
  resources: HeroDescriptionResources;
};

export type HeroDescriptionResources = {
  __typename?: 'HeroDescriptionResources';
  block: Array<HeroDescriptionResourcesBlock>;
  hyperlink: Array<HeroDescriptionResourcesHyperlink>;
  inline: Array<HeroDescriptionResourcesInline>;
};

export type HeroDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'HeroDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type HeroDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'HeroDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type HeroDescriptionResourcesInline = ResourceLink & {
  __typename?: 'HeroDescriptionResourcesInline';
  sys: ResourceSys;
};

export type HeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  action?: InputMaybe<CfActionsNestedFilter>;
  actionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  disclaimer?: InputMaybe<Scalars['String']['input']>;
  disclaimer_contains?: InputMaybe<Scalars['String']['input']>;
  disclaimer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  disclaimer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  disclaimer_not?: InputMaybe<Scalars['String']['input']>;
  disclaimer_not_contains?: InputMaybe<Scalars['String']['input']>;
  disclaimer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mediaMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleTags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleTags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleTags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleTags_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeroLinkingCollections = {
  __typename?: 'HeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type HeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeroLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum HeroOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  DisclaimerAsc = 'disclaimer_ASC',
  DisclaimerDesc = 'disclaimer_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
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

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSlider = Entry & _Node & {
  __typename?: 'LogoSlider';
  _id: Scalars['ID']['output'];
  background?: Maybe<Scalars['Boolean']['output']>;
  bottomDistance?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<LogoSliderDescription>;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<LogoSliderLinkingCollections>;
  mediaCollection?: Maybe<AssetCollection>;
  moving?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  titleSize?: Maybe<Scalars['String']['output']>;
  topDistance?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSliderBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSliderBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSliderDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSliderIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSliderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSliderMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSliderMovingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSliderTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSliderTitleSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSliderTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/logoSlider) */
export type LogoSliderTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LogoSliderCollection = {
  __typename?: 'LogoSliderCollection';
  items: Array<Maybe<LogoSlider>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LogoSliderDescription = {
  __typename?: 'LogoSliderDescription';
  json: Scalars['JSON']['output'];
  links: LogoSliderDescriptionLinks;
};

export type LogoSliderDescriptionAssets = {
  __typename?: 'LogoSliderDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type LogoSliderDescriptionEntries = {
  __typename?: 'LogoSliderDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type LogoSliderDescriptionLinks = {
  __typename?: 'LogoSliderDescriptionLinks';
  assets: LogoSliderDescriptionAssets;
  entries: LogoSliderDescriptionEntries;
  resources: LogoSliderDescriptionResources;
};

export type LogoSliderDescriptionResources = {
  __typename?: 'LogoSliderDescriptionResources';
  block: Array<LogoSliderDescriptionResourcesBlock>;
  hyperlink: Array<LogoSliderDescriptionResourcesHyperlink>;
  inline: Array<LogoSliderDescriptionResourcesInline>;
};

export type LogoSliderDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'LogoSliderDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type LogoSliderDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'LogoSliderDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type LogoSliderDescriptionResourcesInline = ResourceLink & {
  __typename?: 'LogoSliderDescriptionResourcesInline';
  sys: ResourceSys;
};

export type LogoSliderFilter = {
  AND?: InputMaybe<Array<InputMaybe<LogoSliderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LogoSliderFilter>>>;
  background?: InputMaybe<Scalars['Boolean']['input']>;
  background_exists?: InputMaybe<Scalars['Boolean']['input']>;
  background_not?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mediaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  moving?: InputMaybe<Scalars['Boolean']['input']>;
  moving_exists?: InputMaybe<Scalars['Boolean']['input']>;
  moving_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
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
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LogoSliderLinkingCollections = {
  __typename?: 'LogoSliderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type LogoSliderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LogoSliderLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LogoSliderLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LogoSliderLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum LogoSliderOrder {
  BackgroundAsc = 'background_ASC',
  BackgroundDesc = 'background_DESC',
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  MovingAsc = 'moving_ASC',
  MovingDesc = 'moving_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleSizeAsc = 'titleSize_ASC',
  TitleSizeDesc = 'titleSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type Page = Entry & _Node & {
  __typename?: 'Page';
  _id: Scalars['ID']['output'];
  contentCollection?: Maybe<PageContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  media?: Maybe<Asset>;
  mediaMobile?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  publicationDate?: Maybe<Scalars['DateTime']['output']>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoImage?: Maybe<Asset>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  supertitleShortText?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageContentFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageMediaMobileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PagePublicationDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageSeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageSeoImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageSeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageSupertitleShortTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
export type PageTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/page) */
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

export type PageContentItem = BenefitsCta | CardHolder | CaseIntro | CaseStudy | CaseSummary | ChallengeWithQuote | ContentTypeRichText | Hero | LogoSlider | Slice | StandardComponent | TabHolder | UniqueComponent;

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
  mediaMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  supertitleShortText?: InputMaybe<Scalars['String']['input']>;
  supertitleShortText_contains?: InputMaybe<Scalars['String']['input']>;
  supertitleShortText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  supertitleShortText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  supertitleShortText_not?: InputMaybe<Scalars['String']['input']>;
  supertitleShortText_not_contains?: InputMaybe<Scalars['String']['input']>;
  supertitleShortText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  actionsCollection?: Maybe<ActionsCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsActionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsActionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageLinkingCollectionsActionsCollectionOrder {
  ArrowAsc = 'arrow_ASC',
  ArrowDesc = 'arrow_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PopupUrlAsc = 'popupUrl_ASC',
  PopupUrlDesc = 'popupUrl_DESC',
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
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC'
}

export enum PageOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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
  actions?: Maybe<Actions>;
  actionsCollection?: Maybe<ActionsCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  benefitsCta?: Maybe<BenefitsCta>;
  benefitsCtaCollection?: Maybe<BenefitsCtaCollection>;
  cardData?: Maybe<CardData>;
  cardDataCollection?: Maybe<CardDataCollection>;
  cardHolder?: Maybe<CardHolder>;
  cardHolderCollection?: Maybe<CardHolderCollection>;
  caseIntro?: Maybe<CaseIntro>;
  caseIntroCollection?: Maybe<CaseIntroCollection>;
  caseStudy?: Maybe<CaseStudy>;
  caseStudyCollection?: Maybe<CaseStudyCollection>;
  caseSummary?: Maybe<CaseSummary>;
  caseSummaryCollection?: Maybe<CaseSummaryCollection>;
  challengeWithQuote?: Maybe<ChallengeWithQuote>;
  challengeWithQuoteCollection?: Maybe<ChallengeWithQuoteCollection>;
  contentTypeRichText?: Maybe<ContentTypeRichText>;
  contentTypeRichTextCollection?: Maybe<ContentTypeRichTextCollection>;
  entryCollection?: Maybe<EntryCollection>;
  hero?: Maybe<Hero>;
  heroCollection?: Maybe<HeroCollection>;
  logoSlider?: Maybe<LogoSlider>;
  logoSliderCollection?: Maybe<LogoSliderCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  slice?: Maybe<Slice>;
  sliceCollection?: Maybe<SliceCollection>;
  standardComponent?: Maybe<StandardComponent>;
  standardComponentCollection?: Maybe<StandardComponentCollection>;
  tab?: Maybe<Tab>;
  tabCollection?: Maybe<TabCollection>;
  tabHolder?: Maybe<TabHolder>;
  tabHolderCollection?: Maybe<TabHolderCollection>;
  uniqueComponent?: Maybe<UniqueComponent>;
  uniqueComponentCollection?: Maybe<UniqueComponentCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryActionsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryActionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ActionsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionsFilter>;
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


export type QueryBenefitsCtaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBenefitsCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BenefitsCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BenefitsCtaFilter>;
};


export type QueryCardDataArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCardDataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardDataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardDataFilter>;
};


export type QueryCardHolderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCardHolderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardHolderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardHolderFilter>;
};


export type QueryCaseIntroArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCaseIntroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseIntroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CaseIntroFilter>;
};


export type QueryCaseStudyArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCaseStudyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseStudyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CaseStudyFilter>;
};


export type QueryCaseSummaryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCaseSummaryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseSummaryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CaseSummaryFilter>;
};


export type QueryChallengeWithQuoteArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryChallengeWithQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ChallengeWithQuoteOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChallengeWithQuoteFilter>;
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


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryHeroArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroFilter>;
};


export type QueryLogoSliderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLogoSliderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LogoSliderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogoSliderFilter>;
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


export type QuerySliceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySliceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SliceFilter>;
};


export type QueryStandardComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryStandardComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StandardComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StandardComponentFilter>;
};


export type QueryTabArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTabCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TabFilter>;
};


export type QueryTabHolderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTabHolderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabHolderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TabHolderFilter>;
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

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type Slice = Entry & _Node & {
  __typename?: 'Slice';
  _id: Scalars['ID']['output'];
  bottomDistance?: Maybe<Scalars['String']['output']>;
  buttonsCollection?: Maybe<SliceButtonsCollection>;
  color?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<SliceDescription>;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<SliceLinkingCollections>;
  logo?: Maybe<Asset>;
  role?: Maybe<Scalars['String']['output']>;
  superIcon?: Maybe<Asset>;
  superTitle?: Maybe<SliceSuperTitle>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  topDistance?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceButtonsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliceButtonsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceRoleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceSuperIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceSuperTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/slice) */
export type SliceTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SliceButtonsCollection = {
  __typename?: 'SliceButtonsCollection';
  items: Array<Maybe<Actions>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SliceButtonsCollectionOrder {
  ArrowAsc = 'arrow_ASC',
  ArrowDesc = 'arrow_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PopupUrlAsc = 'popupUrl_ASC',
  PopupUrlDesc = 'popupUrl_DESC',
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
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC'
}

export type SliceCollection = {
  __typename?: 'SliceCollection';
  items: Array<Maybe<Slice>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SliceDescription = {
  __typename?: 'SliceDescription';
  json: Scalars['JSON']['output'];
  links: SliceDescriptionLinks;
};

export type SliceDescriptionAssets = {
  __typename?: 'SliceDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SliceDescriptionEntries = {
  __typename?: 'SliceDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SliceDescriptionLinks = {
  __typename?: 'SliceDescriptionLinks';
  assets: SliceDescriptionAssets;
  entries: SliceDescriptionEntries;
  resources: SliceDescriptionResources;
};

export type SliceDescriptionResources = {
  __typename?: 'SliceDescriptionResources';
  block: Array<SliceDescriptionResourcesBlock>;
  hyperlink: Array<SliceDescriptionResourcesHyperlink>;
  inline: Array<SliceDescriptionResourcesInline>;
};

export type SliceDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'SliceDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type SliceDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'SliceDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type SliceDescriptionResourcesInline = ResourceLink & {
  __typename?: 'SliceDescriptionResourcesInline';
  sys: ResourceSys;
};

export type SliceFilter = {
  AND?: InputMaybe<Array<InputMaybe<SliceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SliceFilter>>>;
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttons?: InputMaybe<CfActionsNestedFilter>;
  buttonsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_contains?: InputMaybe<Scalars['String']['input']>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_not?: InputMaybe<Scalars['String']['input']>;
  color_not_contains?: InputMaybe<Scalars['String']['input']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_exists?: InputMaybe<Scalars['Boolean']['input']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  superIcon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  superTitle_contains?: InputMaybe<Scalars['String']['input']>;
  superTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  superTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SliceLinkingCollections = {
  __typename?: 'SliceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type SliceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SliceLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliceLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SliceLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum SliceOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type SliceSuperTitle = {
  __typename?: 'SliceSuperTitle';
  json: Scalars['JSON']['output'];
  links: SliceSuperTitleLinks;
};

export type SliceSuperTitleAssets = {
  __typename?: 'SliceSuperTitleAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SliceSuperTitleEntries = {
  __typename?: 'SliceSuperTitleEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SliceSuperTitleLinks = {
  __typename?: 'SliceSuperTitleLinks';
  assets: SliceSuperTitleAssets;
  entries: SliceSuperTitleEntries;
  resources: SliceSuperTitleResources;
};

export type SliceSuperTitleResources = {
  __typename?: 'SliceSuperTitleResources';
  block: Array<SliceSuperTitleResourcesBlock>;
  hyperlink: Array<SliceSuperTitleResourcesHyperlink>;
  inline: Array<SliceSuperTitleResourcesInline>;
};

export type SliceSuperTitleResourcesBlock = ResourceLink & {
  __typename?: 'SliceSuperTitleResourcesBlock';
  sys: ResourceSys;
};

export type SliceSuperTitleResourcesHyperlink = ResourceLink & {
  __typename?: 'SliceSuperTitleResourcesHyperlink';
  sys: ResourceSys;
};

export type SliceSuperTitleResourcesInline = ResourceLink & {
  __typename?: 'SliceSuperTitleResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/standardComponent) */
export type StandardComponent = Entry & _Node & {
  __typename?: 'StandardComponent';
  _id: Scalars['ID']['output'];
  actionCollection?: Maybe<StandardComponentActionCollection>;
  bottomDistance?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<StandardComponentDescription>;
  featuers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<StandardComponentLinkingCollections>;
  media?: Maybe<Asset>;
  sys: Sys;
  textPosition?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topDistance?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/standardComponent) */
export type StandardComponentActionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StandardComponentActionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/standardComponent) */
export type StandardComponentBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/standardComponent) */
export type StandardComponentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/standardComponent) */
export type StandardComponentFeatuersArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/standardComponent) */
export type StandardComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/standardComponent) */
export type StandardComponentMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/standardComponent) */
export type StandardComponentTextPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/standardComponent) */
export type StandardComponentTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/standardComponent) */
export type StandardComponentTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type StandardComponentActionCollection = {
  __typename?: 'StandardComponentActionCollection';
  items: Array<Maybe<Actions>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum StandardComponentActionCollectionOrder {
  ArrowAsc = 'arrow_ASC',
  ArrowDesc = 'arrow_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PopupUrlAsc = 'popupUrl_ASC',
  PopupUrlDesc = 'popupUrl_DESC',
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
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC'
}

export type StandardComponentCollection = {
  __typename?: 'StandardComponentCollection';
  items: Array<Maybe<StandardComponent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type StandardComponentDescription = {
  __typename?: 'StandardComponentDescription';
  json: Scalars['JSON']['output'];
  links: StandardComponentDescriptionLinks;
};

export type StandardComponentDescriptionAssets = {
  __typename?: 'StandardComponentDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type StandardComponentDescriptionEntries = {
  __typename?: 'StandardComponentDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type StandardComponentDescriptionLinks = {
  __typename?: 'StandardComponentDescriptionLinks';
  assets: StandardComponentDescriptionAssets;
  entries: StandardComponentDescriptionEntries;
  resources: StandardComponentDescriptionResources;
};

export type StandardComponentDescriptionResources = {
  __typename?: 'StandardComponentDescriptionResources';
  block: Array<StandardComponentDescriptionResourcesBlock>;
  hyperlink: Array<StandardComponentDescriptionResourcesHyperlink>;
  inline: Array<StandardComponentDescriptionResourcesInline>;
};

export type StandardComponentDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'StandardComponentDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type StandardComponentDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'StandardComponentDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type StandardComponentDescriptionResourcesInline = ResourceLink & {
  __typename?: 'StandardComponentDescriptionResourcesInline';
  sys: ResourceSys;
};

export type StandardComponentFilter = {
  AND?: InputMaybe<Array<InputMaybe<StandardComponentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StandardComponentFilter>>>;
  action?: InputMaybe<CfActionsNestedFilter>;
  actionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  featuers_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuers_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuers_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featuers_exists?: InputMaybe<Scalars['Boolean']['input']>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  textPosition?: InputMaybe<Scalars['String']['input']>;
  textPosition_contains?: InputMaybe<Scalars['String']['input']>;
  textPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textPosition_not?: InputMaybe<Scalars['String']['input']>;
  textPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  textPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StandardComponentLinkingCollections = {
  __typename?: 'StandardComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type StandardComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type StandardComponentLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StandardComponentLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum StandardComponentLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum StandardComponentOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextPositionAsc = 'textPosition_ASC',
  TextPositionDesc = 'textPosition_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC'
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

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type Tab = Entry & _Node & {
  __typename?: 'Tab';
  _id: Scalars['ID']['output'];
  actionsCollection?: Maybe<TabActionsCollection>;
  contentBody?: Maybe<TabContentBody>;
  contentDescription?: Maybe<Scalars['String']['output']>;
  contentImage?: Maybe<Asset>;
  contentList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentTitle?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TabLinkingCollections>;
  mediaAlignment?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tabDescription?: Maybe<Scalars['String']['output']>;
  tabIcon?: Maybe<Asset>;
  tabTitle?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type TabActionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabActionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type TabContentBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type TabContentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type TabContentImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type TabContentListArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type TabContentTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type TabLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type TabMediaAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type TabTabDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type TabTabIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tab) */
export type TabTabTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TabActionsCollection = {
  __typename?: 'TabActionsCollection';
  items: Array<Maybe<Actions>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TabActionsCollectionOrder {
  ArrowAsc = 'arrow_ASC',
  ArrowDesc = 'arrow_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PopupUrlAsc = 'popupUrl_ASC',
  PopupUrlDesc = 'popupUrl_DESC',
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
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC'
}

export type TabCollection = {
  __typename?: 'TabCollection';
  items: Array<Maybe<Tab>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TabContentBody = {
  __typename?: 'TabContentBody';
  json: Scalars['JSON']['output'];
  links: TabContentBodyLinks;
};

export type TabContentBodyAssets = {
  __typename?: 'TabContentBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TabContentBodyEntries = {
  __typename?: 'TabContentBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TabContentBodyLinks = {
  __typename?: 'TabContentBodyLinks';
  assets: TabContentBodyAssets;
  entries: TabContentBodyEntries;
  resources: TabContentBodyResources;
};

export type TabContentBodyResources = {
  __typename?: 'TabContentBodyResources';
  block: Array<TabContentBodyResourcesBlock>;
  hyperlink: Array<TabContentBodyResourcesHyperlink>;
  inline: Array<TabContentBodyResourcesInline>;
};

export type TabContentBodyResourcesBlock = ResourceLink & {
  __typename?: 'TabContentBodyResourcesBlock';
  sys: ResourceSys;
};

export type TabContentBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'TabContentBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type TabContentBodyResourcesInline = ResourceLink & {
  __typename?: 'TabContentBodyResourcesInline';
  sys: ResourceSys;
};

export type TabFilter = {
  AND?: InputMaybe<Array<InputMaybe<TabFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TabFilter>>>;
  actions?: InputMaybe<CfActionsNestedFilter>;
  actionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentBody_contains?: InputMaybe<Scalars['String']['input']>;
  contentBody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentBody_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentDescription?: InputMaybe<Scalars['String']['input']>;
  contentDescription_contains?: InputMaybe<Scalars['String']['input']>;
  contentDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentDescription_not?: InputMaybe<Scalars['String']['input']>;
  contentDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentTitle?: InputMaybe<Scalars['String']['input']>;
  contentTitle_contains?: InputMaybe<Scalars['String']['input']>;
  contentTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentTitle_not?: InputMaybe<Scalars['String']['input']>;
  contentTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  mediaAlignment?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mediaAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mediaAlignment_not?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tabDescription?: InputMaybe<Scalars['String']['input']>;
  tabDescription_contains?: InputMaybe<Scalars['String']['input']>;
  tabDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tabDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tabDescription_not?: InputMaybe<Scalars['String']['input']>;
  tabDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  tabDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tabIcon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tabTitle?: InputMaybe<Scalars['String']['input']>;
  tabTitle_contains?: InputMaybe<Scalars['String']['input']>;
  tabTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tabTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tabTitle_not?: InputMaybe<Scalars['String']['input']>;
  tabTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  tabTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolder = Entry & _Node & {
  __typename?: 'TabHolder';
  _id: Scalars['ID']['output'];
  actionsCollection?: Maybe<TabHolderActionsCollection>;
  bottomDistance?: Maybe<Scalars['String']['output']>;
  colorScheme?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TabHolderDescription>;
  headerStyle?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<TabHolderLinkingCollections>;
  sys: Sys;
  tabsCollection?: Maybe<TabHolderTabsCollection>;
  title?: Maybe<Scalars['String']['output']>;
  topDistance?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolderActionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabHolderActionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolderBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolderColorSchemeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolderDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolderHeaderStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolderIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolderTabsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabHolderTabsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TabFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolderTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolderTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/tabHolder) */
export type TabHolderTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TabHolderActionsCollection = {
  __typename?: 'TabHolderActionsCollection';
  items: Array<Maybe<Actions>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TabHolderActionsCollectionOrder {
  ArrowAsc = 'arrow_ASC',
  ArrowDesc = 'arrow_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PopupUrlAsc = 'popupUrl_ASC',
  PopupUrlDesc = 'popupUrl_DESC',
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
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC'
}

export type TabHolderCollection = {
  __typename?: 'TabHolderCollection';
  items: Array<Maybe<TabHolder>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TabHolderDescription = {
  __typename?: 'TabHolderDescription';
  json: Scalars['JSON']['output'];
  links: TabHolderDescriptionLinks;
};

export type TabHolderDescriptionAssets = {
  __typename?: 'TabHolderDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TabHolderDescriptionEntries = {
  __typename?: 'TabHolderDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TabHolderDescriptionLinks = {
  __typename?: 'TabHolderDescriptionLinks';
  assets: TabHolderDescriptionAssets;
  entries: TabHolderDescriptionEntries;
  resources: TabHolderDescriptionResources;
};

export type TabHolderDescriptionResources = {
  __typename?: 'TabHolderDescriptionResources';
  block: Array<TabHolderDescriptionResourcesBlock>;
  hyperlink: Array<TabHolderDescriptionResourcesHyperlink>;
  inline: Array<TabHolderDescriptionResourcesInline>;
};

export type TabHolderDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'TabHolderDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type TabHolderDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'TabHolderDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type TabHolderDescriptionResourcesInline = ResourceLink & {
  __typename?: 'TabHolderDescriptionResourcesInline';
  sys: ResourceSys;
};

export type TabHolderFilter = {
  AND?: InputMaybe<Array<InputMaybe<TabHolderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TabHolderFilter>>>;
  actions?: InputMaybe<CfActionsNestedFilter>;
  actionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorScheme?: InputMaybe<Scalars['String']['input']>;
  colorScheme_contains?: InputMaybe<Scalars['String']['input']>;
  colorScheme_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorScheme_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorScheme_not?: InputMaybe<Scalars['String']['input']>;
  colorScheme_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorScheme_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  headerStyle?: InputMaybe<Scalars['String']['input']>;
  headerStyle_contains?: InputMaybe<Scalars['String']['input']>;
  headerStyle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headerStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headerStyle_not?: InputMaybe<Scalars['String']['input']>;
  headerStyle_not_contains?: InputMaybe<Scalars['String']['input']>;
  headerStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  tabs?: InputMaybe<CfTabNestedFilter>;
  tabsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TabHolderLinkingCollections = {
  __typename?: 'TabHolderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TabHolderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TabHolderLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabHolderLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TabHolderLinkingCollectionsPageCollectionOrder {
  ContentfulNameAsc = 'contentfulName_ASC',
  ContentfulNameDesc = 'contentfulName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum TabHolderOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorSchemeAsc = 'colorScheme_ASC',
  ColorSchemeDesc = 'colorScheme_DESC',
  HeaderStyleAsc = 'headerStyle_ASC',
  HeaderStyleDesc = 'headerStyle_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type TabHolderTabsCollection = {
  __typename?: 'TabHolderTabsCollection';
  items: Array<Maybe<Tab>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TabHolderTabsCollectionOrder {
  ContentTitleAsc = 'contentTitle_ASC',
  ContentTitleDesc = 'contentTitle_DESC',
  MediaAlignmentAsc = 'mediaAlignment_ASC',
  MediaAlignmentDesc = 'mediaAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabDescriptionAsc = 'tabDescription_ASC',
  TabDescriptionDesc = 'tabDescription_DESC',
  TabTitleAsc = 'tabTitle_ASC',
  TabTitleDesc = 'tabTitle_DESC'
}

export type TabLinkingCollections = {
  __typename?: 'TabLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  tabHolderCollection?: Maybe<TabHolderCollection>;
};


export type TabLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TabLinkingCollectionsTabHolderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabLinkingCollectionsTabHolderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TabLinkingCollectionsTabHolderCollectionOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
  ColorSchemeAsc = 'colorScheme_ASC',
  ColorSchemeDesc = 'colorScheme_DESC',
  HeaderStyleAsc = 'headerStyle_ASC',
  HeaderStyleDesc = 'headerStyle_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum TabOrder {
  ContentTitleAsc = 'contentTitle_ASC',
  ContentTitleDesc = 'contentTitle_DESC',
  MediaAlignmentAsc = 'mediaAlignment_ASC',
  MediaAlignmentDesc = 'mediaAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabDescriptionAsc = 'tabDescription_ASC',
  TabDescriptionDesc = 'tabDescription_DESC',
  TabTitleAsc = 'tabTitle_ASC',
  TabTitleDesc = 'tabTitle_DESC'
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/uniqueComponent) */
export type UniqueComponent = Entry & _Node & {
  __typename?: 'UniqueComponent';
  _id: Scalars['ID']['output'];
  bottomDistance?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  contentfulName?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
  linkedFrom?: Maybe<UniqueComponentLinkingCollections>;
  sys: Sys;
  topDistance?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/uniqueComponent) */
export type UniqueComponentBottomDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/uniqueComponent) */
export type UniqueComponentContentfulNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/uniqueComponent) */
export type UniqueComponentJsonArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/uniqueComponent) */
export type UniqueComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/uniqueComponent) */
export type UniqueComponentTopDistanceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ktn111j92rjl/content_types/uniqueComponent) */
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
  bottomDistance?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomDistance_not?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  topDistance?: InputMaybe<Scalars['String']['input']>;
  topDistance_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_exists?: InputMaybe<Scalars['Boolean']['input']>;
  topDistance_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topDistance_not?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_contains?: InputMaybe<Scalars['String']['input']>;
  topDistance_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SupertitleShortTextAsc = 'supertitleShortText_ASC',
  SupertitleShortTextDesc = 'supertitleShortText_DESC',
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

export enum UniqueComponentOrder {
  BottomDistanceAsc = 'bottomDistance_ASC',
  BottomDistanceDesc = 'bottomDistance_DESC',
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
  TopDistanceAsc = 'topDistance_ASC',
  TopDistanceDesc = 'topDistance_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfActionsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfActionsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfActionsNestedFilter>>>;
  arrow?: InputMaybe<Scalars['Boolean']['input']>;
  arrow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  arrow_not?: InputMaybe<Scalars['Boolean']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_contains?: InputMaybe<Scalars['String']['input']>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_not?: InputMaybe<Scalars['String']['input']>;
  color_not_contains?: InputMaybe<Scalars['String']['input']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external?: InputMaybe<Scalars['String']['input']>;
  external_contains?: InputMaybe<Scalars['String']['input']>;
  external_exists?: InputMaybe<Scalars['Boolean']['input']>;
  external_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_not?: InputMaybe<Scalars['String']['input']>;
  external_not_contains?: InputMaybe<Scalars['String']['input']>;
  external_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internal_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupUrl?: InputMaybe<Scalars['String']['input']>;
  popupUrl_contains?: InputMaybe<Scalars['String']['input']>;
  popupUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupUrl_not?: InputMaybe<Scalars['String']['input']>;
  popupUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  popupUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  style?: InputMaybe<Scalars['String']['input']>;
  style_contains?: InputMaybe<Scalars['String']['input']>;
  style_exists?: InputMaybe<Scalars['Boolean']['input']>;
  style_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  style_not?: InputMaybe<Scalars['String']['input']>;
  style_not_contains?: InputMaybe<Scalars['String']['input']>;
  style_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  telephone?: InputMaybe<Scalars['String']['input']>;
  telephone_contains?: InputMaybe<Scalars['String']['input']>;
  telephone_exists?: InputMaybe<Scalars['Boolean']['input']>;
  telephone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  telephone_not?: InputMaybe<Scalars['String']['input']>;
  telephone_not_contains?: InputMaybe<Scalars['String']['input']>;
  telephone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfCardDataNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCardDataNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCardDataNestedFilter>>>;
  action_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  time?: InputMaybe<Scalars['String']['input']>;
  time_contains?: InputMaybe<Scalars['String']['input']>;
  time_exists?: InputMaybe<Scalars['Boolean']['input']>;
  time_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  time_not?: InputMaybe<Scalars['String']['input']>;
  time_not_contains?: InputMaybe<Scalars['String']['input']>;
  time_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  mediaMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  supertitleShortText?: InputMaybe<Scalars['String']['input']>;
  supertitleShortText_contains?: InputMaybe<Scalars['String']['input']>;
  supertitleShortText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  supertitleShortText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  supertitleShortText_not?: InputMaybe<Scalars['String']['input']>;
  supertitleShortText_not_contains?: InputMaybe<Scalars['String']['input']>;
  supertitleShortText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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

export type CfTabNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTabNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTabNestedFilter>>>;
  actionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentBody_contains?: InputMaybe<Scalars['String']['input']>;
  contentBody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentBody_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentDescription?: InputMaybe<Scalars['String']['input']>;
  contentDescription_contains?: InputMaybe<Scalars['String']['input']>;
  contentDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentDescription_not?: InputMaybe<Scalars['String']['input']>;
  contentDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentTitle?: InputMaybe<Scalars['String']['input']>;
  contentTitle_contains?: InputMaybe<Scalars['String']['input']>;
  contentTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentTitle_not?: InputMaybe<Scalars['String']['input']>;
  contentTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  mediaAlignment?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mediaAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mediaAlignment_not?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  mediaAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tabDescription?: InputMaybe<Scalars['String']['input']>;
  tabDescription_contains?: InputMaybe<Scalars['String']['input']>;
  tabDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tabDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tabDescription_not?: InputMaybe<Scalars['String']['input']>;
  tabDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  tabDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tabIcon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tabTitle?: InputMaybe<Scalars['String']['input']>;
  tabTitle_contains?: InputMaybe<Scalars['String']['input']>;
  tabTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tabTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tabTitle_not?: InputMaybe<Scalars['String']['input']>;
  tabTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  tabTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfcontentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type ButtonFieldsFragment = { __typename: 'Actions', name?: string | null, style?: string | null, color?: string | null, external?: string | null, arrow?: boolean | null, popupUrl?: string | null, email?: string | null, telephone?: string | null, sys: { __typename?: 'Sys', id: string }, internal?: { __typename?: 'Page', slug?: string | null, sys: { __typename?: 'Sys', id: string } } | null } & { ' $fragmentName'?: 'ButtonFieldsFragment' };

export type PageFieldsFragment = { __typename: 'Page', name?: string | null, slug?: string | null, seoTitle?: string | null, seoDescription?: string | null, type?: string | null, supertitleShortText?: string | null, tags?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string }, seoImage?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, description?: string | null } | null, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, mediaMobile?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null } & { ' $fragmentName'?: 'PageFieldsFragment' };

export type SliceFieldsFragment = { __typename?: 'Slice', title?: string | null, role?: string | null, color?: string | null, type?: string | null, topDistance?: string | null, bottomDistance?: string | null, sys: { __typename?: 'Sys', id: string }, superIcon?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, superTitle?: { __typename?: 'SliceSuperTitle', json: any } | null, logo?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, description?: { __typename?: 'SliceDescription', json: any } | null, icon?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, buttonsCollection?: { __typename?: 'SliceButtonsCollection', items: Array<(
      { __typename?: 'Actions' }
      & { ' $fragmentRefs'?: { 'ButtonFieldsFragment': ButtonFieldsFragment } }
    ) | null> } | null } & { ' $fragmentName'?: 'SliceFieldsFragment' };

export type TabHolderFieldsFragment = { __typename?: 'TabHolder', title?: string | null, headerStyle?: string | null, type?: string | null, colorScheme?: string | null, topDistance?: string | null, bottomDistance?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'TabHolderDescription', json: any } | null, icon?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, actionsCollection?: { __typename?: 'TabHolderActionsCollection', items: Array<(
      { __typename?: 'Actions' }
      & { ' $fragmentRefs'?: { 'ButtonFieldsFragment': ButtonFieldsFragment } }
    ) | null> } | null, tabsCollection?: { __typename?: 'TabHolderTabsCollection', items: Array<{ __typename?: 'Tab', tabTitle?: string | null, tabDescription?: string | null, mediaAlignment?: string | null, contentTitle?: string | null, contentDescription?: string | null, contentList?: Array<string | null> | null, tabIcon?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, actionsCollection?: { __typename?: 'TabActionsCollection', items: Array<(
          { __typename?: 'Actions' }
          & { ' $fragmentRefs'?: { 'ButtonFieldsFragment': ButtonFieldsFragment } }
        ) | null> } | null, contentBody?: { __typename?: 'TabContentBody', json: any } | null, contentImage?: { __typename?: 'Asset', width?: number | null, height?: number | null, url?: string | null } | null } | null> } | null } & { ' $fragmentName'?: 'TabHolderFieldsFragment' };

export type CaseStudyFieldsFragment = { __typename?: 'CaseStudy', title?: string | null, titleSize?: string | null, colorTheme?: string | null, statistics?: Array<string | null> | null, statisticsSymbol?: Array<string | null> | null, statisticsDescription?: Array<string | null> | null, topDistance?: string | null, bottomDistance?: string | null, testimonialAuthor?: string | null, testimonialRole?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'CaseStudyDescription', json: any } | null, icon?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, imageCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, testimonial?: { __typename?: 'CaseStudyTestimonial', json: any } | null, actionCollection?: { __typename?: 'CaseStudyActionCollection', items: Array<(
      { __typename?: 'Actions' }
      & { ' $fragmentRefs'?: { 'ButtonFieldsFragment': ButtonFieldsFragment } }
    ) | null> } | null } & { ' $fragmentName'?: 'CaseStudyFieldsFragment' };

export type LogoSliderFieldsFragment = { __typename?: 'LogoSlider', title?: string | null, titleSize?: string | null, type?: string | null, moving?: boolean | null, background?: boolean | null, topDistance?: string | null, bottomDistance?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'LogoSliderDescription', json: any } | null, icon?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, mediaCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null> } | null } & { ' $fragmentName'?: 'LogoSliderFieldsFragment' };

export type HeroFieldsFragment = { __typename?: 'Hero', title?: string | null, titleTags?: Array<string | null> | null, subtitle?: string | null, backgroundColor?: string | null, disclaimer?: string | null, type?: string | null, contentList?: Array<string | null> | null, topDistance?: string | null, bottomDistance?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'HeroDescription', json: any } | null, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, mediaMobile?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, actionCollection?: { __typename?: 'HeroActionCollection', items: Array<(
      { __typename?: 'Actions' }
      & { ' $fragmentRefs'?: { 'ButtonFieldsFragment': ButtonFieldsFragment } }
    ) | null> } | null } & { ' $fragmentName'?: 'HeroFieldsFragment' };

export type StandardComponentFieldsFragment = { __typename?: 'StandardComponent', title?: string | null, featuers?: Array<string | null> | null, textPosition?: string | null, topDistance?: string | null, bottomDistance?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'StandardComponentDescription', json: any } | null, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, actionCollection?: { __typename?: 'StandardComponentActionCollection', items: Array<(
      { __typename?: 'Actions' }
      & { ' $fragmentRefs'?: { 'ButtonFieldsFragment': ButtonFieldsFragment } }
    ) | null> } | null } & { ' $fragmentName'?: 'StandardComponentFieldsFragment' };

export type CardHolderFieldsFragment = { __typename?: 'CardHolder', title?: string | null, colorTheme?: string | null, type?: string | null, titleSize?: string | null, topDistance?: string | null, bottomDistance?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, mediaMobile?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, description?: { __typename?: 'CardHolderDescription', json: any } | null, actionCollection?: { __typename?: 'CardHolderActionCollection', items: Array<(
      { __typename?: 'Actions' }
      & { ' $fragmentRefs'?: { 'ButtonFieldsFragment': ButtonFieldsFragment } }
    ) | null> } | null, cardDataCollection?: { __typename?: 'CardHolderCardDataCollection', items: Array<{ __typename?: 'CardData', title?: string | null, time?: string | null, textColor?: string | null, name?: string | null, role?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'CardDataDescription', json: any } | null, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, action?: (
        { __typename?: 'Actions' }
        & { ' $fragmentRefs'?: { 'ButtonFieldsFragment': ButtonFieldsFragment } }
      ) | null } | null> } | null } & { ' $fragmentName'?: 'CardHolderFieldsFragment' };

export type RichTextFieldsFragment = { __typename?: 'ContentTypeRichText', title?: string | null, extract?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string }, applyButton?: { __typename?: 'Actions', style?: string | null, external?: string | null, arrow?: boolean | null, color?: string | null, name?: string | null, popupUrl?: string | null, email?: string | null, telephone?: string | null, internal?: { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null } | null, body?: { __typename?: 'ContentTypeRichTextBody', json: any } | null } & { ' $fragmentName'?: 'RichTextFieldsFragment' };

export type UniqueComponentsFieldsFragment = { __typename?: 'UniqueComponent', type?: string | null, json?: any | null, topDistance?: string | null, bottomDistance?: string | null, sys: { __typename?: 'Sys', id: string } } & { ' $fragmentName'?: 'UniqueComponentsFieldsFragment' };

export type BenefitsCtaFieldsFragment = { __typename?: 'BenefitsCta', title?: string | null, points?: Array<string | null> | null, details?: string | null, topDistance?: string | null, bottomDistance?: string | null, colorTheme?: string | null, mediaAlignment?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'BenefitsCtaDescription', json: any } | null, icon?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, button?: (
    { __typename?: 'Actions' }
    & { ' $fragmentRefs'?: { 'ButtonFieldsFragment': ButtonFieldsFragment } }
  ) | null } & { ' $fragmentName'?: 'BenefitsCtaFieldsFragment' };

export type CaseIntroFieldsFragment = { __typename?: 'CaseIntro', title?: string | null, subtitle?: string | null, topDistance?: string | null, bottomDistance?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'CaseIntroDescription', json: any } | null, logo?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, miniCardsCollection?: { __typename?: 'CaseIntroMiniCardsCollection', items: Array<{ __typename?: 'CardData', title?: string | null, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null } & { ' $fragmentName'?: 'CaseIntroFieldsFragment' };

export type CaseSummaryFieldsFragment = { __typename?: 'CaseSummary', title?: string | null, topDistance?: string | null, bottomDistance?: string | null, sys: { __typename?: 'Sys', id: string }, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, keyInsightCollection?: { __typename?: 'CaseSummaryKeyInsightCollection', items: Array<{ __typename?: 'CardData', title?: string | null, description?: { __typename?: 'CardDataDescription', json: any } | null } | null> } | null } & { ' $fragmentName'?: 'CaseSummaryFieldsFragment' };

export type ChallengeWithQuoteFieldsFragment = { __typename?: 'ChallengeWithQuote', title?: string | null, topDistance?: string | null, bottomDistance?: string | null, quoteAuthor?: string | null, jobTitle?: string | null, sys: { __typename?: 'Sys', id: string }, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, challenge?: { __typename?: 'ChallengeWithQuoteChallenge', json: any } | null, quote?: { __typename?: 'ChallengeWithQuoteQuote', json: any } | null, quoteMedia?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null } & { ' $fragmentName'?: 'ChallengeWithQuoteFieldsFragment' };

export type PageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type PageSlugsQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug?: string | null } | null> } | null };

export type PageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type PageQuery = { __typename?: 'Query', pageCollection?: { __typename: 'PageCollection', items: Array<(
      { __typename?: 'Page', contentCollection?: { __typename: 'PageContentCollection', items: Array<{ __typename: 'BenefitsCta' } | { __typename: 'CardHolder' } | { __typename: 'CaseIntro' } | { __typename: 'CaseStudy' } | { __typename: 'CaseSummary' } | { __typename: 'ChallengeWithQuote' } | { __typename: 'ContentTypeRichText' } | { __typename: 'Hero' } | { __typename: 'LogoSlider' } | { __typename: 'Slice' } | { __typename: 'StandardComponent' } | { __typename: 'TabHolder' } | { __typename: 'UniqueComponent' } | null> } | null }
      & { ' $fragmentRefs'?: { 'PageFieldsFragment': PageFieldsFragment } }
    ) | null> } | null };

export type PageContentQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PageContentQuery = { __typename?: 'Query', pageCollection?: { __typename: 'PageCollection', items: Array<{ __typename?: 'Page', contentCollection?: { __typename: 'PageContentCollection', items: Array<(
          { __typename: 'BenefitsCta' }
          & { ' $fragmentRefs'?: { 'BenefitsCtaFieldsFragment': BenefitsCtaFieldsFragment } }
        ) | (
          { __typename: 'CardHolder' }
          & { ' $fragmentRefs'?: { 'CardHolderFieldsFragment': CardHolderFieldsFragment } }
        ) | (
          { __typename: 'CaseIntro' }
          & { ' $fragmentRefs'?: { 'CaseIntroFieldsFragment': CaseIntroFieldsFragment } }
        ) | (
          { __typename: 'CaseStudy' }
          & { ' $fragmentRefs'?: { 'CaseStudyFieldsFragment': CaseStudyFieldsFragment } }
        ) | (
          { __typename: 'CaseSummary' }
          & { ' $fragmentRefs'?: { 'CaseSummaryFieldsFragment': CaseSummaryFieldsFragment } }
        ) | (
          { __typename: 'ChallengeWithQuote' }
          & { ' $fragmentRefs'?: { 'ChallengeWithQuoteFieldsFragment': ChallengeWithQuoteFieldsFragment } }
        ) | (
          { __typename: 'ContentTypeRichText' }
          & { ' $fragmentRefs'?: { 'RichTextFieldsFragment': RichTextFieldsFragment } }
        ) | (
          { __typename: 'Hero' }
          & { ' $fragmentRefs'?: { 'HeroFieldsFragment': HeroFieldsFragment } }
        ) | (
          { __typename: 'LogoSlider' }
          & { ' $fragmentRefs'?: { 'LogoSliderFieldsFragment': LogoSliderFieldsFragment } }
        ) | (
          { __typename: 'Slice' }
          & { ' $fragmentRefs'?: { 'SliceFieldsFragment': SliceFieldsFragment } }
        ) | (
          { __typename: 'StandardComponent' }
          & { ' $fragmentRefs'?: { 'StandardComponentFieldsFragment': StandardComponentFieldsFragment } }
        ) | (
          { __typename: 'TabHolder' }
          & { ' $fragmentRefs'?: { 'TabHolderFieldsFragment': TabHolderFieldsFragment } }
        ) | (
          { __typename: 'UniqueComponent' }
          & { ' $fragmentRefs'?: { 'UniqueComponentsFieldsFragment': UniqueComponentsFieldsFragment } }
        ) | null> } | null } | null> } | null };

export type AssetQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type AssetQuery = { __typename?: 'Query', asset?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, url?: string | null, width?: number | null, height?: number | null } | null };

export type EntryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type EntryQuery = { __typename?: 'Query', entryCollection?: { __typename?: 'EntryCollection', items: Array<(
      { __typename: 'Actions', sys: { __typename?: 'Sys', id: string } }
      & { ' $fragmentRefs'?: { 'ButtonFieldsFragment': ButtonFieldsFragment } }
    ) | (
      { __typename: 'BenefitsCta', sys: { __typename?: 'Sys', id: string } }
      & { ' $fragmentRefs'?: { 'BenefitsCtaFieldsFragment': BenefitsCtaFieldsFragment } }
    ) | { __typename: 'CardData', sys: { __typename?: 'Sys', id: string } } | (
      { __typename: 'CardHolder', sys: { __typename?: 'Sys', id: string } }
      & { ' $fragmentRefs'?: { 'CardHolderFieldsFragment': CardHolderFieldsFragment } }
    ) | (
      { __typename: 'CaseIntro', sys: { __typename?: 'Sys', id: string } }
      & { ' $fragmentRefs'?: { 'CaseIntroFieldsFragment': CaseIntroFieldsFragment } }
    ) | (
      { __typename: 'CaseStudy', sys: { __typename?: 'Sys', id: string } }
      & { ' $fragmentRefs'?: { 'CaseStudyFieldsFragment': CaseStudyFieldsFragment } }
    ) | (
      { __typename: 'CaseSummary', sys: { __typename?: 'Sys', id: string } }
      & { ' $fragmentRefs'?: { 'CaseSummaryFieldsFragment': CaseSummaryFieldsFragment } }
    ) | (
      { __typename: 'ChallengeWithQuote', sys: { __typename?: 'Sys', id: string } }
      & { ' $fragmentRefs'?: { 'ChallengeWithQuoteFieldsFragment': ChallengeWithQuoteFieldsFragment } }
    ) | { __typename: 'ContentTypeRichText', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Hero', sys: { __typename?: 'Sys', id: string } } | (
      { __typename: 'LogoSlider', sys: { __typename?: 'Sys', id: string } }
      & { ' $fragmentRefs'?: { 'LogoSliderFieldsFragment': LogoSliderFieldsFragment } }
    ) | { __typename: 'Page', slug?: string | null, sys: { __typename?: 'Sys', id: string } } | (
      { __typename: 'Slice', sys: { __typename?: 'Sys', id: string } }
      & { ' $fragmentRefs'?: { 'SliceFieldsFragment': SliceFieldsFragment } }
    ) | { __typename: 'StandardComponent', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Tab', sys: { __typename?: 'Sys', id: string } } | (
      { __typename: 'TabHolder', sys: { __typename?: 'Sys', id: string } }
      & { ' $fragmentRefs'?: { 'TabHolderFieldsFragment': TabHolderFieldsFragment } }
    ) | { __typename: 'UniqueComponent', sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { __typename?: 'Query', uniqueComponentCollection?: { __typename?: 'UniqueComponentCollection', items: Array<{ __typename?: 'UniqueComponent', json?: any | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { __typename?: 'Query', uniqueComponentCollection?: { __typename?: 'UniqueComponentCollection', items: Array<{ __typename?: 'UniqueComponent', json?: any | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type PageWithRichTextQueryVariables = Exact<{ [key: string]: never; }>;


export type PageWithRichTextQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug?: string | null, contentCollection?: { __typename?: 'PageContentCollection', items: Array<{ __typename: 'BenefitsCta' } | { __typename: 'CardHolder' } | { __typename: 'CaseIntro' } | { __typename: 'CaseStudy' } | { __typename: 'CaseSummary' } | { __typename: 'ChallengeWithQuote' } | (
          { __typename: 'ContentTypeRichText' }
          & { ' $fragmentRefs'?: { 'RichTextFieldsFragment': RichTextFieldsFragment } }
        ) | { __typename: 'Hero' } | { __typename: 'LogoSlider' } | { __typename: 'Slice' } | { __typename: 'StandardComponent' } | { __typename: 'TabHolder' } | { __typename: 'UniqueComponent' } | null> } | null } | null> } | null };

export type RichTextWithLimitQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
}>;


export type RichTextWithLimitQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', name?: string | null, supertitleShortText?: string | null, slug?: string | null, tags?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string }, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };

export type AllRichTextQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllRichTextQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', name?: string | null, supertitleShortText?: string | null, slug?: string | null, tags?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string }, media?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };

export const PageFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"seoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"seoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"seoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"supertitleShortText"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<PageFieldsFragment, unknown>;
export const ButtonFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ButtonFieldsFragment, unknown>;
export const SliceFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"superIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"superTitle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SliceFieldsFragment, unknown>;
export const TabHolderFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TabHolderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TabHolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"headerStyle"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"colorScheme"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"tabsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tabTitle"}},{"kind":"Field","name":{"kind":"Name","value":"tabDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tabIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaAlignment"}},{"kind":"Field","name":{"kind":"Name","value":"contentTitle"}},{"kind":"Field","name":{"kind":"Name","value":"contentDescription"}},{"kind":"Field","name":{"kind":"Name","value":"contentList"}},{"kind":"Field","name":{"kind":"Name","value":"actionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<TabHolderFieldsFragment, unknown>;
export const CaseStudyFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseStudyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseStudy"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"titleSize"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"colorTheme"}},{"kind":"Field","name":{"kind":"Name","value":"statistics"}},{"kind":"Field","name":{"kind":"Name","value":"statisticsSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"statisticsDescription"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"imageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testimonial"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"testimonialAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"testimonialRole"}},{"kind":"Field","name":{"kind":"Name","value":"actionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CaseStudyFieldsFragment, unknown>;
export const LogoSliderFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoSliderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoSlider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"titleSize"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"moving"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<LogoSliderFieldsFragment, unknown>;
export const HeroFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"titleTags"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"disclaimer"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"contentList"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<HeroFieldsFragment, unknown>;
export const StandardComponentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StandardComponentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandardComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuers"}},{"kind":"Field","name":{"kind":"Name","value":"textPosition"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actionCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<StandardComponentFieldsFragment, unknown>;
export const CardHolderFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardHolderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardHolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"colorTheme"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titleSize"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"actionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardDataCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"textColor"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CardHolderFieldsFragment, unknown>;
export const RichTextFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentTypeRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"extract"}},{"kind":"Field","name":{"kind":"Name","value":"applyButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]} as unknown as DocumentNode<RichTextFieldsFragment, unknown>;
export const UniqueComponentsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UniqueComponentsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UniqueComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}}]}}]} as unknown as DocumentNode<UniqueComponentsFieldsFragment, unknown>;
export const BenefitsCtaFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BenefitsCtaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BenefitsCta"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"colorTheme"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaAlignment"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<BenefitsCtaFieldsFragment, unknown>;
export const CaseIntroFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseIntroFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseIntro"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"miniCardsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CaseIntroFieldsFragment, unknown>;
export const CaseSummaryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseSummary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"keyInsightCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"8"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CaseSummaryFieldsFragment, unknown>;
export const ChallengeWithQuoteFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChallengeWithQuoteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChallengeWithQuote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"challenge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quoteMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quoteAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}}]} as unknown as DocumentNode<ChallengeWithQuoteFieldsFragment, unknown>;
export const PageSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_not_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"404","block":false}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<PageSlugsQuery, PageSlugsQueryVariables>;
export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageFields"}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"seoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"seoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"seoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"supertitleShortText"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const PageContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliceFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TabHolderFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CaseStudyFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoSliderFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StandardComponentFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardHolderFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UniqueComponentsFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BenefitsCtaFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CaseIntroFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CaseSummaryFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChallengeWithQuoteFields"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"superIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"superTitle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TabHolderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TabHolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"headerStyle"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"colorScheme"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"tabsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tabTitle"}},{"kind":"Field","name":{"kind":"Name","value":"tabDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tabIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaAlignment"}},{"kind":"Field","name":{"kind":"Name","value":"contentTitle"}},{"kind":"Field","name":{"kind":"Name","value":"contentDescription"}},{"kind":"Field","name":{"kind":"Name","value":"contentList"}},{"kind":"Field","name":{"kind":"Name","value":"actionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseStudyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseStudy"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"titleSize"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"colorTheme"}},{"kind":"Field","name":{"kind":"Name","value":"statistics"}},{"kind":"Field","name":{"kind":"Name","value":"statisticsSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"statisticsDescription"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"imageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testimonial"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"testimonialAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"testimonialRole"}},{"kind":"Field","name":{"kind":"Name","value":"actionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoSliderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoSlider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"titleSize"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"moving"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"titleTags"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"disclaimer"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"contentList"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StandardComponentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandardComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuers"}},{"kind":"Field","name":{"kind":"Name","value":"textPosition"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actionCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardHolderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardHolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"colorTheme"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titleSize"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"actionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardDataCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"textColor"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentTypeRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"extract"}},{"kind":"Field","name":{"kind":"Name","value":"applyButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UniqueComponentsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UniqueComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BenefitsCtaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BenefitsCta"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"colorTheme"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaAlignment"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseIntroFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseIntro"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"miniCardsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseSummary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"keyInsightCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"8"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChallengeWithQuoteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChallengeWithQuote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"challenge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quoteMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quoteAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}}]} as unknown as DocumentNode<PageContentQuery, PageContentQueryVariables>;
export const AssetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Asset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<AssetQuery, AssetQueryVariables>;
export const EntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Entry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entryCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sys"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliceFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TabHolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TabHolderFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseStudy"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CaseStudyFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoSlider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoSliderFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardHolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardHolderFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BenefitsCta"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BenefitsCtaFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseIntro"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CaseIntroFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseSummary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CaseSummaryFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChallengeWithQuote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChallengeWithQuoteFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"superIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"superTitle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TabHolderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TabHolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"headerStyle"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"colorScheme"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"tabsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tabTitle"}},{"kind":"Field","name":{"kind":"Name","value":"tabDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tabIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaAlignment"}},{"kind":"Field","name":{"kind":"Name","value":"contentTitle"}},{"kind":"Field","name":{"kind":"Name","value":"contentDescription"}},{"kind":"Field","name":{"kind":"Name","value":"contentList"}},{"kind":"Field","name":{"kind":"Name","value":"actionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseStudyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseStudy"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"titleSize"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"colorTheme"}},{"kind":"Field","name":{"kind":"Name","value":"statistics"}},{"kind":"Field","name":{"kind":"Name","value":"statisticsSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"statisticsDescription"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"imageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testimonial"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"testimonialAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"testimonialRole"}},{"kind":"Field","name":{"kind":"Name","value":"actionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoSliderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoSlider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"titleSize"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"moving"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardHolderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardHolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"colorTheme"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titleSize"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"actionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardDataCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"textColor"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BenefitsCtaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BenefitsCta"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"colorTheme"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaAlignment"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseIntroFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseIntro"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"miniCardsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CaseSummary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"keyInsightCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"8"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChallengeWithQuoteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChallengeWithQuote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"topDistance"}},{"kind":"Field","name":{"kind":"Name","value":"bottomDistance"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"challenge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quoteMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quoteAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}}]} as unknown as DocumentNode<EntryQuery, EntryQueryVariables>;
export const HeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueComponentCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"StringValue","value":"Menu","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]}}]} as unknown as DocumentNode<HeaderQuery, HeaderQueryVariables>;
export const FooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueComponentCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"StringValue","value":"Footer","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]}}]} as unknown as DocumentNode<FooterQuery, FooterQueryVariables>;
export const PageWithRichTextDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pageWithRichText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentTypeRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFields"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentTypeRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"extract"}},{"kind":"Field","name":{"kind":"Name","value":"applyButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"external"}},{"kind":"Field","name":{"kind":"Name","value":"arrow"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"popupUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"internal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]} as unknown as DocumentNode<PageWithRichTextQuery, PageWithRichTextQueryVariables>;
export const RichTextWithLimitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RichTextWithLimit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tag"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tags_contains_some"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"tag"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"supertitleShortText"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]}}]} as unknown as DocumentNode<RichTextWithLimitQuery, RichTextWithLimitQueryVariables>;
export const AllRichTextDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllRichText"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"supertitleShortText"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]}}]} as unknown as DocumentNode<AllRichTextQuery, AllRichTextQueryVariables>;