import { FiSun, FiMoon } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="p-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md dark:shadow-lg">
      {/* اللوجو */}
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">Logo</h1>

      {/* أيقونات السوشيال ميديا */}
      <div className="flex items-center gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 text-2xl" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300 text-2xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition duration-300 text-2xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300 text-2xl" />
        </a>
      </div>

      {/* زر التبديل بين الوضع الداكن والفاتح */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
