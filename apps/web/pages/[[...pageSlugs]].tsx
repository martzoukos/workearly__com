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

export default function Page({
  page,
  footer,
  header,
  relationshipMap,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const canonicalUrl = `https://workearly.gr/${page.slug}`;
  const noIndex = page.features?.includes("No Index");

  return (
    <ContentfulProvider
      page={page}
      relationshipMap={relationshipMap}
      footer={footer}
      header={header}
    >
      <NextSeo
        noindex={noIndex}
        nofollow={noIndex}
        title={page.seoTitle || page.name || ""}
        description={page.seoDescription || ""}
        canonical={canonicalUrl}
        openGraph={{
          title: page.seoTitle || "",
          description: page.seoDescription || "",
          url: canonicalUrl,
          images: page.seoImage
            ? [
                {
                  url: page.seoImage.url || "",
                  width: page.seoImage.width || 1024,
                  height: page.seoImage.height || 1024,
                  alt: page.seoImage.description || "",
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
    const { page, relationshipMap, footer, header } = await fetchPageBySlug(
      client,
      pageSlug
    );

    return {
      props: {
        page,
        footer,
        header,
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
    fallback: false,
  };
}
