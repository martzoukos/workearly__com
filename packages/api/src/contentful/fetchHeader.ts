import { QueryItem } from "../types";
import fetchLocalCollection from "./fetchLocalCollection";
import { UNIQUE_COMPONENT_COLLECTION_QUERY } from "./graphql/queries";

export default function fetchHeader() {
  const items = fetchLocalCollection<QueryItem["UniqueComponent"]>(
    UNIQUE_COMPONENT_COLLECTION_QUERY,
    (item) => item.variant === "Header"
  );
  const header = items.at(0);

  if (!header) {
    throw new Error(`Header not found`);
  }

  return header;
}
