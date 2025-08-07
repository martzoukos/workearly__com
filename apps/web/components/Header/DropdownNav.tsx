import Button, { ButtonProps } from "@/components/Button";
import { MenuType } from "@workearly/api";
import { Logo } from "@workearly/svg";
import clsx from "clsx";
import Link from "next/link";
import styles from "./DropdownNav.module.scss";
import Menu from "./Menu";

type PropsType = {
  menus: Array<MenuType>;
  className?: string;
};

export default function DropdownNav({ menus, className }: PropsType) {
  const firstMenu = menus.at(0);

  return (
    <nav className={clsx(styles.root, className)}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Logo />
        </Link>
        {firstMenu && <Menu menu={firstMenu} />}
      </div>
      <div className={styles.restMenusContainer}>
        {menus?.slice(1).map((menu) => {
          if (menu.to) {
            return (
              <Button
                asChild
                key={menu.name}
                aria-label={menu.name}
                variant={(menu.variant ?? "MenuItem") as ButtonProps["variant"]}
                colorScheme="Black"
              >
                <Link href={menu.to}>{menu.name}</Link>
              </Button>
            );
          } else if (menu.itemGroups) {
            return <Menu key={menu.name} menu={menu} />;
          }
        })}
      </div>
    </nav>
  );
}
