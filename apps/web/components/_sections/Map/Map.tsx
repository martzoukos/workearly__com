import Media from "@/components/Media";
import Shell from "@/components/Shell";
import Text from "@/components/Text";
import { isDefined, QueryItem } from "@workearly/api";
import styles from "./Map.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function Map({ section, className }: PropsType) {
  const assets = section.assetsCollection?.items.filter(isDefined) || [];
  const asset = assets.at(0);
  const icons = assets.slice(1);

  return (
    <Shell.Section section={section} className={className}>
      <div className={styles.root}>
        {asset && <Media asset={asset} height="24rem" />}
        {icons.length > 0 && (
          <div className={styles.icons}>
            {icons.map((icon) => (
              <AssetCard key={icon.sys.id} icon={icon} />
            ))}
          </div>
        )}
      </div>
    </Shell.Section>
  );
}

type AssetCardPropsType = {
  icon: QueryItem["Asset"];
};

function AssetCard({ icon }: AssetCardPropsType) {
  return (
    <div className={styles.icon}>
      {icon.url && (
        <Media asset={icon} aspectRatio="1:1" className={styles.iconMedia} />
      )}
      <div>
        <Text className={styles.iconTitle}>{icon.title}</Text>
        <Text size="caption">{icon.description}</Text>
      </div>
    </div>
  );
}
