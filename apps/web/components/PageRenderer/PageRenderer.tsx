import CategoryPage from "@/components/_pages/CategoryPage";
import CoursePage from "@/components/_pages/CoursePage";
import DefaultPage from "@/components/_pages/DefaultPage";
import FramedPage from "@/components/_pages/FramedPage";
import JobPage from "@/components/_pages/JobPage";
import PersonPage from "@/components/_pages/PersonPage";
import PlaygroundPage from "@/components/_pages/PlaygroundPage";
import PostPage from "@/components/_pages/PostPage";
import Footer from "@/components/Footer";
import PreviewPanel from "@/components/PreviewPanel";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { ThemeProvider } from "@workearly/theme";
import styles from "./PageRenderer.module.scss";

export default function PageRenderer() {
  const { page, footer, header } = useContentful();
  const { variant, theme } = usePageResolver(page);

  return (
    <ThemeProvider defaultRootTheme={theme}>
      <PreviewPanel />
      {/* {header && <Header uniqueComponent={header} />} */}
      {variant === "Default" && <DefaultPage className={styles.root} />}
      {variant === "Course" && <CoursePage className={styles.root} />}
      {variant === "Playground" && <PlaygroundPage className={styles.root} />}
      {variant === "Post" && <PostPage className={styles.root} />}
      {variant === "Job" && <JobPage className={styles.root} />}
      {variant === "Certificate" && <JobPage className={styles.root} />}
      {variant === "Category" && <CategoryPage className={styles.root} />}
      {variant === "Framed" && <FramedPage className={styles.root} />}
      {variant === "Person" && <PersonPage className={styles.root} />}
      {footer && <Footer json={footer.json} />}
    </ThemeProvider>
  );
}
