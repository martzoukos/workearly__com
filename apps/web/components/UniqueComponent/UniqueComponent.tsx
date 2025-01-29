import { UniqueComponentQueryItem } from "@workearly/api";
import styles from "./UniqueComponent.module.scss";
import clsx from "clsx";

type PropsType = {
  uniqueComponent: UniqueComponentQueryItem;
  className?: string;
};

export default function UniqueComponent({
  uniqueComponent,
  className,
}: PropsType) {
  return (
    <section className={clsx(styles.root, className)}>
      {uniqueComponent.__typename}
    </section>
  );
}
