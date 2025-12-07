import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FaPalette } from "react-icons/fa6";

const ThemeColorPicker: React.FC = () => {
  const { themeColor, setThemeColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [tempColor, setTempColor] = useState(themeColor);

  const presetColors = [
    "#fb923c", // Orange (default)
    "#3b82f6", // Blue
    "#8b5cf6", // Purple
    "#ec4899", // Pink
    "#10b981", // Green
    "#f59e0b", // Amber
    "#ef4444", // Red
    "#06b6d4", // Cyan
    "#6366f1", // Indigo
    "#14b8a6", // Teal
  ];

  const handleColorChange = (color: string) => {
    setTempColor(color);
    setThemeColor(color);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-neutral-900 border border-neutral-700 rounded-2xl p-4 shadow-2xl"
            style={{ minWidth: "280px" }}
          >
            <h3 className="text-white text-sm font-semibold mb-3">
              Theme Color
            </h3>

            {/* Color Picker Input */}
            <div className="mb-4">
              <label className="block text-xs text-gray-400 mb-2">
                Custom Color
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="color"
                  value={tempColor}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="w-12 h-12 rounded-lg cursor-pointer border-2 border-neutral-700"
                />
                <input
                  type="text"
                  value={tempColor}
                  onChange={(e) => {
                    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                      handleColorChange(e.target.value);
                    } else {
                      setTempColor(e.target.value);
                    }
                  }}
                  className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:border-current"
                  style={{ borderColor: themeColor }}
                  placeholder="#fb923c"
                />
              </div>
            </div>

            {/* Preset Colors */}
            <div>
              <label className="block text-xs text-gray-400 mb-2">
                Preset Colors
              </label>
              <div className="grid grid-cols-5 gap-2">
                {presetColors.map((color) => (
                  <motion.button
                    key={color}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleColorChange(color)}
                    className={`w-10 h-10 rounded-lg border-2 transition-all ${
                      themeColor === color
                        ? "border-white scale-110"
                        : "border-neutral-700 hover:border-neutral-600"
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select ${color} theme`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all"
        style={{ backgroundColor: themeColor }}
        aria-label="Toggle theme color picker"
      >
        <FaPalette size={20} />
      </motion.button>
    </div>
  );
};

export default ThemeColorPicker;
