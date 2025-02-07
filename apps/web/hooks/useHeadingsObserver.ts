import { useEffect, useRef, useState } from "react";

type PropsType = {
  selectors: string;
  rootMargin?: string;
};

export default function useHeadingsObserver({
  selectors,
  rootMargin = "0px 0px -50% 0px",
}: PropsType) {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleObsever: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin,
    });

    const elements = document.querySelectorAll(selectors);
    elements.forEach((elem) => observer.current?.observe(elem));
    return () => observer.current?.disconnect();
  }, [selectors, rootMargin]);

  return { activeId };
}
