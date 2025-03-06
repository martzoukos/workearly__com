import MenuCertificateCard from "@/components/_cards/MenuCertificateCard";
import MenuCourseCard from "@/components/_cards/MenuCourseCard";
import Button from "@/components/Button";
import Text from "@/components/Text";
import { ChevronDown, ChevronRight } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import { Logo } from "@workearly/svg";
import { useState } from "react";
import styles from "./Header.module.scss";

type PropsType = {
  uniqueComponent: QueryItem["UniqueComponent"];
};

export default function Header({ uniqueComponent }: PropsType) {
  const [subMenu, setSubMenu] = useState(false);
  const [subMenuAdvanced, setSubMenuAdvanced] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.startNav}>
        <Logo />
        <div className={styles.buttonsContainer}>
          <Button
            variant="Outlined"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            Learn <ChevronDown />
          </Button>

          {showMenu && (
            <nav
              className={styles.navigation}
              onMouseLeave={() => setShowMenu((prev) => !prev)}
            >
              <div>
                <div className={styles.menuMainItem}>
                  <div className={styles.mainMenu}>
                    <Text size="h5" className={styles.menuTitle}>
                      By Goal
                    </Text>
                    <div
                      className={styles.menuItem}
                      onMouseEnter={() => setSubMenu(true)}
                      onMouseLeave={() => setSubMenu(false)}
                    >
                      <Text size="small">HR</Text>
                      <ChevronRight />
                    </div>
                  </div>
                </div>
                <div className={styles.menuMainItem}>
                  <div className={styles.mainMenu}>
                    <div
                      className={styles.menuItem}
                      onMouseEnter={() => setSubMenuAdvanced(true)}
                      onMouseLeave={() => setSubMenuAdvanced(false)}
                    >
                      <Text size="small">Data Science</Text>
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              </div>

              {subMenu && (
                <div
                  className={styles.submenu}
                  onMouseEnter={() => setSubMenu(true)}
                  onMouseLeave={() => setSubMenu(false)}
                >
                  <Text size="h5" className={styles.menuTitle}>
                    By Goal
                  </Text>
                  <div className={styles.menuItem}>
                    <Text size="small">HR</Text>
                    <ChevronRight />
                  </div>
                </div>
              )}

              {subMenuAdvanced && (
                <div
                  className={styles.submenuAdanced}
                  onMouseEnter={() => setSubMenuAdvanced(true)}
                  onMouseLeave={() => setSubMenuAdvanced(false)}
                >
                  <div className={styles.menuHeader}>
                    <Text size="h5" className={styles.menuTitle}>
                      Data Science
                    </Text>
                    <Text size="small" className={styles.menuDescription}>
                      Data Science is an interdisciplinary field which utilizes
                      scientific methods, algorithms, and data insights to
                      extract meaning and drive informed decision-making across
                      industries.
                    </Text>
                  </div>

                  <div className={styles.menuFooter}>
                    <div className={styles.cards}>
                      <Text>Courses</Text>
                      <MenuCourseCard />
                      <MenuCourseCard />
                      <MenuCourseCard />
                      <MenuCourseCard />
                    </div>

                    <div className={styles.cards}>
                      <Text>Certificate</Text>

                      <MenuCertificateCard />
                      <MenuCertificateCard />
                      <MenuCertificateCard />
                      <MenuCertificateCard />
                    </div>
                  </div>
                </div>
              )}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
