import { uniqBy } from "lodash";
import fetchEndDates from "../airtable/fetchEndDates";
import {
  CardReferenceTypeName,
  CompositeReferenceTypeName,
  DecorativeItemType,
  MenuType,
  PageReferenceTypeName,
  QueryItem,
  ReferenceItemType,
  RelationshipMap,
  RelationshipMapTypeName,
  SectionReferenceTypeName,
  UniqueComponentReferenceTypeName,
} from "../types";
import { isDefined } from "../utils";
import fetchFooter from "./fetchFooter";
import fetchHeader from "./fetchHeader";
import fetchLocalCollection from "./fetchLocalCollection";
import {
  ACCORDION_CARD_COLLECTION_QUERY,
  ACTION_COLLECTION_QUERY,
  CARD_COLLECTION_QUERY,
  CATEGORY_OR_JOB_DETAILS_COLLECTION_QUERY,
  COMPOSITE_COLLECTION_QUERY,
  CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY,
  COURSE_DETAILS_COLLECTION_QUERY,
  PAGE_COLLECTION_QUERY,
  PEOPLE_DETAILS_COLLECTION_QUERY,
  RESOURCE_DETAILS_COLLECTION_QUERY,
  SECTION_COLLECTION_QUERY,
  UNIQUE_COMPONENT_COLLECTION_QUERY,
} from "./graphql/queries";

type FuncReturnType = {
  page: QueryItem["Page"];
  footer: QueryItem["UniqueComponent"];
  header: QueryItem["UniqueComponent"];
  relationshipMap: RelationshipMap;
  endDates: Array<{ name: string; date: string; gift: string }>;
};

export default async function fetchPageBySlug(
  slug: string
): Promise<FuncReturnType> {
  const pages = fetchLocalCollection<QueryItem["Page"]>(
    PAGE_COLLECTION_QUERY,
    (item) => item.slug === slug
  );
  const page = pages.at(0);

  if (!page) {
    throw new Error(`Page with slug ${slug} not found`);
  }

  const footer = fetchFooter();
  const header = fetchHeader();
  const relationshipMap = getPageRelationships(page, header);
  const endDates = await fetchEndDates();

  return {
    page,
    footer,
    header,
    relationshipMap,
    endDates,
  };
}

