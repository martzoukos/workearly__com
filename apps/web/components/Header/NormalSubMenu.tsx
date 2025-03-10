import CardRenderer from "@/components/_renderers/CardRenderer";
import Text from "@/components/Text";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import { DropdownMenu } from "radix-ui";
import { useState } from "react";
import { DecorativeItem, LinkItem, NormalSubItem } from "./Menu";
import MenuItem from "./MenuItem";
import styles from "./NormalSubMenu.module.scss";

type PropsType = {
  menu: NormalSubItem;
};

export default function NormalSubMenu({ menu }: PropsType) {
  const [activeSubItem, setActiveSubItem] = useState<
    DecorativeItem | LinkItem | NormalSubItem | undefined
  >(undefined);
  const { getReference } = useContentful();
  const decorativeReference =
    activeSubItem && activeSubItem.type === "decorative"
      ? getReference("Card", activeSubItem.referenceId)
      : undefined;
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <DropdownMenu.Label asChild className={clsx(styles.label, styles.item)}>
          <Text size="h5">{menu.name}</Text>
        </DropdownMenu.Label>
        {menu.items.map((subItem) => (
          <MenuItem
            key={subItem.name}
            item={subItem}
            onMouseEnter={() => setActiveSubItem(subItem)}
          />
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
