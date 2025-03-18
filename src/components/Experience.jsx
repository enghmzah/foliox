import { EXPERIENCES } from '../constants'; 
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      {/* العنوان */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold 
                   text-[var(--color-titlelight)] dark:text-[var(--color-titledark)]">
        Experience
      </motion.h1>

      <div className="flex flex-col gap-10">
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[var(--color-cardlight)] dark:bg-[var(--color-carddark)] 
                       p-6 rounded-lg shadow-md transition-transform 
                       hover:scale-105 hover:shadow-lg"
          >
            {/* السنة */}
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {experience.year}
            </p>

            {/* العنوان */}
            <h3 className="mt-2 text-xl font-semibold text-[var(--color-titlelight)] 
                           dark:text-[var(--color-titledark)]">
              {experience.role} —{" "}
              <a href="#" className="text-[var(--color-comlight)] dark:text-[var(--color-comdark)] font-bold hover:underline">
                {experience.company}
              </a>
            </h3>

            {/* الوصف */}
            <p className="mt-2 text-sm text-[var(--color-deslight)] dark:text-[var(--color-desdark)]">
              {experience.description}
            </p>

            {/* التقنيات المستخدمة */}
            <div className="flex flex-wrap gap-2 mt-3">
              {experience.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[var(--color-taglight)] 
                             dark:bg-[var(--color-tagdark)] text-gray-900 dark:text-gray-100">
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
