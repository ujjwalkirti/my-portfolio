import { FaHandPointDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Page_1() {
  const [hasNotScrolled, setHasNotScrolled] = useState(true);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  const [index, setIndex] = useState(0);

  const imageBackground = "main-wallpaper.jpg";

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
    <div
      className="h-screen bg-black w-full flex  flex-col"
      style={{
        backgroundImage: `url(${imageBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "content-box",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        {" "}
        <div className="flex flex-col text-white justify-center bg-white bg-opacity-40 p-4 rounded-lg">
          <p className=" text-5xl">Hello, I'm</p>
          <p className="font-bold text-7xl">Ujjwal Kirti</p>
          <p className=" text-5xl">Front-end Web Developer</p>
          <div className="flex justify-around w-full mt-4">
            {" "}
            <button className="text-black bg-white rounded-full p-2 cursor-pointer w-2/5 hover:text-white hover:bg-black font-bold">
              Hire Me!
            </button>
            <button className="border border-white rounded-full w-2/5  p-2 py-auto cursor-pointer font-bold hover:text-black">
              See my resume
            </button>
          </div>
        </div>
      </div>

      <p className="animate-bounce text-white justify-center items-center text-lg flex absolute bottom-0 text-center w-full">
        <FaHandPointDown />
        Scroll down to know more!
      </p>
    </div>
  );
}

export default Page_1;
