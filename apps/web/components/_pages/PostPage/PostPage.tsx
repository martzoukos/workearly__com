import Button from "@/components/Button/Button";
import PageItem from "@/components/PageItem/PageItem";
import PostAuthor from "@/components/PostAuthor/PostAuthor";
import PostCover from "@/components/PostCover/PostCover";
import PostOutline from "@/components/PostOutline/PostOutline";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { ArrowRightIcon } from "@workearly/icons";
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
            colorScheme="Black"
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
