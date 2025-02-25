import ActionButton from "@/components/ActionButton";
import VideoTetimonialCard from "@/components/_cards/VideoTetimonialCard/VideoTetimonialCard";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem } from "@workearly/api";
import Text from "../Text/Text";
import styles from "./VideoTetimonial.module.scss";

type PropsType = {
  section: QueryItem["Section"];
};

export default function VideoTetimonial({ section }: PropsType) {
  const { getReferences, cardsCount } = useSectionResolver(section);
  const actions = getReferences("Action");
  const cards = getReferences("Card");
  const style = {
    "--column-count": cardsCount,
  } as React.CSSProperties;

  return (
    <section className={styles.root} style={style}>
      <div className={styles.header}>
        {section.title && <Text size="h4">{section.title}</Text>}

        {actions.length > 0 && (
          <div className={styles.actions}>
            {actions.map((action) => {
              return <ActionButton action={action} key={action.sys.id} />;
            })}
          </div>
        )}
      </div>

      <div className={styles.cards}>
        {cards.map((card) => {
          return <VideoTetimonialCard card={card} />;
        })}
      </div>
    </section>
  );
}
