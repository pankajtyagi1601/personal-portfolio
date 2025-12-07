import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

type Project = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
};

const Projects = () => {
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
        <span className="bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
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
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-orange-500/20 rounded-2xl p-6 lg:p-8 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
              <motion.div
                className="w-full lg:w-1/3 flex-shrink-0"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={project.image}
                    className="w-full h-48 lg:h-56 object-cover rounded-xl border-2 border-orange-500/20"
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
                  <h6 className="font-semibold text-xl text-gray-200 group-hover:text-orange-300 transition-colors duration-300">
                    {project.link === "#" ? (
                      <button
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="hover:text-orange-300 transition-colors duration-300"
                      >
                        {project.title}
                      </button>
                    ) : project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-300 transition-colors duration-300 inline-flex items-center gap-2"
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
                      className="text-gray-400 hover:text-orange-300 transition-colors duration-300 flex-shrink-0"
                      aria-label={`View ${project.title} on GitHub`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
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
                      className="px-3 py-1 rounded-lg bg-neutral-800 border border-orange-500/30 text-sm font-medium text-orange-200 hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300"
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
