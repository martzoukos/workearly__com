import PageRenderer from "@/components/_renderers/PageRenderer";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import { fetchPageBySlug } from "@workearly/api/server";
import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <ContentfulProvider {...props}>
      <NextSeo
        title={props.page.seoTitle || props.page.name || ""}
        description={props.page.seoDescription || ""}
      />
      <PageRenderer />
    </ContentfulProvider>
  );
}

export async function getStaticProps() {
  try {
    const props = await fetchPageBySlug("404");

    return {
      props,
    };
  } catch (error) {
    console.error(error);
  }
}
