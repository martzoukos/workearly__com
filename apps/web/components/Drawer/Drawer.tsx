import Button from "@/components/Button";
import Text from "@/components/Text";
import { Close } from "@carbon/icons-react";
import { PropsWithChildren } from "react";
import { Drawer as VaulDrawer } from "vaul";
import styles from "./Drawer.module.scss";

type PropsType = PropsWithChildren<{
  title: string;
  trigger: React.ReactNode;
}>;

export default function Drawer({ children, title, trigger }: PropsType) {
  return (
    <VaulDrawer.Root>
      <VaulDrawer.Trigger asChild>{trigger}</VaulDrawer.Trigger>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className={styles.overlay} />
        <VaulDrawer.Content className={styles.content}>
          <VaulDrawer.Handle className={styles.handle} />
          <header className={styles.header}>
            <VaulDrawer.Title>
              <Text as="h3">{title}</Text>
            </VaulDrawer.Title>
            <VaulDrawer.Close className={styles.close} asChild>
              <Button variant="Ghost">
                <Close className={styles.closeIcon} />
              </Button>
            </VaulDrawer.Close>
          </header>
          <div className={styles.contentInner}>{children}</div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
}
