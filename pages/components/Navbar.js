import {
  TwitterOutlined,
  LinkedinFilled,
  MailOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

function Navbar() {
  const navoptions = ["Facebook", "Twitter", "Linkedin"];
  return (
    <motion.div className={`flex w-screen absolute text-white justify-end`}>
      <div className="flex w-2/5 justify-evenly mx-auto p-2 font-medium  mr-2 text-2xl items-center ">
        <motion.p
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mr-3 mt-1 border p-1 cursor-pointer"
        >
          What I know?
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mr-3 mt-1 border p-1 cursor-pointer"
        >
          Project
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mr-3 mt-1 border p-1 cursor-pointer"
        >
          Contact me!
        </motion.p>
        <motion.a
          href="https://www.linkedin.com/in/ujjwal-kirti-38936818a/"
          className="ease-in-out duration-200 transition-all cursor-pointer mx-3"
        >
          <LinkedinFilled />
        </motion.a>
        <a
          href="https://twitter.com/kirti_ujjwal"
          className="ease-in-out duration-200 transition-all cursor-pointer mx-3"
        >
          <TwitterOutlined />
        </a>
        <a
          href="mailto:kirti.chargers@gmail.com"
          className="ease-in-out duration-200 transition-all cursor-pointer mx-3"
        >
          <MailOutlined />
        </a>
      </div>
    </motion.div>
  );
}

export default Navbar;
