import { DownCircleFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";

function Page_1() {
  const [hasNotScrolled, setHasNotScrolled] = useState(true);
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
  return (
    <div className="h-screen bg-gray-600 w-screen flex flex-col items-center justify-center ">
      <span className="flex divide-white">
        {" "}
        <h1 className="font-bold text-white text-9xl w-1/2 text-right mr-4">
          I am Ujjwal Kirti
        </h1>
        <h1 className="font-medium text-8xl w-1/2 text-gray-600 bg-white text-left border-4 pl-4">
          , and I am a web developer.
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
