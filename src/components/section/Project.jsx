// import outfit from "../components/assets/outfit.png";
// import tesla_clone from "../components/assets/tesla_clone.png";
// import uber_clone from "../components/assets/uber_clone.jpg";

import { Link } from "react-router-dom";

const ProjectData = [
  {
    // image: outfit,
    title: "Koho",
    tech: "ReactJS",
    githubLink: "https://github.com/dhimanabhay/koho",
    demoLink: "https://koho-bank.vercel.app",
    description: "A front end clone for KOHO banking made using reactjs.",
  },
  {
    // image: tesla_clone,
    title: "SpaceX",
    tech: "ReactJS",
    githubLink: "https://github.com/dhimanabhay/spacex",
    demoLink: "https://spacex-rocket.vercel.app",
    description:
      "A SpaceX clone created using reactJS, react folder management and routes.",
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

const Project = () => {
  return (
    <>
      <section
        id="projects"
        className="flex flex-col justify-between px-5 pt-20 md:w-[720px] lg:w-[920px]"
      >
        <h2 className="text-2xl mb-4 font-bold font-mono dark:text-slate-100">
          Projects
        </h2>
        <ul className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ProjectData.map((project) => (
            <li>
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                <div className="flex justify-between bg-gray-200/40 dark:bg-card-dark-bg min-h-[225px] flex-col items-start gap-4 rounded-3xl px-8 py-6 shadow-lg transition-shadow font-mono dark:text-slate-100 dark:shadow-zinc-900/50 hover:shadow-gray-400/50 hover:shadow-xl dark:hover:shadow-zinc-900">
                  <div className="mt-6">
                    <h2 className="font-semibold text-xl ">{project.title}</h2>
                    <h3 className="text pt-1 text-react-link-hover">
                      {project.tech}
                    </h3>
                    <p className="h-[60px] md:h-[100px] text-text-dark ">
                      {project.description}
                    </p>
                    <div className="flex flex-row gap-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer transition hover:text-react-link-hover underline underline-offset-[6px]"
                      >
                        Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer transition hover:text-react-link-hover underline underline-offset-[6px]"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 underline decoration-react-link-hover underline-offset-4 cursor-pointer">
          <Link to="/project_list">Show All</Link>
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
    </>
  );
};

export default Project;
