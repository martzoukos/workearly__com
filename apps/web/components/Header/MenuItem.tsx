import Button, { ButtonProps } from "@/components/Button";
import { ChevronRight } from "@carbon/icons-react";
import {
  CategorySubItemType,
  DecorativeItemType,
  LinkItemType,
  NormalSubItemType,
} from "@workearly/api";
import clsx from "clsx";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import styles from "./MenuItem.module.scss";

type MenuItemProps = ComponentPropsWithoutRef<"button"> & {
  item:
    | LinkItemType
    | DecorativeItemType
    | NormalSubItemType
    | CategorySubItemType;
};

export default function MenuItem({ item, className, ...props }: MenuItemProps) {
  if (item.type === "link" && item.variant) {
    return (
      <Button
        asChild
        variant={item.variant as ButtonProps["variant"]}
        isFullWidth
        size="medium"
        colorScheme="Black"
        {...props}
      >
        <Link href={item.to}>{item.name}</Link>
      </Button>
    );
  }

  if (item.type === "link" || item.type === "decorative") {
    return (
      <Button
        variant="MenuItem"
        isFullWidth
        size="medium"
        colorScheme="Black"
        className={clsx(styles.item, className)}
        {...props}
      >
        <Link href={item.to}>{item.name}</Link>
      </Button>
    );
  } else if (item.type === "normal-sub" || item.type === "category-sub") {
    return (
      <Button
        variant="MenuItem"
        isFullWidth
        size="medium"
        colorScheme="Black"
        className={clsx(styles.item, className)}
        {...props}
      >
        {item.name} <ChevronRight className={styles.itemChevron} />
      </Button>
    );
  }

  return null;
}
