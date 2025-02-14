import Image from "next/image";
import styles from "./ArticleCard.module.scss";
import Text, { TextProps } from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import usePageResolver from "../../../hooks/usePageResolver";
import { DateTime } from "luxon";
import ReadingTime from "../../ReadingTime/ReadingTime";
import Person from "../../Person/Person";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const articleCardVariants = cva(styles.root, {
  variants: {
    behaviour: {
      normal: styles.root,
      wide: styles.wide,
    },
  },
  defaultVariants: {
    behaviour: "normal",
  },
});

interface PropsType extends VariantProps<typeof articleCardVariants> {
  page: QueryItem["Page"];
  className?: string;
}

export default function ArticleCard({
  page,
  className,
  behaviour = "normal",
}: PropsType) {
  const { resourceDetails, peopleDetails, readingTime } = usePageResolver(page);

  if (!resourceDetails) {
    return null;
  }

  let textSize: TextProps["size"];
  if (behaviour === "wide") {
    textSize = "h3";
  } else {
    textSize = "h5";
  }

  return (
    <div
      className={clsx(
        articleCardVariants({
          behaviour,
        }),
        className
      )}
    >
      {resourceDetails.asset?.url && (
<<<<<<< HEAD
        <Image
          src={resourceDetails.asset.url}
          width={resourceDetails.asset.width || 100}
          height={resourceDetails.asset.height || 100}
          alt={resourceDetails.name || ""}
          className={styles.media}
        />
=======
        <div className={styles.media}>
          <Image
            src={resourceDetails.asset.url}
            fill={true}
            alt={resourceDetails.name || ""}
            quality={100}
            sizes="30vw"
          />
        </div>
>>>>>>> 4e257ff3f869787d056153ee2ba13b632d09a064
      )}

      <div className={`${styles.content} `}>
        <header className={styles.header}>
          {resourceDetails.name && (
            <Text as="h5" size={textSize}>
              {resourceDetails.name}
            </Text>
          )}
          {resourceDetails.description && (
            <Text size="small">{resourceDetails.description}</Text>
          )}
        </header>

        <footer className={styles.footer}>
          <div className={styles.left}>
            <Text size="xsmall" className={styles.tag}>
              {resourceDetails.topics?.at(0)}
            </Text>

            {behaviour == "wide" && (
              <Text size="caption">
                {DateTime.fromISO(resourceDetails.publicationDate).toFormat(
                  "MMM dd, yyyy"
                )}
              </Text>
            )}
          </div>

          <div className={styles.right}>
            {peopleDetails.asset?.url && (
              <Person
                imageUrl={peopleDetails.asset.url}
                name={peopleDetails.name || ""}
              />
            )}

            <ReadingTime time={readingTime} />
          </div>
        </footer>
      </div>
    </div>
  );
}
