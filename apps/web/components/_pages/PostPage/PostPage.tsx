import clsx from "clsx";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import PageItem from "@/components/PageItem/PageItem";
import PostCover from "@/components/PostCover/PostCover";
import styles from "./PostPage.module.scss";
import PostOutline from "@/components/PostOutline/PostOutline";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { ArrowRightIcon } from "@workearly/icons";
import PostAuthor from "@/components/PostAuthor/PostAuthor";

type PropsType = {
  className?: string;
};

export default function CoursePage({ className }: PropsType) {
  const { page } = useContentful();
  const { preDividerItems, postDividerItems } = usePageResolver(page);

  return (
    <article className={clsx(styles.root, className)}>
      <PostCover />
      <section className={styles.content}>
        <PostOutline />
        <div className={styles.mainContent}>
          {preDividerItems.map((item) => (
            <PageItem key={item?.sys.id} item={item} />
          ))}
          <Button
            asChild
            variant="Underlined"
            size="large"
            className={styles.viewAllButton}
          >
            <Link href="/courses">
              View All Success Stories <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <PostAuthor />
      </section>
      {postDividerItems.map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </article>
  );
}
