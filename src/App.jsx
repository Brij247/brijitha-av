import "./App.css";

import {
  DownloadIcon,
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  RocketIcon,
  SunIcon,
} from "@radix-ui/react-icons";

function App() {
  return (
    <>
      <div className="flex items-center justify-end gap-2">
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
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-start">
            <h1 className="text-3xl font-medium">Brijitha AV</h1>
            <h3 className="font-normal flex items-end italic">
              Frontend engineer 🚀
            </h3>
          </div>
          <p className="text-slate-500 text-left">
            {`I'm`} <span className="font-medium">Brijitha</span>, your friendly
            neighborhood front-end enthusiast with a passion for crafting
            captivating digital experiences. I enjoy building web applications,
            creating videos and gardening. Currently, {`I'm`} building
            <span className="font-medium"> Biblio-tracker</span>, an open-source
            plateform built with <span className="font-medium">Next.js </span>
            features!💻✨
          </p>
          <div className="flex items-center gap-2">
            <button className="rounded-md bg-gray-100 hover:bg-gray-50 p-2 flex items-center gap-2">
              <div>Hire me</div> <RocketIcon />
            </button>
            <button className="rounded-md bg-gray-100 hover:bg-gray-50 p-2 flex items-center gap-2">
              <div>Get resume</div> <DownloadIcon />
            </button>
          </div>
          <div className="flex gap-3">
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
          </div>
        </div>
        <img src={"./briji.png"} />
      </div>
    </>
  );
}

export default App;
