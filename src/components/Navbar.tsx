function Navbar() {
  return (
    <nav className="fixed right-0 left-0 z-50 top-0 h-18 bg-gray-800 text-white">
      <div className=" mx-auto flex items-center justify-between p-4 ">
        <h1
          className="flex justify-center items-center 
               w-9 h-9 ml-20
               text-green-500 font-medium
               border-2 border-green-500 rounded-lg
               transform rotate-45
               shadow-md"
        >
          <span className="transform -rotate-45">Jo</span>
        </h1>

        <div className="flex space-x-9 mr-10">
          <a href="#about" className="hover:text-green-300 text-gray-300 active:underline">
            About Me
          </a>
          <a href="" className="hover:text-green-300 text-gray-300 active:underline">
            Projects
          </a>
          <a href="" className="hover:text-green-300 text-gray-300 active:underline">
            Contacts
          </a>
          <a href="" className="hover:text-green-300 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
