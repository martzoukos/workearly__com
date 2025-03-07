import { Themed, ThemeType } from "@workearly/theme";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./Card.module.scss";

type PropsType = PropsWithChildren<{
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  theme: ThemeType;
}>;

function CardRoot({ as: Tag = "div", theme, className, children }: PropsType) {
  return (
    <Themed as={Tag} theme={theme} className={clsx(styles.root, className)}>
      {children}
    </Themed>
  );
}

const Card = {
  Root: CardRoot,
};

export default Card;
