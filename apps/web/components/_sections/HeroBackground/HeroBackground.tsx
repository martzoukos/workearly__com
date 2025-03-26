import ActionButton from "@/components/ActionButton";
import Shell from "@/components/Shell";
import Text from "@/components/Text";
import { useViewport } from "@/components/Viewport";
import useSectionResolver from "@/hooks/useSectionResolver";
import useShellResolver from "@/hooks/useShellResolver";
import { isDefined, QueryItem } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import styles from "./HeroBackground.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function HeroBackground({ section, className }: PropsType) {
  const { getReferences, titleSize } = useSectionResolver(section);
  const shell = useShellResolver(section);
  const actions = getReferences("Action");
  const isUntilMd = useViewport({ showUntil: "md" });

  const assets = section.assetsCollection?.items.filter(isDefined) || [];
  const desktopAsset = assets.at(0);
  const mobileAsset = assets.at(1) || desktopAsset;

  return (
    <Shell.Root
      as="section"
      className={clsx(styles.root, className)}
      {...shell}
    >
      <header className={styles.header}>
        {section.title && <Text size={titleSize ?? "h1"}>{section.title}</Text>}
        {section.text && <Text size="h5">{section.text}</Text>}
      </header>

      {actions.length > 0 && (
        <div className={styles.actions}>
          {actions.map((action) => (
            <ActionButton action={action} key={action.sys.id} />
          ))}
        </div>
      )}

      {desktopAsset?.url && !isUntilMd && (
        <Image
          src={desktopAsset.url}
          alt={desktopAsset.title || ""}
          fill={true}
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
          sizes="1440px"
        />
      )}

      {mobileAsset?.url && isUntilMd && (
        <Image
          src={mobileAsset.url}
          alt={mobileAsset.title || ""}
          fill={true}
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
          sizes="100vw"
        />
      )}
    </Shell.Root>
  );
}
