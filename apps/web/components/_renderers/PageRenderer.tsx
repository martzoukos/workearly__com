import CategoryPage from "@/components/_pages/CategoryPage";
import CoursePage from "@/components/_pages/CoursePage";
import CourseSummerPage from "@/components/_pages/CourseSummerPage";
import DefaultPage from "@/components/_pages/DefaultPage";
import FramedPage from "@/components/_pages/FramedPage";
import JobPage from "@/components/_pages/JobPage";
import PersonPage from "@/components/_pages/PersonPage";
import PlaygroundPage from "@/components/_pages/PlaygroundPage";
import PostPage from "@/components/_pages/PostPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PreviewPanel from "@/components/PreviewPanel";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { ThemeProvider } from "@workearly/theme";

export default function PageRenderer() {
  const { page, footer, header } = useContentful();
  const { variant, theme } = usePageResolver(page);

  return (
    <ThemeProvider theme={theme}>
      <PreviewPanel />
      {header && <Header uniqueComponent={header} />}
      {variant === "Default" && <DefaultPage />}
      {/*{variant === "Course" && <CoursePage />}
      {variant === "Course | Summer" && <CourseSummerPage />}
      {variant === "Job" && <JobPage />}
      {variant === "Category" && <CategoryPage />}
      {variant === "Post" && <PostPage />}
      {variant === "Certificate" && <PersonPage />}*/}
      {variant === "Person" && <PersonPage />}
      {variant === "Framed" && <FramedPage />}
      {variant === "Playground" && <PlaygroundPage />}
      {footer && <Footer uniqueComponent={footer} />}
    </ThemeProvider>
  );
}
