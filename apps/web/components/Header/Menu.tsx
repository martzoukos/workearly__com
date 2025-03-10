import Button, { ButtonProps } from "@/components/Button";
import CategorySubMenu from "@/components/Header/CategorySubMenu";
import NormalSubMenu from "@/components/Header/NormalSubMenu";
import Text from "@/components/Text";
import { ChevronDown } from "@carbon/icons-react";
import { MenuGroupType, MenuType } from "@workearly/api";
import { Themed } from "@workearly/theme";
import clsx from "clsx";
import { DropdownMenu } from "radix-ui";
import { useState } from "react";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

type PropsType = {
  menu: MenuType;
};

export default function Menu({ menu }: PropsType) {
  const [activeSub, setActiveSub] = useState<
    MenuGroupType["items"][number] | undefined
  >(undefined);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          aria-label={menu.name}
          variant={(menu.variant ?? "Outlined") as ButtonProps["variant"]}
        >
          {menu.name}
          <ChevronDown />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content asChild sideOffset={8} align="start">
          <Themed theme="light" className={styles.content}>
            <div className={styles.contentInner}>
              {menu.itemGroups.map((group, index) => {
                return (
                  <div
                    key={index}
                    className={clsx(
                      styles.group,
                      group.name && styles.groupHasLabel
                    )}
                  >
                    {group.name && (
                      <DropdownMenu.Label asChild>
                        <Text as="label" size="h6" className={styles.label}>
                          {group.name}
                        </Text>
                      </DropdownMenu.Label>
                    )}

                    {group.items.map((item) => (
                      <DropdownMenu.Item key={item.name} asChild>
                        <MenuItem
                          item={item}
                          onMouseEnter={() => setActiveSub(item)}
                        />
                      </DropdownMenu.Item>
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
          </Themed>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
