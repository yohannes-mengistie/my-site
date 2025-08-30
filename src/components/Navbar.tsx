
'use client';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-black text-white">
      <div className="mx-auto flex items-center justify-between px-4 py-3 max-w-7xl">
        {/* Logo */}
        <h1
          className="flex justify-center items-center 
                     w-10 h-10 sm:ml-4 md:ml-20 
                     text-green-500 font-medium 
                     border-2 border-green-500 rounded-lg 
                     transform rotate-45 
                     shadow-md"
        >
          <span className="transform -rotate-45">Jo</span>
        </h1>

        {/* Hamburger Button (Visible on Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 right-0 bg-black md:bg-transparent 
                     md:space-x-6 md:items-center md:p-0 p-4
                     transition-all duration-300 ease-in-out`}
        >
          <a
            href="#about"
            className="hover:text-green-300 text-gray-300 active:underline py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#projects"
            className="hover:text-green-300 text-gray-300 active:underline py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-green-300 text-gray-300 active:underline py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/17oC0ZftJHVh44QnsuPQmxmBgD_4JnUhk/view?usp=sharing"
            className="hover:text-green-300 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
                       hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 
                       dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg 
                       dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                       mt-2 md:mt-0"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;