import Button from "@/components/Button";
import { Drawer } from "@/components/Drawer";
import Text from "@/components/Text";
import { ChevronLeft } from "@carbon/icons-react";
import { MenuGroupType } from "@workearly/api";
import clsx from "clsx";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useState } from "react";
import { DialogProps, Drawer as VaulDrawer } from "vaul";
import styles from "./DrawerMenu.module.scss";
import MenuItem from "./MenuItem";

type PropsType = PropsWithChildren<{
  trigger: React.ReactNode;
  itemGroups?: Array<MenuGroupType>;
}> &
  DialogProps;

export default function DrawerMenu({
  itemGroups,
  children,
  ...props
}: PropsType) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  return (
    <Drawer
      contentClassName={styles.drawerContent}
      handleClassName={styles.drawerHandle}
      contentInnerClassName={styles.drawerContentInner}
      open={open}
      onOpenChange={setOpen}
      {...props}
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
                      onClose={() => setOpen(false)}
                    />
                  );
                } else if (item.type === "category-sub") {
                  return (
                    <DrawerMenu
                      key={item.name}
                      trigger={<MenuItem item={item} />}
                      itemGroups={item.itemGroups}
                      onClose={() => setOpen(false)}
                    />
                  );
                }

                return (
                  <MenuItem
                    key={item.name}
                    item={item}
                    onClick={() => setOpen(false)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      {children}
    </Drawer>
  );
}
