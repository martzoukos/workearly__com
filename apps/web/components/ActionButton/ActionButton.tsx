import Button, { ButtonProps } from "@/components/Button";
import { useViewport } from "@/components/Viewport";
import { Launch } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import { ThemeType } from "@workearly/theme";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

type InvoiceActionPropsType = {
  action: QueryItem["Action"];
  className?: string;
};

function InvoiceAction({ action, className }: InvoiceActionPropsType) {
  const router = useRouter();
  const isUntilMd = useViewport({ showUntil: "md" });
  const isFullWidthInMobile = action.features?.includes("Full Width in Mobile");
  const [receiptUrl, setReceiptUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReceiptUrl() {
      const response = await fetch("/api/get-receipt-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentIntentId: router.query.payment_intent,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setReceiptUrl(data.receiptUrl);
      }
    }

    if (router.isReady) {
      if (!router.query.payment_intent) {
        router.push("/");
      } else {
        fetchReceiptUrl();
      }
    }
  }, [router]);

  return (
    <Button
      asChild
      variant={action.variant as ButtonProps["variant"]}
      colorScheme={action.colorScheme as ButtonProps["colorScheme"]}
      isFullWidth={
        action.behaviour === "Flex" || (isFullWidthInMobile && isUntilMd)
      }
      className={className}
      disabled={!receiptUrl}
      isLoading={!receiptUrl}
    >
      <a href={receiptUrl || "#"} target="_blank" rel="noreferrer">
        {action.name} <Launch />
      </a>
    </Button>
  );
}
