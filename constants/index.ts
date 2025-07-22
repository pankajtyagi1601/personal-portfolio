
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
    title: "College Chatbot",
    image: "#",
    description:
      "An intelligent chatbot application using Natural Language Processing (NLP) to handle college-related queries and information. Features include intent recognition, contextual responses, and seamless integration with college database.",
    technologies: ["OpenAI API", "NLP", "IBM Cloud"],
    link: "https://collegechatbot.tiiny.site/",
  },
  {
    title: "Car Detection System",
    image: "#",
    description:
      "Computer vision system for detecting and tracking vehicles using OpenCV.",
    technologies: ["Python", "OpenCV", "Machine Learning"],
  },
  {
    title: "MERN Chat Application",
    image: "#",
    description:
      "Real-time chat application with user authentication and group chat features.",
    technologies: ["MERN", "JWT", "AuthO", "Socket.io", "Redux"],
    link: "https://igluz-chatapp.onrender.com/",
  },
  {
    title: "Portfolio Website",
    image: "#",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "Framer Motion", "TypeScript"],
    link: "#",
  },
];

export const CONTACT: Contact = {
  address: "Jaspur, Udham Singh Nagar, Uttarakhand(244712), India",
  phoneNo: "+91 8476846209 ",
  email: "pankajtyagi1601@gmail.com",
};
