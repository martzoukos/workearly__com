import Person from "@/components/Person";
import ReadingTime from "@/components/ReadingTime";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { QueryItem } from "@workearly/api";
import Image from "next/image";
import Link from "next/link";
import styles from "./ArticleCard.module.scss";

type PropsType = {
  page: QueryItem["Page"];
};

export default function ArticleCard({ page }: PropsType) {
  const { resourceDetails, peopleDetails, readingTime, tags } =
    usePageResolver(page);

  if (!resourceDetails) {
    return null;
  }

  const category = tags.find((tag) =>
    tag?.id?.startsWith("articleCategory")
  )?.name;

  return (
    <Link href={page.slug ?? "/"} className={styles.root}>
      {resourceDetails.asset?.url && (
        <div className={styles.mediaWrapper}>
          <Image
            className={styles.media}
            src={resourceDetails.asset.url}
            alt=""
            width={resourceDetails.asset.width || 0}
            height={resourceDetails.asset.height || 0}
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
          {category && (
            <Text size="xsmall" className={styles.tag}>
              {category}
            </Text>
          )}

          {peopleDetails.asset?.url && (
            <Person
              imageUrl={peopleDetails.asset.url}
              name={peopleDetails.name || ""}
            />
          )}

          {/* <Text size="caption">
            {DateTime.fromISO(resourceDetails.publicationDate).toFormat(
              "MMM dd, yyyy"
            )}
          </Text> */}

          <ReadingTime time={readingTime} />
        </footer>
      </div>
    </Link>
  );
}
