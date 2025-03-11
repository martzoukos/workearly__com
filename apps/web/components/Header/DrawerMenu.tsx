import Button from "@/components/Button";
import { Drawer } from "@/components/Drawer";
import Text from "@/components/Text";
import { ChevronLeft } from "@carbon/icons-react";
import { MenuGroupType } from "@workearly/api";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { Drawer as VaulDrawer } from "vaul";
import styles from "./DrawerMenu.module.scss";
import MenuItem from "./MenuItem";

type PropsType = PropsWithChildren<{
  trigger: React.ReactNode;
  itemGroups?: Array<MenuGroupType>;
}>;

export default function DrawerMenu({
  trigger,
  itemGroups,
  children,
}: PropsType) {
  return (
    <Drawer
      contentClassName={styles.drawerContent}
      handleClassName={styles.drawerHandle}
      contentInnerClassName={styles.drawerContentInner}
      trigger={trigger}
    >
      {itemGroups?.map((group, index) => {
        return (
          <div key={index}>
            <header className={styles.header}>
              {index === 0 && (
                <VaulDrawer.Close asChild>
                  <Button variant="Ghost" colorScheme="Black">
                    <ChevronLeft className={styles.icon} />
                  </Button>
                </VaulDrawer.Close>
              )}
              {group.name && (
                <Text
                  as="label"
                  size="h4"
                  className={clsx(index > 0 && styles.label)}
                >
                  {group.name}
                </Text>
              )}
            </header>

            <div className={styles.items}>
              {group.items.map((item) => {
                if (item.type === "normal-sub") {
                  return (
                    <DrawerMenu
                      key={item.name}
                      trigger={<MenuItem item={item} />}
                      itemGroups={[{ name: item.name, items: item.items }]}
                    />
                  );
                } else if (item.type === "category-sub") {
                  return (
                    <DrawerMenu
                      key={item.name}
                      trigger={<MenuItem item={item} />}
                      itemGroups={item.itemGroups}
                    />
                  );
                }

                return <MenuItem key={item.name} item={item} />;
              })}
            </div>
          </div>
        );
      })}
      {children}
    </Drawer>
  );
}
