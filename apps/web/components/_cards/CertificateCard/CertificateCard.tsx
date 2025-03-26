import Text from "@/components/Text/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./CertificateCard.module.scss";

type PropsType = {
  page: QueryItem["Page"];
  className?: string;
};

export default function CertificateCard({ page, className }: PropsType) {
  const { peopleDetails } = usePageResolver(page);

  if (!peopleDetails) {
    return null;
  }

  return (
    <Link href={page.slug || "/"} className={clsx(styles.card, className)}>
      {peopleDetails?.asset?.url && (
        <Image
          src={peopleDetails.asset.url}
          alt={peopleDetails.asset.title || peopleDetails.name || ""}
          width={141}
          height={100}
          style={{
            objectFit: "contain",
          }}
        />
      )}
      <div className={styles.content}>
        {peopleDetails.name && <Text size="h6">{peopleDetails.name}</Text>}
        {peopleDetails.shortDescription && (
          <Text>{peopleDetails.shortDescription}</Text>
        )}
      </div>
    </Link>
  );
}
