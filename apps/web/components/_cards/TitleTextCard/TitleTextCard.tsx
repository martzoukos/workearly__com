import Text from "@/components/Text/Text";
import styles from "./TitleTextCard.module.scss";
import { PropsWithChildren, ReactNode } from "react";

type PropsType = PropsWithChildren<{
  title?: ReactNode;
  text?: ReactNode;
}>;

const TitleTextCard = ({ title, text, children }: PropsType) => {
  return (
    <div className={styles.card}>
      {title && <Text size="h6">{title}</Text>}
      {text && <Text size="small">{text}</Text>}
      {children}
    </div>
  );
};

export default TitleTextCard;
