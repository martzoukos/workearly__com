import { graphql } from "./__generated__/gql";

export const ASSET_FIELDS = graphql(`
  fragment AssetFields on Asset {
    sys {
      id
    }
    url
    width
    height
    title
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
    actionsCollection {
      items {
        ... on Entry {
          sys {
            id
          }
        }
      }
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
    shortDescription
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
    videoThumbnail {
      ...AssetFields
    }
  }
`);

export const CATEGORY_OR_JOB_DETAILS_FIELDS = graphql(`
  fragment CategoryOrJobDetailsFields on CategoryOrJobDetails {
    sys {
      id
    }
    title
    summary
    shortDescription
    studentsCount
    userReviews
    asset {
      ...AssetFields
    }
    averageUsSalary
    averageEuSalary
  }
`);

export const PEOPLE_DETAILS_FIELDS = graphql(`
  fragment PeopleDetailsFields on PeopleDetails {
    sys {
      id
    }
    name
    role
    company
    text {
      json
    }
    expertise
    linkedIn
    asset {
      ...AssetFields
    }
  }
`);

export const RESOURCE_DETAILS_FIELDS = graphql(`
  fragment ResourceDetailsFields on ResourceDetails {
    sys {
      id
    }
    name
    description
    topics
    publicationDate
    asset {
      ...AssetFields
    }
  }
`);

export const CONTENT_TYPE_RICH_TEXT_FIELDS = graphql(`
  fragment ContentTypeRichTextFields on ContentTypeRichText {
    sys {
      id
    }
    body {
      json
      links {
        entries {
          block {
            __typename
            sys {
              id
            }
          }
          inline {
            __typename
            sys {
              id
            }
          }
        }
        assets {
          block {
            ...AssetFields
          }
        }
      }
    }
    variant
  }
`);

export const UNIQUE_COMPONENT_FIELDS = graphql(`
  fragment UniqueComponentFields on UniqueComponent {
    sys {
      id
    }
    variant
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
    variant
    cardsCount
    behaviour
    theme
    metadata
    actionsCollection {
      items {
        sys {
          id
        }
      }
    }
    assetsCollection {
      items {
        ...AssetFields
      }
    }
    contentCollection {
      items {
        ... on Entry {
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
    variant
    name
    slug
    tags
    seoTitle
    seoDescription
    seoImage {
      ...AssetFields
    }
    theme
    contentCollection {
      items {
        ... on Entry {
          sys {
            id
          }
        }
      }
    }
  }
`);
