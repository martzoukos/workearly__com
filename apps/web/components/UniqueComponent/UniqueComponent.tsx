import CourseIndex from "@/components/CourseIndex";
import Footer from "@/components/Footer";
import PeopleIndex from "@/components/PeopleIndex";
import useUniqueComponentResolver from "@/hooks/useUniqueComponentResolver";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./UniqueComponent.module.scss";

type PropsType = {
  uniqueComponent: QueryItem["UniqueComponent"];
  className?: string;
};

export default function UniqueComponent({
  uniqueComponent,
  className,
}: PropsType) {
  const { variant, pages, tags, json } =
    useUniqueComponentResolver(uniqueComponent);

  return (
    <section className={clsx(styles.root, className)}>
      {variant === "Mentors" && (
        <PeopleIndex
          pages={pages}
          title={uniqueComponent.title}
          subtitle={documentToPlainTextString(
            uniqueComponent.description?.json
          )}
        />
      )}
      {variant === "Partners" && <PeopleIndex pages={pages} hideFilters />}
      {variant === "Courses" && (
        <CourseIndex pages={pages} title={uniqueComponent.title} tags={tags} />
      )}
      {variant === "Footer" && <Footer json={json} />}
    </section>
  );
}
