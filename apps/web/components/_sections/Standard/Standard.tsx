import Shell from "@/components/Shell";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import useSectionResolver from "@/hooks/useSectionResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { isDefined, QueryItem } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import styles from "./Standard.module.scss";

type PropsType = {
  section: QueryItem["Section"];
};

export default function Standard({ section }: PropsType) {
  const { page } = useContentful();
  const { alignment, size, theme } = useSectionResolver(section);
  const assets = section.assetsCollection?.items.filter(isDefined) || [];
  const asset = assets.at(0);

  const { items } = usePageResolver(page);

  // Get All Standard Component Framed
  const Section = items.filter(
    (item) =>
      item.__typename === "Section" && item.variant === "Standard Component"
  );

  //   Get Our Current Section Index
  const currentIndex = Section.findIndex(
    (item) => item.sys.id === section.sys.id
  );

  const mediaAlignment = currentIndex % 2 === 0 ? "left" : "right";

  return (
    <Shell.Root
      className={clsx(
        styles.root,
        mediaAlignment === "right" && styles.reversed
      )}
      alignment={alignment}
      size={size}
      theme={theme}
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
