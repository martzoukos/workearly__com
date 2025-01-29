import { SectionQueryItem } from "@workearly/api";
import styles from "./SectionRenderer.module.scss";

type PropsType = {
  section: SectionQueryItem;
};

export default function SectionRenderer({ section }: PropsType) {
  return <section className={styles.root}>{section.title}</section>;
}
