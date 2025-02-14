import { QueryItem } from "@workearly/api";
import styles from "./MentorIndex.module.css";

type PropsType = {
  pages: QueryItem["Page"][];
};

export default function MentorIndex({ pages }: PropsType) {
  return <div className={styles.root}>{pages.map(page => )}</div>;
}
