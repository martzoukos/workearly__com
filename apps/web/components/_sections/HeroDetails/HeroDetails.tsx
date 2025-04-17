import ActionButton from "@/components/ActionButton";
import Media from "@/components/Media";
import Shell from "@/components/Shell";
import Text from "@/components/Text";
import { useViewport } from "@/components/Viewport";
import useSectionResolver from "@/hooks/useSectionResolver";
import useShellResolver from "@/hooks/useShellResolver";
import {
  HeroDetails as HeroDetailsType,
  isDefined,
  QueryItem,
} from "@workearly/api";
import clsx from "clsx";
import styles from "./HeroDetails.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function HeroDetails({ section, className }: PropsType) {
  const { getReferences, titleSize } = useSectionResolver(section);
  const shell = useShellResolver(section);
  const actions = getReferences("Action");
  const isUntilMd = useViewport({ showUntil: "md" });

  const assets = section.assetsCollection?.items.filter(isDefined) || [];
  const desktopAsset = assets.at(0);
  const mobileAsset = assets.at(1) || desktopAsset;

  const details = section?.metadata as HeroDetailsType;

  const style = {
    "--min-height": section.metadata?.height ?? "680px",
  } as React.CSSProperties;

  return (
    <Shell.Root className={clsx(styles.root, className)} {...shell}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Text className={styles.superTitle}>{section.supertitle}</Text>
          <Text as="h2" size={titleSize ?? "h1"}>
            {section.title}
          </Text>
          {actions.length > 0 && (
            <div className={styles.actions}>
              {actions.map((action) => (
                <ActionButton action={action} key={action.sys.id} />
              ))}
            </div>
          )}
        </div>

        <div className={styles.labelContainer}>
          {details?.items?.filter(isDefined).map((item) => {
            return (
              <div className={styles.labelCard}>
                <div className={styles.label}>
                  <Text>{item.label}</Text>
                </div>
                <Text>{item.value}</Text>
              </div>
            );
          })}
        </div>
      </div>

      {desktopAsset?.url && !isUntilMd && (
        <Media asset={desktopAsset} className={styles.media} style={style} />
      )}

      {mobileAsset?.url && isUntilMd && (
        <Media asset={mobileAsset} className={styles.media} style={style} />
      )}
    </Shell.Root>
  );
}
