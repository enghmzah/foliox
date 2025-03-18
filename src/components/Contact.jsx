import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-16 
                        transition-colors duration-300">
      {/* العنوان */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 dark:text-gray-200"
      >
        Get in Touch
      </motion.h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Feel free to reach out for any inquiries!
      </p>

      {/* الفورم */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="mt-6 w-full max-w-md p-6 bg-white dark:bg-[#2D2D2D] 
                   rounded-lg shadow-md flex flex-col gap-4 transition-colors duration-300"
      >
        {/* العنوان */}
        <div className="flex items-center bg-gray-200 dark:bg-[#3A3A3A] p-3 rounded-lg transition-colors">
          <FaMapMarkerAlt className="text-blue-500 mr-3" />
          <span className="text-gray-800 dark:text-gray-300">1234 Street Name, City, Country</span>
        </div>

        {/* الهاتف */}
        <div className="flex items-center bg-gray-200 dark:bg-[#3A3A3A] p-3 rounded-lg transition-colors">
          <FaPhoneAlt className="text-green-500 mr-3" />
          <span className="text-gray-800 dark:text-gray-300">+123 456 7890</span>
        </div>

        {/* البريد الإلكتروني */}
        <div className="flex items-center justify-between bg-gray-200 dark:bg-[#3A3A3A] p-3 rounded-lg transition-colors">
          <div className="flex items-center">
            <FaEnvelope className="text-red-500 mr-3" />
            <span className="text-gray-800 dark:text-gray-300">your@email.com</span>
          </div>
          <a href="mailto:your@email.com" className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition">
            Send Email
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
