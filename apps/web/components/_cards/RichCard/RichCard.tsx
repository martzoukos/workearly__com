import ActionButton from "@/components/ActionButton";
import Card from "@/components/Card";
import Markdown from "@/components/RichText/Markdown";
import Text from "@/components/Text/Text";
import useCardResolver from "@/hooks/useCardResolver";
import { QueryItem } from "@workearly/api";
import { ThemeType } from "@workearly/theme";
import clsx from "clsx";
import Image from "next/image";
import styles from "./RichCard.module.scss";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
  theme: ThemeType;
};

export default function RichCard({ card, theme, className }: PropsType) {
  const { getReferences } = useCardResolver(card);
  const actions = getReferences("Action");

  return (
    <Card.Root theme={theme} className={clsx(styles.root, className)}>
      {card?.title && <Text className={styles.title}>{card.title}</Text>}

      <div className={styles.content}>
        <div className={styles.richText}>
          <Text size="h3">Unlock your full career potential</Text>
          {card.text && (
            <Markdown variant="Single Column Checkmark">{card.text}</Markdown>
          )}
        </div>

        {card?.asset?.url && (
          <Image
            src={card.asset.url}
            alt=""
            width={card.asset.width || 100}
            height={card.asset.height || 100}
            className={styles.media}
          />
        )}
      </div>

      {actions.map((action) => (
        <ActionButton action={action} key={action?.sys.id} />
      ))}
    </Card.Root>
  );
}
