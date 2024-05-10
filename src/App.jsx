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
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button>
          <GitHubLogoIcon />
        </button>
        <button>
          <SunIcon />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <h1>Brijitha AV</h1>
          <h3>Frontend engineer</h3>
          <p
            style={{
              textAlign: "left",
            }}
          >
            {`I'm`}{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Brijitha
            </span>
            , your friendly neighborhood front-end enthusiast with a passion for
            crafting captivating digital experiences. I enjoy building web
            applications, creating videos and gardening. Currently, {`I'm`}{" "}
            building{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {" "}
              Biblio-traker
            </span>
            , an open-source plateform built with{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Next.js{" "}
            </span>
            features!💻✨
          </p>
          <button>
            Hire me{"  "}
            <RocketIcon />
          </button>
          <div>
            <button>
              <LinkedInLogoIcon />
            </button>
            <button>
              <EnvelopeOpenIcon />
            </button>
          </div>
        </div>
        <img src={"./briji.png"} />
        {/* <img src={"./src/briji.png"} /> */}
      </div>
    </>
  );
}

export default App;
