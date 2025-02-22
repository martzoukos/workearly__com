import Button, { ButtonProps } from "@/components/Button";
import { QueryItem } from "@workearly/api";
import Link from "next/link";

type PropsType = {
  action: QueryItem["Action"];
  className?: string;
};

export default function ActionButton({ action, className }: PropsType) {
  if (action?.external) {
    return (
      <Button
        asChild
        variant={action.variant as ButtonProps["variant"]}
        colorScheme={action.colorScheme as ButtonProps["colorScheme"]}
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
        className={className}
      >
        <Link href={action.internal.slug}>{action.name}</Link>
      </Button>
    );
  }

  return null;
}
