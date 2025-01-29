import { Client } from "@urql/core";
import {
  AccordionCardQueryItem,
  ActionQueryItem,
  AssetQueryItem,
  CardQueryItem,
  ContentTypeRichTextQueryItem,
  CourseDetailsQueryItem,
  PageChildContentType,
  PageQueryItem,
  RelationshipMapContentType,
  RelationshipMapType,
  SectionChildContentType,
  SectionQueryItem,
  UniqueComponentQueryItem,
} from "../types";
import { fetchCollectionByIds } from "./fetchCollectionByIds";
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

type ReturnType = {
  page: PageQueryItem;
  relationships: RelationshipMapType;
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

  const page = data?.pageCollection?.items[0] as PageQueryItem;
  const relationships = await getPageRelationships(client, page);

  return {
    page,
    relationships,
  };
}

async function getPageRelationships(
  client: Client,
  page: PageQueryItem
): Promise<RelationshipMapType> {
  const courseDetailsIds = extractPageChildIds(page, "CourseDetails");
  const courseDetailsCollection = await fetchCollectionByIds(client, {
    ids: courseDetailsIds,
    query: COURSE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) =>
      (data?.courseDetailsCollection?.items || []) as CourseDetailsQueryItem[],
  });

  const sectionIds = extractRecursiveChildIds(page, [], "Section");
  const sectionCollection = await fetchCollectionByIds(client, {
    ids: sectionIds,
    query: SECTION_COLLECTION_QUERY,
    mapItems: (data) =>
      (data?.sectionCollection?.items || []) as SectionQueryItem[],
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
      (data?.contentTypeRichTextCollection?.items ||
        []) as ContentTypeRichTextQueryItem[],
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
      (data?.uniqueComponentCollection?.items ||
        []) as UniqueComponentQueryItem[],
  });

  const actionIds = sectionCollection.flatMap(
    (section) =>
      section.actionsCollection?.items.map((item) => item?.sys.id as string) ||
      []
  );
  const actionCollection = await fetchCollectionByIds(client, {
    ids: actionIds,
    query: ACTION_COLLECTION_QUERY,
    mapItems: (data) =>
      (data?.actionCollection?.items || []) as ActionQueryItem[],
  });

  const assetIds = sectionCollection.flatMap(
    (section) =>
      section.assetsCollection?.items.map((item) => item?.sys.id as string) ||
      []
  );
  const assetCollection = await fetchCollectionByIds(client, {
    ids: assetIds,
    query: ASSET_COLLECTION_QUERY,
    mapItems: (data) =>
      (data?.assetCollection?.items || []) as AssetQueryItem[],
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
      (data?.accordionCardCollection?.items || []) as AccordionCardQueryItem[],
  });

  const cardIds = extractRecursiveChildIds(page, sectionCollection, "Card");
  const cardCollection = await fetchCollectionByIds(client, {
    ids: cardIds,
    query: CARD_COLLECTION_QUERY,
    mapItems: (data) => (data?.cardCollection?.items || []) as CardQueryItem[],
  });

  const pageIds = extractRecursiveChildIds(page, sectionCollection, "Page");
  const pageCollection = await fetchCollectionByIds(client, {
    ids: pageIds,
    query: PAGE_COLLECTION_QUERY,
    mapItems: (data) => (data?.pageCollection?.items || []) as PageQueryItem[],
  });

  const relationships: RelationshipMapType = {
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

  return relationships;
}

function extractRecursiveChildIds(
  page: PageQueryItem,
  sections: SectionQueryItem[],
  contentTypeName: RelationshipMapContentType
) {
  const pageChildIds = extractPageChildIds(
    page,
    contentTypeName as PageChildContentType
  );

  const sectionChildIds = sections.flatMap((section) =>
    extractSectionChildIds(section, contentTypeName as SectionChildContentType)
  );

  return [...pageChildIds, ...sectionChildIds];
}

function extractPageChildIds(
  page: PageQueryItem,
  contentTypeName: PageChildContentType
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
  section: SectionQueryItem,
  contentTypeName: SectionChildContentType
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
