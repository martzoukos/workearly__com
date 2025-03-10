import CardRenderer from "@/components/_renderers/CardRenderer";
import Text from "@/components/Text";
import { useContentful } from "@/stores/ContentfulStore";
import {
  DecorativeItemType,
  LinkItemType,
  NormalSubItemType,
} from "@workearly/api";
import clsx from "clsx";
import { DropdownMenu } from "radix-ui";
import { useState } from "react";
import MenuItem from "./MenuItem";
import styles from "./NormalSubMenu.module.scss";

type PropsType = {
  menu: NormalSubItemType;
};

export default function NormalSubMenu({ menu }: PropsType) {
  const [activeSubItem, setActiveSubItem] = useState<
    DecorativeItemType | LinkItemType | NormalSubItemType | undefined
  >(undefined);
  const { getReference } = useContentful();
  const decorativeReference =
    activeSubItem && activeSubItem.type === "decorative"
      ? getReference("Card", activeSubItem.referenceId)
      : undefined;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <DropdownMenu.Label asChild>
          <Text size="h5" className={clsx(styles.label, styles.item)}>
            {menu.name}
          </Text>
        </DropdownMenu.Label>
        {menu.items.map((subItem) => (
          <DropdownMenu.Item asChild key={subItem.name}>
            <MenuItem
              item={subItem}
              onMouseEnter={() => setActiveSubItem(subItem)}
            />
          </DropdownMenu.Item>
        ))}
      </div>
      {activeSubItem && activeSubItem.type === "normal-sub" && (
        <NormalSubMenu menu={activeSubItem} />
      )}
      {decorativeReference && (
        <div className={styles.decorativeReference}>
          <CardRenderer card={decorativeReference} fallbackTheme="light" />
        </div>
      )}
    </div>
  );
}
