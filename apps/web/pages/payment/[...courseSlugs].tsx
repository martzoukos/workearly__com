import PaymentPage from "@/components/_pages/PaymentPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getPageResolver } from "@/hooks/usePageResolver";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import {
  getPageSlug,
  PAGE_COLLECTION_QUERY,
  QueryItem,
  RelationshipMap,
  toPageSlugs,
} from "@workearly/api";
import { fetchLocalCollection, fetchPageBySlug } from "@workearly/api/server";
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
  const pageSlug = getPageSlug(context.params?.courseSlugs);

  try {
    const props = await fetchPageBySlug(pageSlug);

    if (hasApplicationFormUrl(props.page, props.relationshipMap)) {
      return {
        notFound: true,
      };
    }

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
  const pages = fetchLocalCollection<QueryItem["Page"]>(
    PAGE_COLLECTION_QUERY,
    (page) => page.slug !== "404" && page.variant === "Course"
  );

  const paths = pages
    .filter((x) => x.slug)
    .map((item) => ({
      params: {
        courseSlugs: toPageSlugs(item.slug || ""),
      },
    }));

  return {
    paths,
    fallback: "blocking",
  };
}

function hasApplicationFormUrl(
  page: QueryItem["Page"],
  relationshipMap: RelationshipMap
) {
  const { courseDetails } = getPageResolver(page, relationshipMap);
  return Boolean(courseDetails?.applicationFormUrl);
}
