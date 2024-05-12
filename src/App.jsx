import "./App.css";

import {
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
        <button className="rounded-md bg-gray-100 hover:bg-gray-50 p-2">
          <GitHubLogoIcon />
        </button>
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
          </div>
          <div className="flex gap-3">
            <button className="rounded-md bg-gray-100 hover:bg-gray-50 p-2">
              <LinkedInLogoIcon />
            </button>
            <button className="rounded-md bg-gray-100 hover:bg-gray-50 p-2">
              <EnvelopeOpenIcon />
            </button>
          </div>
        </div>
        <img src={"./briji.png"} />
      </div>
    </>
  );
}

export default App;
