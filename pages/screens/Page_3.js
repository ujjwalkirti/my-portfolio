function Page_3() {
  return (
    <div className="h-auto w-screen flex flex-col bg-black">
      <h1 className="font-semibold text-4xl text-white m-4 text-center">
        My Projects
      </h1>
      <ol>
        <li className="mx-4">
          <div className="text-white m-5 flex flex-col bg-purple-500 bg-opacity-40 rounded-lg w-1/3 mx-auto p-4">
            <h3 className="text-3xl font-medium text-center">
              Pomodoro Timer ⏳
            </h3>
            <p className="text-center">(Based on Harry Potter theme)</p>

            <img
              className="h-32 object-contain mx-auto"
              src="https://icons.iconarchive.com/icons/vexels/office/1024/desktop-icon.png"
            />

            <a className="mx-auto cursor-pointer p-2 w-auto bg-white bg-opacity-70 font-bold rounded-lg text-purple-800">
              Check it Out!
            </a>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Page_3;
