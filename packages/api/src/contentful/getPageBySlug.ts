import { PAGE_QUERY } from "./graphql/queries";
import { Page } from "./graphql/__generated__/gql/graphql";
import { Client } from "@urql/core";

export default async function getPageBySlug(client: Client, slug: string) {
  const { data } = await client.query(PAGE_QUERY, { slug }).toPromise();

  if (!data?.pageCollection?.items.at(0)) {
    throw new Error(`Page with slug ${slug} not found`);
  }

  const page = data?.pageCollection?.items[0] as Page;

  return page;
}
