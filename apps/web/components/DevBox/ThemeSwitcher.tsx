import Button from "@/components/Button/Button";
import { ColorSwitch } from "@carbon/icons-react";
import { useTheme } from "@workearly/theme";

export default function ThemeSwitcher() {
  const { rootTheme, setRootTheme } = useTheme();

  return (
    <Button
      size="xsmall"
      onClick={() => {
        setRootTheme(rootTheme === "dark" ? "light" : "dark");
      }}
    >
      Switch to {rootTheme === "dark" ? "Light" : "Dark"} Mode
      <ColorSwitch />
    </Button>
  );
}
