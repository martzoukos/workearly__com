import Link from "next/link";
import styles from "./PlaygroundPage.module.scss";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import PageItem from "../PageItem/PageItem";
import useCoursePageResolver from "../../hooks/useCoursePageResolver";
import PeopleCard from "../Cards/PeopleCard/PeopleCard";
import ArticleSideCard from "../Cards/ArticleSideCard/ArticleSideCard";
import ArticleCard from "../Cards/ArticleCard/ArticleCard";
import VideoTetimonial from "../VideoTetimonial/VideoTetimonial";
import CallOutCard from "../Cards/CallOutCard/CallOutCard";
import RichCard from "../Cards/RichCard/RichCard";

type PropsType = {
  className?: string;
};

export default function PlaygroundPage({ className }: PropsType) {
  const { page } = useContentful();
  const { items } = useCoursePageResolver();

  // console.log(
  //   items.filter((item) => item?.__typename === "Section"),
  //   relationshipMap.sectionCollection.find(
  //     (item) => item.sys.id === "7806hsWKKyTfL1aGFulMKd"
  //   )
  // );

  return (
    <main className={clsx(styles.root, className)}>
      <div className={styles.content}>
        <nav className={styles.breadcrumbs}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>{page.name}</li>
          </ul>
        </nav>
        {/* <VideoTetimonial />
        <ArticleCard />
        <ArticleSideCard />
        <PeopleCard /> */}
        <RichCard />
        <CallOutCard />
        {items.map((item) => (
          <PageItem
            key={item?.sys.id}
            item={item}
            className={styles.contentItem}
          />
        ))}
      </div>
    </main>
  );
}
