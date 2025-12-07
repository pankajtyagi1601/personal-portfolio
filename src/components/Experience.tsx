import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { BsCalendarEvent, BsBuilding } from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext";

const Experience: React.FC = () => {
  const { themeColor } = useTheme();
  

  return (
    <div className="border-b border-neutral-800 pb-16" id="experience">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl sm:text-5xl font-thin"
      >
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, ${themeColor}, ${themeColor})`,
            WebkitBackgroundClip: "text",
          }}
        >
          Experience
        </span>
      </motion.h2>
      <div className="relative">
        {/* Timeline line */}
        <div
          className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-0.5"
          style={{
            background: `linear-gradient(to bottom, ${themeColor}80, ${themeColor}4d, transparent)`,
          }}
        ></div>

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
            <div
              className="hidden lg:block absolute left-1/4 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-neutral-900 z-10"
              style={{ backgroundColor: themeColor }}
            ></div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
            >
              <p
                className="text-sm sm:text-base flex items-center gap-2 font-medium"
                style={{ color: themeColor }}
              >
                <BsCalendarEvent style={{ color: themeColor }} />
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
              <div
                className="bg-linear-to-br from-neutral-900/50 to-neutral-800/50 border rounded-xl p-6 transition-all duration-300"
                style={{ borderColor: `${themeColor}33` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${themeColor}66`;
                  e.currentTarget.style.boxShadow = `0 10px 15px -3px ${themeColor}1a, 0 4px 6px -2px ${themeColor}1a`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${themeColor}33`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h6 className="mb-3 font-semibold text-lg flex items-center gap-2 text-gray-200">
                  <BsBuilding style={{ color: themeColor }} />
                  {experience.role} -{" "}
                  <span style={{ color: themeColor }}>
                    {experience.company}
                  </span>
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
                            className="px-3 py-1 rounded-lg bg-neutral-800 border text-sm font-medium transition-colors duration-300"
                            style={{
                              borderColor: `${themeColor}4d`,
                              color: `${themeColor}dd`,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = `${themeColor}1a`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgb(31 41 55)";
                            }}
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
