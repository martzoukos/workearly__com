import Link from "next/link";
import styles from "./CoursePage.module.scss";
import { useContentful } from "../../stores/ContentfulStore";
import clsx from "clsx";
import CourseDetails from "../CourseDetails/CourseDetails";
import PurchaseCourse from "@/components/PurchaseCourse/PurchaseCourse";
import PageItem from "../PageItem/PageItem";
import usePageResolver from "../../hooks/usePageResolver";

type PropsType = {
  className?: string;
};

export default function CoursePage({ className }: PropsType) {
  const { page, relationshipMap } = useContentful();
  const { beforeFullWidthItems, afterFullWidthItems } = usePageResolver(page);

  console.log(page, relationshipMap);

  return (
    <main className={clsx(styles.root, className)}>
      <div className={styles.contentWrapper}>
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
          {beforeFullWidthItems.map((item) => (
            <PageItem
              key={item?.sys.id}
              item={item}
              className={styles.contentItem}
            />
          ))}
        </div>
        <PurchaseCourse className={styles.sidebar} />
      </div>
      {afterFullWidthItems.map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </main>
  );
}
