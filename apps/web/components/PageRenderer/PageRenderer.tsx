import CoursePage from "@/components/_pages/CoursePage";
import PlaygroundPage from "@/components/_pages/PlaygroundPage";
import PostPage from "@/components/_pages/PostPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useContentful } from "@/stores/ContentfulStore";
import styles from "./PageRenderer.module.scss";

export default function PageRenderer() {
  const { page } = useContentful();

  return (
    <>
      <Header />
      {page.variant === "Course" && <CoursePage className={styles.root} />}
      {page.variant === "Playground" && (
        <PlaygroundPage className={styles.root} />
      )}
      {page.variant === "Post" && <PostPage className={styles.root} />}
      <Footer />
    </>
  );
}
