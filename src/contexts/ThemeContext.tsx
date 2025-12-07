import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextType {
  themeColor: string;
  setThemeColor: (color: string) => void;
  getThemeColorClasses: () => {
    text: string;
    textLight: string;
    textDark: string;
    border: string;
    borderLight: string;
    bg: string;
    bgLight: string;
    bgGradient: string;
    hover: string;
    shadow: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const DEFAULT_THEME = "#fb923c"; // Default orange color

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeColor, setThemeColorState] = useState<string>(() => {
    const saved = localStorage.getItem("themeColor");
    return saved || DEFAULT_THEME;
  });

  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
    // Update CSS variables
    const root = document.documentElement;
    root.style.setProperty("--theme-color", themeColor);

    // Convert hex to RGB for opacity variants
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    };

    const rgb = hexToRgb(themeColor);
    if (rgb) {
      root.style.setProperty(
        "--theme-color-rgb",
        `${rgb.r}, ${rgb.g}, ${rgb.b}`
      );
    }
  }, [themeColor]);

  const setThemeColor = (color: string) => {
    setThemeColorState(color);
  };

  const getThemeColorClasses = () => {
    // These will be used with inline styles or CSS variables
    return {
      text: themeColor,
      textLight: themeColor,
      textDark: themeColor,
      border: themeColor,
      borderLight: themeColor,
      bg: themeColor,
      bgLight: themeColor,
      bgGradient: themeColor,
      hover: themeColor,
      shadow: themeColor,
    };
  };

  // Helper function to lighten a color
  const lightenColor = (hex: string, percent: number) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const r = Math.min(255, (num >> 16) + percent);
    const g = Math.min(255, ((num >> 8) & 0x00ff) + percent);
    const b = Math.min(255, (num & 0x0000ff) + percent);
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
  };

  return (
    <ThemeContext.Provider
      value={{ themeColor, setThemeColor, getThemeColorClasses }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
