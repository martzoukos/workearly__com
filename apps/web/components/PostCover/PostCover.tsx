import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import Person from "@/components/Person";
import ReadingTime from "@/components/ReadingTime";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { Share } from "@carbon/icons-react";
import { DateTime } from "luxon";
import Image from "next/image";
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
              <Button key={topic} variant="Outlined" size="small">
                {topic}
              </Button>
            ))}
          </div>
          <Text as="h1">{resourceDetails.name}</Text>
        </div>
        <div className={styles.publishingDetails}>
          {peopleDetails.asset?.url && (
            <Person
              imageUrl={peopleDetails.asset.url}
              name={peopleDetails.name || ""}
            />
          )}
          <Text size="caption">
            Publised on{" "}
            {DateTime.fromISO(resourceDetails.publicationDate).toFormat(
              "d MMM yyyy"
            )}
          </Text>
          <ReadingTime time={readingTime} />
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
    </section>
  );
}
