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
    "\n  fragment EntryFields on Entry {\n    sys {\n      id\n    }\n    contentfulMetadata {\n      tags {\n        id\n        name\n      }\n    }\n  }\n": types.EntryFieldsFragmentDoc,
    "\n  fragment AssetFields on Asset {\n    sys {\n      id\n    }\n    url\n    width\n    height\n    title\n    description\n    contentType\n  }\n": types.AssetFieldsFragmentDoc,
    "\n  fragment AccordionCardFields on AccordionCard {\n    ...EntryFields\n    title\n    text {\n      json\n    }\n    column1Title\n    column1Text\n    column2Title\n    column2Text\n    topNotes\n    skipNumber\n  }\n": types.AccordionCardFieldsFragmentDoc,
    "\n  fragment ActionFields on Action {\n    ...EntryFields\n    name\n    features\n    dynamicActionType\n    internal {\n      slug\n    }\n    external\n    icon {\n      ...AssetFields\n    }\n    iconPlacement\n    colorScheme\n    variant\n    behaviour\n  }\n": types.ActionFieldsFragmentDoc,
    "\n  fragment CardFields on Card {\n    ...EntryFields\n    title\n    text\n    variant\n    studentsCount\n    rating\n    tags\n    theme\n    asset {\n      ...AssetFields\n    }\n    thumbnail {\n      ...AssetFields\n    }\n    actionsCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n": types.CardFieldsFragmentDoc,
    "\n  fragment CourseDetailsFields on CourseDetails {\n    ...EntryFields\n    h1Title\n    group\n    title\n    summary\n    shortDescription\n    applicationFormUrl\n    id\n    language\n    programStarts\n    applicationDeadline\n    startingCost\n    finalCost\n    videoThumbnail {\n      ...AssetFields\n    }\n  }\n": types.CourseDetailsFieldsFragmentDoc,
    "\n  fragment CategoryOrJobDetailsFields on CategoryOrJobDetails {\n    ...EntryFields\n    title\n    summary\n    shortDescription\n    studentsCount\n    userReviews\n    asset {\n      ...AssetFields\n    }\n    averageUsSalary\n    averageEuSalary\n  }\n": types.CategoryOrJobDetailsFieldsFragmentDoc,
    "\n  fragment PeopleDetailsFields on PeopleDetails {\n    ...EntryFields\n    name\n    variant\n    role\n    company\n    text {\n      json\n    }\n    shortDescription\n    expertise\n    linkedIn\n    asset {\n      ...AssetFields\n    }\n    actionsCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n": types.PeopleDetailsFieldsFragmentDoc,
    "\n  fragment ResourceDetailsFields on ResourceDetails {\n    ...EntryFields\n    name\n    description\n    publicationDate\n    asset {\n      ...AssetFields\n    }\n  }\n": types.ResourceDetailsFieldsFragmentDoc,
    "\n  fragment ContentTypeRichTextFields on ContentTypeRichText {\n    ...EntryFields\n    body {\n      json\n      links {\n        entries {\n          block {\n            __typename\n            ...EntryFields\n          }\n          inline {\n            __typename\n            ...EntryFields\n          }\n        }\n        assets {\n          block {\n            ...AssetFields\n          }\n        }\n      }\n    }\n    variant\n    alignment\n    size\n    theme\n  }\n": types.ContentTypeRichTextFieldsFragmentDoc,
    "\n  fragment UniqueComponentFields on UniqueComponent {\n    ...EntryFields\n    variant\n    json\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n": types.UniqueComponentFieldsFragmentDoc,
    "\n  fragment SectionFields on Section {\n    ...EntryFields\n    alignment\n    layout\n    size\n    theme\n    title\n    supertitle\n    text\n    titleSize\n    cardVariant\n    cardsCount\n    cardTheme\n    variant\n    metadata\n    features\n\n    actionsCollection {\n      items {\n        ...EntryFields\n      }\n    }\n    assetsCollection {\n      items {\n        ...AssetFields\n      }\n    }\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n": types.SectionFieldsFragmentDoc,
    "\n  fragment CompositeFields on Composite {\n    ...EntryFields\n    variant\n    alignment\n    layout\n    size\n    theme\n    title\n    supertitle\n    text\n    spacing\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n": types.CompositeFieldsFragmentDoc,
    "\n  fragment PageFields on Page {\n    ...EntryFields\n    variant\n    name\n    features\n    slug\n    seoTitle\n    seoDescription\n    seoImage {\n      ...AssetFields\n    }\n    theme\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n    linkedFrom {\n      entryCollection(limit: 1) {\n        items {\n          ... on Section {\n            sys {\n              id\n            }\n            linkedFrom {\n              pageCollection(limit: 5) {\n                items {\n                  slug\n                  variant\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.PageFieldsFragmentDoc,
    "\n  query PageCollection($where: PageFilter, $limit: Int, $skip: Int) {\n    pageCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...PageFields\n      }\n    }\n  }\n": types.PageCollectionDocument,
    "\n  query AssetCollection($where: AssetFilter, $limit: Int) {\n    assetCollection(where: $where, limit: $limit) {\n      items {\n        ...AssetFields\n      }\n    }\n  }\n": types.AssetCollectionDocument,
    "\n  query CourseDetailsCollection(\n    $where: CourseDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    courseDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CourseDetailsFields\n      }\n    }\n  }\n": types.CourseDetailsCollectionDocument,
    "\n  query CategoryOrJobDetailsCollection(\n    $where: CategoryOrJobDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    categoryOrJobDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CategoryOrJobDetailsFields\n      }\n    }\n  }\n": types.CategoryOrJobDetailsCollectionDocument,
    "\n  query PeopleDetailsCollection(\n    $where: PeopleDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    peopleDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...PeopleDetailsFields\n      }\n    }\n  }\n": types.PeopleDetailsCollectionDocument,
    "\n  query ResourceDetailsCollection(\n    $where: ResourceDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    resourceDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...ResourceDetailsFields\n      }\n    }\n  }\n": types.ResourceDetailsCollectionDocument,
    "\n  query ContentTypeRichTextCollection(\n    $where: ContentTypeRichTextFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    contentTypeRichTextCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...ContentTypeRichTextFields\n      }\n    }\n  }\n": types.ContentTypeRichTextCollectionDocument,
    "\n  query UniqueComponentCollection(\n    $where: UniqueComponentFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    uniqueComponentCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...UniqueComponentFields\n      }\n    }\n  }\n": types.UniqueComponentCollectionDocument,
    "\n  query AccordionCardCollection(\n    $where: AccordionCardFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    accordionCardCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...AccordionCardFields\n      }\n    }\n  }\n": types.AccordionCardCollectionDocument,
    "\n  query CardCollection($where: CardFilter, $limit: Int, $skip: Int) {\n    cardCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CardFields\n      }\n    }\n  }\n": types.CardCollectionDocument,
    "\n  query SectionCollection($where: SectionFilter, $limit: Int, $skip: Int) {\n    sectionCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...SectionFields\n      }\n    }\n  }\n": types.SectionCollectionDocument,
    "\n  query CompositeCollection($where: CompositeFilter, $limit: Int, $skip: Int) {\n    compositeCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CompositeFields\n      }\n    }\n  }\n": types.CompositeCollectionDocument,
    "\n  query ActionCollection($where: ActionFilter, $limit: Int, $skip: Int) {\n    actionCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...ActionFields\n      }\n    }\n  }\n": types.ActionCollectionDocument,
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
export function graphql(source: "\n  fragment EntryFields on Entry {\n    sys {\n      id\n    }\n    contentfulMetadata {\n      tags {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment EntryFields on Entry {\n    sys {\n      id\n    }\n    contentfulMetadata {\n      tags {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AssetFields on Asset {\n    sys {\n      id\n    }\n    url\n    width\n    height\n    title\n    description\n    contentType\n  }\n"): (typeof documents)["\n  fragment AssetFields on Asset {\n    sys {\n      id\n    }\n    url\n    width\n    height\n    title\n    description\n    contentType\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccordionCardFields on AccordionCard {\n    ...EntryFields\n    title\n    text {\n      json\n    }\n    column1Title\n    column1Text\n    column2Title\n    column2Text\n    topNotes\n    skipNumber\n  }\n"): (typeof documents)["\n  fragment AccordionCardFields on AccordionCard {\n    ...EntryFields\n    title\n    text {\n      json\n    }\n    column1Title\n    column1Text\n    column2Title\n    column2Text\n    topNotes\n    skipNumber\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ActionFields on Action {\n    ...EntryFields\n    name\n    features\n    dynamicActionType\n    internal {\n      slug\n    }\n    external\n    icon {\n      ...AssetFields\n    }\n    iconPlacement\n    colorScheme\n    variant\n    behaviour\n  }\n"): (typeof documents)["\n  fragment ActionFields on Action {\n    ...EntryFields\n    name\n    features\n    dynamicActionType\n    internal {\n      slug\n    }\n    external\n    icon {\n      ...AssetFields\n    }\n    iconPlacement\n    colorScheme\n    variant\n    behaviour\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CardFields on Card {\n    ...EntryFields\n    title\n    text\n    variant\n    studentsCount\n    rating\n    tags\n    theme\n    asset {\n      ...AssetFields\n    }\n    thumbnail {\n      ...AssetFields\n    }\n    actionsCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment CardFields on Card {\n    ...EntryFields\n    title\n    text\n    variant\n    studentsCount\n    rating\n    tags\n    theme\n    asset {\n      ...AssetFields\n    }\n    thumbnail {\n      ...AssetFields\n    }\n    actionsCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CourseDetailsFields on CourseDetails {\n    ...EntryFields\n    h1Title\n    group\n    title\n    summary\n    shortDescription\n    applicationFormUrl\n    id\n    language\n    programStarts\n    applicationDeadline\n    startingCost\n    finalCost\n    videoThumbnail {\n      ...AssetFields\n    }\n  }\n"): (typeof documents)["\n  fragment CourseDetailsFields on CourseDetails {\n    ...EntryFields\n    h1Title\n    group\n    title\n    summary\n    shortDescription\n    applicationFormUrl\n    id\n    language\n    programStarts\n    applicationDeadline\n    startingCost\n    finalCost\n    videoThumbnail {\n      ...AssetFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CategoryOrJobDetailsFields on CategoryOrJobDetails {\n    ...EntryFields\n    title\n    summary\n    shortDescription\n    studentsCount\n    userReviews\n    asset {\n      ...AssetFields\n    }\n    averageUsSalary\n    averageEuSalary\n  }\n"): (typeof documents)["\n  fragment CategoryOrJobDetailsFields on CategoryOrJobDetails {\n    ...EntryFields\n    title\n    summary\n    shortDescription\n    studentsCount\n    userReviews\n    asset {\n      ...AssetFields\n    }\n    averageUsSalary\n    averageEuSalary\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PeopleDetailsFields on PeopleDetails {\n    ...EntryFields\n    name\n    variant\n    role\n    company\n    text {\n      json\n    }\n    shortDescription\n    expertise\n    linkedIn\n    asset {\n      ...AssetFields\n    }\n    actionsCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PeopleDetailsFields on PeopleDetails {\n    ...EntryFields\n    name\n    variant\n    role\n    company\n    text {\n      json\n    }\n    shortDescription\n    expertise\n    linkedIn\n    asset {\n      ...AssetFields\n    }\n    actionsCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ResourceDetailsFields on ResourceDetails {\n    ...EntryFields\n    name\n    description\n    publicationDate\n    asset {\n      ...AssetFields\n    }\n  }\n"): (typeof documents)["\n  fragment ResourceDetailsFields on ResourceDetails {\n    ...EntryFields\n    name\n    description\n    publicationDate\n    asset {\n      ...AssetFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ContentTypeRichTextFields on ContentTypeRichText {\n    ...EntryFields\n    body {\n      json\n      links {\n        entries {\n          block {\n            __typename\n            ...EntryFields\n          }\n          inline {\n            __typename\n            ...EntryFields\n          }\n        }\n        assets {\n          block {\n            ...AssetFields\n          }\n        }\n      }\n    }\n    variant\n    alignment\n    size\n    theme\n  }\n"): (typeof documents)["\n  fragment ContentTypeRichTextFields on ContentTypeRichText {\n    ...EntryFields\n    body {\n      json\n      links {\n        entries {\n          block {\n            __typename\n            ...EntryFields\n          }\n          inline {\n            __typename\n            ...EntryFields\n          }\n        }\n        assets {\n          block {\n            ...AssetFields\n          }\n        }\n      }\n    }\n    variant\n    alignment\n    size\n    theme\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UniqueComponentFields on UniqueComponent {\n    ...EntryFields\n    variant\n    json\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment UniqueComponentFields on UniqueComponent {\n    ...EntryFields\n    variant\n    json\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SectionFields on Section {\n    ...EntryFields\n    alignment\n    layout\n    size\n    theme\n    title\n    supertitle\n    text\n    titleSize\n    cardVariant\n    cardsCount\n    cardTheme\n    variant\n    metadata\n    features\n\n    actionsCollection {\n      items {\n        ...EntryFields\n      }\n    }\n    assetsCollection {\n      items {\n        ...AssetFields\n      }\n    }\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment SectionFields on Section {\n    ...EntryFields\n    alignment\n    layout\n    size\n    theme\n    title\n    supertitle\n    text\n    titleSize\n    cardVariant\n    cardsCount\n    cardTheme\n    variant\n    metadata\n    features\n\n    actionsCollection {\n      items {\n        ...EntryFields\n      }\n    }\n    assetsCollection {\n      items {\n        ...AssetFields\n      }\n    }\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CompositeFields on Composite {\n    ...EntryFields\n    variant\n    alignment\n    layout\n    size\n    theme\n    title\n    supertitle\n    text\n    spacing\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment CompositeFields on Composite {\n    ...EntryFields\n    variant\n    alignment\n    layout\n    size\n    theme\n    title\n    supertitle\n    text\n    spacing\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PageFields on Page {\n    ...EntryFields\n    variant\n    name\n    features\n    slug\n    seoTitle\n    seoDescription\n    seoImage {\n      ...AssetFields\n    }\n    theme\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n    linkedFrom {\n      entryCollection(limit: 1) {\n        items {\n          ... on Section {\n            sys {\n              id\n            }\n            linkedFrom {\n              pageCollection(limit: 5) {\n                items {\n                  slug\n                  variant\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PageFields on Page {\n    ...EntryFields\n    variant\n    name\n    features\n    slug\n    seoTitle\n    seoDescription\n    seoImage {\n      ...AssetFields\n    }\n    theme\n    contentCollection {\n      items {\n        ... on Entry {\n          ...EntryFields\n        }\n      }\n    }\n    linkedFrom {\n      entryCollection(limit: 1) {\n        items {\n          ... on Section {\n            sys {\n              id\n            }\n            linkedFrom {\n              pageCollection(limit: 5) {\n                items {\n                  slug\n                  variant\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PageCollection($where: PageFilter, $limit: Int, $skip: Int) {\n    pageCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...PageFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query PageCollection($where: PageFilter, $limit: Int, $skip: Int) {\n    pageCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...PageFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AssetCollection($where: AssetFilter, $limit: Int) {\n    assetCollection(where: $where, limit: $limit) {\n      items {\n        ...AssetFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query AssetCollection($where: AssetFilter, $limit: Int) {\n    assetCollection(where: $where, limit: $limit) {\n      items {\n        ...AssetFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CourseDetailsCollection(\n    $where: CourseDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    courseDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CourseDetailsFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query CourseDetailsCollection(\n    $where: CourseDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    courseDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CourseDetailsFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CategoryOrJobDetailsCollection(\n    $where: CategoryOrJobDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    categoryOrJobDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CategoryOrJobDetailsFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query CategoryOrJobDetailsCollection(\n    $where: CategoryOrJobDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    categoryOrJobDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CategoryOrJobDetailsFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PeopleDetailsCollection(\n    $where: PeopleDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    peopleDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...PeopleDetailsFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query PeopleDetailsCollection(\n    $where: PeopleDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    peopleDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...PeopleDetailsFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ResourceDetailsCollection(\n    $where: ResourceDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    resourceDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...ResourceDetailsFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query ResourceDetailsCollection(\n    $where: ResourceDetailsFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    resourceDetailsCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...ResourceDetailsFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ContentTypeRichTextCollection(\n    $where: ContentTypeRichTextFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    contentTypeRichTextCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...ContentTypeRichTextFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query ContentTypeRichTextCollection(\n    $where: ContentTypeRichTextFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    contentTypeRichTextCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...ContentTypeRichTextFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UniqueComponentCollection(\n    $where: UniqueComponentFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    uniqueComponentCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...UniqueComponentFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query UniqueComponentCollection(\n    $where: UniqueComponentFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    uniqueComponentCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...UniqueComponentFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AccordionCardCollection(\n    $where: AccordionCardFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    accordionCardCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...AccordionCardFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccordionCardCollection(\n    $where: AccordionCardFilter\n    $limit: Int\n    $skip: Int\n  ) {\n    accordionCardCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...AccordionCardFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CardCollection($where: CardFilter, $limit: Int, $skip: Int) {\n    cardCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CardFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query CardCollection($where: CardFilter, $limit: Int, $skip: Int) {\n    cardCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CardFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SectionCollection($where: SectionFilter, $limit: Int, $skip: Int) {\n    sectionCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...SectionFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query SectionCollection($where: SectionFilter, $limit: Int, $skip: Int) {\n    sectionCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...SectionFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CompositeCollection($where: CompositeFilter, $limit: Int, $skip: Int) {\n    compositeCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CompositeFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query CompositeCollection($where: CompositeFilter, $limit: Int, $skip: Int) {\n    compositeCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...CompositeFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ActionCollection($where: ActionFilter, $limit: Int, $skip: Int) {\n    actionCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...ActionFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query ActionCollection($where: ActionFilter, $limit: Int, $skip: Int) {\n    actionCollection(where: $where, limit: $limit, skip: $skip) {\n      total\n      skip\n      limit\n      items {\n        ...ActionFields\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;