import React, { useState } from "react";
import styles from "./ExitPreview.module.scss";
import { useRouter } from "next/router";
import Button from "@/components/Button/Button";
import { Close } from "@carbon/icons-react";

export default function ExitPreview() {
  const [isClearing, setIsClearing] = useState(false);
  const router = useRouter();

  if (!router.isPreview) {
    return null;
  }

  return (
    <Button
      variant="Solid"
      colorScheme="Green"
      className={styles.root}
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
