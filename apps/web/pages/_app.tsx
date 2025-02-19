import "@/styles/fonts.scss";
import "@/styles/global.scss";
import NextAdapterPages from "next-query-params/pages";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { QueryParamProvider } from "use-query-params";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryParamProvider adapter={NextAdapterPages}>
      <DefaultSeo
        title="Home"
        additionalLinkTags={[{ rel: "shortcut icon", href: "/favicon.png" }]}
      />
      <NextNProgress
        color="#C1FF72"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={false}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </QueryParamProvider>
  );
}
