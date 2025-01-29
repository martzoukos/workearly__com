import { useContentful } from "../../stores/ContentfulStore";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CoursePage from "./CoursePage";

type PropsType = {
  children: (className?: string) => React.ReactNode;
};

export default function PageRenderer({ children }: PropsType) {
  const { page } = useContentful();

  return (
    <>
      <Header />
      {page.type === "Course" && <CoursePage>{children}</CoursePage>}
      <Footer />
    </>
  );
}
