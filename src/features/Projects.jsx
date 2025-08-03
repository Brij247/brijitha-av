const projectData = [
  {
    title: "Sleep with Pees",
    description:
      "A calming and interactive web application designed for people struggling with insomnia. cred:admin/admin",
    live: "https://brij247.github.io/sleep-with-pees",
    sourceCode: "https://github.com/Brij247/sleep-with-pees",
    features:
      "Spotify Integration, Scribble Space, Futuristic Notepad, To-Do List with Actions, Daily Activity Calendar, Interactive Form, Authentication",
    techStack:
      "React JS, React Router, Axios, Ant Design System, Spotify API, Vite",
  },
  {
    title: "Biblio tracker",
    description:
      "A calming and interactive web application designed for people struggling with insomnia.",
    live: "https://bibliotracker.netlify.app",
    sourceCode: "https://github.com/Brij247/biblio-tracker",
    features: "In progress",
    techStack: "Next JS, React JS, Ant Design System, Tailwind CSS, Next Auth ",
  },
  {
    title: "Hope",
    description:
      "A charity donation app which the users can make donations via razorpay,",
    live: "https://hope-xl.netlify.app",
    sourceCode: "https://github.com/Brij247/hopeful",
    features:
      "Payment gateway with razorpay, Authentication with Google provider",
    techStack: "Next JS, React JS, Next auth, Razorpay, Google provider, Axios",
  },
  {
    title: "Forte-records",
    description:
      "Forte-records is a music recording studio website where users can view the basic info about the details and functions of the studio.",
    live: "https://forte-rec.netlify.app",
    sourceCode: "https://github.com/Brij247/forte-records",
    features: "Mostly focusing on info transferring",
    techStack: "Next JS, React JS, Tailwind CSS",
  },
];

export const Projects = () => {
  return (
    <>
      <div className="text-2xl font-medium mb-3">Projects</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="p-6 border-2 border-gray-700 rounded-xl w-full flex flex-col gap-6 bg-gray-50"
          >
            <div
              className="flex justify-center cursor-pointer"
              onClick={() => {
                window.open(project.live, "_blank");
              }}
            >
              <iframe
                className="rounded-xl border border-gray-400 shadow-lg pointer-events-none"
                width="540"
                height="250"
                src={project.live}
                title="description"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
              ></iframe>
            </div>

            <div className="flex flex-col justify-start text-left gap-3">
              <div className="flex justify-between">
                <div className="text-xl font-semibold">{project.title}</div>
                <div className="flex gap-3">
                  <a
                    className="text-sky-600 underline"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go live
                  </a>
                  <a
                    className="text-sky-600 underline"
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source code
                  </a>
                </div>
              </div>
              <div className="text-gray-700">{project.description}</div>

              <div>
                <span className="font-semibold">Features: </span>
                {project.features}
              </div>

              <div>
                <span className="font-semibold">Tech Stack: </span>
                {project.techStack}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
