import MenuCertificateCard from "@/components/_cards/MenuCertificateCard";
import MenuCourseCard from "@/components/_cards/MenuCourseCard";
import Text from "@/components/Text";
import { useContentful } from "@/stores/ContentfulStore";
import { CategorySubItemType, isDefined } from "@workearly/api";
import { DropdownMenu } from "radix-ui";
import styles from "./CategorySubMenu.module.scss";
import MenuItem from "./MenuItem";

type PropsType = {
  menu: CategorySubItemType;
  isOpen?: boolean;
};

export default function CategorySubMenu({ menu, isOpen }: PropsType) {
  const { getReferences } = useContentful();

  return (
    <div className={styles.root} data-state-open={isOpen}>
      <div>
        <header className={styles.header}>
          <Text size="h5">{menu.name}</Text>
          <Text>{menu.description}</Text>
        </header>

        <div className={styles.columns}>
          {menu.itemGroups.map((group, index) => {
            const referenceItems = group.items.filter(
              (item) => item.type === "reference"
            );
            const pages = getReferences(
              "Page",
              referenceItems.map((item) => item.referenceId)
            )
              .filter(isDefined)
              .filter(
                (page) =>
                  page.variant &&
                  ["Course", "Certificate"].includes(page.variant)
              );

            return (
              <div
                key={index}
                className={styles.column}
                style={
                  {
                    "--cards-count": pages.length,
                  } as React.CSSProperties
                }
              >
                <Text size="h6">{group.name}</Text>
                {group.items.map((item) => {
                  if (item.type === "reference") {
                    if (item.referenceType === "Page") {
                      const page = pages.find(
                        (page) => page.sys.id === item.referenceId
                      );

                      if (!page) {
                        return null;
                      }

                      if (page.variant === "Course") {
                        return <MenuCourseCard key={item.name} page={page} />;
                      } else if (page.variant === "Certificate") {
                        return (
                          <MenuCertificateCard key={item.name} page={page} />
                        );
                      }
                    }

                    return null;
                  }

                  return (
                    <DropdownMenu.Item key={item.name} asChild>
                      <MenuItem item={item} />
                    </DropdownMenu.Item>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
