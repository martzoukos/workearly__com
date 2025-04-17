import PageRenderer from "@/components/_renderers/PageRenderer";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import { PAGE_COLLECTION_QUERY, QueryItem } from "@workearly/api";
import { fetchLocalCollection, fetchPageBySlug } from "@workearly/api/server";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <ContentfulProvider {...props}>
      <NextSeo nofollow noindex />
      <PageRenderer />
    </ContentfulProvider>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ playgroundSlug: string }>
) {
  const pageSlug = context.params?.playgroundSlug || "";

  try {
    const props = await fetchPageBySlug(pageSlug);

    return {
      props,
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const pages = fetchLocalCollection<QueryItem["Page"]>(
    PAGE_COLLECTION_QUERY,
    (page) => page.slug !== "404" && page.variant === "Playground"
  );

  const paths = pages
    .filter((x) => x.slug)
    .map((item) => ({
      params: {
        playgroundSlug: item.slug,
      },
    }));

  return {
    paths,
    fallback: "blocking",
  };
}
