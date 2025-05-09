import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

const ProjectListData = [
  {
    title: "Ecommerce",
    tech: "NextJS",
    githubLink: "https://github.com/dhimanabhay/ecom-next",
    demoLink: "https://ecom-next-gilt.vercel.app/",
    description:
      "A full stack and simple Ecommerce website using NextJS and MongoDB.",
  },
  {
    // image: outfit,
    title: "Koho",
    tech: "ReactJS",
    githubLink: "https://github.com/dhimanabhay/koho",
    demoLink: "https://koho-bank.vercel.app",
    description: "A front end clone for KOHO banking made using reactjs.",
  },
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
  {
    // image: uber_clone,
    title: "Blog",
    tech: "NextJS",
    githubLink: "https://github.com/dhimanabhay/next-blog",
    demoLink: "https://github.com/dhimanabhay/next-blog",
    description:
      "A simple app using reactjs and react hooks which can help to plan your day.",
  },
  // {
  //   // image: uber_clone,
  //   title: "CGPA",
  //   tech: "ReactJS",
  //   githubLink: "https://github.com/dhimanabhay/grade_cal",
  //   demoLink: "https://dhimanabhay.github.io/grade_cal/calculator.html",
  //   description:
  //     "My first ever website which calculates cgpa. The simple, but the first building block for me",
  // },
];

const ProjectList = ({ closeList }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col w-full pt-20">
      <div
        className="fixed dark:fill-white pl-10 w-fit py-1 mb-2 cursor-pointer flex items-center underline decoration-react-link-hover underline-offset-4"
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
        <Link to="/" className="ml-2 font-mono ">
          back
        </Link>
      </div>
      <section id="projects" className="min-w-full pt-20 ">
        <ul className="flex flex-col mb-6 px-5 md:px-20 gap-y-5 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-8 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-6">
          {ProjectListData.map((project) => (
            <li className="min-w-[230px]">
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                <div className="flex justify-between bg-gray-200/40 dark:bg-card-dark-bg min-h-full flex-col items-start gap-4 rounded-3xl px-8 py-6 shadow-lg transition-shadow font-mono dark:text-slate-100 dark:shadow-zinc-900 hover:shadow-gray-400 hover:shadow-xl dark:hover:shadow-black/60">
                  <div className="mt-2 min-w-full flex-col">
                    <h3 className="font-semibold text-lg ">{project.title}</h3>
                    <h3 className="text pt-1 text-react-link-hover  ">
                      {project.tech}
                    </h3>
                    <p className="text-sm my-2 dark:text-gray-300 min-w-full">
                      {project.description}
                    </p>
                    <div className="flex flex-row gap-[10%] justify-center mt-5">
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
      </section>
    </div>
  );
};

export default ProjectList;
