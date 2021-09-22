import BreadcrumbSeparator from "antd/lib/breadcrumb/BreadcrumbSeparator";
import { useState } from "react";

function Page_1() {
  const [hasNotScrolled, setHasNotScrolled] = useState(true)
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
      {hasNotScrolled && <div className="absolute bottom-0 text-white text-2xl font-medium">Scroll down to know more</div>}
    </div>
  );
}

export default Page_1;
