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

function Page_2() {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-screen h-auto my-3">
      <div className="h-auto w-auto shadow-xl flex flex-col items-center">
        <h1 className="font-semibold text-4xl p-3">My Tech-Stack 🛠️</h1>
        <div className="m-3 px-2 grid md:grid-cols-4 lg:grid-cols-6 sm:grid-cols-2">
          {tech_collection.map((object) => {
            return (
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="m-2"
              >
                <img
                  src={object.imgSrc}
                  className="h-40 w-40 object-contain shadow-md mb-3 p-3"
                />
                <h2 className="text-center font-medium mb-3">{object.name}</h2>
              </motion.span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page_2;
