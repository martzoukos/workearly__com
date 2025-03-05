import { Client } from "@urql/core";
import { QueryItem } from "../types";
import { UNIQUE_COMPONENT_COLLECTION_QUERY } from "./graphql/queries";

export default async function fetchHeader(client: Client) {
  const { data } = await client
    .query(UNIQUE_COMPONENT_COLLECTION_QUERY, {
      where: { variant: "Header" },
      limit: 1,
    })
    .toPromise();

  if (!data?.uniqueComponentCollection?.items.at(0)) {
    throw new Error(`Header not found`);
  }

  const header = data?.uniqueComponentCollection
    ?.items[0] as QueryItem["UniqueComponent"];

  return header;
}
