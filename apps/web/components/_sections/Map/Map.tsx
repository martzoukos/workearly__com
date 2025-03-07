import Media from "@/components/Media";
import Text from "@/components/Text";
import { QueryItem } from "@workearly/api";
import styles from "./Map.module.scss";

type PropsType = {
  assets: QueryItem["Asset"][];
};

export default function Map({ assets }: PropsType) {
  const asset = assets.at(0);
  const icons = assets.slice(1);

  return (
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
