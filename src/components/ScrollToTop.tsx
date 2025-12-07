import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";

const ScrollToTop = () => {
  const { themeColor } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 text-white p-4 rounded-full shadow-lg transition-all duration-300 border-2"
          style={{
            backgroundColor: themeColor,
            boxShadow: `0 10px 15px -3px ${themeColor}50, 0 4px 6px -2px ${themeColor}50`,
            borderColor: `${themeColor}4d`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 10px 15px -3px ${themeColor}70, 0 4px 6px -2px ${themeColor}70`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 10px 15px -3px ${themeColor}50, 0 4px 6px -2px ${themeColor}50`;
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
