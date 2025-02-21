import CourseCard from "@/components/_cards/CourseCard";
import { QueryItem } from "@workearly/api";
import styles from "./CourseIndex.module.scss";

type PropsType = {
  pages: QueryItem["Page"][];
};

export default function CourseIndex({ pages }: PropsType) {
  return (
    <section className={styles.root}>
      <aside>1</aside>
      <div className={styles.grid}>
        {pages.map((page) => (
          <CourseCard key={page.sys.id} page={page} />
        ))}
      </div>
    </section>
  );
}
