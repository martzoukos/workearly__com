import ActionButton from "@/components/ActionButton";
import Text from "@/components/Text";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem } from "@workearly/api";
import { Themed } from "@workearly/theme";
import Image from "next/image";
import styles from "./HeroBackground.module.scss";

type PropsType = {
  section: QueryItem["Section"];
};

export default function HeroBackground({ section }: PropsType) {
  const { getReferences, theme, titleSize } = useSectionResolver(section);
  const actions = getReferences("Action");
  const asset = section.assetsCollection?.items[0];

  return (
    <Themed as="section" className={styles.root} theme={theme}>
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
    </Themed>
  );
}
