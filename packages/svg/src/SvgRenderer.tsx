import { ComponentPropsWithoutRef, useEffect, useState } from "react";

type PropsType = {
  src: string;
} & ComponentPropsWithoutRef<"div">;

export default function SvgRenderer({ src, ...props }: PropsType) {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch(src)
      .then((response) => response.text())
      .then((data) => setSvgContent(data))
      .catch((error) => console.error("Error fetching SVG:", error));
  }, [src]);

  return <div dangerouslySetInnerHTML={{ __html: svgContent }} {...props} />;
}
