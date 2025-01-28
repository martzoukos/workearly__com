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
    "\n  fragment PageFields on Page {\n    __typename\n    sys {\n      id\n    }\n    name\n    slug\n    seoTitle\n    seoDescription\n    seoImage {\n      url\n      width\n      height\n      description\n    }\n  }\n": types.PageFieldsFragmentDoc,
    "\n  query PageSlugs {\n    pageCollection(where: { slug_not_in: [\"404\"] }, limit: 100) {\n      items {\n        slug\n      }\n    }\n  }\n": types.PageSlugsDocument,
    "\n  query Page($slug: String!) {\n    pageCollection(where: { slug: $slug }, limit: 1) {\n      __typename\n      items {\n        ...PageFields\n      }\n    }\n  }\n": types.PageDocument,
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
export function graphql(source: "\n  fragment PageFields on Page {\n    __typename\n    sys {\n      id\n    }\n    name\n    slug\n    seoTitle\n    seoDescription\n    seoImage {\n      url\n      width\n      height\n      description\n    }\n  }\n"): (typeof documents)["\n  fragment PageFields on Page {\n    __typename\n    sys {\n      id\n    }\n    name\n    slug\n    seoTitle\n    seoDescription\n    seoImage {\n      url\n      width\n      height\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PageSlugs {\n    pageCollection(where: { slug_not_in: [\"404\"] }, limit: 100) {\n      items {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query PageSlugs {\n    pageCollection(where: { slug_not_in: [\"404\"] }, limit: 100) {\n      items {\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Page($slug: String!) {\n    pageCollection(where: { slug: $slug }, limit: 1) {\n      __typename\n      items {\n        ...PageFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query Page($slug: String!) {\n    pageCollection(where: { slug: $slug }, limit: 1) {\n      __typename\n      items {\n        ...PageFields\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;