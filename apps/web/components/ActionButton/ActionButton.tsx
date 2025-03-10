import Button, { ButtonProps } from "@/components/Button";
import { useViewport } from "@/components/Viewport";
import { QueryItem } from "@workearly/api";
import Link from "next/link";

type PropsType = {
  action: QueryItem["Action"];
  className?: string;
};

export default function ActionButton({ action, className }: PropsType) {
  const isUntilMd = useViewport({ showUntil: "md" });
  const isFullWidthInMobile = action.features?.includes("Full Width in Mobile");

  if (action?.external) {
    return (
      <Button
        asChild
        variant={action.variant as ButtonProps["variant"]}
        colorScheme={action.colorScheme as ButtonProps["colorScheme"]}
        isFullWidth={
          action.behaviour === "Flex" || (isFullWidthInMobile && isUntilMd)
        }
        className={className}
      >
        <a href={action.external}>{action.name}</a>
      </Button>
    );
  }
  if (action?.internal?.slug) {
    return (
      <Button
        asChild
        variant={action.variant as ButtonProps["variant"]}
        colorScheme={action.colorScheme as ButtonProps["colorScheme"]}
        isFullWidth={
          action.behaviour === "Flex" || (isFullWidthInMobile && isUntilMd)
        }
        className={className}
      >
        <Link href={action.internal.slug}>{action.name}</Link>
      </Button>
    );
  }

  return null;
}
