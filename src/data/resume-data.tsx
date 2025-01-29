import {
  ConsultlyLogo,
  TaskLog,
  CommerceHub
} from "@/images/logos";


import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adrián Rodríguez Ríos",
  initials: "ARR",
  location: "A Coruña, Galicia, España",
  locationLink: "https://maps.app.goo.gl/TVnEWi65vHUMbFW98",
  about:
    "Junior Software Engineer",
  summary:
    "As a Junior Software Engineer, I am passionate about creating innovative and scalable solutions to real-world problems. With a solid foundation in programming languages like Java and JavaScript, and frameworks such as Spring and React, I focus on developing efficient and user-friendly applications. I enjoy working on both backend and frontend development, but my true passion lies in backend development, where I can build systems that are reliable and meet performance needs. I am eager to improve my skills through hands-on projects, collaborating with more experienced team members, and gradually taking on new challenges. My goal is to grow professionally and contribute effectively to projects while gaining a deeper understanding of technologies and best practices.",
  avatarUrl: "/profile_photo.jpeg",
  contact: {
    email: "adrianror@gmail.com",
    tel: "+34629069409",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Adrian-ror",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rodr%C3%ADguez-r%C3%ADos-adri%C3%A1n/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Coruña",
      degree: "Degree in Computer Engineering",
      start: "2019",
      end: "2024",
    },
  ],
  skills: [
    // Programming Languages
    "Java",
    "JavaScript",
    "Python",
    "C/C#",
    "Erlang/Elixir",

    // Frontend Development
    "React",
    "HTML",
    "CSS/TailwindCSS",

    // Backend Development
    "Spring Framework",
    "Node.js",
    ".NET",
    "ASP.NET",

    // Databases
    "SQL",
    "MySql",

    // Version Control
    "Git"
  ],

  work: [
    
  ],
  projects: [
    {
      title: "TaskLog",
      techStack: [
        "Side Project",
        "Vite",
        "JavaScript",
        "Zustand",
        "React",
        "TailwindCSS"
      ],
      description: "A platform to streamline and manage your daily tasks, helping you stay organized and productive by offering intuitive tools for task tracking, scheduling, and prioritization.",
      logo: TaskLog,
      link: {
        label: "task-log.com",
        href: "https://task-log-one.vercel.app/",
      },
    },
    {
      title: "CommerceHub",
      techStack: [
        "Side Project",
        "MySQL",
        "Java",
        "Spring Boot",
        "Vite",
        "JavaScript",
        "Zustand",
        "React",
        "TailwindCSS",
        "Stripe (API)",
        "ImgBB (API)"
      ],
      description: "An e-commerce platform designed to offer a seamless shopping experience, where users can browse, purchase, and manage products with ease.",
      logo: CommerceHub,
      link: {
        label: "task-log.com",
        href: "https://tfg-frontend-alpha.vercel.app/",
      },
    },

  ],
} as const;
