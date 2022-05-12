import { FaHandPointDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

function Page_1() {
  const [showModal, setshowModal] = useState(false);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  const [index, setIndex] = useState(0);

  const imageBackground = "main-wallpaper.jpg";

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
          <p className=" text-5xl">Front-end Developer</p>
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
            <button
              onClick={() => {}}
              className="border border-white rounded-full w-2/5  p-2 py-auto cursor-pointer font-bold hover:text-black"
            >
              See my resume
            </button>
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
