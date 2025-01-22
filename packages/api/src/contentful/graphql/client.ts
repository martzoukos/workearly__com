import { initUrqlClient } from "next-urql";
import {
  Client,
  ClientOptions,
  Exchange,
  SSRExchange,
  fetchExchange,
  ssrExchange,
} from "@urql/core";

export function getServerClient(): [Client, SSRExchange] {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    getContentfulClientOptions({
      exchanges: [ssrCache],
    }),
    false
  );

  return [client, ssrCache] as const;
}

export function getContentfulClient(): [Client, SSRExchange] {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    getContentfulClientOptions({
      exchanges: [ssrCache],
    }),
    false
  );

  return [client, ssrCache] as const;
}

export function getContentfulClientOptions({
  exchanges = [],
  url = process.env.CONTENTFUL_GRAPHQL_URL,
  cookie,
}: {
  exchanges: Exchange[];
  url?: string;
  cookie?: any;
}): ClientOptions {
  if (!url) {
    throw new Error("Graphql API URL is undefined");
  }

  return {
    url,
    exchanges: [...exchanges, fetchExchange],
    fetchOptions: {
      ...(cookie && { headers: { cookie: cookie } }),
      credentials: "include",
    },
  };
}
