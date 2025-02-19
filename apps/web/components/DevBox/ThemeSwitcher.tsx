import Button from "@/components/Button/Button";
import { ColorSwitch } from "@carbon/icons-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { resolvedTheme, forcedTheme, setTheme } = useTheme();

  return (
    <Button
      size="xsmall"
      disabled={forcedTheme !== undefined}
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      Switch to {resolvedTheme === "dark" ? "Light" : "Dark"} Mode
      <ColorSwitch />
    </Button>
  );
}
