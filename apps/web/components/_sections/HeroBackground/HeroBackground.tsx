import Text from "@/components/Text";
import styles from "./HeroBackground.module.scss";
import { QueryItem } from "@workearly/api";
import useSectionResolver from "@/hooks/useSectionResolver";
import ActionButton from "@/components/ActionButton";
import Image from "next/image";

type PropsType = {
  section: QueryItem["Section"];
};

export default function HeroBackground({ section }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const actions = getReferences("Action");
  const asset = section.assetsCollection?.items[0];

  return (
    <section className={styles.root}>
      <div className={styles.content}>
        {section.title && <Text size="h1">{section.title}</Text>}
        {section.text && <Text size="h5">{section.text}</Text>}
      </div>

      {actions.length > 0 && (
        <div className={styles.actions}>
          {actions.map((action) => (
            <ActionButton action={action} key={action.sys.id} />
          ))}
        </div>
      )}

      {asset && (
        <Image
          src={asset.url || ""}
          width={asset.width || 0}
          height={asset.height || 0}
          alt=""
          className={styles.media}
        />
      )}
    </section>
  );
}
