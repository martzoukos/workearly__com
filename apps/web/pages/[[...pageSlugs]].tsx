import {
  PAGE_SLUGS_QUERY,
  fetchPageBySlug,
  getServerClient,
} from "@workearly/api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { LayoutProvider } from "../stores/LayoutStore";
import Layout from "../layouts/Layout";
import { CustomLink } from "@/components/Button/Button";
import icon from "../public/x.svg";
import Image from "next/image";

export default function Page({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <LayoutProvider page={page}>
      <Layout>
        <CustomLink
          href={"https://www.youtube.com/"}
          icon={<Image src={icon} alt="" />}
          size="normal"
          color="Green"
          variant="Decorative"
        >
          Button
        </CustomLink>
      </Layout>
    </LayoutProvider>
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
    const page = await fetchPageBySlug(client, pageSlug);

    if (!page) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        page,
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
