import Button from "@/components/Button";
import { DecorativeItem, LabelItem, LinkItem } from "@/components/Header/Menu";
import Text from "@/components/Text";
import clsx from "clsx";
import Link from "next/link";
import { DropdownMenu } from "radix-ui";
import { ComponentPropsWithoutRef } from "react";
import styles from "./MenuItem.module.scss";

type MenuItemProps = ComponentPropsWithoutRef<"button"> & {
  item: LinkItem | LabelItem | DecorativeItem;
};

export default function MenuItem({ item, ...props }: MenuItemProps) {
  if (item.type === "label") {
    return (
      <DropdownMenu.Label
        asChild
        key={item.name}
        className={clsx(styles.label, styles.item)}
      >
        <Text size="h6">{item.name}</Text>
      </DropdownMenu.Label>
    );
  } else if (item.type === "link" && item.variant) {
    return (
      <DropdownMenu.Item key={item.name} asChild>
        <Button
          asChild
          variant={item.variant}
          isFullWidth
          size="medium"
          colorScheme="Black"
          {...props}
        >
          <Link href={item.to}>{item.name}</Link>
        </Button>
      </DropdownMenu.Item>
    );
  } else if (item.type === "link" && !item.variant) {
    return (
      <DropdownMenu.Item
        key={item.name}
        asChild
        className={clsx(styles.item, styles.menuItem)}
      >
        <Button
          asChild
          variant="MenuItem"
          isFullWidth
          size="medium"
          colorScheme="Black"
          {...props}
        >
          <Link href={item.to}>{item.name}</Link>
        </Button>
      </DropdownMenu.Item>
    );
  } else if (item.type === "decorative") {
    return (
      <DropdownMenu.Item
        key={item.name}
        asChild
        className={clsx(styles.item, styles.menuItem)}
      >
        <Button
          asChild
          variant="MenuItem"
          isFullWidth
          size="medium"
          colorScheme="Black"
          {...props}
        >
          <Link href={item.to}>{item.name}</Link>
        </Button>
      </DropdownMenu.Item>
    );
  }
}
