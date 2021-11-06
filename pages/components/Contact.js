import { motion } from "framer-motion";
import { useState } from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/Firebase";

function Contact() {
  const [message, setMessage] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  return (
    <div className="border w-screen bg-white flex flex-col text-2xl items-center py-6">
      <p className="text-center  text-3xl font-semibold">
        Feel free to contact me anytime you want!
      </p>
      <div className="flex w-full justify-center items-center">
        <p>You can find me here:</p>
        <div className="flex w-1/3 justify-evenly text-4xl py-3">
          <a href="https://www.facebook.com/ujjwal.kirti.39/">
            <BsFacebook className="cursor-pointer text-blue-700" />
          </a>
          <a href="https://twitter.com/kirti_ujjwal">
            <BsTwitter className="cursor-pointer text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/ujjwal-kirti-38936818a/">
            <BsLinkedin className="cursor-pointer text-blue-700" />
          </a>
          <a href="mailto:kirti.chargers@gmail.com">
            <SiGmail className="cursor-pointer text-red-700" />
          </a>
        </div>
      </div>
      <p className="font-bold text-4xl my-3">Or</p>
      <div className=" flex flex-col w-3/5 items-center bg-red-700 bg-opacity-40 rounded-lg">
        <p className="my-3">Directly contact me here:</p>
        <textarea
          className="w-4/5 p-1"
          rows="3"
          cols="50"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          value={message}
        >
          Write a message for me!
        </textarea>
        <input
          type="text"
          placeholder="Enter your email"
          className="my-4 px-4 py-1 rounded-lg"
          required={true}
          value={senderEmail}
          onChange={(event) => {
            setSenderEmail(event.target.value);
          }}
        />
        <motion.button
          className="bg-red-700 text-white rounded-2xl p-2 mb-2"
          onClick={async function () {
            if (senderEmail !== "") {
              const docRef = await addDoc(collection(db, "messages"), {
                sender: senderEmail,
                message: message,
              });
              alert("Ujjwal will get back to you soon!");
              setMessage("");
              setSenderEmail("");
            } else {
              alert("Please provide your email as well!");
            }
          }}
        >
          Send Message!
        </motion.button>
      </div>
      <p className="mt-3">Made with ❤️ in India</p>
    </div>
  );
}

export default Contact;
