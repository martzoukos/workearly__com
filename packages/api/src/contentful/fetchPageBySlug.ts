import { Client } from "@urql/core";
import {
  AccordionCardQueryItem,
  ActionQueryItem,
  AssetQueryItem,
  CardQueryItem,
  ContentTypeRichTextQueryItem,
  CourseDetailsQueryItem,
  PageQueryItem,
  PageRelationshipsType,
  SectionQueryItem,
  UniqueComponentQueryItem,
} from "../types";
import { fetchCollectionByIds } from "./fetchCollectionByIds";
import {
  PageContentItem,
  SectionContentItem,
} from "./graphql/__generated__/gql/graphql";
import {
  ACCORDION_CARD_COLLECTION_QUERY,
  ACTION_COLLECTION_QUERY,
  ASSET_COLLECTION_QUERY,
  CARD_COLLECTION_QUERY,
  CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY,
  COURSE_DETAILS_COLLECTION_QUERY,
  PAGE_QUERY,
  SECTION_COLLECTION_QUERY,
  UNIQUE_COMPONENT_COLLECTION_QUERY,
} from "./graphql/queries";

type ReturnType = {
  page: PageQueryItem;
  relationships: PageRelationshipsType;
};

export default async function fetchPageBySlug(
  client: Client,
  slug: string
): Promise<ReturnType> {
  const { data } = await client.query(PAGE_QUERY, { slug }).toPromise();

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
): Promise<PageRelationshipsType> {
  const detailsCollection = await fetchCollectionByIds(client, {
    ids: page?.details?.sys.id ? [page.details.sys.id] : [],
    query: COURSE_DETAILS_COLLECTION_QUERY,
    mapItems: (data) =>
      (data?.courseDetailsCollection?.items || []) as CourseDetailsQueryItem[],
  });

  const sectionIds = extractPageChildIds(page, [], "Section");
  const sections = await fetchCollectionByIds(client, {
    ids: sectionIds,
    query: SECTION_COLLECTION_QUERY,
    mapItems: (data) =>
      (data?.sectionCollection?.items || []) as SectionQueryItem[],
  });

  const contentTypeRichTextIds = extractPageChildIds(
    page,
    sections,
    "ContentTypeRichText"
  );
  const contentTypeRichTexts = await fetchCollectionByIds(client, {
    ids: contentTypeRichTextIds,
    query: CONTENT_TYPE_RICH_TEXT_COLLECTION_QUERY,
    mapItems: (data) =>
      (data?.contentTypeRichTextCollection?.items ||
        []) as ContentTypeRichTextQueryItem[],
  });

  const uniqueComponentIds = extractPageChildIds(
    page,
    sections,
    "UniqueComponent"
  );
  const uniqueComponents = await fetchCollectionByIds(client, {
    ids: uniqueComponentIds,
    query: UNIQUE_COMPONENT_COLLECTION_QUERY,
    mapItems: (data) =>
      (data?.uniqueComponentCollection?.items ||
        []) as UniqueComponentQueryItem[],
  });

  const actionIds = sections.flatMap(
    (section) =>
      section.actionsCollection?.items.map((item) => item?.sys.id as string) ||
      []
  );
  const actions = await fetchCollectionByIds(client, {
    ids: actionIds,
    query: ACTION_COLLECTION_QUERY,
    mapItems: (data) =>
      (data?.actionCollection?.items || []) as ActionQueryItem[],
  });

  const assetIds = sections.flatMap(
    (section) =>
      section.assetsCollection?.items.map((item) => item?.sys.id as string) ||
      []
  );
  const assets = await fetchCollectionByIds(client, {
    ids: assetIds,
    query: ASSET_COLLECTION_QUERY,
    mapItems: (data) =>
      (data?.assetCollection?.items || []) as AssetQueryItem[],
  });

  const accordionCardIds = extractPageChildIds(page, sections, "AccordionCard");
  const accordionCards = await fetchCollectionByIds(client, {
    ids: accordionCardIds,
    query: ACCORDION_CARD_COLLECTION_QUERY,
    mapItems: (data) =>
      (data?.accordionCardCollection?.items || []) as AccordionCardQueryItem[],
  });

  const cardIds = extractPageChildIds(page, sections, "Card");
  const cards = await fetchCollectionByIds(client, {
    ids: cardIds,
    query: CARD_COLLECTION_QUERY,
    mapItems: (data) => (data?.cardCollection?.items || []) as CardQueryItem[],
  });

  const relationships: PageRelationshipsType = {
    id: page.sys.id,
    details: detailsCollection.at(0) ?? null,
    contentTypeRichTexts: contentTypeRichTexts.filter((item) =>
      contentTypeRichTextIds.includes(item.sys.id)
    ),
    uniqueComponents: uniqueComponents.filter((item) =>
      uniqueComponentIds.includes(item.sys.id)
    ),
    sections: sections.map((section) => ({
      id: section.sys.id,
      actions: actions.filter((action) => actionIds.includes(action.sys.id)),
      assets: assets.filter((asset) => assetIds.includes(asset.sys.id)),
      accordionCards: accordionCards.filter((card) =>
        accordionCardIds.includes(card.sys.id)
      ),
      contentTypeRichTextIds: contentTypeRichTexts.filter((item) =>
        extractSectionChildIds(section, "ContentTypeRichText").includes(
          item.sys.id
        )
      ),
      cards: cards.filter((item) =>
        extractSectionChildIds(section, "Card").includes(item.sys.id)
      ),
    })),
  };

  return relationships;
}

function extractPageChildIds(
  page: PageQueryItem,
  sections: SectionQueryItem[],
  contentTypeName:
    | PageContentItem["__typename"]
    | SectionContentItem["__typename"]
) {
  const childIds =
    page?.contentCollection?.items
      .filter((item) => item?.__typename === contentTypeName)
      .map((item) => item?.sys.id as string) || [];

  const sectionChildIds = sections.flatMap((section) =>
    extractSectionChildIds(
      section,
      contentTypeName as SectionContentItem["__typename"]
    )
  );

  return [...childIds, ...sectionChildIds];
}

function extractSectionChildIds(
  section: SectionQueryItem,
  contentTypeName: SectionContentItem["__typename"]
) {
  return (
    section?.contentCollection?.items
      .filter((item) => item?.__typename === contentTypeName)
      .map((item) => item?.sys.id as string) || []
  );
}
