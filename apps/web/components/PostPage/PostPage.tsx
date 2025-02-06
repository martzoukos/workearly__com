import Link from "next/link";
import styles from "./PostPage.module.scss";
import { useContentful } from "../../stores/ContentfulStore";
import clsx from "clsx";
import PurchaseCourse from "@/components/PurchaseCourse/PurchaseCourse";
import PageItem from "../PageItem/PageItem";
import usePageResolver from "../../hooks/usePageResolver";
import PostCover from "../PostCover/PostCover";

type PropsType = {
  className?: string;
};

export default function CoursePage({ className }: PropsType) {
  const { page } = useContentful();
  const { preDividerItems } = usePageResolver(page);

  return (
    <main className={clsx(styles.root, className)}>
      <PostCover />
      {preDividerItems.map((item) => (
        <PageItem key={item?.sys.id} item={item} />
      ))}
    </main>
  );
}
