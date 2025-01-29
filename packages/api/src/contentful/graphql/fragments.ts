import { graphql } from "./__generated__/gql";

export const ASSET_FIELDS = graphql(`
  fragment AssetFields on Asset {
    sys {
      id
    }
    url
    width
    height
    description
    contentType
  }
`);

export const ACCORDION_CARD_FIELDS = graphql(`
  fragment AccordionCardFields on AccordionCard {
    sys {
      id
    }
    title
    text {
      json
    }
    column1Title
    column1Text
    column2Title
    column2Text
    topNotes
    skipNumber
  }
`);

export const ACTION_FIELDS = graphql(`
  fragment ActionFields on Action {
    sys {
      id
    }
    name
    internal {
      slug
    }
    external
    externalType
    icon {
      ...AssetFields
    }
    iconPlacement
    color
    variant
    behaviour
  }
`);

export const CARD_FIELDS = graphql(`
  fragment CardFields on Card {
    sys {
      id
    }
    title
    text
    variant
    asset {
      ...AssetFields
    }
  }
`);

export const COURSE_DETAILS_FIELDS = graphql(`
  fragment CourseDetailsFields on CourseDetails {
    sys {
      id
    }
    title
    summary
    duration
    language
    pace
    level
    style
    courseCount
    programStarts
    applicationDeadline
    studentsCount
    userReviews
    startingCost
    finalCost
    timeLeft
  }
`);

export const CONTENT_TYPE_RICH_TEXT_FIELDS = graphql(`
  fragment ContentTypeRichTextFields on ContentTypeRichText {
    sys {
      id
    }
    body {
      json
    }
    bulletTranformation
  }
`);

export const UNIQUE_COMPONENT_FIELDS = graphql(`
  fragment UniqueComponentFields on UniqueComponent {
    sys {
      id
    }
    type
  }
`);

export const SECTION_FIELDS = graphql(`
  fragment SectionFields on Section {
    sys {
      id
    }
    alignment
    title
    supertitle
    text
    cardVariant
    cardsCount
    behaviour
    theme
    actionsCollection {
      items {
        sys {
          id
        }
      }
    }
    assetsCollection {
      items {
        sys {
          id
        }
      }
    }
    contentCollection {
      items {
        ... on AccordionCard {
          sys {
            id
          }
        }
        ... on Card {
          sys {
            id
          }
        }
        ... on ContentTypeRichText {
          sys {
            id
          }
        }
        ... on Page {
          sys {
            id
          }
        }
        ... on Section {
          sys {
            id
          }
        }
        ... on UniqueComponent {
          sys {
            id
          }
        }
      }
    }
  }
`);

export const PAGE_FIELDS = graphql(`
  fragment PageFields on Page {
    sys {
      id
    }
    type
    name
    slug
    tags
    seoTitle
    seoDescription
    seoImage {
      ...AssetFields
    }
    theme
    details {
      sys {
        id
      }
    }
    contentCollection {
      items {
        ... on ContentTypeRichText {
          sys {
            id
          }
        }
        ... on Section {
          sys {
            id
          }
        }
        ... on UniqueComponent {
          sys {
            id
          }
        }
      }
    }
  }
`);
