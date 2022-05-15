import { FaHandPointDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

function Page_1() {
  const [showModal, setshowModal] = useState(false);

  const imageBackground = "main-wallpaper.webp";

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
      <div className="flex flex-col justify-center w-2/5 h-screen">
        {" "}
        <div className="flex flex-col text-white justify-center bg-white bg-opacity-40 p-4 rounded-lg">
          <p className=" text-5xl">Hello, I'm Ujjwal Kirti</p>
        </div>
        <div className="justify-center bg-white bg-opacity-40 p-4 rounded-lg mt-4">
          <p className=" text-2xl text-white">
            I am a Front-end Developer based in India.
          </p>
          <div className="flex justify-around w-full mt-4">
            {" "}
            <button
              onClick={() => {
                setshowModal(!showModal);
              }}
              className="text-black bg-white rounded-full p-2 cursor-pointer w-2/5 hover:text-white hover:bg-black font-bold"
            >
              Hire Me!
            </button>
            <a
              href="https://drive.google.com/file/d/1KB1v-m9_QG0X27MA4Yo-5npyzXsTg2o1/view?usp=sharing"
              target="_blank"
              onClick={() => {}}
              className="border border-white rounded-full w-2/5  p-2 py-auto cursor-pointer text-center font-bold text-black hover:text-white hover:bg-black"
            >
              See my resume
            </a>
          </div>
        </div>
      </div>
      {showModal && <Modal />}

      <p className="animate-bounce text-white justify-center items-center text-lg flex absolute bottom-0 text-center w-full">
        <FaHandPointDown />
        Scroll down to know more!
      </p>
    </div>
  );
}

export default Page_1;
