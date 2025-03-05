import Card from "@/components/Card";
import Text from "@/components/Text/Text";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import styles from "./TitleTextCard.module.scss";

type PropsType = PropsWithChildren<{
  title?: ReactNode;
  text?: ReactNode;
  className?: string;
}>;

const TitleTextCard = ({ title, text, children, className }: PropsType) => {
  return (
    <Card.Root className={clsx(styles.root, className)}>
      {title && <Text size="h6">{title}</Text>}
      {text && <Text size="small">{text}</Text>}
      {children}
    </Card.Root>
  );
};

export default TitleTextCard;
