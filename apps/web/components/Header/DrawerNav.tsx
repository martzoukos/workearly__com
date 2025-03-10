import Button, { ButtonProps } from "@/components/Button";
import { Drawer } from "@/components/Drawer";
import { Menu as MenuIcon } from "@carbon/icons-react";
import { MenuType } from "@workearly/api";
import { Logo } from "@workearly/svg";
import clsx from "clsx";
import Link from "next/link";
import styles from "./DrawerNav.module.scss";
import Menu from "./Menu";

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
        {firstMenu && <Menu menu={firstMenu} />}
        <Drawer
          contentClassName={styles.drawerContent}
          contentInnerClassName={styles.drawerContentInner}
          trigger={
            <Button variant="Outlined">
              <MenuIcon />
            </Button>
          }
        >
          {menus.slice(1).map((menu) => {
            if (menu.to) {
              return (
                <Button
                  asChild
                  key={menu.name}
                  aria-label={menu.name}
                  variant={
                    (menu.variant ?? "MenuItem") as ButtonProps["variant"]
                  }
                  colorScheme="Black"
                >
                  <Link href={menu.to}>{menu.name}</Link>
                </Button>
              );
            } else if (menu.itemGroups) {
              return <Menu key={menu.name} menu={menu} />;
            }
          })}
        </Drawer>
      </div>
    </nav>
  );
}
