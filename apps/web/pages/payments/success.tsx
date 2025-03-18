import PaymentSuccess from "@/components/_sections/PaymentSuccess";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fetchFooter, fetchHeader, getServerClient } from "@workearly/api";
import { ThemeProvider } from "@workearly/theme";
import { InferGetStaticPropsType } from "next";

export default function Page({
  footer,
  header,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ThemeProvider theme="dark">
      {header && <Header uniqueComponent={header} />}
      <PaymentSuccess />
      {footer && <Footer uniqueComponent={footer} />}
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const [client] = getServerClient();

  try {
    const [footer, header] = await Promise.all([
      fetchFooter(client),
      fetchHeader(client),
    ]);

    return {
      props: {
        footer,
        header,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
}
