import Button from "@/components/Button";
import useActionResolver from "@/hooks/useActionResolver";
import { QueryItem } from "@workearly/api";
import Link from "next/link";
import React, { act, PropsWithChildren } from "react";

type PropsType = PropsWithChildren<{
  action: QueryItem["Action"];
  className?: string;
}>;

function Action({ action, children }: PropsType) {
  let { color, variant } = useActionResolver(action);

  if (action?.external) {
    return (
      <Button
        asChild
        variant={variant || "Solid"}
        colorScheme={color || "Black"}
      >
        <a href={action?.external || "dwdkwop"}>{children}</a>
      </Button>
    );
  }
  if (action?.internal?.slug) {
    return (
      <Button
        asChild
        variant={variant || "Solid"}
        colorScheme={color || "Black"}
      >
        <Link href={action.internal.slug}>{children}</Link>
      </Button>
    );
  }

  return null;
}

export default Action;
