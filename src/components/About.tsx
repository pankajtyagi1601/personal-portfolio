import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FaCode, FaGraduationCap, FaAward, FaLaptopCode } from "react-icons/fa";
import { HiAcademicCap, HiLightBulb, HiSparkles } from "react-icons/hi";
import { GitHubCalendar } from "react-github-calendar";

// --- Replace this with your actual GitHub username ---
const GITHUB_USERNAME = "pankajtyagi1601";

// Statistics data
const stats = [
  { icon: FaCode, label: "Projects Completed", value: "10+", delay: 0.1 },
  {
    icon: FaGraduationCap,
    label: "Years Experience",
    value: "Fresher",
    delay: 0.2,
  },
  { icon: FaAward, label: "Certifications", value: "5+", delay: 0.3 },
  { icon: FaLaptopCode, label: "Technologies", value: "10+", delay: 0.4 },
];

// Skills with proficiency levels
const skills = [
  { name: "Frontend Development", level: 80 },
  { name: "Backend Development", level: 65 },
  { name: "Full Stack Integration", level: 88 },
  { name: "Problem Solving", level: 80 },
];

// Education/Certifications
const education = [
  {
    icon: HiAcademicCap,
    title: "Bachelor's Degree",
    institution: "Uttarakhand Technical University",
    year: "2021 - 2025",
    result: "Awaited",
    description: "Computer Science Engineering",
  },
  {
    icon: FaAward,
    title: "EY Technologies Internship",
    institution: "AICTE Collaboration",
    year: "Feb 2024 - Apr 2024",
    description: "Full Stack Development with Django",
  },
];

// Personal interests/hobbies
const interests = [
  {
    icon: FaCode,
    label: "Coding",
    description: "Building innovative solutions",
  },
  {
    icon: HiLightBulb,
    label: "Learning",
    description: "Exploring new technologies",
  },
  {
    icon: HiSparkles,
    label: "Open Source",
    description: "Contributing to projects",
  },
  { icon: FaLaptopCode, label: "Tech Trends", description: "Staying updated" },
];

const About: React.FC = () => {
  const { themeColor } = useTheme();

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
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, ${themeColor}, ${themeColor})`,
            WebkitBackgroundClip: "text",
          }}
        >
          {" "}
          Me
        </span>
      </motion.h2>

      {/* Main Content Section */}
      <div className="flex flex-wrap justify-center items-start gap-8 mb-16">
        {/* --- REPLACED: GitHub contribution graph in place of image/text --- */}
        {/* Responsive, centered GitHub chart (quick fix) */}
        <div className="w-full flex justify-center px-4 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-6"
            style={{ maxWidth: 920 }}
          >
            <div
              className="absolute inset-0 rounded-3xl blur-3xl -z-10"
              style={{
                background: `linear-gradient(135deg, ${themeColor}11, ${themeColor}22)`,
              }}
            />
            <div
              className="rounded-2xl  border p-6"
              style={{
                borderColor: `${themeColor}33`,
                boxShadow: `0 18px 40px ${themeColor}22`,
              }}
            >
              <GitHubCalendar
                username={GITHUB_USERNAME}
                blockSize={11} // increase to make tiles larger (e.g. 14-18)
                blockMargin={4} // spacing between tiles
                fontSize={14}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: stat.delay }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-linear-to-br from-neutral-900/50 to-neutral-800/30 border rounded-xl p-6 text-center transition-all duration-300"
            style={{ borderColor: `${themeColor}33` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${themeColor}66`;
              e.currentTarget.style.boxShadow = `0 10px 15px -3px ${themeColor}1a`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${themeColor}33`;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <stat.icon
              size={32}
              className="mx-auto mb-3"
              style={{ color: themeColor }}
            />
            <h3
              className="text-3xl font-bold mb-1"
              style={{ color: themeColor }}
            >
              {stat.value}
            </h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3
          className="text-2xl font-semibold mb-6 text-center"
          style={{ color: themeColor }}
        >
          Core Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-neutral-900/50 to-neutral-800/30 border rounded-xl p-6"
              style={{ borderColor: `${themeColor}33` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-sm" style={{ color: themeColor }}>
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: themeColor }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education & Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3
          className="text-2xl font-semibold mb-6 text-center"
          style={{ color: themeColor }}
        >
          Education & Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-linear-to-br from-neutral-900/50 to-neutral-800/30 border rounded-xl p-6 transition-all duration-300"
              style={{ borderColor: `${themeColor}33` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${themeColor}66`;
                e.currentTarget.style.boxShadow = `0 10px 15px -3px ${themeColor}1a`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${themeColor}33`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg shrink-0"
                  style={{ backgroundColor: `${themeColor}1a` }}
                >
                  <edu.icon size={24} style={{ color: themeColor }} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-200 mb-1">
                    {edu.title}
                  </h4>
                  <p className="text-sm mb-2" style={{ color: themeColor }}>
                    {edu.institution}
                  </p>
                  <p className="text-xs text-gray-400 mb-2">
                    {edu.year}
                    {/* {edu.result && (
                      <span style={{ color: themeColor }}>
                        (Degree {edu.result})
                      </span>
                    )} */}
                  </p>

                  <p className="text-sm text-gray-400">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interests Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3
          className="text-2xl font-semibold mb-6 text-center"
          style={{ color: themeColor }}
        >
          Interests & Hobbies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-linear-to-br from-neutral-900/50 to-neutral-800/30 border rounded-xl p-6 text-center transition-all duration-300"
              style={{ borderColor: `${themeColor}33` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${themeColor}66`;
                e.currentTarget.style.boxShadow = `0 10px 15px -3px ${themeColor}1a`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${themeColor}33`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <interest.icon
                size={32}
                className="mx-auto mb-3"
                style={{ color: themeColor }}
              />
              <h4 className="text-gray-200 font-medium mb-1">
                {interest.label}
              </h4>
              <p className="text-xs text-gray-400">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
