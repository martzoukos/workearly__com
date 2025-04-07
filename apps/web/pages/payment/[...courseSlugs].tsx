import PaymentPage from "@/components/_pages/PaymentPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import {
  fetchPageBySlug,
  getPageSlug,
  getServerClient,
  PAGE_SLUGS_QUERY,
  toPageSlugs,
} from "@workearly/api";
import { ThemeProvider } from "@workearly/theme";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <ContentfulProvider {...props}>
      <NextSeo
        nofollow
        noindex
        title={props.page.seoTitle || ""}
        description={props.page.seoDescription || ""}
      />
      <ThemeProvider theme="light">
        {props.header && <Header uniqueComponent={props.header} />}
        <PaymentPage />
        {props.footer && <Footer uniqueComponent={props.footer} />}
      </ThemeProvider>
    </ContentfulProvider>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ courseSlugs: string[] }>
) {
  const [client] = getServerClient();
  const pageSlug = getPageSlug(context.params?.courseSlugs);

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
      where: { slug_not_in: ["404"], variant_in: ["Course"] },
      limit: 1000,
    })
    .toPromise();

  const paths = data?.pageCollection?.items
    .filter((x) => x?.slug)
    .map((item) => ({
      params: {
        courseSlugs: toPageSlugs(item?.slug || ""),
      },
    }));

  return {
    paths,
    fallback: "blocking",
  };
}
