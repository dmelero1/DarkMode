import { useDarkMode } from "../hooks/useDarkMode";
import ThemeToggle from "~/components/ThemeToggle";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md w-full">
      <div className="w-[500px] max-w-[100vw] p-4">
        <h1 className="text-5xl text-[var(--color-main-header-light)] dark:text-[var(--color-main-header-dark)]">
          <span className="underline decoration-[var(--color-primary-light)] dark:decoration-[var(--color-primary-dark)]">
            User
          </span>{" "}
          Persona
        </h1>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;