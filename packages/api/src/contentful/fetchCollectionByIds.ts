import { Client, TypedDocumentNode } from "@urql/core";
import { chunk } from "lodash";

type ContentTypeVariables = {
  where?: {
    sys?: {
      id_in?: string[];
    };
  };
};

type OptionsType<TItem, TData> = {
  query: TypedDocumentNode<TData, ContentTypeVariables>;
  ids: string[];
  limit?: number;
  mapItems: (data: TData | undefined) => TItem[];
};

export async function fetchCollectionByIds<TItem, TData>(
  client: Client,
  options: OptionsType<TItem, TData>
): Promise<TItem[]> {
  const items: TItem[] = [];

  for (const group of chunk(options.ids, options.limit || 10)) {
    const { data } = await client
      .query(options.query, { where: { sys: { id_in: group } } })
      .toPromise();

    if (data) {
      const groupItems = options.mapItems(data);
      items.push(...(groupItems as TItem[]));
    }
  }

  return items;
}
