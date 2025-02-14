import Text from "@/components/Text/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import styles from "./PersonCard.module.scss";

type PropsType = {
  page: QueryItem["Page"];
  className?: string;
};

export default function PersonCard({ page, className }: PropsType) {
  const { peopleDetails } = usePageResolver(page);

  if (!peopleDetails) {
    return null;
  }

  return (
    <article className={clsx(styles.card, className)}>
      <div className={styles.content}>
        {peopleDetails.asset?.url && (
          <Image
            src={peopleDetails.asset.url}
            alt={peopleDetails.asset.title || peopleDetails.name || ""}
            width={237}
            height={277}
            className={styles.media}
          />
        )}

        <div className={styles.labelContainer}>
          <div className={styles.label}>
            {peopleDetails.name && <Text>{peopleDetails.name}</Text>}

            {peopleDetails.role && (
              <Text size="small">
                {peopleDetails.role}
                {peopleDetails.company && (
                  <>
                    , <br /> {peopleDetails.company}
                  </>
                )}
              </Text>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
