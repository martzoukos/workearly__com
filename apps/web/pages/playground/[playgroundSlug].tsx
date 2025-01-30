import PageRenderer from "@/components/PageRenderer/PageRenderer";
import RichText from "@/components/RichText/RichText";
import Section from "@/components/Section/Section";
import UniqueComponent from "@/components/UniqueComponent/UniqueComponent";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import {
  PLAYGROUND_PAGE_SLUGS_QUERY,
  fetchPageBySlug,
  getServerClient,
} from "@workearly/api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export default function Page({
  page,
  relationshipMap,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentfulProvider page={page} relationshipMap={relationshipMap}>
      <PageRenderer>
        {(className) => {
          return page.contentCollection?.items.map((item) => {
            if (item?.__typename === "Section") {
              const section = relationshipMap.sectionCollection.find(
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
              const richText =
                relationshipMap.contentTypeRichTextCollection.find(
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
              const uniqueComponent =
                relationshipMap.uniqueComponentCollection.find(
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
  context: GetStaticPropsContext<{ playgroundSlug: string }>
) {
  const [client] = getServerClient();
  const pageSlug = context.params?.playgroundSlug || "";

  try {
    const { page, relationshipMap } = await fetchPageBySlug(client, pageSlug);

    return {
      props: {
        page,
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

  const { data } = await client
    .query(PLAYGROUND_PAGE_SLUGS_QUERY, {})
    .toPromise();

  const paths = data?.pageCollection?.items
    .filter((x) => x?.slug)
    .map((item) => ({
      params: {
        playgroundSlug: item?.slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
}
