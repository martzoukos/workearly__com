import ContactSuccess from "@/components/ContactSuccess";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import { fetchPageBySlug, getServerClient } from "@workearly/api";
import { ThemeProvider } from "@workearly/theme";
import { InferGetStaticPropsType } from "next";

export default function Page({
  footer,
  header,
  page,
  relationshipMap,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentfulProvider
      footer={footer}
      header={header}
      page={page}
      relationshipMap={relationshipMap}
    >
      <ThemeProvider theme="dark">
        {header && <Header uniqueComponent={header} />}
        <ContactSuccess />
        {footer && <Footer uniqueComponent={footer} />}
      </ThemeProvider>
    </ContentfulProvider>
  );
}

export async function getStaticProps() {
  const [client] = getServerClient();

  try {
    const { page, relationshipMap, footer, header } = await fetchPageBySlug(
      client,
      "payment/success" // Just a stub slug that actually exists, we don't need any page info here
    );

    return {
      props: {
        page,
        footer,
        header,
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
