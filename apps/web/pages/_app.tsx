import type { AppProps } from "next/app";
import "@/styles/fonts.scss";
import "@/styles/style.scss";
import ExitPreview from "@/components/ExitPreview/ExitPreview";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ExitPreview />
      <Component {...pageProps} />
    </>
  );
}
