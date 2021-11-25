import { motion } from "framer-motion";
const tech_collection = [
  {
    name: "HTML,CSS & JavaScript",
    imgSrc: "/html-css-js.png",
  },
  {
    name: "React Library",
    imgSrc: "/react.png",
  },
  {
    name: "React-icons",
    imgSrc: "/react-icons.png",
  },
  {
    name: "Redux",
    imgSrc: "/redux.png",
  },
  {
    name: "Tailwind CSS",
    imgSrc: "/tailwind.png",
  },
  {
    name: "Firebase",
    imgSrc: "/firebase.png",
  },
  {
    name: "NodeJS",
    imgSrc: "/nodejs.png",
  },
];
const projects = [
  {
    name: "Netflix-clone",
    emoji: "🍿",
    byLine:
      "Built a clone of popular movie-streaming website Netflix using React JavaScript library.",
    githubCode: "https://github.com/ujjwalkirti/netflix-clone",
    actualUrl: "",
    imageUrl:
      "https://user-images.githubusercontent.com/64329707/125893357-b15939bf-3ca0-43b1-8637-a75cc564b791.png",
    techStack: ["HTML,CSS & JavaScript", "React Library", "Redux", "Firebase"],
  },
  {
    name: "Pomodoro Timer",
    emoji: "⏳",
    byLine: "(Based on Harry Potter theme)",
    githubCode: "https://github.com/ujjwalkirti/netflix-clone",
    actualUrl: "https://nifty-volhard-fa38be.netlify.app/",
    imageUrl: "/pomodoro-timer/Capture.png",
    techStack: [
      "HTML,CSS & JavaScript",
      "React Library",
      "Tailwind CSS",
      "Firebase",
    ],
  },
  {
    name: "Pricing Component",
    emoji: "🧩",
    byLine: "",
    githubCode: "https://github.com/ujjwalkirti/Pricing-Component/tree/master",
    actualUrl: "https://confident-leavitt-de982c.netlify.app/",
    imageUrl: "/pricing component/Capture.png",
    techStack: ["HTML,CSS & JavaScript", "Tailwind CSS"],
  },
];

function Page_3() {
  return (
    <div className="h-auto w-full flex flex-col bg-gradient-to-br from-pink-500 via-yellow-600 to-red-600">
      <h1 className="font-semibold text-7xl text-white m-4 text-center w-full">
        My Projects
      </h1>
      <div className="grid w-full grid-cols-3">
        {projects.map((project) => (
          <div className="text-white m-5 flex flex-col bg-purple-500 bg-opacity-70 shadow-xl rounded-lg mx-4 mx-auto p-4 h-auto">
            <h3 className="text-3xl font-medium">
              {project.name} {project.emoji}
            </h3>
            <p className="">{project.byLine}</p>

            <img
              className="rounded-lg my-6 object-contain mx-auto"
              src={project.imageUrl}
            />
            <motion.a
              whileTap={{ scale: 0.9 }}
              className="mx-auto cursor-pointer p-2 w-auto bg-white bg-opacity-70 font-bold rounded-lg text-purple-800"
              href={project.githubCode}
            >
              Github code!
            </motion.a>
            {project.actualUrl !== "" && (
              <motion.a
                whileTap={{ scale: 0.9 }}
                className="mx-auto cursor-pointer p-2 w-auto bg-white bg-opacity-70 font-bold rounded-lg text-purple-800 mt-1"
                href={project.actualUrl}
              >
                View live!
              </motion.a>
            )}

            <div className="mx-4">
              <p className="text-2xl font-semibold">Made with:</p>
              <div className="ml-3 flex bg-white bg-opacity-40 w-auto justify-evenly rounded-lg mt-2 p-3">
                {tech_collection.map((tech) => {
                  project.techStack.map((projectTech) => {
                    if (tech.name === projectTech) {
                      console.log(tech.imgSrc);
                      return (
                        <img
                          src={tech.imgSrc}
                          className="h-16 mr-4 bg-white p-3 shadow-xl rounded-lg"
                        />
                      );
                    } else {
                      return null;
                    }
                  });
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page_3;
