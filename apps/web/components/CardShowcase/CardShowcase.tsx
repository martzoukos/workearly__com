import { SectionQueryItem } from "@workearly/api";
import styles from "./CardShowcase.module.scss";
import clsx from "clsx";

type PropsType = {
  section: SectionQueryItem;
  className?: string;
};

export default function CardShowcase({ className }: PropsType) {
  return <section className={clsx(styles.root, className)}></section>;
}
