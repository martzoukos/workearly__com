import styles from "./StepsShowcase.module.scss";
import clsx from "clsx";
import Text from "../Text/Text";
import { QueryItem } from "@workearly/api";
import useSectionResolver from "@/hooks/useSectionResolver";
import useShellResolver from "@/hooks/useShellResolver";
import Shell from "@/components/Shell";
import StepsCard from "@/components/StepsShowcase/StepsCard";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function StepsShowcase({ section, className }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const shell = useShellResolver(section);
  const cards = getReferences("Card");
  const { title, supertitle, text } = section;

  return (
    <Shell.Root className={clsx(styles.root, className)} {...shell}>
      <header className={styles.header}>
        {supertitle && <Text size="d1">{supertitle}</Text>}
        {title && (
          <Text size="d1" className={styles.title}>
            {title}
          </Text>
        )}
        {text && (
          <Text size="h6" as="h1" className={styles.description}>
            {text}
          </Text>
        )}
      </header>

      <div className={styles.cardsContainer}>
        {cards.map((card, index) => {
          return <StepsCard card={card} cardNumber={index + 1} />;
        })}
      </div>
    </Shell.Root>
  );
}
