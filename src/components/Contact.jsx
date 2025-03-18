import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 px-6">
      <h2 className="my-10 text-center text-4xl font-bold text-gray-900 dark:text-white">
        Get in Touch
      </h2>

      {/* Contact Card */}
      <div className="max-w-xl mx-auto p-6 rounded-xl shadow-lg bg-white dark:bg-neutral-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md transition-all duration-300">
        <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
          Feel free to reach out for any inquiries!
        </p>

        {/* Contact Details */}
        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-150 dark:bg-neutral-800 transition-all duration-300">
            <FiMapPin size={22} className="text-blue-500" />
            <span className="text-gray-900 dark:text-gray-300">1234 Street Name, City, Country</span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-150 dark:bg-neutral-800 transition-all duration-300">
            <FiPhone size={22} className="text-green-500" />
            <span className="text-gray-900 dark:text-gray-300">+123 456 7890</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-150 dark:bg-neutral-800 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <FiMail size={22} className="text-red-500" />
              <span className="text-gray-900 dark:text-gray-300">your@email.com</span>
            </div>
            <a
              href="mailto:your@email.com"
              className="text-sm px-3 py-1.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
