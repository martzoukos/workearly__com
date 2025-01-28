import { graphql } from "./__generated__/gql";

export const PAGE_FIELDS_FRAGMENT = graphql(`
  fragment PageFields on Page {
    __typename
    sys {
      id
    }
    name
    slug
    seoTitle
    seoDescription
    seoImage {
      url
      width
      height
      description
    }
  }
`);
