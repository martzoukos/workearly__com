import { Client } from "@urql/core";
import { uniqBy } from "lodash";
import {
  CardReferenceTypeName,
  CompositeReferenceTypeName,
  PageReferenceTypeName,
  QueryItem,
  RelationshipMap,
  RelationshipMapTypeName,
  SectionReferenceTypeName,
  UniqueComponentReferenceTypeName,
} from "../types";
import { isDefined } from "../utils";
import fetchCollection from "./fetchCollection";
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
  const pageSectionIds = extractPageDeepChildIds(
    { pageCollection: [page] },
    "Section"
  );
  const pageSectionCollection = await fetchCollection(client, {
    ids: pageSectionIds,
    query: SECTION_COLLECTION_QUERY,
    mapItems: (data) => data?.sectionCollection?.items.filter(isDefined) || [],
  });

  const compositeIds = extractPageDeepChildIds(
    { pageCollection: [page] },
    "Composite"
  );
  const compositeCollection = await fetchCollection(client, {
    ids: compositeIds,
    query: COMPOSITE_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.compositeCollection?.items.filter(isDefined) || [],
  });

  const sectionIds = extractPageDeepChildIds(
    { pageCollection: [page], compositeCollection },
    "Section"
  );
  const sectionCollection = await fetchCollection(client, {
    ids: sectionIds,
    query: SECTION_COLLECTION_QUERY,
    mapItems: (data) => data?.sectionCollection?.items.filter(isDefined) || [],
  });

  const contentTypeRichTextIds = extractPageDeepChildIds(
    { pageCollection: [page], sectionCollection },
    "ContentTypeRichText"
  );
  const contentTypeRichTextCollection = await fetchCollection(client, {
    ids: contentTypeRichTextIds,
    query: CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.contentTypeRichTextCollection?.items.filter(isDefined) || [],
  });

  const uniqueComponentIds = extractPageDeepChildIds(
    { pageCollection: [page], sectionCollection },
    "UniqueComponent"
  );
  const uniqueComponentCollection = await fetchCollection(client, {
    ids: uniqueComponentIds,
    query: UNIQUE_COMPONENT_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.uniqueComponentCollection?.items.filter(isDefined) || [],
  });

  const accordionCardIds = extractPageDeepChildIds(
    { pageCollection: [page], sectionCollection },
    "AccordionCard"
  );
  const accordionCardCollection = await fetchCollection(client, {
    ids: accordionCardIds,
    query: ACCORDION_CARD_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.accordionCardCollection?.items.filter(isDefined) || [],
  });

  const childPageIds = extractPageDeepChildIds(
    { pageCollection: [page], sectionCollection, uniqueComponentCollection },
    "Page"
  );
  const childPageCollection = await fetchCollection(client, {
    ids: childPageIds,
    query: PAGE_COLLECTION_QUERY,
    mapItems: (data) => data?.pageCollection?.items.filter(isDefined) || [],
  });
  const uniqueComponentTagIds =
    uniqueComponentCollection.flatMap((item) =>
      item.contentfulMetadata.tags.map((tag) => tag?.id as string)
    ) || [];
  const uniqueComponentTaggedPageCollection = await fetchCollection(client, {
    tagIds: uniqueComponentTagIds,
    query: PAGE_COLLECTION_QUERY,
    mapItems: (data) => data?.pageCollection?.items.filter(isDefined) || [],
  });

  const pageCollection = uniqBy(
    [page, ...childPageCollection, ...uniqueComponentTaggedPageCollection],
    "sys.id"
  );

  const peopleDetailsIds = extractPageDeepChildIds(
    { pageCollection, sectionCollection, contentTypeRichTextCollection },
    "PeopleDetails"
  );
  const peopleDetailsCollection = await fetchCollection(client, {
    ids: peopleDetailsIds,
    query: PEOPLE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.peopleDetailsCollection?.items.filter(isDefined) || [],
  });

  const courseDetailsIds = extractPageDeepChildIds(
    { pageCollection, sectionCollection },
    "CourseDetails"
  );
  const courseDetailsCollection = await fetchCollection(client, {
    ids: courseDetailsIds,
    query: COURSE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.courseDetailsCollection?.items.filter(isDefined) || [],
  });

  const resourceDetailsIds = extractPageDeepChildIds(
    { pageCollection, sectionCollection },
    "ResourceDetails"
  );

  const resourceDetailsCollection = await fetchCollection(client, {
    ids: resourceDetailsIds,
    query: RESOURCE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.resourceDetailsCollection?.items.filter(isDefined) || [],
  });

  const categoryOrJobDetailsIds = extractPageDeepChildIds(
    { pageCollection, sectionCollection },
    "CategoryOrJobDetails"
  );

  const categoryOrJobDetailsCollection = await fetchCollection(client, {
    ids: categoryOrJobDetailsIds,
    query: CATEGORY_OR_JOB_DETAILS_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.categoryOrJobDetailsCollection?.items.filter(isDefined) || [],
  });

  const cardIds = extractPageDeepChildIds(
    {
      pageCollection: [page],
      sectionCollection,
      contentTypeRichTextCollection,
    },
    "Card"
  );
  const cardCollection = await fetchCollection(client, {
    ids: cardIds,
    query: CARD_COLLECTION_QUERY,
    mapItems: (data) => data?.cardCollection?.items.filter(isDefined) || [],
  });

  const actionIds = extractPageDeepChildIds(
    { pageCollection: [page], sectionCollection, cardCollection },
    "Action"
  );
  const actionCollection = await fetchCollection(client, {
    ids: actionIds,
    query: ACTION_COLLECTION_QUERY,
    mapItems: (data) => data?.actionCollection?.items.filter(isDefined) || [],
  });

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

  return [
    ...new Set([
      ...pageChildIds,
      ...compositeChildIds,
      ...sectionChildIds,
      ...cardChildIds,
      ...contentTypeRichTextChildIds,
      ...uniqueComponentChildIds,
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
  if (contentTypeName === "Page") {
    return (
      uniqueComponent.contentCollection?.items.map(
        (item) => item?.sys.id as string
      ) || []
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
