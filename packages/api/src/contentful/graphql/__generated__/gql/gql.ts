/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  fragment AssetFields on Asset {\n    sys {\n      id\n    }\n    url\n    width\n    height\n    description\n    contentType\n  }\n": types.AssetFieldsFragmentDoc,
    "\n  fragment AccordionCardFields on AccordionCard {\n    sys {\n      id\n    }\n    title\n    text {\n      json\n    }\n    column1Title\n    column1Text\n    column2Title\n    column2Text\n    topNotes\n    skipNumber\n  }\n": types.AccordionCardFieldsFragmentDoc,
    "\n  fragment ActionFields on Action {\n    sys {\n      id\n    }\n    name\n    internal {\n      slug\n    }\n    external\n    externalType\n    icon {\n      ...AssetFields\n    }\n    iconPlacement\n    color\n    variant\n    behaviour\n  }\n": types.ActionFieldsFragmentDoc,
    "\n  fragment CardFields on Card {\n    sys {\n      id\n    }\n    title\n    text\n    variant\n    asset {\n      ...AssetFields\n    }\n  }\n": types.CardFieldsFragmentDoc,
    "\n  fragment CourseDetailsFields on CourseDetails {\n    sys {\n      id\n    }\n    title\n    summary\n    duration\n    language\n    pace\n    level\n    style\n    courseCount\n    programStarts\n    applicationDeadline\n    studentsCount\n    userReviews\n    startingCost\n    finalCost\n    timeLeft\n  }\n": types.CourseDetailsFieldsFragmentDoc,
    "\n  fragment ContentTypeRichTextFields on ContentTypeRichText {\n    sys {\n      id\n    }\n    body {\n      json\n    }\n    bulletTranformation\n  }\n": types.ContentTypeRichTextFieldsFragmentDoc,
    "\n  fragment UniqueComponentFields on UniqueComponent {\n    sys {\n      id\n    }\n    type\n  }\n": types.UniqueComponentFieldsFragmentDoc,
    "\n  fragment SectionFields on Section {\n    sys {\n      id\n    }\n    alignment\n    title\n    supertitle\n    text\n    cardVariant\n    variant\n    cardsCount\n    behaviour\n    theme\n    actionsCollection {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n    assetsCollection {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n    contentCollection {\n      items {\n        ... on AccordionCard {\n          sys {\n            id\n          }\n        }\n        ... on Card {\n          sys {\n            id\n          }\n        }\n        ... on ContentTypeRichText {\n          sys {\n            id\n          }\n        }\n        ... on Page {\n          sys {\n            id\n          }\n        }\n        ... on Section {\n          sys {\n            id\n          }\n        }\n        ... on UniqueComponent {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n": types.SectionFieldsFragmentDoc,
    "\n  fragment PageFields on Page {\n    sys {\n      id\n    }\n    type\n    name\n    slug\n    tags\n    seoTitle\n    seoDescription\n    seoImage {\n      ...AssetFields\n    }\n    theme\n    details {\n      sys {\n        id\n      }\n    }\n    contentCollection {\n      items {\n        ... on ContentTypeRichText {\n          sys {\n            id\n          }\n        }\n        ... on Section {\n          sys {\n            id\n          }\n        }\n        ... on UniqueComponent {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n": types.PageFieldsFragmentDoc,
    "\n  query PlaygroundPageSlugs {\n    pageCollection(\n      where: { slug_not_in: [\"404\"], type_in: [\"Playground\"] }\n      limit: 100\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n": types.PlaygroundPageSlugsDocument,
    "\n  query PageSlugs {\n    pageCollection(\n      where: { slug_not_in: [\"404\"], type_not_in: [\"Playground\"] }\n      limit: 100\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n": types.PageSlugsDocument,
    "\n  query PageCollection($where: PageFilter, $limit: Int) {\n    pageCollection(where: $where, limit: $limit) {\n      items {\n        ...PageFields\n      }\n    }\n  }\n": types.PageCollectionDocument,
    "\n  query CourseDetailsCollection($where: CourseDetailsFilter, $limit: Int) {\n    courseDetailsCollection(where: $where, limit: $limit) {\n      items {\n        ...CourseDetailsFields\n      }\n    }\n  }\n": types.CourseDetailsCollectionDocument,
    "\n  query ContentTypeRichTextCollection(\n    $where: ContentTypeRichTextFilter\n    $limit: Int\n  ) {\n    contentTypeRichTextCollection(where: $where, limit: $limit) {\n      items {\n        ...ContentTypeRichTextFields\n      }\n    }\n  }\n": types.ContentTypeRichTextCollectionDocument,
    "\n  query UniqueComponentCollection($where: UniqueComponentFilter, $limit: Int) {\n    uniqueComponentCollection(where: $where, limit: $limit) {\n      items {\n        ...UniqueComponentFields\n      }\n    }\n  }\n": types.UniqueComponentCollectionDocument,
    "\n  query AccordionCardCollection($where: AccordionCardFilter, $limit: Int) {\n    accordionCardCollection(where: $where, limit: $limit) {\n      items {\n        ...AccordionCardFields\n      }\n    }\n  }\n": types.AccordionCardCollectionDocument,
    "\n  query CardCollection($where: CardFilter, $limit: Int) {\n    cardCollection(where: $where, limit: $limit) {\n      items {\n        ...CardFields\n      }\n    }\n  }\n": types.CardCollectionDocument,
    "\n  query SectionCollection($where: SectionFilter, $limit: Int) {\n    sectionCollection(where: $where, limit: $limit) {\n      items {\n        ...SectionFields\n      }\n    }\n  }\n": types.SectionCollectionDocument,
    "\n  query AssetCollection($where: AssetFilter, $limit: Int) {\n    assetCollection(where: $where, limit: $limit) {\n      items {\n        ...AssetFields\n      }\n    }\n  }\n": types.AssetCollectionDocument,
    "\n  query ActionCollection($where: ActionFilter, $limit: Int) {\n    actionCollection(where: $where, limit: $limit) {\n      items {\n        ...ActionFields\n      }\n    }\n  }\n": types.ActionCollectionDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AssetFields on Asset {\n    sys {\n      id\n    }\n    url\n    width\n    height\n    description\n    contentType\n  }\n"): (typeof documents)["\n  fragment AssetFields on Asset {\n    sys {\n      id\n    }\n    url\n    width\n    height\n    description\n    contentType\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccordionCardFields on AccordionCard {\n    sys {\n      id\n    }\n    title\n    text {\n      json\n    }\n    column1Title\n    column1Text\n    column2Title\n    column2Text\n    topNotes\n    skipNumber\n  }\n"): (typeof documents)["\n  fragment AccordionCardFields on AccordionCard {\n    sys {\n      id\n    }\n    title\n    text {\n      json\n    }\n    column1Title\n    column1Text\n    column2Title\n    column2Text\n    topNotes\n    skipNumber\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ActionFields on Action {\n    sys {\n      id\n    }\n    name\n    internal {\n      slug\n    }\n    external\n    externalType\n    icon {\n      ...AssetFields\n    }\n    iconPlacement\n    color\n    variant\n    behaviour\n  }\n"): (typeof documents)["\n  fragment ActionFields on Action {\n    sys {\n      id\n    }\n    name\n    internal {\n      slug\n    }\n    external\n    externalType\n    icon {\n      ...AssetFields\n    }\n    iconPlacement\n    color\n    variant\n    behaviour\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CardFields on Card {\n    sys {\n      id\n    }\n    title\n    text\n    variant\n    asset {\n      ...AssetFields\n    }\n  }\n"): (typeof documents)["\n  fragment CardFields on Card {\n    sys {\n      id\n    }\n    title\n    text\n    variant\n    asset {\n      ...AssetFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CourseDetailsFields on CourseDetails {\n    sys {\n      id\n    }\n    title\n    summary\n    duration\n    language\n    pace\n    level\n    style\n    courseCount\n    programStarts\n    applicationDeadline\n    studentsCount\n    userReviews\n    startingCost\n    finalCost\n    timeLeft\n  }\n"): (typeof documents)["\n  fragment CourseDetailsFields on CourseDetails {\n    sys {\n      id\n    }\n    title\n    summary\n    duration\n    language\n    pace\n    level\n    style\n    courseCount\n    programStarts\n    applicationDeadline\n    studentsCount\n    userReviews\n    startingCost\n    finalCost\n    timeLeft\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ContentTypeRichTextFields on ContentTypeRichText {\n    sys {\n      id\n    }\n    body {\n      json\n    }\n    bulletTranformation\n  }\n"): (typeof documents)["\n  fragment ContentTypeRichTextFields on ContentTypeRichText {\n    sys {\n      id\n    }\n    body {\n      json\n    }\n    bulletTranformation\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UniqueComponentFields on UniqueComponent {\n    sys {\n      id\n    }\n    type\n  }\n"): (typeof documents)["\n  fragment UniqueComponentFields on UniqueComponent {\n    sys {\n      id\n    }\n    type\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SectionFields on Section {\n    sys {\n      id\n    }\n    alignment\n    title\n    supertitle\n    text\n    cardVariant\n    variant\n    cardsCount\n    behaviour\n    theme\n    actionsCollection {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n    assetsCollection {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n    contentCollection {\n      items {\n        ... on AccordionCard {\n          sys {\n            id\n          }\n        }\n        ... on Card {\n          sys {\n            id\n          }\n        }\n        ... on ContentTypeRichText {\n          sys {\n            id\n          }\n        }\n        ... on Page {\n          sys {\n            id\n          }\n        }\n        ... on Section {\n          sys {\n            id\n          }\n        }\n        ... on UniqueComponent {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment SectionFields on Section {\n    sys {\n      id\n    }\n    alignment\n    title\n    supertitle\n    text\n    cardVariant\n    variant\n    cardsCount\n    behaviour\n    theme\n    actionsCollection {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n    assetsCollection {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n    contentCollection {\n      items {\n        ... on AccordionCard {\n          sys {\n            id\n          }\n        }\n        ... on Card {\n          sys {\n            id\n          }\n        }\n        ... on ContentTypeRichText {\n          sys {\n            id\n          }\n        }\n        ... on Page {\n          sys {\n            id\n          }\n        }\n        ... on Section {\n          sys {\n            id\n          }\n        }\n        ... on UniqueComponent {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PageFields on Page {\n    sys {\n      id\n    }\n    type\n    name\n    slug\n    tags\n    seoTitle\n    seoDescription\n    seoImage {\n      ...AssetFields\n    }\n    theme\n    details {\n      sys {\n        id\n      }\n    }\n    contentCollection {\n      items {\n        ... on ContentTypeRichText {\n          sys {\n            id\n          }\n        }\n        ... on Section {\n          sys {\n            id\n          }\n        }\n        ... on UniqueComponent {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PageFields on Page {\n    sys {\n      id\n    }\n    type\n    name\n    slug\n    tags\n    seoTitle\n    seoDescription\n    seoImage {\n      ...AssetFields\n    }\n    theme\n    details {\n      sys {\n        id\n      }\n    }\n    contentCollection {\n      items {\n        ... on ContentTypeRichText {\n          sys {\n            id\n          }\n        }\n        ... on Section {\n          sys {\n            id\n          }\n        }\n        ... on UniqueComponent {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PlaygroundPageSlugs {\n    pageCollection(\n      where: { slug_not_in: [\"404\"], type_in: [\"Playground\"] }\n      limit: 100\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query PlaygroundPageSlugs {\n    pageCollection(\n      where: { slug_not_in: [\"404\"], type_in: [\"Playground\"] }\n      limit: 100\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PageSlugs {\n    pageCollection(\n      where: { slug_not_in: [\"404\"], type_not_in: [\"Playground\"] }\n      limit: 100\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query PageSlugs {\n    pageCollection(\n      where: { slug_not_in: [\"404\"], type_not_in: [\"Playground\"] }\n      limit: 100\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PageCollection($where: PageFilter, $limit: Int) {\n    pageCollection(where: $where, limit: $limit) {\n      items {\n        ...PageFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query PageCollection($where: PageFilter, $limit: Int) {\n    pageCollection(where: $where, limit: $limit) {\n      items {\n        ...PageFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CourseDetailsCollection($where: CourseDetailsFilter, $limit: Int) {\n    courseDetailsCollection(where: $where, limit: $limit) {\n      items {\n        ...CourseDetailsFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query CourseDetailsCollection($where: CourseDetailsFilter, $limit: Int) {\n    courseDetailsCollection(where: $where, limit: $limit) {\n      items {\n        ...CourseDetailsFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ContentTypeRichTextCollection(\n    $where: ContentTypeRichTextFilter\n    $limit: Int\n  ) {\n    contentTypeRichTextCollection(where: $where, limit: $limit) {\n      items {\n        ...ContentTypeRichTextFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query ContentTypeRichTextCollection(\n    $where: ContentTypeRichTextFilter\n    $limit: Int\n  ) {\n    contentTypeRichTextCollection(where: $where, limit: $limit) {\n      items {\n        ...ContentTypeRichTextFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UniqueComponentCollection($where: UniqueComponentFilter, $limit: Int) {\n    uniqueComponentCollection(where: $where, limit: $limit) {\n      items {\n        ...UniqueComponentFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query UniqueComponentCollection($where: UniqueComponentFilter, $limit: Int) {\n    uniqueComponentCollection(where: $where, limit: $limit) {\n      items {\n        ...UniqueComponentFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AccordionCardCollection($where: AccordionCardFilter, $limit: Int) {\n    accordionCardCollection(where: $where, limit: $limit) {\n      items {\n        ...AccordionCardFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccordionCardCollection($where: AccordionCardFilter, $limit: Int) {\n    accordionCardCollection(where: $where, limit: $limit) {\n      items {\n        ...AccordionCardFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CardCollection($where: CardFilter, $limit: Int) {\n    cardCollection(where: $where, limit: $limit) {\n      items {\n        ...CardFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query CardCollection($where: CardFilter, $limit: Int) {\n    cardCollection(where: $where, limit: $limit) {\n      items {\n        ...CardFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SectionCollection($where: SectionFilter, $limit: Int) {\n    sectionCollection(where: $where, limit: $limit) {\n      items {\n        ...SectionFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query SectionCollection($where: SectionFilter, $limit: Int) {\n    sectionCollection(where: $where, limit: $limit) {\n      items {\n        ...SectionFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AssetCollection($where: AssetFilter, $limit: Int) {\n    assetCollection(where: $where, limit: $limit) {\n      items {\n        ...AssetFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query AssetCollection($where: AssetFilter, $limit: Int) {\n    assetCollection(where: $where, limit: $limit) {\n      items {\n        ...AssetFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ActionCollection($where: ActionFilter, $limit: Int) {\n    actionCollection(where: $where, limit: $limit) {\n      items {\n        ...ActionFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query ActionCollection($where: ActionFilter, $limit: Int) {\n    actionCollection(where: $where, limit: $limit) {\n      items {\n        ...ActionFields\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;