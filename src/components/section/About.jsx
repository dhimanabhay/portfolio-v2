export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-between w-full px-5 md:w-[720px] lg:w-[920px]"
    >
      <div className="">
        <h1 className="text-3xl mb-3 font-bold font-mono dark:text-slate-100">
          Hi,I'm Abhay
        </h1>
        <p className="dark:text-gray-300 mb-4 ">
          Welcome. I'm a web developer and designer from Vancouver, Canada. I
          use React to build stuff, which you can see below. I also have
          experience in C++ and data analysis using Python. I hold BSc CS from
          Simon Fraser University
        </p>
      </div>
      <div>
        <ul className="flex flex-row gap-4">
          <li className="transition ease-in-out text-sm cursor-pointer border px-2 py-1 border-gray-950 rounded hover:text-white hover:bg-react-link-hover hover:border-react-link-hover dark:text-white dark:border-white">
            <a
              href="https://www.linkedin.com/in/abhay-dhiman10/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="transition ease-in-out text-sm cursor-pointer border px-2 py-1 border-gray-950 rounded hover:bg-orange-700 hover:border-orange-700 hover:text-white  dark:text-white dark:border-white">
            <a
              href="https://github.com/dhimanabhay"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
