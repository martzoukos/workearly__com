import { SectionQueryItem } from "@workearly/api";
import styles from "./Section.module.scss";
import clsx from "clsx";

type PropsType = {
  section: SectionQueryItem;
  className?: string;
};

export default function Section({ section, className }: PropsType) {
  return (
    <section className={clsx(styles.root, className)}>{section.title}</section>
  );
}
