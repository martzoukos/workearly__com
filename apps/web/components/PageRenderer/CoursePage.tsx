import { PropsWithChildren } from "react";
import styles from "./CoursePage.module.scss";

export default function CoursePage({ children }: PropsWithChildren) {
  return <main className={styles.root}>{children}</main>;
}
