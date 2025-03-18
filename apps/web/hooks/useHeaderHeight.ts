import { useEffect, useRef } from "react";

export default function useHeaderHeight() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setHeaderHeight = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        document.documentElement.style.setProperty(
          "--header-height",
          `${rect.height}px`
        );
      }
    };

    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);

    return () => {
      window.removeEventListener("resize", setHeaderHeight);
    };
  }, []);

  return headerRef;
}
