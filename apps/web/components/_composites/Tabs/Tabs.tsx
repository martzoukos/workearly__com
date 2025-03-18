import SectionRenderer from "@/components/_renderers/SectionRenderer";
import ActionButton from "@/components/ActionButton";
import Button from "@/components/Button/Button";
import useCompositeResolver from "@/hooks/useCompositeResolver";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import { Tabs as RadixTabs } from "radix-ui";
import { useState } from "react";
import styles from "./Tabs.module.scss";

type PropsType = {
  composite: QueryItem["Composite"];
  className?: string;
};

export default function Tabs({ composite, className }: PropsType) {
  const { getReferences } = useCompositeResolver(composite);
  const sections = getReferences("Section");
  const actions = getReferences("Action");

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
              <ActionButton key={action.sys.id} action={action} />
            ))}
          </div>
        )}
      </nav>
      {sections.map((section) => (
        <RadixTabs.Content key={section.sys.id} value={section.sys.id}>
          <SectionRenderer section={section} className={styles.childSection} />
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}