function getPageRelationships(
  page: QueryItem["Page"],
  header: QueryItem["UniqueComponent"]
): RelationshipMap {
  const compositeIds = extractPageDeepChildIds(
    { pageCollection: [page] },
    "Composite"
  );
  const compositeCollection = fetchLocalCollection<QueryItem["Composite"]>(
    COMPOSITE_COLLECTION_QUERY,
    (item) => compositeIds.includes(item.sys.id)
  );

  const sectionIds = extractPageDeepChildIds(
    { pageCollection: [page], compositeCollection },
    "Section"
  );
  const sectionCollection = fetchLocalCollection<QueryItem["Section"]>(
    SECTION_COLLECTION_QUERY,
    (item) => sectionIds.includes(item.sys.id)
  );

  const uniqueComponentIds = extractPageDeepChildIds(
    { pageCollection: [page], sectionCollection },
    "UniqueComponent"
  );
  const uniqueComponentCollection = fetchLocalCollection<
    QueryItem["UniqueComponent"]
  >(UNIQUE_COMPONENT_COLLECTION_QUERY, (item) =>
    uniqueComponentIds.includes(item.sys.id)
  );

  const accordionCardIds = extractPageDeepChildIds(
    { pageCollection: [page], sectionCollection },
    "AccordionCard"
  );
  const accordionCardCollection = fetchLocalCollection<
    QueryItem["AccordionCard"]
  >(ACCORDION_CARD_COLLECTION_QUERY, (item) =>
    accordionCardIds.includes(item.sys.id)
  );

  const childPageCardIds = extractPageDeepChildIds(
    {
      pageCollection: [page],
      sectionCollection,
      uniqueComponentCollection: [header],
    },
    "Page"
  );
  const childPageCollection = fetchLocalCollection<QueryItem["Page"]>(
    PAGE_COLLECTION_QUERY,
    (item) => childPageCardIds.includes(item.sys.id)
  );
  const sectionTagIds =
    sectionCollection.flatMap((item) =>
      item.contentfulMetadata.tags.map((tag) => tag?.id as string)
    ) || [];
  const sectionTaggedPageCollection = fetchLocalCollection<QueryItem["Page"]>(
    PAGE_COLLECTION_QUERY,
    (item) =>
      item?.contentfulMetadata?.tags?.some((tag) =>
        sectionTagIds.includes(tag?.id as string)
      ) && !childPageCardIds.includes(item.sys.id)
  );

  const pageCollection = uniqBy(
    [page, ...childPageCollection, ...sectionTaggedPageCollection],
    (item) => item.sys.id
  );

  const contentTypeRichTextIds = extractPageDeepChildIds(
    { pageCollection: pageCollection, sectionCollection },
    "ContentTypeRichText"
  );
  const contentTypeRichTextCollection = fetchLocalCollection<
    QueryItem["ContentTypeRichText"]
  >(CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY, (item) =>
    contentTypeRichTextIds.includes(item.sys.id)
  );

  const peopleDetailsIds = extractPageDeepChildIds(
    { pageCollection, sectionCollection, contentTypeRichTextCollection },
    "PeopleDetails"
  );
  const peopleDetailsCollection = fetchLocalCollection<
    QueryItem["PeopleDetails"]
  >(PEOPLE_DETAILS_COLLECTION_QUERY, (item) =>
    peopleDetailsIds.includes(item.sys.id)
  );

  const courseDetailsIds = extractPageDeepChildIds(
    { pageCollection, sectionCollection },
    "CourseDetails"
  );
  const courseDetailsCollection = fetchLocalCollection<
    QueryItem["CourseDetails"]
  >(COURSE_DETAILS_COLLECTION_QUERY, (item) =>
    courseDetailsIds.includes(item.sys.id)
  );

  const resourceDetailsIds = extractPageDeepChildIds(
    { pageCollection, sectionCollection },
    "ResourceDetails"
  );
  const resourceDetailsCollection = fetchLocalCollection<
    QueryItem["ResourceDetails"]
  >(RESOURCE_DETAILS_COLLECTION_QUERY, (item) =>
    resourceDetailsIds.includes(item.sys.id)
  );

  const categoryOrJobDetailsIds = extractPageDeepChildIds(
    { pageCollection, sectionCollection },
    "CategoryOrJobDetails"
  );
  const categoryOrJobDetailsCollection = fetchLocalCollection<
    QueryItem["CategoryOrJobDetails"]
  >(CATEGORY_OR_JOB_DETAILS_COLLECTION_QUERY, (item) =>
    categoryOrJobDetailsIds.includes(item?.sys.id as string)
  );

  const cardIds = extractPageDeepChildIds(
    {
      pageCollection: [page],
      sectionCollection,
      contentTypeRichTextCollection,
      uniqueComponentCollection: [header],
    },
    "Card"
  );
  const cardCollection = fetchLocalCollection<QueryItem["Card"]>(
    CARD_COLLECTION_QUERY,
    (item) => cardIds.includes(item.sys.id)
  );

  const actionIds = extractPageDeepChildIds(
    {
      pageCollection: [page],
      sectionCollection,
      cardCollection,
      peopleDetailsCollection,
    },
    "Action"
  );
  const actionCollection = fetchLocalCollection<QueryItem["Action"]>(
    ACTION_COLLECTION_QUERY,
    (item) => actionIds.includes(item.sys.id)
  );

  const relationshipMap: RelationshipMap = {
    courseDetailsCollection,
    peopleDetailsCollection,
    resourceDetailsCollection,
    compositeCollection,
    sectionCollection,
    contentTypeRichTextCollection,
    uniqueComponentCollection,
    accordionCardCollection,
    actionCollection,
    cardCollection,
    pageCollection,
    categoryOrJobDetailsCollection,
  };

  return relationshipMap;
}

function extractPageDeepChildIds(
  entities: {
    pageCollection: QueryItem["Page"][];
    compositeCollection?: QueryItem["Composite"][];
    sectionCollection?: QueryItem["Section"][];
    cardCollection?: QueryItem["Card"][];
    uniqueComponentCollection?: QueryItem["UniqueComponent"][];
    contentTypeRichTextCollection?: QueryItem["ContentTypeRichText"][];
    peopleDetailsCollection?: QueryItem["PeopleDetails"][];
  },
  contentTypeName: RelationshipMapTypeName
) {
  const pageChildIds =
    entities.pageCollection?.flatMap((page) =>
      extractPageChildIds(page, contentTypeName as PageReferenceTypeName)
    ) || [];

  const compositeChildIds =
    entities.compositeCollection?.flatMap((composite) =>
      extractCompositeChildIds(
        composite,
        contentTypeName as CompositeReferenceTypeName
      )
    ) || [];

  const sectionChildIds =
    entities.sectionCollection?.flatMap((section) =>
      extractSectionChildIds(
        section,
        contentTypeName as SectionReferenceTypeName
      )
    ) || [];

  const cardChildIds =
    entities.cardCollection?.flatMap((card) =>
      extractCardChildIds(card, contentTypeName as CardReferenceTypeName)
    ) || [];

  const contentTypeRichTextChildIds =
    entities.contentTypeRichTextCollection?.flatMap((contentTypeRichText) =>
      extractContentTypeRichTextChildIds(
        contentTypeRichText,
        contentTypeName as RelationshipMapTypeName
      )
    ) || [];

  const uniqueComponentChildIds =
    entities.uniqueComponentCollection?.flatMap((uniqueComponent) =>
      extractUniqueComponentChildIds(
        uniqueComponent,
        contentTypeName as UniqueComponentReferenceTypeName
      )
    ) || [];

  const peopleDetailsChildIds =
    entities.peopleDetailsCollection?.flatMap((details) =>
      extractPeopleDetailsChildIds(
        details,
        contentTypeName as RelationshipMapTypeName
      )
    ) || [];

  return [
    ...new Set([
      ...pageChildIds,
      ...compositeChildIds,
      ...sectionChildIds,
      ...cardChildIds,
      ...contentTypeRichTextChildIds,
      ...uniqueComponentChildIds,
      ...peopleDetailsChildIds,
    ]),
  ];
}

