import PageRenderer from "@/components/_renderers/PageRenderer";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import {
  PAGE_SLUGS_QUERY,
  fetchPageBySlug,
  getPageSlug,
  getServerClient,
  toPageSlugs,
} from "@workearly/api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const canonicalUrl = `https://workearly.gr/${props.page.slug === "home" ? "" : props.page.slug}`;
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
  context: GetStaticPropsContext<{ pageSlugs: string[] }>
) {
  const [client] = getServerClient();
  const pageSlug = getPageSlug(context.params?.pageSlugs);

  try {
    const props = await fetchPageBySlug(client, pageSlug);

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
  const [client] = getServerClient();

  const { data } = await client
    .query(PAGE_SLUGS_QUERY, {
      where: { slug_not_in: ["404"], variant_not_in: ["Playground"] },
      limit: 1000,
    })
    .toPromise();

  const paths = data?.pageCollection?.items
    .filter((x) => x?.slug)
    .map((item) => ({
      params: {
        pageSlugs: toPageSlugs(item?.slug || ""),
      },
    }));

  return {
    paths,
    fallback: "blocking",
  };
}
