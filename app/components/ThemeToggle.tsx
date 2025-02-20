import { useDarkMode } from "../hooks/useDarkMode"; // Ensure this path is correct or update it to the correct path
import { Sun, Moon, Monitor } from "lucide-react"; // Importamos los iconos

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 bg-blue-700 dark:bg-blue-500 text-white dark:text-black rounded-lg flex items-center gap-2"
    >
      {theme === "light" ? (
        <>
          <Sun className="w-5 h-5" />
        </>
      ) : theme === "dark" ? (
        <>
          <Moon className="w-5 h-5" />
        </>
      ) : (
        <>
          <Monitor className="w-5 h-5" />
        </>
      )}
    </button>
  );
}