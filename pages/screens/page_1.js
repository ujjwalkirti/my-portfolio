import { DownCircleFilled } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Page_1() {
  const [hasNotScrolled, setHasNotScrolled] = useState(true);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  const [index, setIndex] = useState(0);

  const beginnerText = ["a frontend Engineer.", "an UI developer."];

  function checkForScrolling() {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        setHasNotScrolled(false);
        // console.log(window.scrollY);
        window.removeEventListener("scroll", null);
      }
    });
  }

  useEffect(() => {
    checkForScrolling();
  }, []);
  useEffect(() => {
    if (index === beginnerText.length) return;

    if (
      subIndex === beginnerText[index].length + 1 &&
      index !== beginnerText.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === beginnerText[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="h-screen bg-gray-600 bg-gradient-to-br from-yellow-300 via-yellow-600 to-red-400 w-full flex  flex-col">
      <div>
        <motion.img
          src="/me.jpg"
          className="h-40 w-40 rounded-full  my-16"
          animate={{ rotate: 360, x: 700 }}
          transition={{ duration: 1 }}
        />
      </div>
      <span className=" z-40 text-left w-auto mx-auto lg:flex-row">
        {" "}
        <h1 className="font-bold text-white sm:text-5xl lg:text-7xl xl:text-9xl pr-4 mb-4">
          I am Ujjwal Kirti
        </h1>
        <h1 className="font-bold text-white sm:text-3xl lg:text-5xl xl:text-7xl">
          {" "}
          and I am{" "}
          {`${beginnerText[index].substring(0, subIndex)}${blink ? "|" : ""}`}
        </h1>
      </span>
      {hasNotScrolled && (
        <div className="absolute transition-all animate-bounce bottom-0 text-white text-2xl font-medium flex justify-center items-center w-full">
          <DownCircleFilled className="m-3" />
          Scroll down to know more
        </div>
      )}
    </div>
  );
}

export default Page_1;
