import { graphql } from "./__generated__/gql";

export const PLAYGROUND_PAGE_SLUGS_QUERY = graphql(`
  query PlaygroundPageSlugs {
    pageCollection(
      where: { slug_not_in: ["404"], variant_in: ["Playground"] }
      limit: 100
    ) {
      items {
        slug
      }
    }
  }
`);

export const PAGE_SLUGS_QUERY = graphql(`
  query PageSlugs {
    pageCollection(
      where: { slug_not_in: ["404"], variant_not_in: ["Playground"] }
      limit: 100
    ) {
      items {
        slug
      }
    }
  }
`);

export const PAGE_COLLECTION_QUERY = graphql(`
  query PageCollection($where: PageFilter, $limit: Int) {
    pageCollection(where: $where, limit: $limit) {
      items {
        ...PageFields
      }
    }
  }
`);

export const COURSE_DETAILS_COLLECTION_QUERY = graphql(`
  query CourseDetailsCollection($where: CourseDetailsFilter, $limit: Int) {
    courseDetailsCollection(where: $where, limit: $limit) {
      items {
        ...CourseDetailsFields
      }
    }
  }
`);

export const CATEGORY_OR_JOB_DETAILS_COLLECTION_QUERY = graphql(`
  query CateogoryOrJobDetailsCollection(
    $where: CategoryOrJobDetailsFilter
    $limit: Int
  ) {
    categoryOrJobDetailsCollection(where: $where, limit: $limit) {
      items {
        ...CategoryOrJobDetailsFields
      }
    }
  }
`);

export const PEOPLE_DETAILS_COLLECTION_QUERY = graphql(`
  query PeopleDetailsCollection($where: PeopleDetailsFilter, $limit: Int) {
    peopleDetailsCollection(where: $where, limit: $limit) {
      items {
        ...PeopleDetailsFields
      }
    }
  }
`);

export const RESOURCE_DETAILS_COLLECTION_QUERY = graphql(`
  query ResourceDetailsCollection($where: ResourceDetailsFilter, $limit: Int) {
    resourceDetailsCollection(where: $where, limit: $limit) {
      items {
        ...ResourceDetailsFields
      }
    }
  }
`);

export const CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY = graphql(`
  query ContentTypeRichTextCollection(
    $where: ContentTypeRichTextFilter
    $limit: Int
  ) {
    contentTypeRichTextCollection(where: $where, limit: $limit) {
      items {
        ...ContentTypeRichTextFields
      }
    }
  }
`);

export const UNIQUE_COMPONENT_COLLECTION_QUERY = graphql(`
  query UniqueComponentCollection($where: UniqueComponentFilter, $limit: Int) {
    uniqueComponentCollection(where: $where, limit: $limit) {
      items {
        ...UniqueComponentFields
      }
    }
  }
`);

export const ACCORDION_CARD_COLLECTION_QUERY = graphql(`
  query AccordionCardCollection($where: AccordionCardFilter, $limit: Int) {
    accordionCardCollection(where: $where, limit: $limit) {
      items {
        ...AccordionCardFields
      }
    }
  }
`);

export const CARD_COLLECTION_QUERY = graphql(`
  query CardCollection($where: CardFilter, $limit: Int) {
    cardCollection(where: $where, limit: $limit) {
      items {
        ...CardFields
      }
    }
  }
`);

export const SECTION_COLLECTION_QUERY = graphql(`
  query SectionCollection($where: SectionFilter, $limit: Int) {
    sectionCollection(where: $where, limit: $limit) {
      items {
        ...SectionFields
      }
    }
  }
`);

export const COMPOSITE_COLLECTION_QUERY = graphql(`
  query CompositeCollection($where: CompositeFilter, $limit: Int) {
    compositeCollection(where: $where, limit: $limit) {
      items {
        ...CompositeFields
      }
    }
  }
`);

export const ASSET_COLLECTION_QUERY = graphql(`
  query AssetCollection($where: AssetFilter, $limit: Int) {
    assetCollection(where: $where, limit: $limit) {
      items {
        ...AssetFields
      }
    }
  }
`);

export const ACTION_COLLECTION_QUERY = graphql(`
  query ActionCollection($where: ActionFilter, $limit: Int) {
    actionCollection(where: $where, limit: $limit) {
      items {
        ...ActionFields
      }
    }
  }
`);
