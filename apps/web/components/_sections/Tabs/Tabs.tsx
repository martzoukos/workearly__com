import { QueryItem } from "@workearly/api";
import { Tabs as RadixTabs } from "radix-ui";
import styles from "./Tabs.module.scss";
import clsx from "clsx";
import Button from "@/components/Button/Button";
import { useState } from "react";

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
                colorScheme={activeTab === section.sys.id ? "Green" : "White"}
              >
                {section.title}
              </Button>
            </RadixTabs.Trigger>
          ))}
        </RadixTabs.List>
        {actions.length > 0 && (
          <div className={styles.actions}>
            {actions.map((action) => (
              <Button
                key={action.sys.id}
                variant="Outlined"
                colorScheme="White"
              >
                {action.name}
              </Button>
            ))}
          </div>
        )}
      </nav>
      {sections.map((section) => (
        <Content key={section.sys.id} section={section} />
      ))}
    </RadixTabs.Root>
  );
}

type ContentPropsType = {
  section: QueryItem["Section"];
};

function Content({ section }: ContentPropsType) {
  return (
    <RadixTabs.Content className="TabsContent" value="tab1">
      <p className="Text">
        Make changes to your account here. Click save when you're done.
      </p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Name
        </label>
        <input className="Input" id="name" defaultValue="Pedro Duarte" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Username
        </label>
        <input className="Input" id="username" defaultValue="@peduarte" />
      </fieldset>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "flex-end",
        }}
      >
        <button className="Button green">Save changes</button>
      </div>
    </RadixTabs.Content>
  );
}
