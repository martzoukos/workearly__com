import PaymentPage from "@/components/_pages/PaymentPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import {
  fetchPageBySlug,
  getServerClient,
  PAGE_SLUGS_QUERY,
} from "@workearly/api";
import { ThemeProvider } from "@workearly/theme";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

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
      <NextSeo
        nofollow
        noindex
        title={page.seoTitle || ""}
        description={page.seoDescription || ""}
      />
      <ThemeProvider theme="light">
        {header && <Header uniqueComponent={header} />}
        <PaymentPage />
        {footer && <Footer uniqueComponent={footer} />}
      </ThemeProvider>
    </ContentfulProvider>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ courseSlug: string }>
) {
  const [client] = getServerClient();
  const pageSlug = context.params?.courseSlug || "";

  try {
    const { page, relationshipMap, footer, header } = await fetchPageBySlug(
      client,
      pageSlug
    );

    return {
      props: {
        page,
        header,
        relationshipMap,
        footer,
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
      where: { slug_not_in: ["404"], variant_in: ["Course"] },
      limit: 1000,
    })
    .toPromise();

  const paths = data?.pageCollection?.items
    .filter((x) => x?.slug)
    .map((item) => ({
      params: {
        courseSlug: item?.slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
}
