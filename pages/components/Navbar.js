import {
  TwitterOutlined,
  LinkedinFilled,
  MailOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      className={`flex w-full lg:px-20 mt-4 text-white absolute`}
    ></motion.div>
  );
}

export default Navbar;
