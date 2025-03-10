import DrawerNav from "@/components/Header/DrawerNav";
import Viewport from "@/components/Viewport";
import { MenuType, QueryItem } from "@workearly/api";
import DropdownNav from "./DropdownNav";

type PropsType = {
  uniqueComponent: QueryItem["UniqueComponent"];
};

export default function Header({ uniqueComponent }: PropsType) {
  const menus: Array<MenuType> = uniqueComponent.json;

  return (
    <>
      <Viewport showAfter="md">
        <DropdownNav menus={menus} />
      </Viewport>
      <Viewport showUntil="md">
        <DrawerNav menus={menus} />
      </Viewport>
    </>
  );
}
