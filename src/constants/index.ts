import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";

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

// ─── HERO ────────────────────────────────────────────────────────────────────

export const HERO_CONTENT: string = `Full-Stack Developer who builds and ships — not just codes. I've delivered 4 production systems end-to-end: a real-time face recognition access control system, a freelance client website serving real customers, a RAG-powered AI notes app, and a finance tracker with receipt OCR. My stack is Next.js, React, Node.js, Python, PostgreSQL, MongoDB, and Redis. I enjoy owning a problem from schema design to deployment and making it work reliably in the real world.`;

// ─── ABOUT ───────────────────────────────────────────────────────────────────

export const ABOUT_TEXT: string = `I'm a full-stack developer based in Delhi, India, with a habit of building things that actually ship. My projects span computer vision pipelines, AI-powered apps, freelance client work, and microservices dashboards — all live, all in production. I'm comfortable across the entire stack: React and Next.js on the frontend, Node.js and Python on the backend, and PostgreSQL, MongoDB, or Redis depending on what the problem needs. I care about clean architecture, production-grade tooling (Docker, CI/CD, proper error handling), and writing code that a teammate can pick up six months later. Outside of coding, I enjoy exploring new technologies, contributing to open-source, and solving problems that have a real impact on real users.`;

// ─── EXPERIENCES ─────────────────────────────────────────────────────────────

