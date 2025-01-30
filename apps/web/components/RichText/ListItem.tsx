import { Slot } from "radix-ui";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./ListItem.module.scss";
import clsx from "clsx";

type ListItemElement = React.ElementRef<"li">;

interface PropsType extends ComponentPropsWithoutRef<"li"> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
  icon?: React.ReactNode;
}

const ListItem = forwardRef<ListItemElement, PropsType>(
  (props, forwardedRef) => {
    const {
      children,
      className,
      asChild,
      icon,
      as: Tag = "li",
      ...rest
    } = props;

    return (
      <Slot.Root
        {...rest}
        ref={forwardedRef}
        className={clsx(styles.root, className)}
      >
        {asChild ? (
          children
        ) : (
          <Tag>
            {icon} {children}
          </Tag>
        )}
      </Slot.Root>
    );
  }
);

ListItem.displayName = "ListItem";

export default ListItem;
