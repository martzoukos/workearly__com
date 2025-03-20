import usePageResolver from "../../hooks/usePageResolver";
import { useContentful } from "../../stores/ContentfulStore";
import Button from "../Button/Button";
import Person from "../Person/Person";
import Text from "../Text/Text";
import styles from "./PostAuthor.module.scss";

export default function PostAuthor() {
  const { page } = useContentful();
  const { peopleDetails, tags } = usePageResolver(page);

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
      {tags.length > 0 && (
        <div className={styles.topicsContainer}>
          <Text size="small">Related Topics</Text>
          <div className={styles.topics}>
            {tags.map((tag) => (
              <Button key={tag.id} size="xsmall" isInverted={true}>
                {tag.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
