import Image from "next/image";
import styles from "./ArticleCard.module.scss";
import Text from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import usePageResolver from "../../../hooks/usePageResolver";
import { DateTime } from "luxon";
import ReadingTime from "../../ReadingTime/ReadingTime";

type PropsType = {
  page: QueryItem["Page"];
};

export default function ArticleCard({ page }: PropsType) {
  const { resourceDetails, peopleDetails, items } = usePageResolver(page);
  const richTexts = items.filter(
    (item) => item?.__typename === "ContentTypeRichText"
  ) as QueryItem["ContentTypeRichText"][];

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
            <div className={styles.person}>
              <Image
                src={peopleDetails.asset.url}
                alt={peopleDetails.name || ""}
                width={20}
                height={20}
                className={styles.profile}
              />
              <Text size="caption">{peopleDetails.name}</Text>
            </div>
          )}

          <Text size="caption">
            {DateTime.fromISO(resourceDetails.publicationDate).toFormat(
              "MMM dd, yyyy"
            )}
          </Text>

          <ReadingTime
            documents={richTexts.map((richText) => richText?.body?.json)}
          />
        </footer>
      </div>
    </div>
  );
}
