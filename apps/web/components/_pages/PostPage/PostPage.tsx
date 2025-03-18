import Button from "@/components/Button/Button";
import PageItem from "@/components/PageItem";
import PostAuthor from "@/components/PostAuthor";
import PostCover from "@/components/PostCover";
import PostOutline from "@/components/PostOutline";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { ArrowRight } from "@carbon/icons-react";
import clsx from "clsx";
import Link from "next/link";
import styles from "./PostPage.module.scss";

type PropsType = {
  className?: string;
};

export default function CoursePage({ className }: PropsType) {
  const { page } = useContentful();
  const { preDividerItems, postDividerItems } = usePageResolver(page);

  return (
    <>
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
                View All Success Stories <ArrowRight />
              </Link>
            </Button>
          </div>
          <PostAuthor />
        </section>
      </article>
      {postDividerItems.map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </>
  );
}
