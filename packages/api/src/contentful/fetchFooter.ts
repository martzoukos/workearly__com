import { QueryItem } from "../types";
import fetchLocalCollection from "./fetchLocalCollection";
import { UNIQUE_COMPONENT_COLLECTION_QUERY } from "./graphql/queries";

export default function fetchFooter() {
  const items = fetchLocalCollection<QueryItem["UniqueComponent"]>(
    UNIQUE_COMPONENT_COLLECTION_QUERY,
    (item) => item.variant === "Footer"
  );
  const footer = items.at(0);

  if (!footer) {
    throw new Error(`Footer not found`);
  }

  return footer;
}
