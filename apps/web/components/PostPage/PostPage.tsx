import clsx from "clsx";
import usePageResolver from "../../hooks/usePageResolver";
import { useContentful } from "../../stores/ContentfulStore";
import PageItem from "../PageItem/PageItem";
import PostCover from "../PostCover/PostCover";
import styles from "./PostPage.module.scss";
import PostOutline from "../PostOutline/PostOutline";

type PropsType = {
  className?: string;
};

export default function CoursePage({ className }: PropsType) {
  const { page } = useContentful();
  const { preDividerItems } = usePageResolver(page);

  return (
    <article className={clsx(styles.root, className)}>
      <PostCover />
      <section className={styles.content}>
        <PostOutline />
        <div>
          {preDividerItems.map((item) => (
            <PageItem key={item?.sys.id} item={item} />
          ))}
        </div>
        <aside></aside>
      </section>
    </article>
  );
}
