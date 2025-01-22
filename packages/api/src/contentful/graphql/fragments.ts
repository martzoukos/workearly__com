import { graphql } from "./__generated__/gql";

// const BUTTON_FIELDS_FRAGMENT = graphql(`
//   fragment ButtonFields on Action {
//     __typename
//     sys {
//       id
//     }
//     name
//     style
//     color
//     internal {
//       slug
//       sys {
//         id
//       }
//     }
//     external
//     icon {
//       url
//       width
//       height
//     }
//   }
// `);

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
