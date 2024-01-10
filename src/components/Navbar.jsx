import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header id="navbar" className="fixed h-20 top-0 w-full py-3 z-10 backdrop-blur-sm ">
      <nav className="mx-auto flex w-full max-w-3xl flex-row items-center justify-between px-6">
        <ul className="flex items-center sm:flex justify-evenly gap-8 font-mono text-sm">
          <li>
            <a
              className="font-logo text-2xl font-medium "
              href="#main"
            >
              AD
            </a>
          </li>
          <li>
            <a
              className="transition hover:text-react-link-hover"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="transition hover:text-react-link-hover"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div>
          <button
            type="buttton"
            className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:bg-react-dark-bg"
            onClick={changeTheme}
          >
            {theme === "dark" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-5 text-orange-300"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            )}
            {theme === "light" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-5 text-slate-800"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
