import PageRenderer from "@/components/_renderers/PageRenderer";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import {
  fetchPageBySlug,
  getServerClient,
  PAGE_SLUGS_QUERY,
} from "@workearly/api";
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
  const [client] = getServerClient({ playground: { isEnabled: true } });
  const pageSlug = context.params?.playgroundSlug || "";

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
  const [client] = getServerClient({ playground: { isEnabled: true } });

  const { data } = await client
    .query(PAGE_SLUGS_QUERY, {
      where: { slug_not_in: ["404"], variant_in: ["Playground"] },
    })
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
