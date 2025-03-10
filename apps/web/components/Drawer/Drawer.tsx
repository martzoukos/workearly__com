import Button from "@/components/Button";
import Text from "@/components/Text";
import { Close } from "@carbon/icons-react";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { DialogProps, Drawer as VaulDrawer } from "vaul";
import styles from "./Drawer.module.scss";

type PropsType = PropsWithChildren<{
  title?: string;
  trigger: React.ReactNode;
  contentClassName?: string;
  handleClassName?: string;
  contentInnerClassName?: string;
}> &
  DialogProps;

export default function Drawer({
  children,
  title,
  trigger,
  contentClassName,
  handleClassName,
  contentInnerClassName,
  ...props
}: PropsType) {
  return (
    <VaulDrawer.Root {...props}>
      <VaulDrawer.Trigger asChild>{trigger}</VaulDrawer.Trigger>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className={styles.overlay} />
        <VaulDrawer.Content className={clsx(styles.content, contentClassName)}>
          <VaulDrawer.Handle className={clsx(styles.handle, handleClassName)} />
          {title && (
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
          )}
          <div className={clsx(styles.contentInner, contentInnerClassName)}>
            {children}
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
}
