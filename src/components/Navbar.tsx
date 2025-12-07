import { TiDocumentText } from "react-icons/ti";
import { FaLinkedin, FaGithub, FaDiscord, FaWhatsapp } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
const Resume = "Resume.pdf";

// Define props type for social link component
interface SocialLinkProps {
  href: string;
  Icon: React.ElementType;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, Icon, label }) => {
  const { themeColor } = useTheme();
  return (
    <motion.div
      className="text-gray-300 relative group transition-colors duration-300"
      style={
        {
          ["--hover-color" as string]: themeColor,
        } as React.CSSProperties
      }
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit" }}
      >
        <Icon
          size={24}
          className="group-hover:transition-colors"
          style={{ color: "inherit" }}
        />
      </a>
      <style>{`
        .group:hover {
          color: ${themeColor} !important;
        }
      `}</style>
      <span
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white text-xs py-1 px-2 rounded border opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
        style={{ borderColor: `${themeColor}4d` }}
      >
        {label}
      </span>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const { themeColor } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const hexToRgb = (hex: string) => {
  //   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  //   return result
  //     ? {
  //         r: parseInt(result[1], 16),
  //         g: parseInt(result[2], 16),
  //         b: parseInt(result[3], 16),
  //       }
  //     : { r: 251, g: 146, b: 60 };
  // };

  // const rgb = hexToRgb(themeColor);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-900/80 backdrop-blur-md border-b shadow-lg"
          : "bg-transparent"
      }`}
      style={scrolled ? { borderColor: `${themeColor}33` } : {}}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center w-full py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a
              href="#"
              className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${themeColor}, ${themeColor})`,
              }}
            >
              PT
            </a>
          </motion.div>
          <div className="flex items-center justify-center gap-4 sm:gap-5 text-xl sm:text-2xl">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 relative group cursor-pointer transition-colors duration-300"
              style={{ color: "inherit" }}
            >
              <style>{`
                .group:hover {
                  color: ${themeColor} !important;
                }
              `}</style>
              <TiDocumentText size={28} onClick={() => setIsResumeOpen(true)} />
              <span
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white text-xs py-1 px-2 rounded border opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
                style={{ borderColor: `${themeColor}4d` }}
              >
                Resume
              </span>
            </motion.div>
            <SocialLink
              href="https://www.linkedin.com/in/pankajtyagi1601/"
              Icon={FaLinkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://wa.me/8476846209"
              Icon={FaWhatsapp}
              label="WhatsApp"
            />
            <SocialLink
              href="https://github.com/pankajtyagi1601"
              Icon={FaGithub}
              label="GitHub"
            />
            <SocialLink
              href="https://discord.gg/SGk9PVzz"
              Icon={FaDiscord}
              label="Discord"
            />
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsResumeOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-900 p-4 rounded-2xl w-full max-w-5xl h-[90vh] relative border shadow-2xl"
            style={{ borderColor: `${themeColor}33` }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-4 right-4 text-gray-400 transition-colors duration-200 z-10 bg-neutral-800 rounded-full p-2 border"
              style={
                {
                  borderColor: `${themeColor}33`,
                  ["--hover-color" as string]: themeColor,
                } as React.CSSProperties
              }
            >
              <style>{`
                button:hover {
                  color: ${themeColor} !important;
                }
              `}</style>
              ✕
            </motion.button>
            <iframe
              src={Resume}
              title="Resume"
              className="w-full h-full rounded-lg"
              style={{ border: "none" }}
            />
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
