import usePageResolver from "../../hooks/usePageResolver";
import { useContentful } from "../../stores/ContentfulStore";
import Button from "../Button/Button";
import Person from "../Person/Person";
import Text from "../Text/Text";
import styles from "./PostAuthor.module.scss";

export default function PostAuthor() {
  const { page } = useContentful();
  const { peopleDetails, resourceDetails } = usePageResolver(page);

  return (
    <aside className={styles.root}>
      <div className={styles.authorContainer}>
        <Text size="small">Author</Text>
        <div className={styles.person}>
          <Person
            name={peopleDetails.name ?? ""}
            imageUrl={peopleDetails.asset?.url ?? ""}
            size="small"
          />
        </div>
      </div>
      <div className={styles.topicsContainer}>
        <Text size="small">Related Topics</Text>
        <div className={styles.topics}>
          {resourceDetails.topics?.map((topic) => (
            <Button key={topic} size="small" isInverted={true}>
              {topic}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
