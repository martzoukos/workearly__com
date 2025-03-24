import { Client } from "@urql/core";
import { uniqBy } from "lodash";
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
import fetchCollection from "./fetchCollection";
import fetchFooter from "./fetchFooter";
import fetchHeader from "./fetchHeader";
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

  const [footer, header] = await Promise.all([
    fetchFooter(client),
    fetchHeader(client),
  ]);
  const page = data?.pageCollection?.items[0] as QueryItem["Page"];
  const relationshipMap = await getPageRelationships(client, page, header);

  return {
    page,
    footer,
    header,
    relationshipMap,
  };
}

async function getPageRelationships(
  client: Client,
  page: QueryItem["Page"],
  header: QueryItem["UniqueComponent"]
): Promise<RelationshipMap> {
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
    {
      pageCollection: [page],
      sectionCollection,
      uniqueComponentCollection: [header],
    },
    "Page"
  );
  const childPageCollection = await fetchCollection(client, {
    ids: childPageIds,
    query: PAGE_COLLECTION_QUERY,
    mapItems: (data) => data?.pageCollection?.items.filter(isDefined) || [],
  });
  const sectionTagIds =
    sectionCollection.flatMap((item) =>
      item.contentfulMetadata.tags.map((tag) => tag?.id as string)
    ) || [];
  const sectionTaggedPageCollection = await fetchCollection(client, {
    tagIds: sectionTagIds,
    query: PAGE_COLLECTION_QUERY,
    limit: 20,
    mapTotal: (data) => data?.pageCollection?.total || 0,
    mapItems: (data) => data?.pageCollection?.items.filter(isDefined) || [],
  });

  const pageCollection = uniqBy(
    [page, ...childPageCollection, ...sectionTaggedPageCollection],
    (item) => item.sys.id
  );

  const contentTypeRichTextIds = extractPageDeepChildIds(
    { pageCollection: pageCollection, sectionCollection },
    "ContentTypeRichText"
  );
  const contentTypeRichTextCollection = await fetchCollection(client, {
    ids: contentTypeRichTextIds,
    query: CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY,
    mapItems: (data) =>
      data?.contentTypeRichTextCollection?.items.filter(isDefined) || [],
  });

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
      uniqueComponentCollection: [header],
    },
    "Card"
  );
  const cardCollection = await fetchCollection(client, {
    ids: cardIds,
    query: CARD_COLLECTION_QUERY,
    mapItems: (data) => data?.cardCollection?.items.filter(isDefined) || [],
  });

  const actionIds = extractPageDeepChildIds(
    {
      pageCollection: [page],
      sectionCollection,
      cardCollection,
      peopleDetailsCollection,
    },
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
