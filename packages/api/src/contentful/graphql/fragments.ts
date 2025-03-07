import { graphql } from "./__generated__/gql";

export const ENTRY_FIELDS = graphql(`
  fragment EntryFields on Entry {
    sys {
      id
    }
    contentfulMetadata {
      tags {
        id
        name
      }
    }
  }
`);

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
    ...EntryFields
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
    ...EntryFields
    name
    internal {
      slug
    }
    external
    icon {
      ...AssetFields
    }
    iconPlacement
    colorScheme
    variant
    behaviour
  }
`);

export const CARD_FIELDS = graphql(`
  fragment CardFields on Card {
    ...EntryFields
    title
    text
    variant
    studentsCount
    rating
    tags
    theme
    asset {
      ...AssetFields
    }
    actionsCollection {
      items {
        ... on Entry {
          ...EntryFields
        }
      }
    }
  }
`);

export const COURSE_DETAILS_FIELDS = graphql(`
  fragment CourseDetailsFields on CourseDetails {
    ...EntryFields
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
    ...EntryFields
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
    ...EntryFields
    name
    variant
    role
    company
    text {
      json
    }
    shortDescription
    expertise
    linkedIn
    asset {
      ...AssetFields
    }
  }
`);

export const RESOURCE_DETAILS_FIELDS = graphql(`
  fragment ResourceDetailsFields on ResourceDetails {
    ...EntryFields
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
    ...EntryFields
    body {
      json
      links {
        entries {
          block {
            __typename
            ...EntryFields
          }
          inline {
            __typename
            ...EntryFields
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
    alignment
    size
    theme
  }
`);

export const UNIQUE_COMPONENT_FIELDS = graphql(`
  fragment UniqueComponentFields on UniqueComponent {
    ...EntryFields
    variant
    json
    contentCollection {
      items {
        ... on Entry {
          ...EntryFields
        }
      }
    }
  }
`);

export const SECTION_FIELDS = graphql(`
  fragment SectionFields on Section {
    ...EntryFields
    alignment
    layout
    size
    theme
    title
    supertitle
    text
    titleSize
    cardVariant
    cardsCount
    cardTheme
    variant
    metadata
    features

    actionsCollection {
      items {
        ...EntryFields
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
          ...EntryFields
        }
      }
    }
  }
`);

export const COMPOSITE_FIELDS = graphql(`
  fragment CompositeFields on Composite {
    ...EntryFields
    variant
    alignment
    layout
    size
    theme
    title
    supertitle
    text
    spacing
    contentCollection {
      items {
        ... on Entry {
          ...EntryFields
        }
      }
    }
  }
`);

export const PAGE_FIELDS = graphql(`
  fragment PageFields on Page {
    ...EntryFields
    variant
    name
    slug
    seoTitle
    seoDescription
    seoImage {
      ...AssetFields
    }
    theme
    contentCollection {
      items {
        ... on Entry {
          ...EntryFields
        }
      }
    }
  }
`);
