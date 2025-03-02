import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import Media from "@/components/Media";
import Person from "@/components/Person";
import ReadingTime from "@/components/ReadingTime";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { Share } from "@carbon/icons-react";
import { DateTime } from "luxon";
import styles from "./PostCover.module.scss";

export default function PostCover() {
  const { page } = useContentful();
  const { resourceDetails, peopleDetails, readingTime } = usePageResolver(page);

  if (!resourceDetails) {
    return null;
  }

  return (
    <section className={styles.root}>
      <div className={styles.contentWrapper}>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: page.name || "" },
          ]}
          className={styles.breadcrumbs}
        />
        <div className={styles.content}>
          <div className={styles.topics}>
            {resourceDetails.topics?.map((topic) => (
              <Button key={topic} variant="Outlined" size="xsmall">
                {topic}
              </Button>
            ))}
          </div>
          <Text as="h1" className={styles.title}>
            {resourceDetails.name}
          </Text>
        </div>
        <div className={styles.publishingDetails}>
          {peopleDetails.asset?.url && (
            <Person
              imageUrl={peopleDetails.asset.url}
              name={peopleDetails.name || ""}
              className={styles.author}
            />
          )}
          <Text size="caption" className={styles.publishDate}>
            Publised on{" "}
            {DateTime.fromISO(resourceDetails.publicationDate).toFormat(
              "d MMM yyyy"
            )}
          </Text>
          <ReadingTime time={readingTime} className={styles.readingTime} />
        </div>
        <Button
          variant="Outlined"
          size="medium"
          isFullWidth
          className={styles.shareButton}
        >
          <Share />
          Share
        </Button>
      </div>
      {resourceDetails.asset?.url && (
        <Media
          asset={resourceDetails.asset}
          className={styles.media}
          height="25rem"
          imageProps={{
            sizes: "600px",
          }}
        />
      )}
    </section>
  );
}
