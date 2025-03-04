import ArticleCard from "@/components/_cards/ArticleCard";
import CourseCard from "@/components/_cards/CourseCard";
import usePageResolver from "@/hooks/usePageResolver";
import { QueryItem } from "@workearly/api";

type PropsType = {
  page: QueryItem["Page"];
};

export default function PageCardRenderer({ page }: PropsType) {
  const { variant } = usePageResolver(page);

  if (variant === "Course") {
    return <CourseCard page={page} />;
  } else if (variant === "Post") {
    return <ArticleCard page={page} />;
  }

  return null;
}
