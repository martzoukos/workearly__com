import CompositeRenderer from "@/components/_renderers/CompositeRenderer";
import SectionRenderer from "@/components/_renderers/SectionRenderer";
import RichText from "@/components/RichText/RichText";
import usePageResolver from "@/hooks/usePageResolver";

type PropsType = {
  item: ReturnType<typeof usePageResolver>["items"][number];
  className?: string;
};

export default function PageItem({ item, className }: PropsType) {
  if (item?.__typename === "Section") {
    return <SectionRenderer section={item} className={className} />;
  } else if (item?.__typename === "ContentTypeRichText") {
    return <RichText richText={item} className={className} />;
  } else if (item.__typename === "Composite") {
    return <CompositeRenderer composite={item} />;
  }
}
