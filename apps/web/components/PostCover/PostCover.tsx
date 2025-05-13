import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import Person from "@/components/Person";
import ReadingTime from "@/components/ReadingTime";
import ShareMenu from "@/components/ShareMenu/ShareMenu";
import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { Share } from "@carbon/icons-react";
import { DateTime } from "luxon";
import Image from "next/image";
import { useState } from "react";
import styles from "./PostCover.module.scss";

export default function PostCover() {
  const { page } = useContentful();
  const { resourceDetails, peopleDetails, readingTime, tags } =
    usePageResolver(page);
  const [showShare, setshowShare] = useState(false);

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
            { name: page.name || "", href: `/${page.slug}` },
          ]}
          className={styles.breadcrumbs}
        />
        <div className={styles.content}>
          {tags.length > 0 && (
            <div className={styles.topics}>
              {tags.map((tag) => (
                <Button key={tag.id} variant="Outlined" size="xsmall">
                  {tag.name}
                </Button>
              ))}
            </div>
          )}
          <Text as="h1" className={styles.title}>
            {resourceDetails.name}
          </Text>
        </div>
        <div className={styles.publishingDetails}>
          {peopleDetails?.asset?.url && (
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
        <div className={styles.shareWrapper}>
          <Button
            variant="Outlined"
            size="medium"
            isFullWidth
            className={styles.shareButton}
            onClick={() => setshowShare((prev) => !prev)}
          >
            <Share />
            Share
          </Button>

          {showShare && <ShareMenu />}
        </div>
      </div>
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
    </section>
  );
}
