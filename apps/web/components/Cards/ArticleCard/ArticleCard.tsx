import Image from "next/image";
import styles from "./ArticleCard.module.scss";
import Text from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import usePageResolver from "../../../hooks/usePageResolver";
import { DateTime } from "luxon";
import { ClockIcon } from "@workearly/icons";

type PropsType = {
  page: QueryItem["Page"];
};

export default function ArticleCard({ page }: PropsType) {
  const { resourceDetails, peopleDetails } = usePageResolver(page);

  return (
    <div className={styles.root}>
      {page.asset?.url && (
        <div className={styles.media}>
          <Image
            src={page.asset.url}
            fill={true}
            alt={page.name || ""}
            quality={100}
          />
        </div>
      )}

      <div className={styles.content}>
        <header className={styles.header}>
          <Text as="h5">{page?.name}</Text>
          <Text size="small">
            Discover how to transition from teaching to tech with our tailored
            data science programs. Learn essential skills and strategies to land
            your first role.
          </Text>
        </header>

        <footer className={styles.footer}>
          <Text size="xsmall" className={styles.tag}>
            {resourceDetails?.topics?.at(0)}
          </Text>

          {peopleDetails && (
            <div className={styles.person}>
              <Image
                src="/profile-card.png"
                alt=""
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

          <div className={styles.timeToRead}>
            <ClockIcon />
            <Text size="caption">14 mins</Text>
          </div>
        </footer>
      </div>
    </div>
  );
}
