import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ThemeColorPicker from "./components/ThemeColorPicker";
import { useTheme } from "./contexts/ThemeContext";

const App = () => {
  const { themeColor } = useTheme();

  // Convert hex to RGB for gradient
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 251, g: 146, b: 60 };
  };

  const rgb = hexToRgb(themeColor);

  return (
    <>
      <div
        className="overflow-x-hidden text-neutral-300 antialiased"
        style={
          {
            ["--selection-bg" as string]: `${themeColor}30`,
          } as React.CSSProperties
        }
      >
        <style>{`
          ::selection {
            background-color: ${themeColor}30;
            color: white;
          }
        `}</style>
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] w-full min-h-svh overflow-x-hidden bg-black bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-neutral-900 via-black to-black"></div>
          <div
            className="absolute top-0 z-[-1] w-full h-full"
            style={{
              background: `radial-gradient(100% 50% at 50% 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1) 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05) 50%, rgba(0,0,0,0) 100%)`,
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 sm:px-8 pt-20">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
          <ScrollToTop />
          <ThemeColorPicker />
        </div>
      </div>
    </>
  );
};

export default App;
