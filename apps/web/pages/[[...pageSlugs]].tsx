import {
  PAGE_SLUGS_QUERY,
  fetchPageBySlug,
  getServerClient,
} from "@workearly/api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ContentfulProvider } from "../stores/ContentfulStore";
import Layout from "../components/Layout/Layout";

export default function Page({
  page,
  relationships,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentfulProvider page={page} relationships={relationships}>
      <Layout></Layout>
    </ContentfulProvider>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ pageSlugs: string[] }>
) {
  const [client] = getServerClient();
  const pageSlug = !context.params?.pageSlugs
    ? "home"
    : (context.params?.pageSlugs.join("/") as string);

  try {
    const { page, relationships } = await fetchPageBySlug(client, pageSlug);

    return {
      props: {
        page,
        relationships,
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
        pageSlugs: item?.slug === "home" ? [] : item?.slug?.split("/"),
      },
    }));

  return {
    paths,
    fallback: false,
  };
}
