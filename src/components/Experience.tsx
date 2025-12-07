import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { BsCalendarEvent, BsBuilding } from "react-icons/bs";

const Experience: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-16" id="experience">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl sm:text-5xl font-thin"
      >
        <span className="bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 via-orange-400/30 to-transparent"></div>

        {EXPERIENCES.map((experience, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-wrap lg:justify-center relative"
          >
            {/* Timeline dot */}
            <div className="hidden lg:block absolute left-1/4 transform -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full border-4 border-neutral-900 z-10"></div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
            >
              <p className="text-sm sm:text-base text-orange-300 flex items-center gap-2 font-medium">
                <BsCalendarEvent className="text-orange-400" />
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4 lg:pl-8"
            >
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                <h6 className="mb-3 font-semibold text-lg flex items-center gap-2 text-gray-200">
                  <BsBuilding className="text-orange-400" />
                  {experience.role} -{" "}
                  <span className="text-orange-300">{experience.company}</span>
                </h6>
                <p className="mb-4 text-gray-400 leading-relaxed">
                  {experience.description}
                </p>
                {experience.technologies &&
                  experience.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.technologies.map(
                        (tech: string, idx: number) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.2 + idx * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="px-3 py-1 rounded-lg bg-neutral-800 border border-orange-500/30 text-sm font-medium text-orange-200 hover:bg-orange-500/10 transition-colors duration-300"
                          >
                            {tech}
                          </motion.span>
                        )
                      )}
                    </div>
                  )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
