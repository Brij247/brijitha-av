import {
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  SunIcon,
} from "@radix-ui/react-icons";

export const Header = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      <a
        href="https://www.linkedin.com/in/brijithaav/"
        target="_blank"
        className="rounded-md bg-gray-100 hover:bg-gray-50 p-2"
      >
        <LinkedInLogoIcon />
      </a>
      <a
        href="mailto:brijithaav@gmail.com"
        className="rounded-md bg-gray-100 hover:bg-gray-50 p-2"
      >
        <EnvelopeOpenIcon />
      </a>
      <a
        className="rounded-md bg-gray-100 hover:bg-gray-50 p-2"
        href="https://github.com/Brij247"
        target="_blank"
      >
        <GitHubLogoIcon />
      </a>
      <button className="rounded-md bg-gray-100 hover:bg-gray-50 p-2">
        <SunIcon />
      </button>
    </div>
  );
};
