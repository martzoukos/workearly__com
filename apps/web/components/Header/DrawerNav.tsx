import Button, { ButtonProps } from "@/components/Button";
import MenuItem from "@/components/Header/MenuItem";
import { ChevronDown, Menu as MenuIcon } from "@carbon/icons-react";
import { MenuType } from "@workearly/api";
import { Logo } from "@workearly/svg";
import clsx from "clsx";
import Link from "next/link";
import DrawerMenu from "./DrawerMenu";
import styles from "./DrawerNav.module.scss";

type PropsType = {
  menus: Array<MenuType>;
  className?: string;
};

export default function DrawerNav({ menus, className }: PropsType) {
  const firstMenu = menus.at(0);

  return (
    <nav className={clsx(styles.root, className)}>
      <Link href="/">
        <Logo />
      </Link>
      <div className={styles.menusContainer}>
        {firstMenu && (
          <DrawerMenu
            trigger={
              <Button
                aria-label={firstMenu.name}
                variant={
                  (firstMenu.variant ?? "Outlined") as ButtonProps["variant"]
                }
              >
                {firstMenu.name}
                <ChevronDown />
              </Button>
            }
            itemGroups={firstMenu.itemGroups}
          />
        )}
        <DrawerMenu
          trigger={
            <Button variant="Outlined">
              <MenuIcon />
            </Button>
          }
        >
          {menus.slice(1).map((menu) => {
            if (menu.itemGroups) {
              return (
                <DrawerMenu
                  key={menu.name}
                  itemGroups={menu.itemGroups}
                  trigger={<MenuItem item={menu} />}
                />
              );
            }

            return <MenuItem key={menu.name} item={menu} />;
          })}
        </DrawerMenu>
      </div>
    </nav>
  );
}
