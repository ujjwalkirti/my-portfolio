import { DownCircleFilled } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

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
    <div className="h-auto bg-black w-full flex  flex-col">
      <Navbar />
      <div className="flex justify-center">
        {" "}
        <img
          src="/front page images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
          className=" w-2/5 object-contain m-3"
        />
        <div className="flex flex-col text-white justify-center">
          <p className="text-gray-400 text-5xl">Hello, I'm</p>
          <p className="font-bold text-7xl">Ujjwal Kirti</p>
          <p className="text-gray-400 text-5xl">Front-end Web Developer</p>
          <div className="flex flex-col w-2/5 m-2">
            {" "}
            <button className="text-black bg-white rounded-full p-2 my-2 cursor-pointer">
              Hire Me!
            </button>
            <button className="border border-white rounded-full p-2 py-auto cursor-pointer">
              See my resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page_1;
