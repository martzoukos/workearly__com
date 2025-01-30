import { useState, useEffect } from "react";

type PropsType = {
  src: string;
  className?: string;
};

export default function SvgRenderer({ src, className }: PropsType) {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch(src)
      .then((response) => response.text())
      .then((data) => setSvgContent(data))
      .catch((error) => console.error("Error fetching SVG:", error));
  }, [src]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgContent }}
      className={className}
    />
  );
}
