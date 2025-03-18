import { EXPERIENCES } from '../constants'; 
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 min-h-screen">
      {/* العنوان */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold 
                   text-gray-900 dark:text-white">
        Experience
      </motion.h1>

      <div className="flex flex-col gap-10">
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 rounded-lg shadow-md transition-transform 
                       hover:scale-105 hover:shadow-lg
                       bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          >
            {/* السنة */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {experience.year}
            </p>

            {/* العنوان */}
            <h3 className="mt-2 text-xl font-semibold text-gray-900 
                           dark:text-white">
              {experience.role} —{" "}
              <a href="#" className="text-purple-700 dark:text-purple-400 font-bold hover:underline">
                {experience.company}
              </a>
            </h3>

            {/* الوصف */}
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {experience.description}
            </p>

            {/* التقنيات المستخدمة */}
            <div className="flex flex-wrap gap-2 mt-3">
              {experience.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-lg text-xs font-medium 
                             bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
