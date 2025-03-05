import Media from "@/components/Media";
import Person from "@/components/Person";
import ReadingTime from "@/components/ReadingTime";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { QueryItem } from "@workearly/api";
import { Themed } from "@workearly/theme";
import { DateTime } from "luxon";
import Link from "next/link";
import styles from "./ArticleCard.module.scss";

type PropsType = {
  page: QueryItem["Page"];
};

export default function ArticleCard({ page }: PropsType) {
  const { resourceDetails, peopleDetails, readingTime } = usePageResolver(page);

  if (!resourceDetails) {
    return null;
  }

  return (
    <Themed asChild className={styles.root} isInverted={true}>
      <Link href={page.slug || "/"}>
        {resourceDetails.asset?.url && (
          <Media
            aspectRatio="14 / 6"
            asset={resourceDetails.asset}
            imageProps={{
              alt: resourceDetails.name || "",
              quality: 100,
              sizes: "30vw",
            }}
            className={styles.media}
          />
        )}

        <div className={styles.content}>
          <header className={styles.header}>
            {resourceDetails.name && (
              <Text as="h5">{resourceDetails.name}</Text>
            )}
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
      </Link>
    </Themed>
  );
}
