import { ColorSwitch } from "@carbon/icons-react";
import { useTheme } from "@workearly/theme";

type PropsType = {
  className?: string;
};

export default function ThemeSwitcher({ className }: PropsType) {
  const { rootTheme, setRootTheme } = useTheme();

  return (
    <button
      className={className}
      onClick={() => {
        setRootTheme(rootTheme === "dark" ? "light" : "dark");
      }}
    >
      <ColorSwitch />
    </button>
  );
}
