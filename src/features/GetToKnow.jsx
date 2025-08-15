import { DownloadIcon, RocketIcon } from "@radix-ui/react-icons";

export const GetToKnow = () => {
  return (
    <div className="flex gap-3">
      <button className="rounded-md bg-gray-100 hover:bg-gray-50 p-2 flex items-center gap-2 dark:bg-gray-900">
        <div>Hire me</div> <RocketIcon />
      </button>
      <button className="rounded-md bg-gray-100 hover:bg-gray-50 p-2 flex items-center gap-2 dark:bg-gray-900">
        <div>Get resume</div> <DownloadIcon />
      </button>
    </div>
  );
};
