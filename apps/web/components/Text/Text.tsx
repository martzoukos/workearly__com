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
    | "xsmall"
    | "caption";
}

const Text = forwardRef<TextElement, PropsType>((props, forwardedRef) => {
  const { children, className, asChild, size, as: Tag = "p", ...rest } = props;

  const classNameComparator = size || Tag;

  const resolvedClassName = clsx(
    className,
    classNameComparator === "d1" && styles.d1,
    classNameComparator === "d2" && styles.d2,
    classNameComparator === "h1" && styles.h1,
    classNameComparator === "h2" && styles.h2,
    classNameComparator === "h3" && styles.h3,
    classNameComparator === "h4" && styles.h4,
    classNameComparator === "h5" && styles.h5,
    classNameComparator === "h6" && styles.h6,
    classNameComparator === "p" && styles.p,
    classNameComparator === "small" && styles.small,
    classNameComparator === "xsmall" && styles.xsmall,
    classNameComparator === "caption" && styles.caption
  );

  return (
    <Slot.Root {...rest} ref={forwardedRef} className={resolvedClassName}>
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot.Root>
  );
});

Text.displayName = "Text";

export default Text;
