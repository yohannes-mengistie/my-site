import Image from "next/image";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <div className="mt-60 flex flex-col items-center justify-center space-y-4 ">
        <h2 className="text-green-500">Hi , my name is </h2>
        <h1 className="text-6xl font-bold">Yohannes M.</h1>
        <p className="text-gray-600">
          I am aspiring Electrical and Computer Engineer , <br /> With big
          enthusiastic about software development and technology.
        </p>

        <div className="mt-7">
          <a
            href="#"
            className="text-white 
               bg-gradient-to-r from-green-400 via-green-500 to-green-600 
               hover:bg-gradient-to-br 
               focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 
               font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
               transition-all duration-300 ease-in-out
               hover:-translate-y-2 active:translate-y-1
               "
          >
            Contact Me
          </a>
        </div>
      </div>
      <About />
    </div>
  );
}
