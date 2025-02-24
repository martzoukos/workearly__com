import Text from "@/components/Text";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem } from "@workearly/api";
import styles from "./Standard.module.scss";
import { useContentful } from "@/stores/ContentfulStore";
import usePageResolver from "@/hooks/usePageResolver";
import Image from "next/image";

type PropsType = {
  section: QueryItem["Section"];
};

export default function Standard({ section }: PropsType) {
  const { page } = useContentful();
  const assets = section.assetsCollection?.items || [];
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
    <section className={styles.root} data-media={mediaAlignment}>
      {assets.length > 0 && (
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
    </section>
  );
}
