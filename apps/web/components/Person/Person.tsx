import styles from "./Person.module.scss";
import Image from "next/image";
import Text from "../Text/Text";

type PropsType = {
  imageUrl: string;
  name: string;
};

export default function Person({ imageUrl, name }: PropsType) {
  return (
    <div className={styles.root}>
      <Image
        src={imageUrl}
        alt={name}
        width={20}
        height={20}
        className={styles.image}
      />
      <Text size="caption">{name}</Text>
    </div>
  );
}
