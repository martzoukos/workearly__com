import MenuCertificateCard from "@/components/_cards/MenuCertificateCard";
import MenuCourseCard from "@/components/_cards/MenuCourseCard";
import Button, { ButtonProps } from "@/components/Button";
import { useContentful } from "@/stores/ContentfulStore";
import { ChevronRight } from "@carbon/icons-react";
import {
  CategorySubItemType,
  DecorativeItemType,
  LinkItemType,
  MenuType,
  NormalSubItemType,
  ReferenceItemType,
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
    | CategorySubItemType
    | ReferenceItemType
    | MenuType;
};

export default function MenuItem({ item, className, ...props }: MenuItemProps) {
  const { getReference } = useContentful();

  if (item.type === "menu") {
    if (item.to) {
      return (
        <Button
          asChild
          variant={(item.variant ?? "MenuItem") as ButtonProps["variant"]}
          isFullWidth
          size="medium"
          colorScheme="Black"
          className={clsx(styles.item, className)}
          {...props}
        >
          <Link href={item.to}>{item.name}</Link>
        </Button>
      );
    }

    return null;
  }

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
        asChild
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
  } else if (item.type === "reference") {
    if (item.referenceType === "Page") {
      const page = getReference("Page", item.referenceId);

      if (!page) {
        return null;
      }

      if (page.variant === "Course") {
        return <MenuCourseCard key={item.name} page={page} />;
      } else if (page.variant === "Certificate") {
        return <MenuCertificateCard key={item.name} page={page} />;
      }
    }

    return null;
  }

  return null;
}