function extractPageChildIds(
  page: QueryItem["Page"],
  contentTypeName: PageReferenceTypeName
) {
  return (
    page?.contentCollection?.items
      .filter((item) => item?.__typename === contentTypeName)
      .map((item) => item?.sys.id as string) || []
  );
}

function extractCompositeChildIds(
  composite: QueryItem["Composite"],
  contentTypeName: CompositeReferenceTypeName
) {
  return (
    composite?.contentCollection?.items
      .filter((item) => item?.__typename === contentTypeName)
      .map((item) => item?.sys.id as string) || []
  );
}

function extractSectionChildIds(
  section: QueryItem["Section"],
  contentTypeName: SectionReferenceTypeName
) {
  if (contentTypeName === "Action") {
    return (
      section.actionsCollection?.items.map((item) => item?.sys.id as string) ||
      []
    );
  }

  return (
    section?.contentCollection?.items
      .filter((item) => item?.__typename === contentTypeName)
      .map((item) => item?.sys.id as string) || []
  );
}

function extractCardChildIds(
  card: QueryItem["Card"],
  contentTypeName: CardReferenceTypeName
) {
  if (contentTypeName === "Action") {
    return (
      card.actionsCollection?.items.map((item) => item?.sys.id as string) || []
    );
  }

  return [];
}

function extractUniqueComponentChildIds(
  uniqueComponent: QueryItem["UniqueComponent"],
  contentTypeName: UniqueComponentReferenceTypeName
) {
  if (uniqueComponent.variant === "Header") {
    const menus: Array<MenuType> = uniqueComponent.json;

    const ids: string[] = [];

    menus
      .filter((menu) => menu.itemGroups)
      .forEach((menu) =>
        menu.itemGroups.forEach((group) =>
          group.items.forEach((item) => {
            if (item.type === "normal-sub") {
              ids.push(
                ...item.items
                  .filter(
                    (item) =>
                      item.type === "decorative" &&
                      item.referenceType === contentTypeName
                  )
                  .map((item) => (item as DecorativeItemType).referenceId)
                  .filter(Boolean)
              );
            } else if (item.type === "category-sub") {
              item.itemGroups.forEach((group) => {
                const referenceItems = group.items.filter(
                  (item) =>
                    item.type === "reference" &&
                    item.referenceType === contentTypeName
                );

                ids.push(
                  ...referenceItems.map(
                    (item) => (item as ReferenceItemType).referenceId
                  )
                );
              });
            }
          })
        )
      );

    return ids;
  }

  return (
    uniqueComponent?.contentCollection?.items
      .filter((item) => item?.__typename === contentTypeName)
      .map((item) => item?.sys.id as string) || []
  );
}

function extractContentTypeRichTextChildIds(
  richText: QueryItem["ContentTypeRichText"],
  contentTypeName: RelationshipMapTypeName
) {
  const blockIds =
    richText.body?.links.entries.block
      .filter((item) => item?.__typename === contentTypeName)
      .map((item) => item?.sys.id)
      .filter(isDefined) || [];
  const inlineIds =
    richText.body?.links.entries.inline
      .filter((item) => item?.__typename === contentTypeName)
      .map((item) => item?.sys.id)
      .filter(isDefined) || [];

  return [...blockIds, ...inlineIds];
}

function extractPeopleDetailsChildIds(
  peopleDetails: QueryItem["PeopleDetails"],
  contentTypeName: RelationshipMapTypeName
) {
  if (contentTypeName === "Action") {
    return (
      peopleDetails.actionsCollection?.items.map(
        (item) => item?.sys.id as string
      ) || []
    );
  }

  return [];
}
