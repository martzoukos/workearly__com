import useMotif from "@/hooks/useMotif";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styles from "./DevBox.module.scss";
import ExitPreview from "./ExitPreview";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), {
  ssr: false,
});

export default function DevBox() {
  const router = useRouter();
  const isProduction = process.env.NODE_ENV === "production";
  const { resolvedTheme } = useMotif();

  if (isProduction && !router.isPreview) {
    return null;
  }

  return (
    <div className={styles.root} data-theme={resolvedTheme}>
      <ExitPreview />
      <ThemeSwitcher />
    </div>
  );
}
