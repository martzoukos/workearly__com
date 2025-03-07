import Button from "@/components/Button";
import { QueryItem } from "@workearly/api";
import { Logo } from "@workearly/svg";
import Link from "next/link";
import styles from "./Header.module.scss";
import Menu, { MenuType } from "./Menu";

type PropsType = {
  uniqueComponent: QueryItem["UniqueComponent"];
};

type HeaderJson = Array<MenuType>;

export default function Header({ uniqueComponent }: PropsType) {
  const menus: HeaderJson = uniqueComponent.json;
  const firstMenu = menus.at(0);

  return (
    <section className={styles.root}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Logo />
        </Link>
        {firstMenu && <Menu menu={firstMenu} />}
      </div>
      <div className={styles.restMenusContainer}>
        {menus.slice(1).map((menu) => {
          if (menu.to) {
            return (
              <Button
                asChild
                key={menu.name}
                aria-label={menu.name}
                variant={menu.variant ?? "MenuItem"}
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
    </section>
  );
}
