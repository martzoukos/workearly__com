import Text from "@/components/Text/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./AltCertificateCard.module.scss";

type PropsType = {
  page: QueryItem["Page"];
  className?: string;
};

export default function AltCertificateCard({ page, className }: PropsType) {
  const { peopleDetails } = usePageResolver(page);

  return (
    <Link href={page.slug || "/"} className={clsx(styles.card, className)}>
      {peopleDetails?.asset?.url && (
        <div className={styles.imageContainer}>
          <Image
            src={peopleDetails.asset.url}
            alt={peopleDetails.asset.title || peopleDetails.name || ""}
            width={192}
            height={192}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      )}
      <div className={styles.content}>
        {peopleDetails.name && <Text size="h6">{peopleDetails.name}</Text>}
      </div>
    </Link>
  );
}
