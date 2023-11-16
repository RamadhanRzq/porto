/* eslint-disable react/no-unescaped-entities */
import { BsFillMoonStarsFill } from "react-icons/bs";
import Fotoku from './assets/Foto.png'
import {
  AiFillLinkedin,
} from "react-icons/ai";
import { useState } from "react";

const handleOnClickLinkedIn = () => {
  const url = "https://www.linkedin.com/in/ramadhan-rizqi-saputra/"

  window.open(url, '_blank')
}


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
    <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <h1 className="text-xl">Portfolio</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill 
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="/src/assets/cv.pdf"
                download="cv-ramadhan-rizqi.pdf"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Ramadhan Rizqi Saputra
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Software Engineer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Dedicated to producing high quality code with a focus on user
            experience
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillLinkedin onClick={handleOnClickLinkedIn}/>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <img src={Fotoku} alt="imgku"/>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}

export default App;
