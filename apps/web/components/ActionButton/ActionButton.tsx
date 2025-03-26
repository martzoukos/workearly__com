import Button, { ButtonProps } from "@/components/Button";
import { useViewport } from "@/components/Viewport";
import { QueryItem } from "@workearly/api";
import { ThemeType } from "@workearly/theme";
import Link from "next/link";
import CourseAction from "./CourseAction";
import InvoiceAction from "./InvoiceAction";

type PropsType = {
  action: QueryItem["Action"];
  className?: string;
  colorSchemes?: {
    [key in ThemeType]?: ButtonProps["colorScheme"];
  };
};

export default function ActionButton({
  action,
  className,
  colorSchemes,
}: PropsType) {
  const isUntilMd = useViewport({ showUntil: "md" });
  const isFullWidthInMobile = action.features?.includes("Full Width in Mobile");

  if (action.dynamicActionType === "Go to Associated Course") {
    return <CourseAction action={action} className={className} />;
  }

  if (action.dynamicActionType === "Get Invoice") {
    return <InvoiceAction action={action} className={className} />;
  }

  if (action?.external) {
    return (
      <Button
        asChild
        variant={action.variant as ButtonProps["variant"]}
        colorScheme={action.colorScheme as ButtonProps["colorScheme"]}
        colorSchemes={colorSchemes}
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
        colorSchemes={colorSchemes}
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
