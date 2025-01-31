import { useContentful } from "../../stores/ContentfulStore";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CoursePage from "../CoursePage/CoursePage";
import styles from "./PageRenderer.module.scss";
import PlaygroundPage from "../PlaygroundPage/PlaygroundPage";

export default function PageRenderer() {
  const { page } = useContentful();

  return (
    <>
      <Header />
      {page.type === "Course" && <CoursePage className={styles.root} />}
      {page.type === "Playground" && <PlaygroundPage className={styles.root} />}
      <Footer />
    </>
  );
}
