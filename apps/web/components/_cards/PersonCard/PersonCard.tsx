import Media from "@/components/Media";
import Text from "@/components/Text";
import { useViewport } from "@/components/Viewport";
import usePageResolver from "@/hooks/usePageResolver";
import { QueryItem } from "@workearly/api";
import { Frame } from "@workearly/svg";
import clsx from "clsx";
import styles from "./PersonCard.module.scss";

type PropsType = {
  page: QueryItem["Page"];
  className?: string;
};

export default function PersonCard({ page, className }: PropsType) {
  const { peopleDetails } = usePageResolver(page);
  const isUntilMd = useViewport({ showUntil: "md" });

  if (!peopleDetails) {
    return null;
  }

  return (
    <article className={clsx(styles.root, className)}>
      <div className={styles.content}>
        {peopleDetails.asset && (
          <Media
            asset={peopleDetails.asset}
            imageProps={{
              alt: peopleDetails.asset.title || peopleDetails.name || "",
              sizes: "600px",
            }}
            aspectRatio="auto"
          />
        )}

        <div className={styles.labelContainer}>
          <div className={styles.label}>
            <Frame />

            {peopleDetails.name && (
              <Text
                size={isUntilMd ? "caption" : "p"}
                className={styles.personName}
              >
                {peopleDetails.name}
              </Text>
            )}
            {peopleDetails.role && (
              <Text
                size={isUntilMd ? "caption" : "small"}
                className={styles.personRole}
              >
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
