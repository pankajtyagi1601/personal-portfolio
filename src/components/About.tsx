import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import React from "react";

// Functional component with TypeScript
const About: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-16" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl sm:text-5xl font-thin"
      >
        About
        <span className="bg-linear-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
          {" "}
          Me
        </span>
      </motion.h2>

      <div className="flex flex-wrap items-center">
        {/* Image section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-orange-400/20 to-orange-600/20 rounded-3xl blur-3xl -z-10"></div>
            <motion.img
              src={aboutImg}
              alt="about"
              className="rounded-3xl shadow-2xl border-2 border-orange-500/20"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </div>

        {/* Text section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center px-4 lg:px-0 lg:justify-start"
          >
            <div className="max-w-xl py-8">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center lg:text-left mb-6">
                {ABOUT_TEXT}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <span className="px-4 py-2 bg-neutral-900/50 border border-orange-500/30 rounded-lg text-orange-300 text-sm">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-neutral-900/50 border border-orange-500/30 rounded-lg text-orange-300 text-sm">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-neutral-900/50 border border-orange-500/30 rounded-lg text-orange-300 text-sm">
                  Continuous Learner
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
