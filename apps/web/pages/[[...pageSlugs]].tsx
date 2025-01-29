import {
  PAGE_SLUGS_QUERY,
  fetchPageBySlug,
  getServerClient,
} from "@workearly/api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ContentfulProvider } from "../stores/ContentfulStore";
import SectionRenderer from "../components/SectionRenderer/SectionRenderer";
import PageRenderer from "../components/PageRenderer/PageRenderer";

export default function Page({
  page,
  relationships,
  sections,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentfulProvider
      page={page}
      relationships={relationships}
      sections={sections}
    >
      <PageRenderer>
        {page.contentCollection?.items.map((item) => {
          if (item?.__typename === "Section") {
            const section = sections.find(
              (section) => section.sys.id === item.sys.id
            );

            if (!section) {
              return null;
            }

            return <SectionRenderer key={item.sys.id} section={section} />;
          } else if (item?.__typename === "ContentTypeRichText") {
            return <div key={item.sys.id}>ContentTypeRichText</div>;
          } else if (item?.__typename === "UniqueComponent") {
            return <div key={item.sys.id}>UniqueComponent</div>;
          }
        })}
      </PageRenderer>
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
    const { page, relationships, sections } = await fetchPageBySlug(
      client,
      pageSlug
    );

    return {
      props: {
        page,
        relationships,
        sections,
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
