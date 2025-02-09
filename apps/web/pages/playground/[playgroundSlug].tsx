import PageRenderer from "@/components/PageRenderer/PageRenderer";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import {
  PLAYGROUND_PAGE_SLUGS_QUERY,
  fetchPageBySlug,
  getServerClient,
} from "@workearly/api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export default function Page({
  page,
  relationshipMap,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentfulProvider page={page} relationshipMap={relationshipMap}>
      <NextSeo nofollow noindex />
      <PageRenderer />
    </ContentfulProvider>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ playgroundSlug: string }>
) {
  const [client] = getServerClient();
  const pageSlug = context.params?.playgroundSlug || "";

  try {
    const { page, relationshipMap } = await fetchPageBySlug(client, pageSlug);

    return {
      props: {
        page,
        relationshipMap,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const [client] = getServerClient();

  const { data } = await client
    .query(PLAYGROUND_PAGE_SLUGS_QUERY, {})
    .toPromise();

  const paths = data?.pageCollection?.items
    .filter((x) => x?.slug)
    .map((item) => ({
      params: {
        playgroundSlug: item?.slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
}
