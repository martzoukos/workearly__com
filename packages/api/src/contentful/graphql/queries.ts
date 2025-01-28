import { graphql } from "./__generated__/gql";

export const PAGE_SLUGS_QUERY = graphql(`
  query PageSlugs {
    pageCollection(where: { slug_not_in: ["404"] }, limit: 100) {
      items {
        slug
      }
    }
  }
`);

export const PAGE_QUERY = graphql(`
  query Page($slug: String!) {
    pageCollection(where: { slug: $slug }, limit: 1) {
      __typename
      items {
        ...PageFields
      }
    }
  }
`);
