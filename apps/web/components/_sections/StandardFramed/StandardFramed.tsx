import Text from "@/components/Text";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem } from "@workearly/api";
import styles from "./StandardFramed.module.scss";
import { useContentful } from "@/stores/ContentfulStore";
import usePageResolver from "@/hooks/usePageResolver";
import Image from "next/image";
import ActionButton from "@/components/ActionButton";

type PropsType = {
  section: QueryItem["Section"];
};

export default function StandardFramed({ section }: PropsType) {
  const { page } = useContentful();
  const { getReferences } = useSectionResolver(section);
  const assets = section.assetsCollection?.items || [];
  const actions = getReferences("Action");
  const { items } = usePageResolver(page);

  // Get All Standard Component Framed
  const Section = items.filter(
    (item) =>
      item.__typename === "Section" &&
      item.variant === "Standard Component Framed"
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
        {section.supertitle && (
          <Text size="caption" className={styles.supertitle}>
            {section.supertitle}
          </Text>
        )}

        <div className={styles.main}>
          <div>
            {section.title && <Text size="h3">{section.title}</Text>}
            {section.text && <Text size="small">{section.text}</Text>}
          </div>

          {actions.length > 0 && (
            <div className={styles.actions}>
              {actions.map((action) => {
                return <ActionButton action={action} key={action.sys.id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
