import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-16 items-center rounded-full bg-zinc-200 dark:bg-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span
        className={`absolute left-1 top-1 h-7 w-7 rounded-full bg-white dark:bg-zinc-900 shadow transition-transform ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      />
      <Sun className="absolute left-2 h-4 w-4 text-zinc-500" />
      <Moon className="absolute right-2 h-4 w-4 text-zinc-400" />
    </button>
  );
}
