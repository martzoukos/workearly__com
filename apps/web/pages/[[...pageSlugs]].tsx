import {
  PAGE_SLUGS_QUERY,
  fetchPageBySlug,
  getServerClient,
} from "@workearly/api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ContentfulProvider } from "../stores/ContentfulStore";
import Section from "../components/Section/Section";
import PageRenderer from "../components/PageRenderer/PageRenderer";
import RichText from "../components/RichText/RichText";
import UniqueComponent from "../components/UniqueComponent/UniqueComponent";

export default function Page({
  page,
  relationships,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentfulProvider page={page} relationships={relationships}>
      <PageRenderer>
        {(className) => {
          return page.contentCollection?.items.map((item) => {
            if (item?.__typename === "Section") {
              const section = relationships.sections.find(
                (section) => section.sys.id === item.sys.id
              );

              if (!section) {
                return null;
              }

              return (
                <Section
                  key={item.sys.id}
                  section={section}
                  className={className}
                />
              );
            } else if (item?.__typename === "ContentTypeRichText") {
              const richText = relationships.contentTypeRichTexts.find(
                (section) => section.sys.id === item.sys.id
              );

              if (!richText) {
                return null;
              }

              return (
                <RichText
                  key={item.sys.id}
                  richText={richText}
                  className={className}
                />
              );
            } else if (item?.__typename === "UniqueComponent") {
              const uniqueComponent = relationships.uniqueComponents.find(
                (section) => section.sys.id === item.sys.id
              );

              if (!uniqueComponent) {
                return null;
              }

              return (
                <UniqueComponent
                  key={item.sys.id}
                  uniqueComponent={uniqueComponent}
                  className={className}
                />
              );
            }
          });
        }}
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
