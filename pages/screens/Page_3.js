import { motion } from "framer-motion";

function Page_3() {
  return (
    <div className="h-auto w-screen flex flex-col bg-black">
      <h1 className="font-semibold text-7xl text-white m-4 text-center">
        My Projects 💻
      </h1>
      <ol>
        {/* Pomodoro timer projet */}
        <li className="mx-4">
          <div className="text-white m-5 flex flex-col bg-purple-500 bg-opacity-40 rounded-lg w-2/3 mx-auto p-4">
            <h3 className="text-3xl font-medium">Pomodoro Timer ⏳</h3>
            <p className="">(Based on Harry Potter theme)</p>

            <img
              className="rounded-lg my-6 object-contain mx-auto"
              src="/pomodoro-timer/Capture.png"
            />

            <motion.a
              whileTap={{ scale: 0.9 }}
              className="mx-auto cursor-pointer p-2 w-auto bg-white bg-opacity-70 font-bold rounded-lg text-purple-800 mb-3"
              href="https://nifty-volhard-fa38be.netlify.app/"
            >
              Check it Out! ✨
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.9 }}
              className="mx-auto cursor-pointer p-2 w-auto bg-white bg-opacity-70 font-bold rounded-lg text-purple-800"
              href="https://github.com/ujjwalkirti/pomodoro-timer-harry_potter-theme"
            >
              Github code! 📚
            </motion.a>
            <div className="mx-4">
              <p className="text-2xl font-semibold">Made with:</p>
              <div className="ml-3 flex bg-white bg-opacity-40 w-4/5 justify-evenly rounded-lg mt-2 p-3">
                <img
                  src="/html-css-js.png"
                  className="h-16 mr-4 bg-white p-3 shadow-xl rounded-lg"
                />
                <img
                  src="/tailwind.png"
                  className="h-16 mr-4 bg-white p-3 shadow-xl rounded-lg"
                />
                <img
                  src="/react.png"
                  className="h-16 mr-4 bg-white p-3 shadow-xl rounded-lg"
                />
                <img
                  src="/firebase.png"
                  className="h-16 mr-4 bg-white p-3 shadow-xl rounded-lg"
                />
              </div>
            </div>
          </div>
        </li>

        {/* Landing page design project */}
        <li className="mx-4">
          <div className="text-white m-5 flex flex-col bg-purple-500 bg-opacity-40 rounded-lg w-2/3 mx-auto p-4">
            <h3 className="text-3xl font-medium">Landing Page Design 📰</h3>
            <p className="text-center mt-4 text-3xl font-semibold shadow-lg w-auto mx-auto border px-3 py-1 rounded-lg">
              Full Screen view
            </p>
            <video controls className="w-full my-3">
              <source src="/landing page/Scroll Capture 2021-11-02 at 9.34.03 PM.webm" />
            </video>
            <p className="text-center mt-4 text-3xl font-semibold shadow-lg w-auto mx-auto border px-3 py-1 rounded-lg">
              Responsive Website
            </p>
            <video controls className="my-3 h-80">
              <source src="/landing page/Scroll Capture 2021-11-02 at 9.37.04 PM.webm" />
            </video>
            <motion.a
              whileTap={{ scale: 0.9 }}
              className="mx-auto cursor-pointer p-2 w-auto bg-white bg-opacity-70 font-bold rounded-lg text-purple-800 mb-3"
              href="https://infallible-shockley-9996db.netlify.app/"
            >
              Check it Out! ✨
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.9 }}
              className="mx-auto cursor-pointer p-2 w-auto bg-white bg-opacity-70 font-bold rounded-lg text-purple-800"
              href="https://github.com/ujjwalkirti/Furniture-Shop-landing-Page/tree/master"
            >
              Github code! 📚
            </motion.a>
            <div className="mx-4">
              <p className="text-2xl font-semibold">Made with:</p>
              <div className="ml-3 flex bg-white bg-opacity-40 w-2/5 justify-evenly rounded-lg mt-2 p-3">
                <img
                  src="/html-css-js.png"
                  className="h-16 mr-4 bg-white p-3 shadow-xl rounded-lg"
                />
                <img
                  src="/tailwind.png"
                  className="h-16 mr-4 bg-white p-3 shadow-xl rounded-lg"
                />
              </div>
            </div>
          </div>
        </li>

        {/* pricing component design project */}
        <li className="mx-4">
          <div className="text-white m-5 flex flex-col bg-purple-500 bg-opacity-40 rounded-lg w-2/3 mx-auto p-4">
            <h3 className="text-3xl font-medium">Pricing Component 🧩</h3>
            <img
              className="my-3 object-contain mx-auto rounded-lg shadow-lg"
              src="/pricing component/Capture.png"
            />
            <div className="flex flex-col">
              <a
                className="mx-auto cursor-pointer p-2 w-auto bg-white bg-opacity-70 font-bold rounded-lg text-purple-800 mb-3"
                href="https://confident-leavitt-de982c.netlify.app/"
              >
                Check it Out! ✨
              </a>
              <a
                className="mx-auto cursor-pointer p-2 w-auto bg-white bg-opacity-70 font-bold rounded-lg text-purple-800 mb-3"
                href="https://github.com/ujjwalkirti/Pricing-Component/tree/master"
              >
                Github code! 📚
              </a>
              <div className="mx-4">
                <p className="text-2xl font-semibold">Made with:</p>
                <div className="ml-3 flex bg-white bg-opacity-40 w-2/5 justify-evenly rounded-lg mt-2 p-3">
                  <img
                    src="/html-css-js.png"
                    className="h-16 mr-4 bg-white p-3 shadow-xl rounded-lg"
                  />
                  <img
                    src="/tailwind.png"
                    className="h-16 mr-4 bg-white p-3 shadow-xl rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Page_3;
