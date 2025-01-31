import Link from "next/link";
import styles from "./CoursePage.module.scss";
import { useContentful } from "../../stores/ContentfulStore";
import clsx from "clsx";
import CourseDetails from "../CourseDetails/CourseDetails";
import PurchaseCourse from "@/components/PurchaseCourse/PurchaseCourse";
import PageItem from "../PageItem/PageItem";
import useCoursePageResolver from "../../hooks/useCoursePageResolver";

type PropsType = {
  className?: string;
};

export default function CoursePage({ className }: PropsType) {
  const { page } = useContentful();
  const { mainItems } = useCoursePageResolver();

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
        <CourseDetails />
        {mainItems.map((item) => (
          <PageItem
            key={item?.sys.id}
            item={item}
            className={styles.contentItem}
          />
        ))}
      </div>
      <div>
        <PurchaseCourse />
      </div>
    </main>
  );
}
