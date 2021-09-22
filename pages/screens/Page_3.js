function Page_3() {
  return (
    <div className="h-screen w-screen flex flex-col bg-black">
      <h1 className="font-semibold text-4xl text-white m-4 text-center">
        My Projects
      </h1>
      <ol>
        <li>
          <div className="text-white m-5">
            <h3 className="text-3xl font-medium">
              Sales and Analytics Dashboard
            </h3>
            <img className="h-20" src="https://icons.iconarchive.com/icons/vexels/office/1024/desktop-icon.png" />
            <ul className="m-3 mx-6">
              <li>Completely responsive dashboard.</li>
              <li>Fetches data from remote server and presents it pictorially.</li>
              <li>Made using React JavaScript library.</li>
              <li>Styling is done using Tailwind CSS and Ant Design UI Library.</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Page_3;
