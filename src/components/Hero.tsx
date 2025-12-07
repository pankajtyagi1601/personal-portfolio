import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.png";
import { motion, Variants } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

// Define animation variant types
const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: "easeOut",
    },
  }),
};

const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

const Hero: React.FC = () => {
  const { themeColor } = useTheme();

  return (
    <section className="container mx-auto px-4 sm:px-20 pt-24 pb-16 lg:pb-24 border-b border-neutral-900">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <motion.div
              variants={textVariants}
              custom={0.1}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-thin text-gray-300 tracking-tight lg:mt-16 text-center lg:text-left mb-4">
                Hi, I'm{" "}
                <span
                  className="bg-clip-text text-transparent font-normal"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${themeColor}, ${themeColor})`,
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Pankaj Tyagi
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={textVariants}
              custom={0.3}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <h2
                className="bg-clip-text text-3xl sm:text-4xl lg:text-5xl tracking-tight text-transparent text-center lg:text-left font-medium"
                style={{
                  backgroundImage: `linear-gradient(to right, ${themeColor}, ${themeColor})`,
                  WebkitBackgroundClip: "text",
                }}
              >
                Full Stack Developer{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${themeColor}, ${themeColor})`,
                    WebkitBackgroundClip: "text",
                  }}
                >
                  & Programmer
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={textVariants}
              custom={0.5}
              initial="hidden"
              animate="visible"
              className="text-gray-400 my-4 max-w-xl py-4 text-base sm:text-lg leading-relaxed text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={textVariants}
              custom={0.7}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-white rounded-lg font-medium shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: themeColor,
                  boxShadow: `0 10px 15px -3px ${themeColor}50, 0 4px 6px -2px ${themeColor}50`,
                }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 rounded-lg font-medium transition-all duration-300"
                style={{
                  borderColor: themeColor,
                  color: themeColor,
                }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-12 lg:mt-0">
          <div className="flex justify-center lg:-mt-8">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-2xl blur-2xl -z-10"
                style={{
                  background: `linear-gradient(to right, ${themeColor}33, ${themeColor}4d)`,
                }}
              ></div>
              <motion.img
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                src={profilePic}
                alt="Pankaj Tyagi - Full Stack Developer"
                className="w-2/3 sm:w-3/4 h-auto object-cover rounded-2xl shadow-2xl border-2"
                style={{
                  borderColor: `${themeColor}4d`,
                  boxShadow: `0 20px 40px ${themeColor}4d`,
                }}
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
