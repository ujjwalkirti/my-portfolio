

function Navbar() {
  const navoptions = ["Facebook", "Twitter", "Linkedin"];
  return (
    <div className={`flex w-screen absolute text-white justify-end`}>
      <div className="flex w-2/5 justify-between p-2 font-medium  mr-2 text-2xl">
        <p className="p-2 ease-in-out duration-200 transition-all cursor-pointer hover:rounded-2xl hover:text-blue-300 hover:bg-white">
          <a>Linkedin</a>
        </p>
        <p className="p-2 ease-in-out duration-200 transition-all cursor-pointer hover:rounded-2xl hover:text-blue-300 hover:bg-white">
          <a>Twitter</a>
        </p>
        <p className="p-2 ease-in-out duration-200 transition-all cursor-pointer hover:rounded-2xl hover:text-blue-300 hover:bg-white">
          <a>facebook</a>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
