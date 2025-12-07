import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

type TechIconProps = {
  Icon: React.ElementType;
  color: string;
  label: string;
  duration: number;
};

const iconsVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -15],
    rotate: [-2, 2],
    scale: [1, 1.05, 1],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  },
});

const TECH_ICONS: TechIconProps[] = [
  { Icon: RiReactjsLine, color: "#61DAFB", label: "React", duration: 2 },
  { Icon: SiNextdotjs, color: "#ffffff", label: "Next.js", duration: 2.3 },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript", duration: 2.6 },
  { Icon: SiGit, color: "#F14E32", label: "Git", duration: 2.9 },
  { Icon: SiMongodb, color: "#00ED64", label: "MongoDB", duration: 3.2 },
  {
    Icon: SiTailwindcss,
    color: "#06B6D4",
    label: "Tailwind CSS",
    duration: 3.5,
  },
  { Icon: FaNodeJs, color: "#339933", label: "Node.js", duration: 3.8 },
  { Icon: SiDocker, color: "#2496ED", label: "Docker", duration: 4.1 },
  { Icon: SiMysql, color: "#4479A1", label: "MySQL", duration: 4.4 },
  { Icon: FaJava, color: "#007396", label: "Java", duration: 4.7 },
];

const TechIcon: React.FC<TechIconProps> = ({
  Icon,
  color,
  label,
  duration,
}) => (
  <motion.div
    variants={iconsVariants(duration)}
    initial="initial"
    animate="animate"
    whileHover={{
      scale: 1.15,
      rotate: [0, -10, 10, 0],
      transition: { duration: 0.4 },
      y: -10,
    }}
    className="group relative rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 cursor-pointer shadow-lg hover:shadow-xl hover:border-orange-500/50 transition-all duration-300"
    aria-label={`${label} icon`}
  >
    <Icon
      className="text-5xl sm:text-6xl transition-transform duration-300 group-hover:scale-110"
      style={{ color }}
    />
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileHover={{ opacity: 1, y: 0 }}
      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-orange-500/30"
    >
      {label}
    </motion.span>
  </motion.div>
);

const Technologies: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="technologies">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl sm:text-5xl font-thin"
      >
        <span className="bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
          Technologies
        </span>{" "}
        I Work With
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        {TECH_ICONS.map((iconProps) => (
          <TechIcon key={iconProps.label} {...iconProps} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
