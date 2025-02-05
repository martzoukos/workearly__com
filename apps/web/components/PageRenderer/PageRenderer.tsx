import { useContentful } from "../../stores/ContentfulStore";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CoursePage from "../CoursePage/CoursePage";
import styles from "./PageRenderer.module.scss";
import PlaygroundPage from "../PlaygroundPage/PlaygroundPage";
import PostPage from "../PostPage/PostPage";

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
