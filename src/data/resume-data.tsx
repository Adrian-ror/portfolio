import {
  ConsultlyLogo,
} from "@/images/logos";


import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adrián Rodríguez Ríos",
  initials: "ARR",
  location: "A Coruña, Galicia, España",
  locationLink: "https://maps.app.goo.gl/TVnEWi65vHUMbFW98",
  about:
    "software engineer specialized in innovative and efficient solutions",
  summary:
    "As a software engineer, I provide innovative and functional technological solutions, designing robust and scalable applications and systems that meet client needs. With experience in various programming languages ​​and agile methodologies, I guarantee quality deliveries that drive business growth.",
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
        url: "https://www.linkedin.com/in/adri%C3%A1n-rodr%C3%ADguez-r%C3%ADos-82a1bb2b6/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Coruña",
      degree: "Degree in Computer Engineering",
      start: "2018",
      end: "2024",
    },
  ],
  skills: [
    "Java",
    "Spring Framework",
    "JavaScript",
    "React",
    "Node.js",
    "C/C#",
    "Python",
    "HTML",
    "CSS/TailwindCSS",
    "Git",
    "SQL",
    "MySql",
    "Erlang/Elixir",
    ".NET",
    "ASP.NET"
  ],
  work: [
    
  ],
  projects: [
    {
      title: "TaskLog",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to organize and manage your daily tasks",
      logo: ConsultlyLogo,
      link: {
        label: "task-log.com",
        href: "https://task-log-one.vercel.app/",
      },
    },
  ],
} as const;
