import Link from "next/link";
import styles from "./CoursePage.module.scss";
import { useContentful } from "../../stores/ContentfulStore";
import clsx from "clsx";
import CourseDetails from "./CourseDetails";
import PurchaseCourse from "@/components/PurchaseCourse/PurchaseCourse";

type PropsType = {
  children: (className?: string) => React.ReactNode;
  className?: string;
};

export default function CoursePage({ children, className }: PropsType) {
  const { page } = useContentful();

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
        {children(styles.contentItem)}
      </div>
      <div className={styles.sidebar}>
        <PurchaseCourse />
      </div>
    </main>
  );
}
