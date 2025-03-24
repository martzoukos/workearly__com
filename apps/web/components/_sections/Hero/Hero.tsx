import ActionButton from "@/components/ActionButton";
import Media from "@/components/Media";
import Shell from "@/components/Shell";
import Text from "@/components/Text";
import { useViewport } from "@/components/Viewport";
import useSectionResolver from "@/hooks/useSectionResolver";
import useShellResolver from "@/hooks/useShellResolver";
import { isDefined, QueryItem } from "@workearly/api";
import clsx from "clsx";
import styles from "./Hero.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function Hero({ section, className }: PropsType) {
  const { getReferences, titleSize } = useSectionResolver(section);
  const shell = useShellResolver(section);
  const actions = getReferences("Action");
  const isUntilMd = useViewport({ showUntil: "md" });

  const assets = section.assetsCollection?.items.filter(isDefined) || [];
  const desktopAsset = assets.at(0);
  const mobileAsset = assets.at(1) || desktopAsset;

  const style = {
    "--asset-width": section.metadata?.assetWidth ?? "30%",
    "--min-height": section.metadata?.height ?? "480px",
  } as React.CSSProperties;

  return (
    <Shell.Root className={clsx(styles.root, className)} {...shell}>
      <div className={styles.content}>
        <Text as="h2" size={titleSize ?? "d2"}>
          {section.title}
        </Text>
        <Text size={"h6"}>{section.text}</Text>
        {actions.length > 0 && (
          <div className={styles.actions}>
            {actions.map((action) => (
              <ActionButton action={action} key={action.sys.id} />
            ))}
          </div>
        )}
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
