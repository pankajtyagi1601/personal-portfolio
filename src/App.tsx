import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-orange-500/30 selection:text-white">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] w-full min-h-svh overflow-x-hidden bg-black bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black"></div>
          <div className="absolute top-0 z-[-1] w-full h-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(251,146,60,0.1)_0%,rgba(251,146,60,0.05)_50%,rgba(0,0,0,0)_100%)]"></div>
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
        </div>
      </div>
    </>
  );
};

export default App;
