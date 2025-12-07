import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";

type Project = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
};

const Projects = () => {
  const { themeColor } = useTheme();
  return (
    <div className="border-b border-neutral-900 pb-24" id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl sm:text-5xl font-thin"
      >
        Featured{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, ${themeColor}, ${themeColor})`,
            WebkitBackgroundClip: "text",
          }}
        >
          Projects
        </span>
      </motion.h2>
      <div className="space-y-12">
        {PROJECTS.map((project: Project, index: number) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div
              className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center bg-linear-to-br from-neutral-900/50 to-neutral-800/30 border rounded-2xl p-6 lg:p-8 transition-all duration-300"
              style={{ borderColor: `${themeColor}33` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${themeColor}66`;
                e.currentTarget.style.boxShadow = `0 20px 25px -5px ${themeColor}1a, 0 10px 10px -5px ${themeColor}1a`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${themeColor}33`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <motion.div
                className="w-full lg:w-1/3 shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to right, ${themeColor}33, ${themeColor}4d)`,
                    }}
                  ></div>
                  <img
                    src={project.image}
                    className="w-full h-48 lg:h-56 object-cover rounded-xl border-2"
                    style={{ borderColor: `${themeColor}33` }}
                    alt={project.title}
                  />
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-2/3 flex-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h6
                    className="font-semibold text-xl text-gray-200 transition-colors duration-300"
                    style={{ color: "inherit" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = themeColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgb(229 231 235)";
                    }}
                  >
                    {project.link === "#" ? (
                      <button
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="transition-colors duration-300"
                        style={{ color: "inherit" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = themeColor;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "rgb(229 231 235)";
                        }}
                      >
                        {project.title}
                      </button>
                    ) : project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 inline-flex items-center gap-2"
                        style={{ color: "inherit" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = themeColor;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "rgb(229 231 235)";
                        }}
                      >
                        {project.title}
                        <span className="text-sm">↗</span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h6>
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-colors duration-300 shrink-0"
                      style={{ color: "inherit" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = themeColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgb(156 163 175)";
                      }}
                      aria-label={`View ${project.title} on GitHub`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={24} />
                    </motion.a>
                  )}
                </div>
                <p className="mb-4 text-gray-400 leading-relaxed text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.15 + techIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="px-3 py-1 rounded-lg bg-neutral-800 border text-sm font-medium transition-all duration-300"
                      style={{
                        borderColor: `${themeColor}4d`,
                        color: `${themeColor}dd`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${themeColor}1a`;
                        e.currentTarget.style.borderColor = `${themeColor}80`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgb(31 41 55)";
                        e.currentTarget.style.borderColor = `${themeColor}4d`;
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
