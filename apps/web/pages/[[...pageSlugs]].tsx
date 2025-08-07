import PageRenderer from "@/components/_renderers/PageRenderer";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import {
  PAGE_COLLECTION_QUERY,
  QueryItem,
  getPageSlug,
  toPageSlugs,
} from "@workearly/api";
import { fetchLocalCollection, fetchPageBySlug } from "@workearly/api/server";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const canonicalUrl = `https://www.workearly.com/${props.page.slug === "home" ? "" : props.page.slug}`;
  const noIndex = props.page.features?.includes("No Index");

  return (
    <ContentfulProvider {...props}>
      <NextSeo
        noindex={noIndex}
        nofollow={noIndex}
        title={props.page.seoTitle || props.page.name || ""}
        description={props.page.seoDescription || ""}
        canonical={canonicalUrl}
        openGraph={{
          title: props.page.seoTitle || "",
          description: props.page.seoDescription || "",
          url: canonicalUrl,
          images: props.page.seoImage
            ? [
                {
                  url: props.page.seoImage.url || "",
                  width: props.page.seoImage.width || 1024,
                  height: props.page.seoImage.height || 1024,
                  alt: props.page.seoImage.description || "",
                },
              ]
            : [],
        }}
      />
      <PageRenderer />
    </ContentfulProvider>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ pageSlugs: string[] }>,
) {
  const pageSlug = getPageSlug(context.params?.pageSlugs);

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
    (page) => page.slug !== "404" && page.variant !== "Playground",
  );

  const paths = pages
    .filter((x) => x.slug)
    .map((item) => ({
      params: {
        pageSlugs: toPageSlugs(item.slug || ""),
      },
    }));

  return {
    paths,
    fallback: "blocking",
  };
}
