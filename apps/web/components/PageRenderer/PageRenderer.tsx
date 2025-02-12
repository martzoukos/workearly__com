import CoursePage from "@/components/_pages/CoursePage";
import JobPage from "@/components/_pages/JobPage";
import PlaygroundPage from "@/components/_pages/PlaygroundPage";
import PostPage from "@/components/_pages/PostPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import styles from "./PageRenderer.module.scss";

export default function PageRenderer() {
  const { page } = useContentful();
  const { variant } = usePageResolver(page);

  return (
    <>
      <Header />
      {variant === "Course" && <CoursePage className={styles.root} />}
      {variant === "Playground" && <PlaygroundPage className={styles.root} />}
      {variant === "Post" && <PostPage className={styles.root} />}
      {variant === "Job" && <JobPage className={styles.root} />}
      <Footer />
    </>
  );
}
