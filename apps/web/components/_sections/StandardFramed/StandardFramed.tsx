import ActionButton from "@/components/ActionButton";
import Shell from "@/components/Shell";
import Text from "@/components/Text";
import useSectionResolver from "@/hooks/useSectionResolver";
import useShellResolver from "@/hooks/useShellResolver";
import { isDefined, QueryItem } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import styles from "./StandardFramed.module.scss";

type PropsType = {
  section: QueryItem["Section"];
};

export default function StandardFramed({ section }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const shell = useShellResolver(section);
  const assets = section.assetsCollection?.items.filter(isDefined) || [];
  const asset = assets.at(0);
  const actions = getReferences("Action");
  const isReversed = section.features?.includes("Reverse");

  return (
    <Shell.Root
      className={clsx(styles.root, isReversed && styles.isReversed)}
      {...shell}
    >
      {asset && (
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
    </Shell.Root>
  );
}
