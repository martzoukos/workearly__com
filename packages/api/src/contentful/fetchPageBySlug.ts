import { Client } from "@urql/core";
import {
  PageReferenceTypeName,
  RelationshipMapTypeName,
  RelationshipMap,
  SectionReferenceTypeName,
  QueryItem,
  CardReferenceTypeName,
} from "../types";
import fetchCollectionByIds from "./fetchCollectionByIds";
import {
  ACCORDION_CARD_COLLECTION_QUERY,
  ACTION_COLLECTION_QUERY,
  CARD_COLLECTION_QUERY,
  CATEGORY_OR_JOB_DETAILS_COLLECTION_QUERY,
  CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY,
  COURSE_DETAILS_COLLECTION_QUERY,
  PAGE_COLLECTION_QUERY,
  PEOPLE_DETAILS_COLLECTION_QUERY,
  RESOURCE_DETAILS_COLLECTION_QUERY,
  SECTION_COLLECTION_QUERY,
  UNIQUE_COMPONENT_COLLECTION_QUERY,
} from "./graphql/queries";
import { isDefined } from "../utils";

type FuncReturnType = {
  page: QueryItem["Page"];
  relationshipMap: RelationshipMap;
};

export default async function fetchPageBySlug(
  client: Client,
  slug: string
): Promise<FuncReturnType> {
  const { data } = await client
    .query(PAGE_COLLECTION_QUERY, { where: { slug }, limit: 1 })
    .toPromise();

  if (!data?.pageCollection?.items.at(0)) {
    throw new Error(`Page with slug ${slug} not found`);
  }

  const page = data?.pageCollection?.items[0] as QueryItem["Page"];
  const relationshipMap = await getPageRelationships(client, page);

  return {
    page,
    relationshipMap,
  };
}

async function getPageRelationships(
  client: Client,
  page: QueryItem["Page"]
): Promise<RelationshipMap> {
  const pageSectionIds = extractPageRecursiveChildIds(
    { pageCollection: [page] },
    "Section"
  );
  const pageSectionCollection = await fetchCollectionByIds(client, {
    ids: pageSectionIds,
    query: SECTION_COLLECTION_QUERY,
    mapItems: (data) => data?.sectionCollection?.items.filter(isDefined) || [],
  });

  const sectionIds = extractPageRecursiveChildIds(
    { pageCollection: [page], sectionCollection: pageSectionCollection },
    "Section"
  );
  const sectionCollection = await fetchCollectionByIds(client, {
    ids: sectionIds,
    query: SECTION_COLLECTION_QUERY,
    mapItems: (data) => data?.sectionCollection?.items.filter(isDefined) || [],
  });

  const contentTypeRichTextIds = extractPageRecursiveChildIds(
    { pageCollection: [page], sectionCollection },
    "ContentTypeRichText"
  );
  const contentTypeRichTextCollection = await fetchCollectionByIds(client, {
    ids: contentTypeRichTextIds,
    query: CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.contentTypeRichTextCollection?.items.filter(isDefined) || [],
  });

  const uniqueComponentIds = extractPageRecursiveChildIds(
    { pageCollection: [page], sectionCollection },
    "UniqueComponent"
  );
  const uniqueComponentCollection = await fetchCollectionByIds(client, {
    ids: uniqueComponentIds,
    query: UNIQUE_COMPONENT_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.uniqueComponentCollection?.items.filter(isDefined) || [],
  });

  const accordionCardIds = extractPageRecursiveChildIds(
    { pageCollection: [page], sectionCollection },
    "AccordionCard"
  );
  const accordionCardCollection = await fetchCollectionByIds(client, {
    ids: accordionCardIds,
    query: ACCORDION_CARD_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.accordionCardCollection?.items.filter(isDefined) || [],
  });

  const childPageIds = extractPageRecursiveChildIds(
    { pageCollection: [page], sectionCollection },
    "Page"
  );
  const childPageCollection = await fetchCollectionByIds(client, {
    ids: childPageIds,
    query: PAGE_COLLECTION_QUERY,
    mapItems: (data) => data?.pageCollection?.items.filter(isDefined) || [],
  });
  const pageCollection = [page, ...childPageCollection];

  const peopleDetailsIds = extractPageRecursiveChildIds(
    { pageCollection, sectionCollection, contentTypeRichTextCollection },
    "PeopleDetails"
  );
  const peopleDetailsCollection = await fetchCollectionByIds(client, {
    ids: peopleDetailsIds,
    query: PEOPLE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.peopleDetailsCollection?.items.filter(isDefined) || [],
  });

  const courseDetailsIds = extractPageRecursiveChildIds(
    { pageCollection, sectionCollection },
    "CourseDetails"
  );
  const courseDetailsCollection = await fetchCollectionByIds(client, {
    ids: courseDetailsIds,
    query: COURSE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.courseDetailsCollection?.items.filter(isDefined) || [],
  });

  const resourceDetailsIds = extractPageRecursiveChildIds(
    { pageCollection, sectionCollection },
    "ResourceDetails"
  );

  const resourceDetailsCollection = await fetchCollectionByIds(client, {
    ids: resourceDetailsIds,
    query: RESOURCE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.resourceDetailsCollection?.items.filter(isDefined) || [],
  });

  const categoryOrJobDetailsIds = extractPageRecursiveChildIds(
    { pageCollection, sectionCollection },
    "CategoryOrJobDetails"
  );

  const categoryOrJobDetailsCollection = await fetchCollectionByIds(client, {
    ids: categoryOrJobDetailsIds,
    query: CATEGORY_OR_JOB_DETAILS_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.categoryOrJobDetailsCollection?.items.filter(isDefined) || [],
  });

  const cardIds = extractPageRecursiveChildIds(
    {
      pageCollection: [page],
      sectionCollection,
      contentTypeRichTextCollection,
    },
    "Card"
  );
  const cardCollection = await fetchCollectionByIds(client, {
    ids: cardIds,
    query: CARD_COLLECTION_QUERY,
    mapItems: (data) => data?.cardCollection?.items.filter(isDefined) || [],
  });

  const actionIds = extractPageRecursiveChildIds(
    { pageCollection: [page], sectionCollection, cardCollection },
    "Action"
  );
  const actionCollection = await fetchCollectionByIds(client, {
    ids: actionIds,
    query: ACTION_COLLECTION_QUERY,
    mapItems: (data) => data?.actionCollection?.items.filter(isDefined) || [],
  });

  const relationshipMap: RelationshipMap = {
    courseDetailsCollection,
    peopleDetailsCollection,
    resourceDetailsCollection,
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

function extractPageRecursiveChildIds(
  entities: {
    pageCollection: QueryItem["Page"][];
    sectionCollection?: QueryItem["Section"][];
    cardCollection?: QueryItem["Card"][];
    contentTypeRichTextCollection?: QueryItem["ContentTypeRichText"][];
  },
  contentTypeName: RelationshipMapTypeName
) {
  const pageChildIds =
    entities.pageCollection?.flatMap((page) =>
      extractPageChildIds(page, contentTypeName as PageReferenceTypeName)
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

  return [
    ...new Set([
      ...pageChildIds,
      ...sectionChildIds,
      ...cardChildIds,
      ...contentTypeRichTextChildIds,
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
