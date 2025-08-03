import Button, { ButtonProps } from "@/components/Button";
import CategorySubMenu from "@/components/Header/CategorySubMenu";
import NormalSubMenu from "@/components/Header/NormalSubMenu";
import Text from "@/components/Text";
import { ChevronDown } from "@carbon/icons-react";
import { MenuGroupType, MenuType } from "@workearly/api";
import { Themed } from "@workearly/theme";
import clsx from "clsx";
import { useRouter } from "next/router";
import { DropdownMenu } from "radix-ui";
import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Link from "next/link";

type PropsType = {
  menu: MenuType;
  defaultOpen?: boolean;
};

export default function Menu({ menu, defaultOpen = false }: PropsType) {
  const [activeSub, setActiveSub] = useState<
    MenuGroupType["items"][number] | undefined
  >(undefined);
  const router = useRouter();
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    function onClose() {
      setOpen(false);
      setActiveSub(undefined);
    }

    router.events.on("routeChangeStart", onClose);
    return () => router.events.off("routeChangeStart", onClose);
  }, [router.events]);

  return (
    <DropdownMenu.Root open onOpenChange={setOpen} modal={false}>
      <DropdownMenu.Trigger asChild>
        <Button
          aria-label={menu.name}
          variant={(menu.variant ?? "Outlined") as ButtonProps["variant"]}
          onClick={() => setOpen((prev) => !prev)}
        >
          {menu.name}
          <ChevronDown />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        asChild
        sideOffset={8}
        align="start"
        data-state-open={open}
        className={styles.contentWrapper}
      >
        <Themed theme="light" className={styles.content}>
          <div className={styles.contentInner}>
            {menu.itemGroups?.map((group, index) => {
              return (
                <div
                  key={index}
                  className={clsx(
                    styles.group,
                    group.name && styles.groupHasLabel,
                  )}
                >
                  <div className={styles.labelContainer}>
                    {group.greenBtn && (
                      <DropdownMenu.Label asChild>
                        <Button
                          asChild
                          variant={"Outlined"}
                          isFullWidth
                          size="medium"
                          colorScheme="Black"
                          className={styles.greenLabel}
                        >
                          <Link href={group.greenBtn.to || ""}>
                            {group.greenBtn.name}
                          </Link>
                        </Button>
                      </DropdownMenu.Label>
                    )}
                    {group.name && (
                      <DropdownMenu.Label asChild>
                        <Text as="label" size="h6" className={styles.label}>
                          {group.name}
                        </Text>
                      </DropdownMenu.Label>
                    )}
                  </div>

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
          {menu.itemGroups?.map((group) => {
            return group.items
              .filter((item) => item.type === "normal-sub")
              .map((item) => {
                return (
                  <NormalSubMenu
                    key={item.name}
                    menu={item}
                    isOpen={activeSub?.name === item.name}
                  />
                );
              });
          })}
          {menu.itemGroups?.map((group) => {
            return group.items
              .filter((item) => item.type === "category-sub")
              .map((item) => {
                return (
                  <CategorySubMenu
                    key={item.name}
                    menu={item}
                    isOpen={activeSub?.name === item.name}
                  />
                );
              });
          })}
        </Themed>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
