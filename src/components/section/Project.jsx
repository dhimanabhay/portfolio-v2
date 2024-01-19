// import outfit from "../components/assets/outfit.png";
// import tesla_clone from "../components/assets/tesla_clone.png";
// import uber_clone from "../components/assets/uber_clone.jpg";

import { useState } from "react";

const ProjectData = [
  {
    // image: outfit,
    title: "Outfit",
    tech: "ThreeJS",
    githubLink: "https://github.com/dhimanabhay/Outfit",
    demoLink: "https://outfit3d.vercel.app",
    description:
      "A t-shirt design website which uses ThreeJS, 3D shirt model and file-upload for design.",
  },
  {
    // image: tesla_clone,
    title: "SpaceX",
    tech: "ReactJS",
    githubLink: "https://github.com/dhimanabhay/spacex",
    demoLink: "https://spacex-rocket.vercel.appp",
    description: "A SpaceX clone created using reactJS, react folder management and routes.",
  },
  {
    // image: uber_clone,
    title: "Uber",
    tech: "React Native",
    githubLink: "https://github.com/dhimanabhay/Uber",
    demoLink: "https://github.com/dhimanabhay/Uber",
    description:
      "An uber clone app which uses react native, redux and google api to book rides.",
  },
  {
    // image: uber_clone,
    title: "To Do",
    tech: "ReactJS",
    githubLink: "https://github.com/dhimanabhay/To-Do",
    demoLink: "https://do-me.vercel.app",
    description:
      "A simple app using reactjs and react hooks which can help to plan your day.",
  },
];

const ProjectList = ({ closeList }) => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-between w-3/4 pt-20 sm:w-[720px]"
    >
      <div
        className="dark:fill-white w-fit py-1 mb-2 cursor-pointer flex items-center underline decoration-react-link-hover underline-offset-4"
        onClick={closeList}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <text className="ml-2 font-mono">back</text>
      </div>

      {/* <h2 className="text-xl mb-4 font-bold font-mono dark:text-slate-100">
        All Projects
      </h2> */}
      <ul className="mb-6">
        {ProjectData.map((project) => (
          <li>
            <a href={project.demoLink} target="_blank" rel="noreferrer">
              <div className="flex dark:bg-[rgb(33,35,42)] flex-col items-start rounded-3xl font-mono dark:text-slate-100">
                <div className="my-4">
                  <h3 className="font-semibold text-lg ">{project.title}</h3>
                  <p className="text-sm  text-gray-500">
                    {project.tech}
                  </p>
                  <p className="text-sm pb-2 sm:py-0 text-gray-500">{project.description}</p>
                  <div className="flex flex-row gap-4 text-sm">
                        <a href={project.demoLink} target="_blank" rel="noreferrer" className="cursor-pointer transition hover:text-react-link-hover">Demo</a>
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="cursor-pointer transition hover:text-react-link-hover">Code</a>
                      </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Project = () => {
  const [projectList, setProjectList] = useState(false);

  const toggleProjectList = () => {
    setProjectList(!projectList);
    console.log(projectList);
  };

  return (
    <>
      {!projectList ? (
        <section
          id="projects"
          className="flex flex-col justify-between w-3/4 pt-20 sm:w-[720px]"
        >
          <h2 className="text-2xl mb-4 font-bold font-mono dark:text-slate-100">
            Projects
          </h2>
          <ul className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ProjectData.map((project) => (
              <li>
                <a href={project.demoLink} target="_blank" rel="noreferrer">
                  <div className="flex justify-between dark:bg-[rgb(33,35,42)] min-h-[225px] flex-col items-start gap-4 rounded-3xl px-8 py-6 shadow-lg transition-shadow font-mono dark:text-slate-100 dark:shadow-zinc-900/50 hover:shadow-gray-400/50 dark:hover:shadow-zinc-900">
                    <div className="mt-6">
                      <h3 className="font-semibold text-lg ">
                        {project.title}
                      </h3>
                      <h3 className="text-sm pt-1 text-react-link-hover">
                        {project.tech}
                      </h3>
                      <p className="text-sm pt-4 h-[80px] text-gray-500 ">
                        {project.description}
                      </p>
                      <div className="flex flex-row gap-4 ">
                        <a href={project.demoLink} target="_blank" rel="noreferrer" className="cursor-pointer transition hover:text-react-link-hover">Demo</a>
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="cursor-pointer transition hover:text-react-link-hover">Code</a>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div
            onClick={toggleProjectList}
            className="flex items-center gap-2 underline decoration-react-link-hover underline-offset-4 cursor-pointer"
          >
            <text>Show All</text>
            <svg
              className="dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </div>
        </section>
      ) : (
        <ProjectList closeList={toggleProjectList} />
      )}
    </>
  );
};

export default Project;
