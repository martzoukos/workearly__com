import clsx from "clsx";
import { Slot } from "radix-ui";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./List.module.scss";

type ListElement = React.ElementRef<"ul">;

interface PropsType extends ComponentPropsWithoutRef<"ul"> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
  columnCount?: number;
}

const List = forwardRef<ListElement, PropsType>((props, forwardedRef) => {
  const {
    children,
    className,
    asChild,
    columnCount,
    as: Tag = "ul",
    ...rest
  } = props;

  const style = {
    "--column-count": columnCount ?? 1,
  } as React.CSSProperties;

  return (
    <Slot.Root
      {...rest}
      ref={forwardedRef}
      className={clsx(styles.root, className)}
      style={style}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot.Root>
  );
});

List.displayName = "List";

export default List;
