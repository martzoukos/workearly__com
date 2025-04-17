import ContactSuccess from "@/components/ContactSuccess";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ContentfulProvider } from "@/stores/ContentfulStore";
import { fetchPageBySlug } from "@workearly/api/server";
import { ThemeProvider } from "@workearly/theme";
import { InferGetStaticPropsType } from "next";
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
      <ThemeProvider theme="dark">
        {props.header && <Header uniqueComponent={props.header} />}
        <ContactSuccess />
        {props.footer && <Footer uniqueComponent={props.footer} />}
      </ThemeProvider>
    </ContentfulProvider>
  );
}

export async function getStaticProps() {
  try {
    const props = await fetchPageBySlug(
      "contact" // Just a stub slug that actually exists, we don't need any page info here
    );

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
