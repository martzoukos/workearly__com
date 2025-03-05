import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./Card.module.scss";

type PropsType = PropsWithChildren<{
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}>;

function CardRoot({ as: Tag = "div", className, children }: PropsType) {
  return <Tag className={clsx(styles.root, className)}>{children}</Tag>;
}

const Card = {
  Root: CardRoot,
};

export default Card;
