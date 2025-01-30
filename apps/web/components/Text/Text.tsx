import { Slot } from "radix-ui";
import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./Text.module.scss";

type TextElement = React.ElementRef<"p">;
interface PropsType extends ComponentPropsWithoutRef<"p"> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
  size?:
    | "d1"
    | "d2"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "small"
    | "caption";
}

const Text = forwardRef<TextElement, PropsType>((props, forwardedRef) => {
  const { children, className, asChild, size, as: Tag = "p", ...rest } = props;

  const classNameComparator = size || Tag;

  const resolvedClassName = clsx(className, {
    [styles.d1]: classNameComparator === "d1",
    [styles.d2]: classNameComparator === "d2",
    [styles.h1]: classNameComparator === "h1",
    [styles.h2]: classNameComparator === "h2",
    [styles.h3]: classNameComparator === "h3",
    [styles.h4]: classNameComparator === "h4",
    [styles.h5]: classNameComparator === "h5",
    [styles.h6]: classNameComparator === "h6",
    [styles.p]: classNameComparator === "p",
    [styles.small]: classNameComparator === "small",
    [styles.caption]: classNameComparator === "caption",
  });

  return (
    <Slot.Root {...rest} ref={forwardedRef} className={resolvedClassName}>
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot.Root>
  );
});

Text.displayName = "Text";

export default Text;
