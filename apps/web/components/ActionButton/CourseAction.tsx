import Button, { ButtonProps } from "@/components/Button";
import { useViewport } from "@/components/Viewport";
import { useContentful } from "@/stores/ContentfulStore";
import { QueryItem } from "@workearly/api";
import Link from "next/link";

type PropsType = {
  action: QueryItem["Action"];
  className?: string;
};

export default function CourseAction({ action, className }: PropsType) {
  const isUntilMd = useViewport({ showUntil: "md" });
  const isFullWidthInMobile = action.features?.includes("Full Width in Mobile");
  const { page } = useContentful();
  const linkedEntry = page.linkedFrom?.entryCollection?.items.at(0);

  if (linkedEntry?.__typename === "Section") {
    const linkedPageSlug = linkedEntry.linkedFrom?.pageCollection?.items
      .filter((item) => item?.variant === "Course")
      .at(0)?.slug;

    if (linkedPageSlug) {
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
          <Link href={linkedPageSlug}>{action.name}</Link>
        </Button>
      );
    }
  }

  return null;
}
