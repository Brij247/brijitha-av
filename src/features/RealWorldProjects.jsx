import { realWorldProjects } from "../config";

export const RealWorldProjects = () => {
  return (
    <>
      <div className="text-2xl font-medium mb-3">Projects</div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {realWorldProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 border-2 border-gray-700 rounded-xl w-full flex flex-col gap-6 bg-gray-50 dark:bg-gray-800 dark:text-white"
          >
            <div className="flex flex-col justify-start text-left gap-3">
              <div className="flex justify-between">
                <div className="text-xl font-semibold">{project.title}</div>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {project.description}
              </div>
              <div>
                <ul className="list-disc pl-5">
                  {project?.portfolioPoints?.map((item, index) => (
                    <li key={index}>{item.point}</li>
                  ))}
                </ul>
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
