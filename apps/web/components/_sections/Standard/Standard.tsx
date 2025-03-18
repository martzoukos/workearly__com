import Shell from "@/components/Shell";
import Text from "@/components/Text";
import useShellResolver from "@/hooks/useShellResolver";
import { isDefined, QueryItem } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import styles from "./Standard.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function Standard({ section, className }: PropsType) {
  const shell = useShellResolver(section);
  const assets = section.assetsCollection?.items.filter(isDefined) || [];
  const asset = assets.at(0);
  const isReversed = section.features?.includes("Reverse");

  return (
    <Shell.Root
      className={clsx(styles.root, isReversed && styles.isReversed, className)}
      {...shell}
    >
      {asset?.url && (
        <Image
          src={assets[0]?.url || ""}
          width={assets[0]?.width || 0}
          height={assets[0]?.height || 0}
          alt=""
          className={styles.media}
        />
      )}

      <div className={styles.content}>
        {section.title && <Text size="h2">{section.title}</Text>}
        {section.text && <Text size="h5">{section.text}</Text>}
      </div>
    </Shell.Root>
  );
}
