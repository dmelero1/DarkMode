import ThemeToggle from "~/components/ThemeToggle";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md w-full">
      <div className="w-[500px] max-w-[100vw] p-4">
        <h1 className="text-5xl text-black dark:text-white">
          <span className="underline decoration-blue-500 dark:decoration-blue-300 text-black dark:text-white">
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
