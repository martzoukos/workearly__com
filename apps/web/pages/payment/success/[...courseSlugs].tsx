import PageRenderer from "@/components/_renderers/PageRenderer";
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
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export default function Page({
  successProps,
  courseProps,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { page, relationshipMap } = courseProps;
  const { courseDetails, tags } = getPageResolver(page, relationshipMap);

  const category = tags.find((tag) => tag?.id?.startsWith("courseCategory"));

  return (
    <ContentfulProvider {...successProps}>
      <NextSeo
        title={successProps.page.seoTitle || successProps.page.name || ""}
        description={successProps.page.seoDescription || ""}
        additionalMetaTags={[
          {
            name: "trackCourse",
            content: courseDetails?.title || "",
          },
          {
            name: "trackCategory",
            content: category?.id || "",
          },
          {
            name: "trackPrice",
            content: courseDetails?.finalCost?.toString() || "",
          },
        ]}
      />
      <PageRenderer />
    </ContentfulProvider>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ courseSlugs: string[] }>
) {
  const pageSlug = getPageSlug(context.params?.courseSlugs);

  try {
    const courseProps = await fetchPageBySlug(pageSlug);
    const successProps = await fetchPageBySlug("payment/success");

    if (hasApplicationFormUrl(courseProps.page, courseProps.relationshipMap)) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        courseProps,
        successProps,
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
