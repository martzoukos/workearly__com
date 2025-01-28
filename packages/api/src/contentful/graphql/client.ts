import { initUrqlClient } from "next-urql";
import {
  Client,
  ClientOptions,
  Exchange,
  SSRExchange,
  fetchExchange,
  ssrExchange,
} from "@urql/core";
import contentfulExchange, {
  ContentfulExchangePropsType,
} from "./contentful-exchange";

type OptionsType = {
  contentful: ContentfulExchangePropsType;
};

export function getServerClient(options?: OptionsType): [Client, SSRExchange] {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    getClientOptions({
      exchanges: [
        contentfulExchange({
          isPreview: Boolean(options?.contentful?.isPreview),
        }),
        ssrCache,
      ],
      url: options?.contentful?.isPreview
        ? process.env.CONTENTFUL_PREVIEW_GRAPHQL_URL
        : process.env.CONTENTFUL_GRAPHQL_URL,
    }),
    false
  );

  return [client, ssrCache] as const;
}

export function getClientOptions({
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
