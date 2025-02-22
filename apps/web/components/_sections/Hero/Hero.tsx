import ActionButton from "@/components/ActionButton";
import Text from "@/components/Text";
import useSectionResolver from "@/hooks/useSectionResolver";
import { isDefined, QueryItem } from "@workearly/api";
import Image from "next/image";
import styles from "./Hero.module.scss";

type PropsType = {
  section: QueryItem["Section"];
};

export default function Hero({ section }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const actions = getReferences("Action");

  const { titleOverride } = useSectionResolver(section);
  const assets = section.assetsCollection?.items.filter(isDefined) || [];
  const asset = assets.at(0);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Text as="h1" size={titleOverride || "d2"}>
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

      {asset?.url && (
        <div className={styles.media}>
          <Image
            src={asset.url}
            alt={asset.title || section.title || ""}
            fill={true}
            sizes="30vw"
          />
        </div>
      )}
    </div>
  );
}
