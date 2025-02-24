import { Client, TypedDocumentNode } from "@urql/core";
import { chunk } from "lodash";
import {
  ContentfulMetadataFilter,
  SysFilter,
} from "./graphql/__generated__/gql/graphql";

type ContentTypeVariables = {
  where: {
    sys?: SysFilter;
    contentfulMetadata?: ContentfulMetadataFilter;
  };
  limit: number;
};

type OptionsType<TItem, TData> = {
  query: TypedDocumentNode<TData, ContentTypeVariables>;
  mapItems: (data: TData | undefined) => TItem[];
  limit?: number;
} & ({ ids: string[]; tagIds?: never } | { tagIds: string[]; ids?: never });

export default async function fetchCollection<TItem, TData>(
  client: Client,
  options: OptionsType<TItem, TData>
): Promise<TItem[]> {
  if (options.ids?.length) {
    return fetchCollectionByIds(client, options);
  } else if (options.tagIds?.length) {
    return fetchCollectionByTags(client, options);
  }

  return [];
}

async function fetchCollectionByIds<TItem, TData>(
  client: Client,
  options: OptionsType<TItem, TData>
) {
  const ids = options.ids;
  const limit = options.limit || 10;

  const items: TItem[] = [];

  for (const group of chunk(ids, limit)) {
    const { data } = await client
      .query(options.query, {
        where: { sys: { id_in: group } },
        limit: group.length,
      })
      .toPromise();

    if (data) {
      const groupItems = options.mapItems(data);
      items.push(...(groupItems as TItem[]));
    }
  }

  return items;
}

// TODO: Utlilize pageCollection.total for chunked query
async function fetchCollectionByTags<TItem, TData>(
  client: Client,
  options: OptionsType<TItem, TData>
) {
  const tagIds = options.tagIds;
  const limit = options.limit || 10;

  const items: TItem[] = [];

  const { data } = await client
    .query(options.query, {
      where: {
        contentfulMetadata: {
          tags: { id_contains_some: tagIds },
          tags_exists: true,
        },
      },
      limit,
    })
    .toPromise();

  if (data) {
    const groupItems = options.mapItems(data);
    items.push(...(groupItems as TItem[]));
  }

  return items;
}
