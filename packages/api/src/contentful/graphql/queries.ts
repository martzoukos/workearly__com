import { graphql } from "./__generated__/gql";

export const PAGE_COLLECTION_QUERY = graphql(`
  query PageCollection($where: PageFilter, $limit: Int, $skip: Int) {
    pageCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
      items {
        ...PageFields
      }
    }
  }
`);

export const COURSE_DETAILS_COLLECTION_QUERY = graphql(`
  query CourseDetailsCollection(
    $where: CourseDetailsFilter
    $limit: Int
    $skip: Int
  ) {
    courseDetailsCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
      items {
        ...CourseDetailsFields
      }
    }
  }
`);

export const CATEGORY_OR_JOB_DETAILS_COLLECTION_QUERY = graphql(`
  query CategoryOrJobDetailsCollection(
    $where: CategoryOrJobDetailsFilter
    $limit: Int
    $skip: Int
  ) {
    categoryOrJobDetailsCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
      items {
        ...CategoryOrJobDetailsFields
      }
    }
  }
`);

export const PEOPLE_DETAILS_COLLECTION_QUERY = graphql(`
  query PeopleDetailsCollection(
    $where: PeopleDetailsFilter
    $limit: Int
    $skip: Int
  ) {
    peopleDetailsCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
      items {
        ...PeopleDetailsFields
      }
    }
  }
`);

export const RESOURCE_DETAILS_COLLECTION_QUERY = graphql(`
  query ResourceDetailsCollection(
    $where: ResourceDetailsFilter
    $limit: Int
    $skip: Int
  ) {
    resourceDetailsCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
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
    $skip: Int
  ) {
    contentTypeRichTextCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
      items {
        ...ContentTypeRichTextFields
      }
    }
  }
`);

export const UNIQUE_COMPONENT_COLLECTION_QUERY = graphql(`
  query UniqueComponentCollection(
    $where: UniqueComponentFilter
    $limit: Int
    $skip: Int
  ) {
    uniqueComponentCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
      items {
        ...UniqueComponentFields
      }
    }
  }
`);

export const ACCORDION_CARD_COLLECTION_QUERY = graphql(`
  query AccordionCardCollection(
    $where: AccordionCardFilter
    $limit: Int
    $skip: Int
  ) {
    accordionCardCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
      items {
        ...AccordionCardFields
      }
    }
  }
`);

export const CARD_COLLECTION_QUERY = graphql(`
  query CardCollection($where: CardFilter, $limit: Int, $skip: Int) {
    cardCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
      items {
        ...CardFields
      }
    }
  }
`);

export const SECTION_COLLECTION_QUERY = graphql(`
  query SectionCollection($where: SectionFilter, $limit: Int, $skip: Int) {
    sectionCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
      items {
        ...SectionFields
      }
    }
  }
`);

export const COMPOSITE_COLLECTION_QUERY = graphql(`
  query CompositeCollection($where: CompositeFilter, $limit: Int, $skip: Int) {
    compositeCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
      items {
        ...CompositeFields
      }
    }
  }
`);

export const ACTION_COLLECTION_QUERY = graphql(`
  query ActionCollection($where: ActionFilter, $limit: Int, $skip: Int) {
    actionCollection(where: $where, limit: $limit, skip: $skip) {
      total
      skip
      limit
      items {
        ...ActionFields
      }
    }
  }
`);

export const REVALIDATE_QUERY = graphql(`
  query Revalidate($entryId: String!) {
    entryCollection(where: { sys: { id: $entryId } }, limit: 1) {
      items {
        ... on CourseDetails {
          linkedFrom {
            pageCollection {
              items {
                slug
                variant
              }
            }
          }
        }
        ... on PeopleDetails {
          linkedFrom {
            pageCollection {
              items {
                slug
                variant
              }
            }
          }
        }
        ... on CategoryOrJobDetails {
          linkedFrom {
            pageCollection {
              items {
                slug
                variant
              }
            }
          }
        }
        ... on ResourceDetails {
          linkedFrom {
            pageCollection {
              items {
                slug
                variant
              }
            }
          }
        }
        ... on ContentTypeRichText {
          linkedFrom {
            pageCollection {
              items {
                slug
                variant
              }
            }
            sectionCollection {
              items {
                sys {
                  id
                }
              }
            }
          }
        }
        ... on UniqueComponent {
          linkedFrom {
            pageCollection {
              items {
                slug
                variant
              }
            }
          }
        }
        ... on Composite {
          linkedFrom {
            pageCollection {
              items {
                slug
                variant
              }
            }
          }
        }
        ... on Section {
          linkedFrom {
            pageCollection {
              items {
                slug
                variant
              }
            }
            compositeCollection {
              items {
                sys {
                  id
                }
              }
            }
          }
        }
        ... on AccordionCard {
          linkedFrom {
            sectionCollection {
              items {
                sys {
                  id
                }
              }
            }
          }
        }
        ... on Card {
          linkedFrom {
            sectionCollection {
              items {
                sys {
                  id
                }
              }
            }
          }
        }
        ... on Page {
          linkedFrom {
            uniqueComponentCollection {
              items {
                sys {
                  id
                }
              }
            }
            sectionCollection {
              items {
                sys {
                  id
                }
              }
            }
            actionCollection {
              items {
                sys {
                  id
                }
              }
            }
          }
        }
        ... on Action {
          linkedFrom {
            peopleDetailsCollection {
              items {
                sys {
                  id
                }
              }
            }
            compositeCollection {
              items {
                sys {
                  id
                }
              }
            }
            sectionCollection {
              items {
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`);
