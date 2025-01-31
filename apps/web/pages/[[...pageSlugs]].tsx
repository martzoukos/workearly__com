import {
  PAGE_SLUGS_QUERY,
  fetchPageBySlug,
  getPageSlug,
  getServerClient,
  toPageSlugs,
} from "@workearly/api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import PageRenderer from "@/components/PageRenderer/PageRenderer";

export default function Page({
  page,
  relationshipMap,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentfulProvider page={page} relationshipMap={relationshipMap}>
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

  const { data } = await client.query(PAGE_SLUGS_QUERY, {}).toPromise();

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
