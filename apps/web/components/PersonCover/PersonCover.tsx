import Button from "@/components/Button";
import RichText from "@/components/RichText/RichText";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { ArrowLeft, Share } from "@carbon/icons-react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Text from "../Text/Text";
import styles from "./PersonCover.module.scss";

type PropsType = {
  className?: string;
};

export default function PersonCover({ className }: PropsType) {
  const { page } = useContentful();
  const { peopleDetails } = usePageResolver(page);

  return (
    <div className={clsx(styles.root, className)}>
      <Button
        asChild
        variant="Underlined"
        colorScheme="Black"
        className={styles.backButton}
        size="large"
      >
        <Link href="/mentors">
          <ArrowLeft /> Back to All Mentors
        </Link>
      </Button>

      <article className={styles.article}>
        <div className={styles.personCard}>
          <Text size="small" className={styles.cardTitle}>
            Workearly Mentor
          </Text>

          <div className={styles.cardContent}>
            {peopleDetails.asset?.url && (
              <div className={styles.cardMedia}>
                <Image
                  src={peopleDetails.asset.url}
                  alt={peopleDetails.asset.title || peopleDetails.name || ""}
                  width={198}
                  height={198}
                />
              </div>
            )}

            {page.tags && (
              <div className={styles.tagsContainer}>
                <Text size="small">Functional Expertise</Text>

                <div className={styles.tags}>
                  {page.tags.map((tag) => {
                    return (
                      <Button
                        as="span"
                        key={tag}
                        size="xsmall"
                        colorScheme="Black"
                        variant="Outlined"
                        className={styles.tag}
                      >
                        {tag}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
            {peopleDetails.linkedIn && (
              <Button
                asChild
                isFullWidth
                variant="Outlined"
                size="medium"
                colorScheme="Black"
              >
                <a
                  href={peopleDetails.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Share /> Linkedin
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className={styles.textContainer}>
          <Text size="h2">
            {peopleDetails.name}, {peopleDetails.role}, {peopleDetails.company}
          </Text>

          <RichText json={peopleDetails.text?.json} />
        </div>
      </article>
    </div>
  );
}
