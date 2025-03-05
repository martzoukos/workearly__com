import ActionButton from "@/components/ActionButton";
import Section from "@/components/Section";
import Text from "@/components/Text";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem } from "@workearly/api";
import Image from "next/image";
import styles from "./HeroBackground.module.scss";

type PropsType = {
  section: QueryItem["Section"];
};

export default function HeroBackground({ section }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const actions = getReferences("Action");
  const asset = section.assetsCollection?.items[0];

  return (
    <Section.Root section={section} className={styles.root}>
      <header className={styles.header}>
        {section.title && <Text size="h1">{section.title}</Text>}
        {section.text && <Text size="h5">{section.text}</Text>}
      </header>

      {actions.length > 0 && (
        <div className={styles.actions}>
          {actions.map((action) => (
            <ActionButton action={action} key={action.sys.id} />
          ))}
        </div>
      )}

      {asset?.url && (
        <Image
          src={asset.url}
          alt={asset.title || ""}
          fill={true}
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
          sizes="1440px"
        />
      )}
    </Section.Root>
  );
}
