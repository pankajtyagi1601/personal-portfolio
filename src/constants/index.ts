import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

interface Experience {
  year: string;
  role: string;
  company: string;
  description?: string;
  technologies?: string[];
}

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
}

interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}

export const HERO_CONTENT: string = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT: string = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "Feb 2024 - Apr 2024",
    role: "Intern",
    company: "EY Technologies",
    description: `Participated in a virtual internship program organized by EY Technologies in collaboration with AICTE. Developed a full-fledged music website using Python's Django framework.`,
    technologies: ["Python", "Django", "Web Development"],
  },
  {
    year: "Feb 2024 - Mar 2024",
    role: "Intern",
    company: "Edunet Foundation",
    description: `Engaged in a virtual internship program to gain knowledge in AI & Cloud. Developed the College Chatbot using NLP concepts on IBM Cloud.`,
    technologies: ["NLP", "IBM Cloud", "AI"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Fin Morph AI",
    image: project1,
    description:
      "An AI-powered financial analysis and transformation platform that leverages advanced machine learning algorithms to analyze, morph, and optimize financial data. Features intelligent data processing, predictive analytics, and automated financial insights generation.",
    technologies: ["AI/ML", "Next.js", "TypeScript", "Vercel"],
    link: "https://fin-morph-ai.vercel.app/",
    githubLink: "https://github.com/pankajtyagi1601/finMorphAI",
  },
  {
    title: "Brain Notes AI",
    image: project2,
    description:
      "An intelligent note-taking application powered by AI that helps users organize, summarize, and enhance their notes. Features include AI-powered summarization, smart categorization, and seamless note management.",
    technologies: ["AI", "React", "TypeScript", "Vercel"],
    link: "https://brain-notes-ai.vercel.app/",
    githubLink: "https://github.com/pankajtyagi1601/Brain-Notes-AI",
  },
  {
    title: "Crypto Track",
    image: project3,
    description:
      "A comprehensive cryptocurrency tracking application that provides real-time price updates, portfolio management, and market analysis. Features include live price tracking, portfolio analytics, and market trends visualization.",
    technologies: ["React", "TypeScript", "Crypto APIs", "Vercel"],
    link: "https://crpyto-track.vercel.app/",
    githubLink: "https://github.com/pankajtyagi1601/crpytoTrack",
  },
  {
    title: "MERN Chat Application",
    image: project4,
    description:
      "Real-time chat application with user authentication and group chat features. Built with the MERN stack, featuring secure authentication, real-time messaging, and scalable architecture.",
    technologies: ["MERN", "JWT", "Socket.io", "Redux", "Render"],
    link: "https://igluz-chatapp.onrender.com/",
    githubLink: "https://github.com/pankajtyagi1601/MERN-ChatApp",
  },
];

export const CONTACT: Contact = {
  address: "Jaspur, Udham Singh Nagar, Uttarakhand(244712), India",
  phoneNo: "+91 8476846209 ",
  email: "pankajtyagi1601@gmail.com",
};
