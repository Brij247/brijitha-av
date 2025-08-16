import {
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";

import { useDarkMode } from "../lib";

export const Header = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="flex items-center justify-end gap-2">
      <a
        href="https://www.linkedin.com/in/brijithaav/"
        target="_blank"
        className="rounded-md bg-gray-100 hover:bg-gray-50 p-2 dark:bg-gray-800"
      >
        <LinkedInLogoIcon />
      </a>
      <a
        href="mailto:brijithaav@gmail.com"
        className="rounded-md bg-gray-100 hover:bg-gray-50 p-2 dark:bg-gray-800"
      >
        <EnvelopeOpenIcon />
      </a>
      <a
        className="rounded-md bg-gray-100 hover:bg-gray-50 p-2 dark:bg-gray-800"
        href="https://github.com/Brij247"
        target="_blank"
      >
        <GitHubLogoIcon />
      </a>
      <button
        className="rounded-md bg-gray-100 hover:bg-gray-50 p-2 dark:bg-gray-800"
        onClick={toggleTheme}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};
