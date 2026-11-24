import {
  Terminal,
  Code2,
  GraduationCap,
  Users,
  Building2,
  BookOpen,
  Send,
  Tv,
  Smartphone,
  MessageSquare,
} from "lucide-react";
import { ACCENT, AMBER } from "../constants";

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "HTML/CSS", "Bootstrap/media queries"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Flask", "MySQL", "REST APIs", "AI API integration"],
  },
  {
    group: "Tools & platforms",
    items: [
      "Git/GitHub",
      "GitHub Actions",
      "Gemini API",
      "OAuth",
      "Figma",
      "Adobe XD",
    ],
  },
];

export const projects = [
  {
    id: "cemx",
    name: "cemx",
    tagline:
      "Market platform connecting cement sellers directly with factories",
    description:
      "A research-driven platform built at the STEMPower Center after conducting 20+ interviews with cement buyers and sellers in my community. CemX removes intermediaries from the cement supply chain across three components: a factory-facing desktop app, an SMS ordering system for users without smartphones, and a regulator app for government cement controllers to oversee pricing and taxation.",
    stack: ["Java", "Figma", "SMS Gateway"],
    highlights: [
      "Backed by original field research: 20+ buyer/seller interviews",
      "Three linked applications serving factories, users, and regulators",
      "Designed SMS ordering so non-smartphone users can still participate",
    ],
    icon: Building2,
    color: ACCENT,
    github: "https://github.com/suud-abrar/CEM-X",
    demo: null,
  },
  {
    id: "bookworm",
    name: "bookworm",
    tagline:
      "Library management system built for my school's ICT Club — ranked #1 project",
    description:
      "A desktop and web system that replaced a broken manual library process. Librarians manage inventory, register books, track borrowers, and get automatic SMS alerts when a return deadline passes. Built independently, end to end, while teaching myself Python.",
    stack: ["Python", "Flask", "Tkinter", "MySQL", "HTML/CSS", "Adobe XD"],
    highlights: [
      "Ranked first among 16 projects in a school-wide ICT competition",
      "Automatic SMS notifications for overdue returns",
      "Companion web app for browsing the book catalog",
    ],
    icon: BookOpen,
    color: AMBER,
    github: "https://github.com/suud-abrar/library",
    demo: null,
  },
  {
    id: "ai-forum-platform",
    name: "ai-powered-forum-project",
    tagline: "Full-stack Q&A forum with an embedded AI assistant",
    description:
      "A team-built forum platform with a Node/Express backend and a React/Vite frontend. Features a floating AI chatbot widget, Google OAuth sign-in, and a forgot-password email flow. Simplified an early vector-embedding search into a lighter keyword-based approach after real-world constraints made the original design impractical.",
    stack: ["React", "Vite", "Express", "Node.js", "Google OAuth"],
    highlights: [
      "Floating AI chatbot widget powered by the Gemini API",
      "Google OAuth authentication and forgot-password flow",
      "Resolved deep Git conflicts and auth-context bugs as a team",
    ],
    icon: Code2,
    color: ACCENT,
    github: "https://github.com/suud-abrar/ai-powered-forum-project",
    demo: "https://ai-powered-forum-project.onrender.com",
  },
  {
    id: "scholars-corner-bot",
    name: "scholars-corner-bot",
    tagline:
      "Automated study content pipeline for a 7,000+ subscriber Telegram channel",
    description:
      "A Node.js automation system that generates and posts daily AI-written study notes and quiz polls to Scholars' Corner, a Telegram channel I founded to give students with limited access to learning materials free educational resources. Built with modular architecture: text chunking, queue management, content generation, and scheduled posting.",
    stack: ["Node.js", "Gemini API", "GitHub Actions", "Telegram Bot API"],
    highlights: [
      "Runs unattended on a daily schedule via GitHub Actions",
      "Modular pipeline separating generation, queueing, and delivery",
      "Debugged persistent state-commit issues in CI to keep progress in sync",
    ],
    icon: Send,
    color: AMBER,
    github:
      "https://github.com/suud-abrar/automated-Telegram-channel-agent-----scholars-corner-bot",
    demo: "https://t.me/scholarscorner1",
  },
  {
    id: "netflix-clone",
    name: "netflix-clone",
    tagline: "Front-end recreation of the Netflix browsing experience",
    description:
      "A pixel-oriented clone of Netflix's browsing UI — built to sharpen front-end fundamentals: responsive layouts, hover-preview carousels, and a component structure that mirrors a real streaming catalog.",
    stack: ["React", "CSS", "REST API"],
    highlights: [
      "Responsive row-based carousel layout matching the real product",
      "Component-driven structure for reusable content rows",
    ],
    icon: Tv,
    color: "#e74c5c",
    github: "https://github.com/suud-abrar/Movie-Streaming-DB",
    demo: "https://movies-streaming-clone.netlify.app/",
  },
  {
    id: "apple-clone",
    name: "apple-clone",
    tagline: "Pixel-oriented recreation of the Apple product landing page",
    description:
      "A front-end clone of Apple's product landing page, focused on precise spacing, scroll-based transitions, and typography — the kind of detail-oriented UI work that's hard to fake without practicing it directly.",
    stack: ["HTML/CSS", "JavaScript"],
    highlights: [
      "Scroll-triggered animations matching the original site's feel",
      "Careful attention to spacing, type scale, and layout precision",
    ],
    icon: Smartphone,
    color: "#8ea0ac",
    github: "https://github.com/suud-abrar/appleClone",
    demo: "https://your-apple-clone-demo.vercel.app",
  },
  {
    id: "chatgpt-clone",
    name: "chatgpt-clone",
    tagline: "AI-powered full-stack chat application",
    description:
      "A full-stack ChatGPT-style chat app with a real backend behind it — message streaming, conversation state, and an AI API integration, built to understand the full request/response lifecycle of an AI chat product rather than just the UI shell.",
    stack: ["React", "Node.js", "Express", "AI API"],
    highlights: [
      "Full request/response chat lifecycle, not just a static UI",
      "Persisted conversation state across sessions",
    ],
    icon: MessageSquare,
    color: ACCENT,
    github: "https://github.com/suud-abrar/ChatGPT-Clone",
    demo: "https://chatptclone-frontend.onrender.com",
  },
];

