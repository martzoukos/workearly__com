import SectionRenderer from "@/components/SectionRenderer";
import Text from "@/components/Text";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import { Tabs as RadixTabs } from "radix-ui";
import { useState } from "react";
import styles from "./TabsAlt.module.scss";

type PropsType = {
  sections: QueryItem["Section"][];
  className?: string;
};

export default function Tabs({ sections, className }: PropsType) {
  const [activeTab, setActiveTab] = useState(sections.at(0)?.sys.id);

  return (
    <RadixTabs.Root
      value={activeTab}
      onValueChange={setActiveTab}
      className={clsx(styles.root, className)}
    >
      {sections.map((section) => (
        <RadixTabs.Content key={section.sys.id} value={section.sys.id}>
          <SectionRenderer section={section} />
        </RadixTabs.Content>
      ))}
      <nav>
        <RadixTabs.List className={styles.list}>
          {sections.map((section) => (
            <RadixTabs.Trigger
              key={section.sys.id}
              value={section.sys.id}
              asChild
            >
              <button className={styles.trigger}>
                <Text as="h4">{section.title}</Text>
                <Text as="small">{section.supertitle}</Text>
              </button>
            </RadixTabs.Trigger>
          ))}
        </RadixTabs.List>
      </nav>
    </RadixTabs.Root>
  );
}
