import "@/styles/global.scss";
import { GoogleTagManager } from "@next/third-parties/google";
import NextAdapterPages from "next-query-params/pages";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import { QueryParamProvider } from "use-query-params";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryParamProvider adapter={NextAdapterPages}>
      <DefaultSeo
        title="Home"
        openGraph={{
          type: "website",
          locale: router.locale,
          url: `https://www.workearly.com/`,
          siteName: "Workearly",
          title: "Home | Workearly",
          images: [
            {
              url: "https://www.workearly.gr/images/og-image.png",
              width: 1200,
              height: 630,
            },
          ],
        }}
        additionalLinkTags={[
          { rel: "shortcut icon", href: "/favicons/favicon-32x32.png" },
        ]}
      />
      <NextNProgress
        color="#C1FF72"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={false}
        options={{ showSpinner: false }}
      />
      {/*<Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="1397552c-f526-4982-9897-b2dfe41acea7"
        data-blockingmode="auto"
      />
      <GoogleTagManager gtmId="GTM-K7BR46GN" />*/}
      <Component {...pageProps} />
    </QueryParamProvider>
  );
}
