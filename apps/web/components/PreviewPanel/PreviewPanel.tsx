import { useRouter } from "next/router";
import ExitPreview from "./ExitPreview";
import styles from "./PreviewPanel.module.scss";

export default function PreviewPanel() {
  const router = useRouter();

  if (!router.isPreview) {
    return null;
  }

  return (
    <div className={styles.root}>
      <ExitPreview />
    </div>
  );
}
