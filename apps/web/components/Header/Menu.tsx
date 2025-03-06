import MenuCertificateCard from "@/components/_cards/MenuCertificateCard";
import MenuCourseCard from "@/components/_cards/MenuCourseCard";
import CardRenderer from "@/components/_renderers/CardRenderer";
import Button, { ButtonProps } from "@/components/Button";
import Text from "@/components/Text";
import { useContentful } from "@/stores/ContentfulStore";
import { ChevronDown, ChevronRight } from "@carbon/icons-react";
import { QueryItem, RelationshipMapTypeName } from "@workearly/api";
import clsx from "clsx";
import { DropdownMenu } from "radix-ui";
import { useState } from "react";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

export type LabelItem = {
  name: string;
  type: "label";
};

export type LinkItem = {
  name: string;
  to: string;
  variant?: ButtonProps["variant"];
  type: "link";
};

export type ReferenceItem = {
  name: string;
  referenceId: string;
  referenceType: RelationshipMapTypeName;
  type: "reference";
};

export type DecorativeItem = {
  name: string;
  to: string;
  referenceId: string;
  referenceType: RelationshipMapTypeName;
  type: "decorative";
};

export type NormalSubItem = {
  name: string;
  description: string;
  items: Array<LinkItem | DecorativeItem>;
  type: "normal-sub";
};

export type CategorySubItem = {
  name: string;
  description: string;
  itemGroups: Array<Array<LabelItem | LinkItem | ReferenceItem>>;
  type: "category-sub";
};

export type MenuType = {
  name: string;
  to?: string;
  variant?: ButtonProps["variant"];
  itemGroups: Array<
    Array<LabelItem | LinkItem | NormalSubItem | CategorySubItem>
  >;
};

type PropsType = {
  menu: MenuType;
};

export default function Menu({ menu }: PropsType) {
  const [activeSub, setActiveSub] = useState<
    MenuType["itemGroups"][number][number] | undefined
  >(undefined);
  const [activeSubItem, setActiveSubItem] = useState<
    NormalSubItem["items"][number] | undefined
  >(undefined);
  const { getReference } = useContentful();

  return (
    <DropdownMenu.Root key={menu.name}>
      <DropdownMenu.Trigger asChild>
        <Button aria-label={menu.name} variant={menu.variant ?? "Outlined"}>
          {menu.name}
          <ChevronDown />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={clsx(styles.content)}
          sideOffset={8}
          align="start"
        >
          <div className={styles.mainMenuContent}>
            {menu.itemGroups.map((group, index) => {
              const groupHasLabel = group.some((item) => item.type === "label");

              return (
                <div
                  key={index}
                  className={clsx(
                    styles.group,
                    groupHasLabel && styles.groupHasLabel
                  )}
                >
                  {group.map((item) => {
                    if (item.type === "normal-sub") {
                      return (
                        <DropdownMenu.Item key={item.name} asChild>
                          <Button
                            variant="MenuItem"
                            isFullWidth
                            size="medium"
                            colorScheme="Black"
                            className={clsx(styles.item, styles.menuItem)}
                            onMouseEnter={() => setActiveSub(item)}
                          >
                            {item.name}{" "}
                            <ChevronRight className={styles.itemChevron} />
                          </Button>
                        </DropdownMenu.Item>
                      );
                    } else if (item.type === "category-sub") {
                      return (
                        <DropdownMenu.Item key={item.name} asChild>
                          <Button
                            variant="MenuItem"
                            isFullWidth
                            size="medium"
                            colorScheme="Black"
                            className={clsx(styles.item, styles.menuItem)}
                            onMouseEnter={() => setActiveSub(item)}
                          >
                            {item.name}{" "}
                            <ChevronRight className={styles.itemChevron} />
                          </Button>
                        </DropdownMenu.Item>
                      );
                    }

                    return (
                      <MenuItem
                        key={item.name}
                        item={item}
                        onMouseEnter={() => setActiveSub(item)}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
          {activeSub && activeSub.type === "normal-sub" && (
            <div className={styles.subMenuContent}>
              <div>
                <DropdownMenu.Label
                  asChild
                  className={clsx(styles.label, styles.item)}
                >
                  <Text size="h5">{activeSub.name}</Text>
                </DropdownMenu.Label>
                {activeSub.items.map((subItem) => {
                  return (
                    <MenuItem
                      key={subItem.name}
                      item={subItem}
                      onMouseEnter={() => setActiveSubItem(subItem)}
                    />
                  );
                })}
              </div>
              {activeSubItem && activeSubItem.type === "decorative" && (
                <div className={styles.decorativeReference}>
                  {activeSubItem.referenceType === "Card" &&
                    getReference("Card", activeSubItem.referenceId) && (
                      <CardRenderer
                        card={
                          getReference(
                            "Card",
                            activeSubItem.referenceId
                          ) as QueryItem["Card"]
                        }
                      />
                    )}
                </div>
              )}
            </div>
          )}
          {activeSub && activeSub.type === "category-sub" && (
            <div className={styles.subMenuContent}>
              <div>
                <Text size="h4">{activeSub.name}</Text>
                <Text>{activeSub.description}</Text>

                <div className={styles.categoryColumns}>
                  {activeSub.itemGroups.map((group, index) => {
                    return (
                      <div key={index}>
                        {group.map((item) => {
                          if (item.type === "label") {
                            return (
                              <Text key={item.name} size="h6">
                                {item.name}
                              </Text>
                            );
                          }

                          if (item.type === "reference") {
                            if (item.referenceType === "Page") {
                              const page = getReference(
                                "Page",
                                item.referenceId
                              );

                              if (!page) {
                                return null;
                              }

                              if (page.variant === "Course") {
                                return (
                                  <MenuCourseCard key={item.name} page={page} />
                                );
                              } else if (page.variant === "Certificate") {
                                return (
                                  <MenuCertificateCard
                                    key={item.name}
                                    page={page}
                                  />
                                );
                              }
                            }

                            return null;
                          }

                          return <MenuItem key={item.name} item={item} />;
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
