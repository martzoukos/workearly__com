import Button, { ButtonProps } from "@/components/Button";
import { useViewport } from "@/components/Viewport";
import { QueryItem } from "@workearly/api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

type PropsType = {
  action: QueryItem["Action"];
  className?: string;
};

export default function ActionButton({ action, className }: PropsType) {
  const isUntilMd = useViewport({ showUntil: "md" });
  const isFullWidthInMobile = action.features?.includes("Full Width in Mobile");
  const isGetInvoiceAction = action.features?.includes(
    "Special Action: Get Invoice"
  );

  if (isGetInvoiceAction) {
    return <InvoiceAction action={action} className={className} />;
  }

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

type InvoiceActionPropsType = {
  action: QueryItem["Action"];
  className?: string;
};

function InvoiceAction({ action, className }: InvoiceActionPropsType) {
  const router = useRouter();
  const isUntilMd = useViewport({ showUntil: "md" });
  const isFullWidthInMobile = action.features?.includes("Full Width in Mobile");
  const [invoiceUrl, setInvoiceUrl] = useState<string | null>(null);

  // useEffect(() => {
  //   async function getInvoiceUrl() {
  //     await fetch("/api/get-invoice-url", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         paymentIntentId: router.query.payment_intent,
  //       }),
  //     });
  //   }

  //   if (router.isReady) {
  //     if (!router.query.payment_intent) {
  //       router.push("/");
  //     } else {
  //       getInvoiceUrl();
  //     }
  //   }
  // }, [router]);

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
      <a href={invoiceUrl || "#"}>{action.name}</a>
    </Button>
  );
}
