import DevBox from "@/components/DevBox";
import "@/styles/fonts.scss";
import "@/styles/global.scss";
import NextAdapterPages from "next-query-params/pages";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { QueryParamProvider } from "use-query-params";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <QueryParamProvider adapter={NextAdapterPages}>
        <DevBox />
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
    </ThemeProvider>
  );
}
