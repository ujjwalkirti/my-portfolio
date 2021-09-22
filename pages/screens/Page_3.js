function Page_3() {
  return (
    <div className="h-auto w-screen flex flex-col bg-black">
      <h1 className="font-semibold text-4xl text-white m-4 text-center">
        My Projects
      </h1>
      <ol>
        <li className=" mx-4">
          <div className="text-white m-5 flex flex-col bg-purple-500 rounded-lg p-4">
            <span className="flex">
              <span className="w-1/2">
                <h3 className="text-3xl font-medium">
                  Sales and Analytics Dashboard
                </h3>
                <ul className="m-3 mx-6">
                  <li>-Completely responsive dashboard.</li>
                  <li>
                    -Fetches data from remote server and presents it pictorially.
                  </li>
                  <li>-Made using React JavaScript library.</li>
                  <li>
                    -Styling is done using Tailwind CSS and Ant Design UI
                    Library.
                  </li>
                </ul>
              </span>
              <span className="w-1/2">
                <img
                  className="h-32 object-contain mx-auto"
                  src="https://icons.iconarchive.com/icons/vexels/office/1024/desktop-icon.png"
                />
              </span>
            </span>
            <a className="mx-auto cursor-pointer p-2 border-white border-solid border-2 w-auto text-white">
              Check it Out!
            </a>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Page_3;