export const about = {
  bullets: [
    {
      icon: GraduationCap,
      text: "Completed the Evangadi full-stack bootcamp (Node.js/Express, React)",
    },
    {
      icon: Code2,
      text: "Completed Dr. Angela Yu’s online bootcamp, one of the most popular and highest-rated web development courses on Udemy",
    },
  ],
};

export const leadership = [
  {
    role: "Leader & Instructor, ICT Club",
    org: "School Tech Society · 2025",
    detail: "Taught 40 students Python, algorithms, and backend development.",
    icon: Terminal,
  },
  {
    role: "Co-Founder, Teacher & Mentor, AddisCoder Spark",
    org: "2024",
    detail:
      "Taught 87 students Python and algorithms in a free two-week summer program.",
    icon: Users,
  },
  {
    role: "Teacher & Mentor, Science and Technology Club",
    org: "School STEM Initiative · 2023–2024",
    detail:
      "Taught 30+ students the fundamentals of electronics and core physics principles, leading hands-on circuit simulations with virtual software.",
    icon: BookOpen,
  },
  {
    role: "Chief Financial Officer, The Stooping Club",
    org: "ethiopiastooping.org",
    detail:
      "Directed $8K in logistics for the distribution of refurbished electronics, assisting 10+ students. Led fundraising and optimized budget allocation.",
    icon: Building2,
    link: "https://www.ethiopiastooping.org",
  },
];

export const achievements = [
  {
    title: "National University Entrance Exam — Top 0.1% nationwide",
    detail: "Scored 542.25/600 (2025)",
  },
  {
    title: "AddisCoder 2024 — 5th place nationally",
    detail: "Out of 100+ selected students in the final coding competition",
  },
  {
    title: "ICT Club Project Champion",
    detail: "Bookworm ranked 1st among 16 school-wide project submissions",
  },
  {
    title: "Ibn Khaldun Stars Award — Silver medalist",
    detail: "Awarded by MS-League for university entrance performance",
  },
];

export const education = [
  {
    year: "2023",
    title: "Student & Trainee, STEM Power Inc.",
    detail:
      "Learned C++, then Java, plus embedded systems — integrating hardware and software with Arduino. Served as researcher and author on a study of the cement market in Ethiopia, which became the foundation for CemX.",
  },
  {
    year: "2024",
    title: "Student, AddisCoder",
    detail:
      "Four-week intensive summer coding program taught by professors from top U.S. universities, including Prof. Jelani Nelson (UC Berkeley), the program's founder. Built strong Python fundamentals and worked through advanced algorithms.",
  },
  {
    year: "2025–2026",
    title: "Full-Stack Web Development, Udemy (Dr. Angela Yu)",
    detail:
      "Supplementary self-driven coursework covering full-stack web development fundamentals, alongside the Evangadi bootcamp.",
  },
  {
    year: "2025–2026",
    title: "Full-Stack Bootcamp, Evangadi",
    detail:
      "Six-month program building web development skills from fundamentals to advanced Node.js (Express) and React.",
  },
];
