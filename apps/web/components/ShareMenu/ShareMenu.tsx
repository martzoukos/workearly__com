import Text from "@/components/Text";
import styles from "./ShareMenu.module.scss";
import { Link, LogoFacebook, LogoLinkedin, LogoX } from "@carbon/icons-react";
import { useState } from "react";
import clsx from "clsx";

type PropsType = {
  className?: string;
};

export default function ShareMenu({ className }: PropsType) {
  const [copied, setCopied] = useState(false);

  const shareOnFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
    window.open(facebookShareUrl, "_blank");
  };

  const shareOnX = () => {
    const xShareUrl = `https://twitter.com/intent/tweet?url=${window.location.href}`;
    window.open(xShareUrl, "_blank");
  };

  const shareOnLinkedIn = () => {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`;
    window.open(linkedInShareUrl, "_blank");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.item} onClick={copyToClipboard}>
        <Link size={24} />
        <Text>{copied ? "Link Copied!" : "Copy Link"}</Text>
      </div>
      <div className={styles.item} onClick={shareOnFacebook}>
        <LogoFacebook size={24} />
        <Text>Share on Facebook</Text>
      </div>
      <div className={styles.item} onClick={shareOnX}>
        <LogoX size={24} />
        <Text>Share on X</Text>
      </div>
      <div className={styles.item} onClick={shareOnLinkedIn}>
        <LogoLinkedin size={24} />
        <Text>Share on LinkedIn</Text>
      </div>
    </div>
  );
}