export const EXPERIENCES: Experience[] = [
  {
    year: "2024 – Present",
    role: "Full-Stack Developer",
    company: "Freelance (Self-employed)",
    description: `Designed, built, and deployed a production website for Anjani Beauties — a bridal salon client — solo and end-to-end. Replaced the client's phone-only booking system with a structured bridal inquiry pipeline: multi-step form, server-side validation, PostgreSQL lead storage, and automated email dispatch via Nodemailer. Shipped with Docker, GitHub Actions CI, and Husky pre-commit hooks.`,
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker", "Nodemailer", "Vercel"],
  },
  {
    year: "Feb 2024 – Apr 2024",
    role: "Web Developer Intern",
    company: "EY Technology (Virtual)",
    description: `Improved user engagement metrics on a Django-based music streaming platform by implementing performance fixes and overhauling the EJS-based navigation UI — changes shipped to a production codebase. Delivered feature work and bug fixes across authentication systems and database management.`,
    technologies: ["Python", "Django", "EJS", "Web Development", "SQL"],
  },
  {
    year: "Feb 2024 – Mar 2024",
    role: "AI & Cloud Intern",
    company: "Edunet Foundation (Virtual)",
    description: `Built and deployed an NLP chatbot using IBM Watson within a structured 4-week AI/ML programme. Applied conversational AI design patterns and cloud deployment strategies on IBM Cloud.`,
    technologies: ["NLP", "IBM Watson", "IBM Cloud", "AI", "Chatbot Development"],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────
// Ordered by impact: freelance client work first, then most technically complex,
// then AI projects, then supporting projects.

export const PROJECTS: Project[] = [
  {
    // NEW PROJECT — Anjani Beauties (freelance, real client, strongest signal)
    title: "Anjani Beauties — Freelance Client Project",
    image: project7,
    description:
      "A production website delivered for a real paying client — a bridal salon. Replaced their phone-only booking process with a full inquiry pipeline: multi-step bridal form, server-side validation, PostgreSQL lead storage, and automated email notifications via Nodemailer. Built with Next.js 14 App Router, Prisma ORM, Framer Motion animations, and Aceternity UI. Shipped with Docker (Node 20 LTS), GitHub Actions CI, and Husky pre-commit hooks. Live and serving customers.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Nodemailer",
      "Tailwind CSS",
      "Framer Motion",
      "Docker",
      "GitHub Actions",
      "Vercel",
    ],
    link: "https://anjanibeauties.online",
    githubLink: "https://github.com/pankajtyagi1601/anjani_beauties",
  },
  {
    // NEW PROJECT — CV Security (most technically complex)
    title: "CV Security — Face Recognition Access Control",
    image: project6,
    description:
      "Real-time face recognition access control system with multi-camera support running at ~30fps. Built a Python producer-consumer pipeline using threading and a thread-safe Queue — camera threads detect faces via dlib HOG and compare live 128D embeddings against a MongoDB encoding store. Redis Pub/Sub enables hot-reload on enrollment without restarting the pipeline. Solved a critical dlib Windows thread-safety crash under concurrent load using a shared threading.Lock. Flask serves an MJPEG live stream to a Next.js 15 dashboard with NextAuth.js JWT auth and SUPER_ADMIN / ADMIN role-based access.",
    technologies: [
      "Python",
      "OpenCV",
      "dlib",
      "face_recognition",
      "Flask",
      "Redis Pub/Sub",
      "MongoDB",
      "Next.js 15",
      "NextAuth.js",
      "Cloudinary",
      "Docker",
    ],
    link: "https://cv-security.vercel.app/",
    githubLink: "https://github.com/pankajtyagi1601/cv-security",
  },
  {
    // Sentinel V — resilience engineering showcase
    title: "Sentinel V — Microservices Governance Dashboard",
    image: project5,
    description:
      "A resilience-focused microservices monitoring dashboard that demonstrates how production systems handle failure, security threats, and high traffic. Features custom JWT authentication with Role-Based Access Control (RBAC), a Redis-backed rate limiter that blocks IPs exceeding 10 req/min with a 429 response, and a Circuit Breaker pattern that returns immediate fallbacks when the database goes offline — preventing cascading failures. Real-time traffic charts built with Recharts visualise request spikes and latency. Entire stack (React frontend, Fastify backend, PostgreSQL, Redis) runs in orchestrated Docker containers with Vercel CI/CD.",
    technologies: [
      "React (Vite)",
      "Fastify",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "JWT / RBAC",
      "Docker",
      "Docker Compose",
      "Recharts",
      "Axios",
      "Vercel",
    ],
    link: "https://sentinel-v.vercel.app/",
    githubLink: "https://github.com/pankajtyagi1601/sentinel-v",
  },
  {
    // Brain Notes AI
    title: "Brain Notes AI — RAG-Powered Notes App",
    image: project2,
    description:
      "An intelligent notes app where the AI answers questions from your own notes — not generic internet knowledge. Built with Retrieval Augmented Generation (RAG): when you ask a question, the system semantically searches your note corpus and passes the most relevant chunks as context to the LLM via OpenRouter API. Implemented real-time tool-calling with Vercel AI SDK v5 and a Convex backend, enabling the AI to fetch live note data mid-conversation. Designed for studying, research, and building a personal knowledge base.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Vercel AI SDK v5",
      "OpenRouter API",
      "RAG",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel",
    ],
    link: "https://brainic-ai.vercel.app/",
    githubLink: "https://github.com/pankajtyagi1601/Brain-Notes-AI",
  },
  {
    // Fin Morph AI
    title: "Fin Morph AI — Finance Management Platform",
    image: project1,
    description:
      "A personal finance management platform that cuts manual data entry by 50% through a receipt OCR and automated parsing pipeline — upload a receipt and the transaction is categorised and logged to PostgreSQL automatically. Features Clerk-based authentication with secure session management, an automated monthly budget report generator with data-driven insights, and a responsive dashboard with transaction categorisation, spending trend visualisation, and exportable financial summaries.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "PostgreSQL",
      "Gemini API",
      "React Email",
      "Tailwind CSS",
      "Vercel",
    ],
    link: "https://finmorph.vercel.app/",
    githubLink: "https://github.com/pankajtyagi1601/finMorphAI",
  },
  {
    // MERN Chat App
    title: "MERN Chat Application — Real-Time Messaging",
    image: project4,
    description:
      "A real-time chat application with user authentication, private messaging, and group chat. Built on the MERN stack with Socket.io for low-latency bidirectional communication and Redux for client-side state management. Features JWT-based authentication, secure session handling, and a scalable architecture deployed on Render.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "Redux",
      "JWT",
      "Render",
    ],
    link: "https://igluz-chatapp.onrender.com/",
    githubLink: "https://github.com/pankajtyagi1601/MERN-ChatApp",
  },
  {
    // Crypto Track
    title: "Crypto Track — Cryptocurrency Tracker",
    image: project3,
    description:
      "A comprehensive cryptocurrency tracking app with real-time price updates, portfolio management, and market trend analysis. Integrates live crypto APIs to display price changes, market cap, and volume data. Built with React and TypeScript for type-safe data handling, featuring interactive charts for visualising market trends and portfolio performance.",
    technologies: [
      "React.js",
      "TypeScript",
      "CoinGecko API",
      "Chart.js",
      "Tailwind CSS",
      "Vercel",
    ],
    link: "https://crpyto-track.vercel.app/",
    githubLink: "https://github.com/pankajtyagi1601/crpytoTrack",
  },
];

// ─── CONTACT ─────────────────────────────────────────────────────────────────

export const CONTACT: Contact = {
  address: "Delhi, India",
  phoneNo: "+91 84768 46209",
  email: "pankajtyagi1601@gmail.com",
};