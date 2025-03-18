import DrawerNav from "@/components/Header/DrawerNav";
import Viewport from "@/components/Viewport";
import useHeaderHeight from "@/hooks/useHeaderHeight";
import { MenuType, QueryItem } from "@workearly/api";
import DropdownNav from "./DropdownNav";
import styles from "./Header.module.scss";

type PropsType = {
  uniqueComponent: QueryItem["UniqueComponent"];
};

export default function Header({ uniqueComponent }: PropsType) {
  const headerRef = useHeaderHeight();
  const menus: Array<MenuType> = uniqueComponent.json;

  return (
    <div className={styles.root} ref={headerRef}>
      <Viewport showAfter="md">
        <DropdownNav menus={menus} />
      </Viewport>
      <Viewport showUntil="md">
        <DrawerNav menus={menus} />
      </Viewport>
    </div>
  );
}
