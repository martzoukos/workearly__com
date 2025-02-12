import Image from "next/image";
import styles from "./ArticleCard.module.scss";
import Text from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import usePageResolver from "../../../hooks/usePageResolver";
import { DateTime } from "luxon";
import ReadingTime from "../../ReadingTime/ReadingTime";
import Person from "../../Person/Person";

type PropsType = {
  page: QueryItem["Page"];
};

export default function ArticleCard({ page }: PropsType) {
  const { resourceDetails, peopleDetails, readingTime } = usePageResolver(page);

  if (!resourceDetails) {
    return null;
  }

  return (
    <div className={styles.root}>
      {resourceDetails.asset?.url && (
        <div className={styles.media}>
          <Image
            src={resourceDetails.asset.url}
            fill={true}
            alt={resourceDetails.name || ""}
            quality={100}
            sizes="30vw"
          />
        </div>
      )}

      <div className={styles.content}>
        <header className={styles.header}>
          {resourceDetails.name && <Text as="h5">{resourceDetails.name}</Text>}
          {resourceDetails.description && (
            <Text size="small">{resourceDetails.description}</Text>
          )}
        </header>

        <footer className={styles.footer}>
          <Text size="xsmall" className={styles.tag}>
            {resourceDetails.topics?.at(0)}
          </Text>

          {peopleDetails.asset?.url && (
            <Person
              imageUrl={peopleDetails.asset.url}
              name={peopleDetails.name || ""}
            />
          )}

          <Text size="caption">
            {DateTime.fromISO(resourceDetails.publicationDate).toFormat(
              "MMM dd, yyyy"
            )}
          </Text>

          <ReadingTime time={readingTime} />
        </footer>
      </div>
    </div>
  );
}
