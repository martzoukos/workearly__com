import CategoryPage from "@/components/_pages/CategoryPage";
import CoursePage from "@/components/_pages/CoursePage";
import DefaultPage from "@/components/_pages/DefaultPage";
import FramedPage from "@/components/_pages/FramedPage";
import JobPage from "@/components/_pages/JobPage";
import PersonPage from "@/components/_pages/PersonPage";
import PlaygroundPage from "@/components/_pages/PlaygroundPage";
import PostPage from "@/components/_pages/PostPage";
import DevBox from "@/components/DevBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Motif from "@/components/Motif";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { ThemeProvider } from "next-themes";
import styles from "./PageRenderer.module.scss";

export default function PageRenderer() {
  const { page } = useContentful();
  const { variant, theme } = usePageResolver(page);

  return (
    <ThemeProvider defaultTheme={theme}>
      <Motif isInverted={true}>
        <DevBox />
      </Motif>
      <Header />
      {variant === "Default" && <DefaultPage className={styles.root} />}
      {variant === "Course" && <CoursePage className={styles.root} />}
      {variant === "Playground" && <PlaygroundPage className={styles.root} />}
      {variant === "Post" && <PostPage className={styles.root} />}
      {variant === "Job" && <JobPage className={styles.root} />}
      {variant === "Category" && <CategoryPage className={styles.root} />}
      {variant === "Framed" && <FramedPage className={styles.root} />}
      {variant === "Person" && <PersonPage className={styles.root} />}
      <Footer />
    </ThemeProvider>
  );
}
