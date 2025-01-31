import getRichTextResolver from "@/utils/getRichTextResolver";
import RichText from "@/components/RichText/RichText";
import Section from "@/components/Section/Section";
import UniqueComponent from "@/components/UniqueComponent/UniqueComponent";
import useCoursePageResolver from "../../hooks/useCoursePageResolver";

type PropsType = {
  item: ReturnType<typeof useCoursePageResolver>["mainItems"][number];
  className?: string;
};

export default function PageItem({ item, className }: PropsType) {
  if (item?.__typename === "Section") {
    return <Section section={item} className={className} />;
  } else if (item?.__typename === "ContentTypeRichText") {
    return (
      <RichText
        json={item.body?.json}
        className={className}
        resolver={getRichTextResolver(item)}
      />
    );
  } else if (item?.__typename === "UniqueComponent") {
    return <UniqueComponent uniqueComponent={item} className={className} />;
  }
}
