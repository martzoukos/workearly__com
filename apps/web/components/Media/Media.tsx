import { QueryItem } from "@workearly/api";
import { SvgRenderer } from "@workearly/svg";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image, { ImageProps } from "next/image";
import { ReactPlayerProps } from "react-player";
import styles from "./Media.module.scss";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type BaseProps = {
  asset: QueryItem["Asset"] | null | undefined;
  canHoldPlace?: boolean;
  imageProps?: Omit<ImageProps, "src" | "alt"> & { alt?: string };
  videoProps?: ReactPlayerProps;
  className?: string;
};

type PropsType = BaseProps &
  (
    | {
        aspectRatio: string;
        height?: never;
      }
    | {
        aspectRatio?: never;
        height: string;
      }
  );

export default function Media({
  asset,
  imageProps,
  videoProps,
  aspectRatio,
  height,
  canHoldPlace,
  className,
}: PropsType) {
  const style = {
    "--aspect-ratio": aspectRatio ?? "auto",
    "--height": height ?? "100%",
  } as React.CSSProperties;

  if (!asset) {
    if (canHoldPlace) {
      return (
        <div className={clsx(styles.mediaContainer, className)} style={style}>
          <Image
            src="/images/404.svg"
            fill={true}
            sizes="10vw"
            alt="Image not found"
            {...imageProps}
          />
        </div>
      );
    }
    return null;
  }

  if (asset?.contentType?.includes("image/")) {
    if (asset.contentType === "image/svg+xml") {
      return (
        <SvgRenderer
          src={asset.url || ""}
          className={clsx(styles.mediaContainer, className)}
          style={style}
        />
      );
    }

    return (
      <div className={clsx(styles.mediaContainer, className)} style={style}>
        <Image
          src={asset.url || ""}
          fill={true}
          sizes="10vw"
          alt={imageProps?.alt || asset.title || ""}
          {...imageProps}
        />
      </div>
    );
  } else if (asset?.contentType?.includes("video/")) {
    return (
      <div className={clsx(styles.mediaContainer, className)} style={style}>
        <ReactPlayer
          url={asset.url || ""}
          width="100%"
          height="100%"
          controls={true}
          {...videoProps}
        />
      </div>
    );
  }

  return null;
}
