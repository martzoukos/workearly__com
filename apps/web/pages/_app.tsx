import type { AppProps } from "next/app";
import "@/styles/fonts.scss";
import "@/styles/style.scss";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isClearing, setIsClearing] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* {router.isPreview && (
        <Button
          variant="alert"
          className={styles.preview}
          onClick={async () => {
            setIsClearing(true);
            await fetch("/api/exit-preview");
            router.reload();
          }}
        >
          {isClearing ? (
            "Exiting..."
          ) : (
            <>
              Exit Preview <Close />
            </>
          )}
        </Button>
      )} */}
      <Component {...pageProps} />
    </>
  );
}
