import { Launch } from "@carbon/icons-react";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./PlaygroundPanel.module.scss";

type PropsType = PropsWithChildren<{
  className?: string;
  info: string[];
  sys: { spaceId?: string; id: string };
}>;

export default function PlaygroundPanel({
  children,
  sys,
  info,
  className,
}: PropsType) {
  const infoText = info.join(" | ");

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.panel}>
        {sys.spaceId ? (
          <a
            className={styles.action}
            href={`https://app.contentful.com/spaces/${sys.spaceId}/entries/${sys.id}`}
            target="_blank"
            rel="noreferrer"
          >
            {infoText} <Launch />
          </a>
        ) : (
          <div className={styles.action}>{infoText}</div>
        )}
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}
