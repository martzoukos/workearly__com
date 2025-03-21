import { QueryItem } from "@workearly/api";
import { SvgRenderer } from "@workearly/svg";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image, { ImageProps } from "next/image";
import { ReactPlayerProps } from "react-player";
import styles from "./Media.module.scss";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

type PropsType = {
  asset: QueryItem["Asset"] | null | undefined;
  canHoldPlace?: boolean;
  imageProps?: Omit<ImageProps, "src" | "alt"> & { alt?: string };
  videoProps?: ReactPlayerProps;
  className?: string;
  aspectRatio?: string;
  height?: string;
  style?: React.CSSProperties;
};

export default function Media({
  asset,
  imageProps,
  videoProps,
  aspectRatio,
  height,
  canHoldPlace,
  className,
  style,
}: PropsType) {
  const resolvedStyle = {
    "--aspect-ratio": aspectRatio ?? "auto",
    "--height": height ?? "initial",
    ...style,
  } as React.CSSProperties;

  if (!asset?.url) {
    if (canHoldPlace) {
      return (
        <div
          className={clsx(
            styles.mediaContainer,
            styles.imageContainer,
            className
          )}
          style={resolvedStyle}
        >
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
          src={asset.url}
          className={clsx(
            styles.mediaContainer,
            styles.svgContainer,
            className
          )}
          style={resolvedStyle}
        />
      );
    }

    return (
      <div
        className={clsx(
          styles.mediaContainer,
          styles.imageContainer,
          className
        )}
        style={resolvedStyle}
      >
        <Image
          src={asset.url}
          fill={true}
          sizes="10vw"
          alt={imageProps?.alt || asset.title || ""}
          {...imageProps}
        />
      </div>
    );
  } else if (asset?.contentType?.includes("video/")) {
    return (
      <div
        className={clsx(
          styles.mediaContainer,
          styles.videoContainer,
          className
        )}
        style={resolvedStyle}
      >
        <ReactPlayer
          url={asset.url}
          width="100%"
          height="100%"
          controls={true}
          {...videoProps}
        />
      </div>
    );
  } else if (asset?.contentType?.includes("application/json")) {
    return (
      <div
        className={clsx(
          styles.mediaContainer,
          styles.lottieContainer,
          className
        )}
        style={resolvedStyle}
      >
        <LottiePlayer autoplay loop src={asset.url} />
      </div>
    );
  }

  return null;
}
