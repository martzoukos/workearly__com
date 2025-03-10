import Button, { ButtonProps } from "@/components/Button";
import CategorySubMenu from "@/components/Header/CategorySubMenu";
import NormalSubMenu from "@/components/Header/NormalSubMenu";
import { ChevronDown } from "@carbon/icons-react";
import { RelationshipMapTypeName } from "@workearly/api";
import clsx from "clsx";
import { DropdownMenu } from "radix-ui";
import { useState } from "react";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

export type LabelItem = {
  name: string;
  type: "label";
};

export type LinkItem = {
  name: string;
  to: string;
  variant?: ButtonProps["variant"];
  type: "link";
};

export type ReferenceItem = {
  name: string;
  referenceId: string;
  referenceType: RelationshipMapTypeName;
  type: "reference";
};

export type DecorativeItem = {
  name: string;
  to: string;
  referenceId: string;
  referenceType: RelationshipMapTypeName;
  type: "decorative";
};

export type NormalSubItem = {
  name: string;
  description: string;
  items: Array<LinkItem | DecorativeItem | NormalSubItem>;
  type: "normal-sub";
};

export type CategorySubItem = {
  name: string;
  description: string;
  itemGroups: Array<Array<LabelItem | LinkItem | ReferenceItem>>;
  type: "category-sub";
};

export type MenuType = {
  name: string;
  to?: string;
  variant?: ButtonProps["variant"];
  itemGroups: Array<
    Array<LabelItem | LinkItem | NormalSubItem | CategorySubItem>
  >;
};

type PropsType = {
  menu: MenuType;
};

export default function Menu({ menu }: PropsType) {
  const [activeSub, setActiveSub] = useState<
    MenuType["itemGroups"][number][number] | undefined
  >(undefined);

  return (
    <DropdownMenu.Root key={menu.name}>
      <DropdownMenu.Trigger asChild>
        <Button aria-label={menu.name} variant={menu.variant ?? "Outlined"}>
          {menu.name}
          <ChevronDown />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={clsx(styles.content)}
          sideOffset={8}
          align="start"
        >
          <div className={styles.contentInner}>
            {menu.itemGroups.map((group, index) => {
              const groupHasLabel = group.some((item) => item.type === "label");

              return (
                <div
                  key={index}
                  className={clsx(
                    styles.group,
                    groupHasLabel && styles.groupHasLabel
                  )}
                >
                  {group.map((item) => (
                    <MenuItem
                      key={item.name}
                      item={item}
                      onMouseEnter={() => setActiveSub(item)}
                    />
                  ))}
                </div>
              );
            })}
          </div>
          {activeSub && activeSub.type === "normal-sub" && (
            <NormalSubMenu menu={activeSub} />
          )}
          {activeSub && activeSub.type === "category-sub" && (
            <CategorySubMenu menu={activeSub} />
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
