import Text from "@/components/Text";
import usePageResolver from "@/hooks/usePageResolver";
import { QueryItem } from "@workearly/api";
import Image from "next/image";
import Link from "next/link";
import styles from "./MenuCertificateCard.module.scss";

type PropsType = {
  page: QueryItem["Page"];
};

export default function MenuCertificateCard({ page }: PropsType) {
  const { peopleDetails } = usePageResolver(page);

  if (!peopleDetails) {
    return null;
  }

  return (
    <Link href={page.slug || "/"} className={styles.root}>
      {peopleDetails?.asset?.url && (
        <Image
          src={peopleDetails.asset.url}
          alt={peopleDetails.asset.title || peopleDetails.name || ""}
          width={60}
          height={60}
          style={{
            objectFit: "cover",
          }}
        />
      )}

      <div>
        <Text>{page.name}</Text>
        <Text size="caption">
          {peopleDetails.shortDescription?.substring(0, 48)}...
        </Text>
      </div>
    </Link>
  );
}
