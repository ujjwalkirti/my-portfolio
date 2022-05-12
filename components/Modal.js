import {
  GithubFilled,
  LinkedinFilled,
  MailFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import React from "react";

function Modal() {
  const [showModal, setShowModal] = React.useState(true);

  const fieldStyle =
    "flex m-2 bg-white text-black w-1/2 p-2 rounded-md mx-auto items-center justify-center";
  const linkStyle =
    "flex text-xl font-semibold bg-blue-500 text-white p-2 w-52 items-center justify-around m-2 rounded-md mx-auto hover:shadow-md cursor-pointer";

  return (
    <div
      className={`${
        showModal ? "flex z-40 items-center h-screen w-screen fixed" : "hidden"
      }`}
    >
      <div className="bg-gradient-to-br mx-auto rounded-lg from-red-400 to-yellow-600 p-1 w-1/2">
        <div className="bg-black text-white h-4/5 p-2 rounded-lg w-full  relative">
          <p
            className="absolute right-0 top-0 text-blue-500 mr-2 font-bold bg-white rounded-full flex items-center justify-center h-6 w-6 m-2 cursor-pointer hover:shadow-md hover:bg-blue-500 hover:text-white"
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </p>
          <div className={fieldStyle}>
            <MailFilled className="mr-2" />
            <p>kirti.chargers@gmail.com</p>
          </div>
          <div className={fieldStyle}>
            <WhatsAppOutlined className="mr-2" />
            <p>+91-7909076540</p>
          </div>
          <div className=" my-6">
            {" "}
            <p className="text-center font-bold text-xl">About Me!</p>
            <p className="w-4/5 mx-auto text-lg">
              I am an aspriring frontend developer looking for internship
              oppotunities.
              <br /> I am comfortable working with JavaScript frameworks for
              both web and mobile.
              <br /> As far as my education is considered, I am currently
              pursuing Bachlors of Technology in Civil Engineering department at
              NIT, Surat.
            </p>
          </div>
          <a
            className={linkStyle}
            href="https://www.linkedin.com/in/ujjwal-kirti-38936818a/"
          >
            LinkedIn Profile <LinkedinFilled />
          </a>
          <a className={linkStyle} href="https://github.com/ujjwalkirti">
            Github Profile <GithubFilled />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
