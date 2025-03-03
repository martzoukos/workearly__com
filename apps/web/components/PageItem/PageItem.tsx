import RichText from "@/components/RichText/RichText";
import SectionRenderer from "@/components/SectionRenderer";
import UniqueComponent from "@/components/UniqueComponent/UniqueComponent";
import usePageResolver from "../../hooks/usePageResolver";

type PropsType = {
  item: ReturnType<typeof usePageResolver>["items"][number];
  className?: string;
};

export default function PageItem({ item, className }: PropsType) {
  if (item?.__typename === "Section") {
    return <SectionRenderer section={item} className={className} />;
  } else if (item?.__typename === "ContentTypeRichText") {
    return <RichText richText={item} className={className} />;
  } else if (item?.__typename === "UniqueComponent") {
    return <UniqueComponent uniqueComponent={item} className={className} />;
  }
}
