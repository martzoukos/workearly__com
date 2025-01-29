import styles from "./CoursePage.module.scss";

type PropsType = {
  children: (className?: string) => React.ReactNode;
};

export default function CoursePage({ children }: PropsType) {
  return (
    <main className={styles.root}>
      <div className={styles.content}>{children(styles.contentItem)}</div>
      <div className={styles.sidebar}></div>
    </main>
  );
}
