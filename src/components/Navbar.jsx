import { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from '../assets/kevinRushLogo.png'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // استرجاع الوضع المخزن
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white dark:bg-neutral-900 shadow-md dark:shadow-lg transition-all duration-300">
     <div className="flex flex-shrink-0 items-center">
            <p className="mmx-2 w-10 text-gray-900 dark:text-white">Logo</p>

            </div>

            <div className="m-8 flex items-center justify-center gap-5 text-2xl">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-all duration-300"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300"
      >
        <FaGithub />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/ahmd3la2"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-pink-500 transition-all duration-300"
      >
        <FaInstagram />
      </a>

      {/* Twitter (X) */}
      <a
        href="https://twitter.com/ahmddesa"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-all duration-300"
      >
        <FaSquareXTwitter />
      </a>
    </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
      >
        {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
