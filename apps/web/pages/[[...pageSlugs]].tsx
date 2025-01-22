import {
  Page as PageType,
  PAGE_SLUGS_QUERY,
  getPageBySlug,
  getServerClient,
} from "@workearly/api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export default function Page({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>This is page {page.slug}</h1>
    </div>
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
    const pageContent = await getPageBySlug(client, pageSlug);

    if (!pageContent) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        page: pageContent,
      },
    };
  } catch (error) {
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
