import Button from "@/components/Button/Button";
import { Close } from "@carbon/icons-react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ExitPreview() {
  const [isClearing, setIsClearing] = useState(false);
  const router = useRouter();

  if (!router.isPreview) {
    return null;
  }

  return (
    <Button
      size="xsmall"
      onClick={async () => {
        setIsClearing(true);
        await fetch("/api/exit-preview");
        router.reload();
      }}
    >
      {isClearing ? (
        "Exiting..."
      ) : (
        <>
          Exit Preview <Close />
        </>
      )}
    </Button>
  );
}
