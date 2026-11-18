
import {
  RxGithubLogo,
  RxInstagramLogo,
} from "react-icons/rx";

// ==========================================
// CORE TECHNOLOGIES
// ==========================================

export const SKILL_DATA = [
  { skill_name: "HTML", image: "html.png", width: 65, height: 65 },
  { skill_name: "CSS", image: "css.png", width: 65, height: 65 },
  { skill_name: "JavaScript", image: "js.png", width: 60, height: 60 },
  { skill_name: "TypeScript", image: "ts.png", width: 65, height: 65 },
] as const;

// ==========================================
// FRONTEND
// ==========================================

export const FRONTEND_SKILL = [
  { skill_name: "React", image: "react.png", width: 65, height: 65 },
  { skill_name: "Next.js", image: "next.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 65, height: 65 },
  { skill_name: "Framer Motion", image: "framer.png", width: 65, height: 65 },
] as const;

// ==========================================
// BACKEND AND DATABASE
// ==========================================

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 65, height: 65 },
  { skill_name: "Firebase", image: "firebase.png", width: 55, height: 55 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 50, height: 50 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 60, height: 60 },
  { skill_name: "MySQL", image: "mysql.png", width: 60, height: 60 },
] as const;

// ==========================================
// FULL STACK
// ==========================================

export const FULLSTACK_SKILL = [
  { skill_name: "Express.js", image: "express.png", width: 65, height: 65 },
  { skill_name: "Docker", image: "docker.png", width: 65, height: 65 },
] as const;

// ==========================================
// OTHER TECHNOLOGIES
// ==========================================

export const OTHER_SKILL = [
  { skill_name: "React Native", image: "reactnative.png", width: 60, height: 60 },
] as const;

// ==========================================
// SOCIAL LINKS
// ==========================================

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/NaitikRaghav",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/__naitikraghav/",
  },
] as const;

// ==========================================
// PERSONAL PROJECTS
// ==========================================

export const PROJECTS = [
  {
    title: "Edusync",
    category: "Academic Technology",
    number: "01",
    description:
      "An attendance and feedback recording system designed to simplify academic management. It focuses on digital attendance tracking, feedback management and institutional workflows. Patent published.",
    image: "/projects/project-1.png",
    link: "https://github.com/NaitikRaghav",
    technologies: [
      "Attendance Management",
      "Feedback System",
      "Academic Technology",
      "Security",
    ],
  },
  {
    title: "QR Attendance System",
    category: "Full-Stack Application",
    number: "02",
    description:
      "A timetable-driven attendance platform using dynamic QR codes, periodic token refresh, GPS geofencing and device binding to reduce proxy attendance.",
    image: "/projects/project-2.png",
    link: "https://github.com/NaitikRaghav",
    technologies: [
      "Flutter",
      "Supabase",
      "Dynamic QR",
      "GPS Geofencing",
    ],
  },
  {
    title: "WildGuard AI",
    category: "Artificial Intelligence",
    number: "03",
    description:
      "An AI-powered wildlife surveillance system using computer vision and YOLOv8 for wildlife detection and fire monitoring.",
    image: "/projects/project-3.png",
    link: "https://github.com/NaitikRaghav",
    technologies: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Computer Vision",
    ],
  },
  {
    title: "MediGuard AI",
    category: "Agentic AI",
    number: "04",
    description:
      "A multi-agent medication adherence assistant built using LangGraph, LangChain and Groq's Llama 3.3 model. It helps organize medication schedules, understand patient responses and identify potential health risks.",
    image: "/projects/project-1.png",
    link: "https://github.com/NaitikRaghav",
    technologies: [
      "LangGraph",
      "LangChain",
      "Groq",
      "Llama 3.3",
      "Google Colab",
    ],
  },
] as const;

// ==========================================
// FOOTER
// ==========================================

export const FOOTER_DATA = [
  {
    title: "Development",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/NaitikRaghav",
      },
    ],
  },
  {
    title: "Social",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/__naitikraghav/",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email",
        icon: null,
        link: "mailto:naitikrghv@gmail.com",
      },
      {
        name: "GitHub Profile",
        icon: null,
        link: "https://github.com/NaitikRaghav",
      },
    ],
  },
] as const;

// ==========================================
// NAVIGATION
// ==========================================

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

// ==========================================
// PERSONAL LINKS
// ==========================================

export const LINKS = {
  sourceCode: "https://github.com/NaitikRaghav",
};
