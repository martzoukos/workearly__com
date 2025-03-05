import Tabs from "@/components/_sections/Tabs";
import TabsAlt from "@/components/_sections/TabsAlt";
import useCompositeResolver from "@/hooks/useCompositeResolver";
import { QueryItem } from "@workearly/api";

type PropsType = {
  composite: QueryItem["Composite"];
};

export default function CompositeRenderer({ composite }: PropsType) {
  const { variant } = useCompositeResolver(composite);

  if (variant === "Tabs") {
    return <Tabs composite={composite} />;
  } else if (variant === "Tabs Alt") {
    return <TabsAlt composite={composite} />;
  }

  return null;
}
