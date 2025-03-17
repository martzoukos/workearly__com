import PageRenderer from "@/components/PageRenderer";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import {
  PAGE_SLUGS_QUERY,
  fetchPageBySlug,
  getPageSlug,
  getServerClient,
  toPageSlugs,
} from "@workearly/api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export default function Page({
  page,
  footer,
  header,
  relationshipMap,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentfulProvider
      page={page}
      relationshipMap={relationshipMap}
      footer={footer}
      header={header}
    >
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

  const { data } = await client.query(PAGE_SLUGS_QUERY, {}).toPromise();

  const paths = data?.pageCollection?.items
    .filter((x) => x?.slug)
    .flatMap((item) => {
      const paths = toPageSlugs(item?.slug || "", item?.variant || "");

      return paths.map((path) => ({
        params: {
          pageSlugs: path,
        },
      }));
    });

  return {
    paths,
    fallback: false,
  };
}
