import { Client } from "@urql/core";
import {
  PageReferenceTypeName,
  RelationshipMapTypeName,
  RelationshipMap,
  SectionReferenceTypeName,
  QueryItem,
} from "../types";
import fetchCollectionByIds from "./fetchCollectionByIds";
import {
  ACCORDION_CARD_COLLECTION_QUERY,
  ACTION_COLLECTION_QUERY,
  ASSET_COLLECTION_QUERY,
  CARD_COLLECTION_QUERY,
  CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY,
  COURSE_DETAILS_COLLECTION_QUERY,
  PAGE_COLLECTION_QUERY,
  SECTION_COLLECTION_QUERY,
  UNIQUE_COMPONENT_COLLECTION_QUERY,
} from "./graphql/queries";
import { isDefined } from "../utils";

type ReturnType = {
  page: QueryItem["Page"];
  relationshipMap: RelationshipMap;
};

export default async function fetchPageBySlug(
  client: Client,
  slug: string
): Promise<ReturnType> {
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
  const courseDetailsIds = extractPageChildIds(page, "CourseDetails");
  const courseDetailsCollection = await fetchCollectionByIds(client, {
    ids: courseDetailsIds,
    query: COURSE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.courseDetailsCollection?.items.filter(isDefined) || [],
  });

  const sectionIds = extractRecursiveChildIds(page, [], "Section");
  const sectionCollection = await fetchCollectionByIds(client, {
    ids: sectionIds,
    query: SECTION_COLLECTION_QUERY,
    mapItems: (data) => data?.sectionCollection?.items.filter(isDefined) || [],
  });

  const contentTypeRichTextIds = extractRecursiveChildIds(
    page,
    sectionCollection,
    "ContentTypeRichText"
  );
  const contentTypeRichTextCollection = await fetchCollectionByIds(client, {
    ids: contentTypeRichTextIds,
    query: CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.contentTypeRichTextCollection?.items.filter(isDefined) || [],
  });

  const uniqueComponentIds = extractRecursiveChildIds(
    page,
    sectionCollection,
    "UniqueComponent"
  );
  const uniqueComponentCollection = await fetchCollectionByIds(client, {
    ids: uniqueComponentIds,
    query: UNIQUE_COMPONENT_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.uniqueComponentCollection?.items.filter(isDefined) || [],
  });

  const actionIds = sectionCollection.flatMap(
    (section) =>
      section?.actionsCollection?.items.map((item) => item?.sys.id as string) ||
      []
  );
  const actionCollection = await fetchCollectionByIds(client, {
    ids: actionIds,
    query: ACTION_COLLECTION_QUERY,
    mapItems: (data) => data?.actionCollection?.items.filter(isDefined) || [],
  });

  const assetIds = sectionCollection.flatMap(
    (section) =>
      section?.assetsCollection?.items.map((item) => item?.sys.id as string) ||
      []
  );
  const assetCollection = await fetchCollectionByIds(client, {
    ids: assetIds,
    query: ASSET_COLLECTION_QUERY,
    mapItems: (data) => data?.assetCollection?.items.filter(isDefined) || [],
  });

  const accordionCardIds = extractRecursiveChildIds(
    page,
    sectionCollection,
    "AccordionCard"
  );
  const accordionCardCollection = await fetchCollectionByIds(client, {
    ids: accordionCardIds,
    query: ACCORDION_CARD_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.accordionCardCollection?.items.filter(isDefined) || [],
  });

  const cardIds = extractRecursiveChildIds(page, sectionCollection, "Card");
  const cardCollection = await fetchCollectionByIds(client, {
    ids: cardIds,
    query: CARD_COLLECTION_QUERY,
    mapItems: (data) => data?.cardCollection?.items.filter(isDefined) || [],
  });

  const pageIds = extractRecursiveChildIds(page, sectionCollection, "Page");
  const pageCollection = await fetchCollectionByIds(client, {
    ids: pageIds,
    query: PAGE_COLLECTION_QUERY,
    mapItems: (data) => data?.pageCollection?.items.filter(isDefined) || [],
  });

  const relationshipMap: RelationshipMap = {
    courseDetailsCollection,
    sectionCollection,
    contentTypeRichTextCollection,
    uniqueComponentCollection,
    accordionCardCollection,
    actionCollection,
    assetCollection,
    cardCollection,
    pageCollection,
  };

  return relationshipMap;
}

function extractRecursiveChildIds(
  page: QueryItem["Page"],
  sections: QueryItem["Section"][],
  contentTypeName: RelationshipMapTypeName
) {
  const pageChildIds = extractPageChildIds(
    page,
    contentTypeName as PageReferenceTypeName
  );

  const sectionChildIds = sections.flatMap((section) =>
    extractSectionChildIds(section, contentTypeName as SectionReferenceTypeName)
  );

  return [...pageChildIds, ...sectionChildIds];
}

function extractPageChildIds(
  page: QueryItem["Page"],
  contentTypeName: PageReferenceTypeName
) {
  if (contentTypeName === "CourseDetails") {
    return page?.details?.sys.id ? [page.details.sys.id] : [];
  }

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
  } else if (contentTypeName === "Asset") {
    return (
      section.assetsCollection?.items.map((item) => item?.sys.id as string) ||
      []
    );
  }

  return (
    section?.contentCollection?.items
      .filter((item) => item?.__typename === contentTypeName)
      .map((item) => item?.sys.id as string) || []
  );
}
