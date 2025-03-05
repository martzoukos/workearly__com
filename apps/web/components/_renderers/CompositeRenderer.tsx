import Default from "@/components/_composites/Default";
import Tabs from "@/components/_composites/Tabs";
import TabsAlt from "@/components/_composites/TabsAlt";
import useCompositeResolver from "@/hooks/useCompositeResolver";
import { QueryItem } from "@workearly/api";

type PropsType = {
  composite: QueryItem["Composite"];
};

export default function CompositeRenderer({ composite }: PropsType) {
  const { variant, spacing } = useCompositeResolver(composite);

  if (variant === "Tabs") {
    return <Tabs composite={composite} />;
  } else if (variant === "Tabs Alt") {
    return <TabsAlt composite={composite} />;
  } else if (variant === "Default") {
    return <Default composite={composite} spacing={spacing} />;
  }

  return null;
}
