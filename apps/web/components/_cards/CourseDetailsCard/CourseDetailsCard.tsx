import Text from "@/components/Text/Text";
import styles from "./CourseDetailsCard.module.scss";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

const CourseDetailsCard = ({ card, className }: PropsType) => {
  return (
    <div className={clsx(styles.card, className)}>
      {card?.title && <Text size="caption">{card.title}</Text>}
      {card?.text && <Text>{card.text}</Text>}
    </div>
  );
};

export default CourseDetailsCard;
