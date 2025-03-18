import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="ml-3 border-b border-neutral-900 pb-12">
      {/* عنوان Projects */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-gray-900 dark:text-white text-center text-4xl font-bold"
      >
        Projects
      </motion.h1>

      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            className="mb-8 flex flex-wrap lg:justify-center bg-gray-100 dark:bg-gray-800 
                       p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 transition-transform
                       hover:scale-[1.02] hover:shadow-lg"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* صورة المشروع */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded-lg shadow-md transition-transform hover:scale-105"
              />
            </motion.div>

            {/* تفاصيل المشروع */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3"
            >
              <h6 className="mb-2 text-gray-900 dark:text-white font-semibold text-lg">
                {project.title}
              </h6>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              {/* التقنيات المستخدمة */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-300 dark:bg-gray-700 
                               text-gray-900 dark:text-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
