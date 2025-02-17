import Button from "@/components/Button/Button";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitcher.module.scss";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="Solid"
      colorScheme={theme === "dark" ? "Black" : "White"}
      className={styles.root}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      Switch to {theme}
    </Button>
  );
}
