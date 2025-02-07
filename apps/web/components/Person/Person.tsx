import styles from "./Person.module.scss";
import Image from "next/image";
import Text, { TextProps } from "../Text/Text";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const personVariants = cva(styles.root, {
  variants: {
    size: {
      caption: styles.sizeCaption,
      small: styles.sizeSmall,
    },
  },
  defaultVariants: {
    size: "caption",
  },
});

interface PropsType extends VariantProps<typeof personVariants> {
  imageUrl: string;
  name: string;
  className?: string;
}

export default function Person({
  imageUrl,
  name,
  size = "caption",
  className,
}: PropsType) {
  let imageSize;
  let textSize: TextProps["size"];

  if (size === "caption") {
    imageSize = 20;
    textSize = "caption";
  } else if (size === "small") {
    imageSize = 50;
    textSize = "small";
  }

  return (
    <div
      className={clsx(
        personVariants({
          size,
        }),
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={imageSize}
        height={imageSize}
        className={styles.image}
      />
      <Text size={textSize}>{name}</Text>
    </div>
  );
}
