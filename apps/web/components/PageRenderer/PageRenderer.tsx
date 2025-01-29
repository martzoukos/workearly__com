import { PropsWithChildren } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useContentful } from "../../stores/ContentfulStore";
import CoursePage from "./CoursePage";

export default function PageRenderer({ children }: PropsWithChildren) {
  const { page } = useContentful();

  return (
    <>
      <Header />
      {page.type === "Course" && <CoursePage>{children}</CoursePage>}
      <Footer />
    </>
  );
}
