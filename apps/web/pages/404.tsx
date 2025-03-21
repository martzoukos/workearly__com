import PageRenderer from "@/components/_renderers/PageRenderer";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import { fetchPageBySlug, getServerClient } from "@workearly/api";
import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export default function Page({
  footer,
  header,
  page,
  relationshipMap,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentfulProvider
      page={page}
      relationshipMap={relationshipMap}
      footer={footer}
      header={header}
    >
      <NextSeo
        title={page.seoTitle || page.name || ""}
        description={page.seoDescription || ""}
      />
      <PageRenderer />
    </ContentfulProvider>
  );
}

export async function getStaticProps() {
  const [client] = getServerClient();

  try {
    const { page, relationshipMap, footer, header } = await fetchPageBySlug(
      client,
      "404"
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
