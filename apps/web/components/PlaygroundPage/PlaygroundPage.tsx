import Link from "next/link";
import styles from "./PlaygroundPage.module.scss";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";

type PropsType = {
  children: (className?: string) => React.ReactNode;
  className?: string;
};

export default function PlaygroundPage({ children, className }: PropsType) {
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
        {children(styles.contentItem)}
      </div>
    </main>
  );
}
