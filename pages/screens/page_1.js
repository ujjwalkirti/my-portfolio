import { DownCircleFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function Page_1() {
  const [hasNotScrolled, setHasNotScrolled] = useState(true);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  const [index, setIndex] = useState(0);

  const beginnerText = [" frontend Engineer.", " UI developer."];

  function checkForScrolling() {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        setHasNotScrolled(false);
        console.log(window.scrollY);
        // window.removeEventListener("scroll", null);
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
    <div className="h-screen bg-gray-600 bg-gradient-to-br from-yellow-300 via-yellow-600 to-red-400 w-full flex flex-col items-center justify-center ">
      <span className="flex divide-white z-40">
        {" "}
        <h1 className="font-bold text-white text-9xl w-1/2 text-right mr-4">
          I am Ujjwal Kirti
        </h1>
        <h1 className="font-medium text-7xl w-1/2 bg-white text-left border-4 pl-4 flex items-center">
          , and I am a{" "}
          {`${beginnerText[index].substring(0, subIndex)}${blink ? "|" : ""}`}
        </h1>
      </span>
      {hasNotScrolled && (
        <div className="absolute transition-all animate-bounce bottom-0 text-white text-2xl font-medium">
          <DownCircleFilled className="m-3" />
          Scroll down to know more
        </div>
      )}
    </div>
  );
}

export default Page_1;
