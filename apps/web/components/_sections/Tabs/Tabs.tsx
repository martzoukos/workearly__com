import SectionRenderer from "@/components/_renderers/SectionRenderer";
import Button from "@/components/Button/Button";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import { Tabs as RadixTabs } from "radix-ui";
import { useState } from "react";
import styles from "./Tabs.module.scss";

type PropsType = {
  actions: QueryItem["Action"][];
  sections: QueryItem["Section"][];
  className?: string;
};

export default function Tabs({ sections, actions, className }: PropsType) {
  const [activeTab, setActiveTab] = useState(sections.at(0)?.sys.id);

  return (
    <RadixTabs.Root
      value={activeTab}
      onValueChange={setActiveTab}
      className={clsx(styles.root, className)}
    >
      <nav className={styles.nav}>
        <RadixTabs.List className={styles.list}>
          {sections.map((section) => (
            <RadixTabs.Trigger
              key={section.sys.id}
              value={section.sys.id}
              asChild
            >
              <Button
                variant={activeTab === section.sys.id ? "Solid" : "Outlined"}
                colorSchemes={{
                  light: activeTab === section.sys.id ? "Green" : "Black",
                  dark: activeTab === section.sys.id ? "Green" : "White",
                }}
              >
                {section.title}
              </Button>
            </RadixTabs.Trigger>
          ))}
        </RadixTabs.List>
        {actions.length > 0 && (
          <div className={styles.actions}>
            {actions.map((action) => (
              <Button key={action.sys.id} variant="Outlined">
                {action.name}
              </Button>
            ))}
          </div>
        )}
      </nav>
      {sections.map((section) => (
        <RadixTabs.Content key={section.sys.id} value={section.sys.id}>
          <SectionRenderer section={section} />
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}
