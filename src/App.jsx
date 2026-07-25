import React, { useState, useEffect } from "react";
import {
  Github,
  Send,
  Mail,
  ExternalLink,
  Terminal,
  ChevronRight,
  Code2,
  GraduationCap,
  Users,
  Award,
  Building2,
  BookOpen,
  Calendar,
  User,
  Tv,
  Smartphone,
  MessageSquare,
} from "lucide-react";

const ACCENT = "#4fd1c5";
const AMBER = "#f2b155";

function useTypewriter(lines, speed = 28, startDelay = 400) {
  const [output, setOutput] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeouts = [];

    const run = async () => {
      await new Promise((r) => (timeouts.push(setTimeout(r, startDelay)), 0));
      for (let i = 0; i < lines.length; i++) {
        const full = lines[i];
        for (let c = 0; c <= full.length; c++) {
          if (cancelled) return;
          await new Promise((r) => timeouts.push(setTimeout(r, speed)));
          setOutput((prev) => {
            const next = [...prev];
            next[i] = full.slice(0, c);
            return next;
          });
        }
      }
      if (!cancelled) setDone(true);
    };
    run();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { output, done };
}

const TerminalPrompt = ({ children, style }) => (
  <div
    style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 13,
      letterSpacing: "0.03em",
      color: ACCENT,
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 20,
      ...style,
    }}
  >
    <ChevronRight size={14} strokeWidth={2.5} />
    {children}
  </div>
);

const SectionLabel = ({ path, title }) => (
  <div style={{ marginBottom: 48 }}>
    <TerminalPrompt>{path}</TerminalPrompt>
    <h2
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "clamp(28px, 4vw, 40px)",
        fontWeight: 700,
        color: "#e8eef2",
        margin: 0,
        letterSpacing: "-0.02em",
      }}
    >
      {title}
    </h2>
    <div className="section-underline" />
  </div>
);

const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "HTML/CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Flask", "MySQL", "REST APIs"],
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

const projects = [
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

const about = {
  bullets: [
    {
      icon: GraduationCap,
      text: "Completed the Evangadi full-stack bootcamp (Node.js/Express, React)",
    },
    {
      icon: Code2,
      text: "Member of Shaggar Institute of Technology's software development team",
    },
  ],
};

const leadership = [
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

const achievements = [
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

const education = [
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

function Nav() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(12,17,22,0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #1e2830",
      }}
    >
      <div
        className="nav-row"
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14,
            color: "#e8eef2",
          }}
        >
          <span style={{ display: "flex", gap: 6 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#f2555a",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: AMBER,
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: ACCENT,
              }}
            />
          </span>
          <span style={{ marginLeft: 4 }}>suud@portfolio</span>
        </div>
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: 24,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: "#8ea0ac",
            overflowX: "auto",
            maxWidth: "100%",
          }}
        >
          {[
            "about",
            "skills",
            "education",
            "leadership",
            "projects",
            "contact",
          ].map((s) => (
            <a key={s} href={`#${s}`} className="nav-link">
              ./{s}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const lines = [
    "$ whoami",
    "Suud Gelan — full-stack developer, Addis Ababa, Ethiopia",
    "$ cat interests.txt",
    "full-stack web development · AI-powered applications · data",
    "$ ./run --status",
    "shippings full-stack products from research to production.",
  ];
  const { output, done } = useTypewriter(lines, 18, 300);

  return (
    <section
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "96px 24px 80px",
      }}
    >
      <div className="hero-eyebrow">
        <span className="hero-eyebrow-dot" /> available for internships &
        full-stack roles
      </div>

      <div className="hero-terminal">
        {lines.map((line, i) => {
          const isPrompt = line.startsWith("$");
          const shown = output[i] ?? "";
          return (
            <div
              key={i}
              style={{
                color: isPrompt ? "#8ea0ac" : "#e8eef2",
                fontWeight: isPrompt ? 400 : 500,
                marginBottom: isPrompt ? 2 : 14,
              }}
            >
              {shown}
              {i === output.length - 1 && !done && (
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 16,
                    background: ACCENT,
                    marginLeft: 2,
                    animation: "blink 1s steps(1) infinite",
                    verticalAlign: "text-bottom",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}
      >
        <a
          href="#projects"
          className="btn btn-solid hero-btn"
          style={{ background: ACCENT }}
        >
          view projects
        </a>
        <a href="#contact" className="btn btn-outline hero-btn">
          get in touch
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}
    >
      <SectionLabel path="cat ./about.md" title="About" />
      <div className="about-grid">
        <div>
          <div className="photo-row">
            <div className="photo-circle">
              <img
                src="/my-photo.jpg"
                alt="Suud — profile photo"
                className="photo-img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="photo-fallback" style={{ display: "none" }}>
                <User size={26} color="#5a6a75" />
                <span>add photo</span>
              </div>
            </div>
          </div>
          <p
            style={{
              color: "#c3ccd2",
              fontSize: 16,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            I'm a Software Engineering student at Shaggar Institute of
            Technology in Addis Ababa, originally from Waliso, Ethiopia. I
            completed high school at Oromia Development Association Boarding
            School (ODA SBS). I build full-stack web applications, automation
            pipelines, and AI-powered tools — from a Telegram bot that serves
            7,000+ students daily to a forum platform with an embedded AI
            assistant.
          </p>
          <p
            style={{
              color: "#8ea0ac",
              fontSize: 15,
              lineHeight: 1.8,
              marginTop: 18,
            }}
          >
            Alongside development, I'm interested in AI, data analysis, and
            cybersecurity, and I care about the reasoning behind a technical
            decision — not just the code that implements it.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {about.bullets.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="info-card"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "14px 16px",
                  background: "#0f151b",
                  border: "1px solid #1e2830",
                  borderRadius: 10,
                }}
              >
                <Icon
                  size={16}
                  color={ACCENT}
                  style={{ marginTop: 2, flexShrink: 0 }}
                />
                <span
                  style={{ color: "#c3ccd2", fontSize: 13.5, lineHeight: 1.5 }}
                >
                  {b.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}
    >
      <SectionLabel path="ls ./skills --grouped" title="Skills" />
      <div
        className="skills-grid"
        style={{
          display: "grid",
          gap: 20,
        }}
      >
        {skills.map((s, i) => (
          <div
            key={i}
            className="info-card"
            style={{
              background: "#0f151b",
              border: "1px solid #1e2830",
              borderRadius: 10,
              padding: "20px 20px 22px",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: AMBER,
                marginBottom: 14,
              }}
            >
              {s.group}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {s.items.map((item, j) => (
                <span
                  key={j}
                  className="skill-item"
                  style={{ color: "#c3ccd2", fontSize: 14 }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <div className="project-card" style={{ "--pcolor": project.color }}>
      <div
        className="project-card-top"
        style={{
          background: `linear-gradient(135deg, ${project.color}22, transparent 70%)`,
        }}
      >
        <div className="project-card-topbar">
          <span style={{ display: "flex", gap: 6 }}>
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </span>
          <span className="project-card-name">{project.name}</span>
          {project.demo && (
            <span className="live-badge">
              <span className="live-dot" />
              live
            </span>
          )}
        </div>

        <div className="project-card-heading">
          <div
            className="icon-badge"
            style={{
              background: `${project.color}22`,
              borderColor: `${project.color}55`,
            }}
          >
            <Icon size={20} color={project.color} />
          </div>
          <h3>{project.tagline}</h3>
        </div>
      </div>

      <div className="project-card-body">
        <p className="project-card-desc">{project.description}</p>

        <div className="project-card-highlights">
          {project.highlights.map((h, i) => (
            <div key={i} className="project-card-highlight">
              <span style={{ color: project.color }}>●</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        <div className="project-card-stack">
          {project.stack.map((t, i) => (
            <span
              key={i}
              className="stack-pill"
              style={{
                borderColor: `${project.color}45`,
                color: project.color,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github size={14} /> code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
              style={{ background: project.color }}
            >
              live demo <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}
    >
      <SectionLabel path="ls ./projects --list" title="Projects" />
      <div
        className="projects-grid"
        style={{
          display: "grid",
          gap: 28,
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}
    >
      <SectionLabel
        path="git log --oneline ./education"
        title="Education & training"
      />
      <div className="timeline">
        {education.map((e, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-dot" />
              {i !== education.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <div className="timeline-year">
                <Calendar size={12} />
                {e.year}
              </div>
              <div
                style={{
                  color: "#e8eef2",
                  fontSize: 15.5,
                  fontWeight: 700,
                  margin: "4px 0 7px",
                }}
              >
                {e.title}
              </div>
              <div
                style={{ color: "#8ea0ac", fontSize: 13.5, lineHeight: 1.75 }}
              >
                {e.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section
      id="leadership"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}
    >
      <SectionLabel
        path="ps aux | grep leadership"
        title="Leadership & mentoring"
      />
      <div
        className="leadership-grid"
        style={{
          display: "grid",
          gap: 16,
        }}
      >
        {leadership.map((l, i) => {
          const Icon = l.icon;
          const Wrapper = l.link ? "a" : "div";
          return (
            <Wrapper
              key={i}
              className="info-card"
              {...(l.link
                ? { href: l.link, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              style={{
                display: "block",
                background: "#0f151b",
                border: "1px solid #1e2830",
                borderRadius: 10,
                padding: "18px 20px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    background: `${ACCENT}1f`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={14} color={ACCENT} />
                </div>
                <span
                  style={{ color: "#e8eef2", fontSize: 14.5, fontWeight: 600 }}
                >
                  {l.role}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11.5,
                  color: AMBER,
                  marginBottom: 8,
                }}
              >
                {l.org}
              </div>
              <div style={{ color: "#8ea0ac", fontSize: 13, lineHeight: 1.6 }}>
                {l.detail}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}>
      <SectionLabel path="cat ./achievements.log" title="Achievements" />
      <div
        className="achievements-grid"
        style={{
          display: "grid",
          gap: 16,
        }}
      >
        {achievements.map((a, i) => (
          <div
            key={i}
            className="info-card"
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              background: "#0f151b",
              border: "1px solid #1e2830",
              borderRadius: 10,
              padding: "16px 18px",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: `${AMBER}1f`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Award size={14} color={AMBER} />
            </div>
            <div>
              <div
                style={{
                  color: "#e8eef2",
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                {a.title}
              </div>
              <div style={{ color: "#8ea0ac", fontSize: 13 }}>{a.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xlgqogog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert("Something went wrong — please try again or email me directly.");
      }
    } catch {
      alert("Something went wrong — please try again or email me directly.");
    }
  };

  return (
    <section
      id="contact"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px 100px" }}
    >
      <SectionLabel path="./contact --new" title="Get in touch" />

      <div className="contact-grid" style={{ display: "grid", gap: 40 }}>
        <div>
          <p
            style={{
              color: "#8ea0ac",
              fontSize: 15,
              lineHeight: 1.8,
              margin: "0 0 24px",
            }}
          >
            Open to internships, collaborations, and interesting problems. Reach
            out directly, or find me here:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href="https://t.me/scholarscorner1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Send size={16} color={ACCENT} /> Scholars' Corner (Telegram)
            </a>
            <a
              href="https://github.com/suud-abrar"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Github size={16} color={ACCENT} /> GitHub
            </a>
            <a href="mailto:suudabrar0@gmail.com" className="contact-link">
              <Mail size={16} color={ACCENT} /> Email
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          {sent ? (
            <div style={{ textAlign: "center", padding: "30px 0" }}>
              <div
                style={{
                  color: ACCENT,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 14,
                }}
              >
                $ message sent ✓
              </div>
              <p style={{ color: "#8ea0ac", fontSize: 13, marginTop: 10 }}>
                Thanks for reaching out — I'll reply soon.
              </p>
            </div>
          ) : (
            <>
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
              />
              <textarea
                required
                placeholder="Your message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
              <button
                type="submit"
                className="btn btn-solid"
                style={{
                  background: ACCENT,
                  justifyContent: "center",
                  padding: "12px 0",
                }}
              >
                send message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  background: "#0c1116",
  border: "1px solid #1e2830",
  borderRadius: 7,
  padding: "11px 14px",
  color: "#e8eef2",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1e2830", padding: "28px 24px" }}>
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          color: "#5a6a75",
        }}
      >
        <span>suud — Addis Ababa, Ethiopia</span>
        <span>built with React</span>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div
      style={{
        background: "#0c1116",
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-grid" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');
        @keyframes blink { 50% { opacity: 0; } }

        * { box-sizing: border-box; }
        input::placeholder, textarea::placeholder { color: #5a6a75; }
        input:focus, textarea:focus { border-color: ${ACCENT} !important; box-shadow: 0 0 0 3px ${ACCENT}1a !important; }

        /* ---- ambient background ---- */
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(#1a232c 1px, transparent 1px),
            linear-gradient(90deg, #1a232c 1px, transparent 1px);
          background-size: 56px 56px;
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 75%);
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 75%);
          opacity: 0.35;
          pointer-events: none;
          z-index: 0;
        }
        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .bg-glow-1 {
          width: 480px;
          height: 480px;
          top: -160px;
          left: -100px;
          background: ${ACCENT};
          opacity: 0.12;
        }
        .bg-glow-2 {
          width: 420px;
          height: 420px;
          top: 380px;
          right: -140px;
          background: ${AMBER};
          opacity: 0.08;
        }
        section, header, footer, nav { position: relative; z-index: 1; }

        /* ---- reusable hover-lift info card ---- */
        .info-card {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .info-card:hover {
          transform: translateY(-3px);
          border-color: #34424e;
          box-shadow: 0 14px 30px -16px rgba(0, 0, 0, 0.6);
        }

        /* ---- photo placeholder ---- */
        .photo-row { display: flex; justify-content: flex-start; margin-bottom: 22px; }
        .photo-circle {
          position: relative;
          width: 128px;
          height: 128px;
          border-radius: 50%;
          border: 2px solid ${ACCENT};
          background: #131a22;
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .photo-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .photo-fallback {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: #5a6a75;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* ---- responsive grids (desktop defaults) ---- */
        .about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; }
        .skills-grid { grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); }
        .projects-grid { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
        .clone-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
        .leadership-grid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
        .achievements-grid { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
        .contact-grid { grid-template-columns: 1fr 1fr; }

        .nav-links { scrollbar-width: none; }
        .nav-links::-webkit-scrollbar { display: none; }
        .nav-link {
          position: relative;
          color: #8ea0ac;
          text-decoration: none;
          white-space: nowrap;
          padding-bottom: 3px;
          transition: color 0.2s ease;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1.5px;
          background: ${ACCENT};
          transition: width 0.2s ease;
        }
        .nav-link:hover { color: ${ACCENT}; }
        .nav-link:hover::after { width: 100%; }

        /* ---- project cards: the showcase of the site ---- */
        .project-card {
          position: relative;
          background: #0f151b;
          border: 1px solid #1e2830;
          border-radius: 14px;
          overflow: hidden;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--pcolor);
          opacity: 0.9;
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--pcolor);
          box-shadow: 0 24px 48px -20px rgba(0, 0, 0, 0.65), 0 0 0 1px var(--pcolor);
        }
        .project-card-top {
          padding: 18px 22px 20px;
          border-bottom: 1px solid #1e2830;
        }
        .project-card-topbar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: #2a3540; }
        .project-card-name {
          font-family: "JetBrains Mono", monospace;
          font-size: 12.5px;
          color: #8ea0ac;
        }
        .live-badge {
          margin-left: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "JetBrains Mono", monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #4ade80;
          background: rgba(74, 222, 128, 0.12);
          border: 1px solid rgba(74, 222, 128, 0.3);
          padding: 3px 9px;
          border-radius: 20px;
        }
        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          animation: livepulse 1.7s infinite;
        }
        @keyframes livepulse {
          0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.55); }
          70% { box-shadow: 0 0 0 7px rgba(74, 222, 128, 0); }
          100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }
        .project-card-heading { display: flex; align-items: center; gap: 14px; }
        .icon-badge {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .project-card-heading h3 {
          margin: 0;
          font-size: 17px;
          font-weight: 700;
          color: #f1f5f8;
          line-height: 1.4;
        }
        .project-card-body { padding: 22px 22px 24px; }
        .project-card-desc { color: #8ea0ac; font-size: 14px; line-height: 1.75; margin: 0 0 16px; }
        .project-card-highlights { display: flex; flex-direction: column; gap: 7px; margin-bottom: 18px; }
        .project-card-highlight {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          color: #c3ccd2;
          font-size: 13px;
          line-height: 1.6;
        }
        .project-card-highlight span:first-child { font-size: 8px; margin-top: 6px; flex-shrink: 0; }
        .project-card-stack { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
        .stack-pill {
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 5px;
          border: 1px solid;
        }
        .project-card-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: "JetBrains Mono", monospace;
          font-size: 12.5px;
          font-weight: 700;
          padding: 10px 16px;
          border-radius: 7px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          appearance: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .btn:hover { opacity: 0.85; transform: translateY(-1px); }
        .btn-outline { border: 1px solid #2a3540; color: #c3ccd2; }
        .btn-solid { color: #08151a; }
        .hero-btn { padding: 12px 22px; font-size: 13.5px; }
        .btn-solid.hero-btn:hover { box-shadow: 0 8px 24px -8px ${ACCENT}; }

        /* ---- hero ---- */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          color: #8ea0ac;
          background: #0f151b;
          border: 1px solid #1e2830;
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 24px;
        }
        .hero-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          animation: livepulse 1.7s infinite;
        }
        .hero-terminal {
          background: #0f151b;
          border: 1px solid #1e2830;
          border-radius: 12px;
          padding: 28px 32px;
          font-family: "JetBrains Mono", monospace;
          font-size: clamp(13px, 1.8vw, 16px);
          line-height: 1.9;
          min-height: 230px;
          box-shadow: 0 30px 60px -30px rgba(79, 209, 197, 0.15);
        }

        /* ---- section underline ---- */
        .section-underline {
          width: 46px;
          height: 3px;
          border-radius: 2px;
          margin-top: 14px;
          background: linear-gradient(90deg, ${ACCENT}, ${AMBER});
        }

        /* ---- contact ---- */
        .contact-link {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #c3ccd2;
          text-decoration: none;
          font-size: 14px;
          width: fit-content;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .contact-link:hover { color: #f1f5f8; transform: translateX(3px); }
        .contact-form {
          background: #0f151b;
          border: 1px solid #1e2830;
          border-radius: 12px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-shadow: 0 30px 60px -34px rgba(0, 0, 0, 0.7);
        }
        .timeline { display: flex; flex-direction: column; }
        .timeline-item { display: flex; gap: 20px; }
        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: 14px;
        }
        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #0f151b;
          border: 2px solid ${ACCENT};
          flex-shrink: 0;
          margin-top: 4px;
        }
        .timeline-line { flex: 1; width: 2px; background: #1e2830; margin-top: 4px; }
        .timeline-content { padding-bottom: 34px; }
        .timeline-year {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          color: ${ACCENT};
        }

        /* ---- skill items ---- */
        .skill-item { display: flex; align-items: center; gap: 8px; }
        .skill-item::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #3a4a56;
        }

        /* ---- tablet & below ---- */
        @media (max-width: 760px) {
          .about-grid { grid-template-columns: 1fr; gap: 32px; }
          .contact-grid { grid-template-columns: 1fr; gap: 28px; }
          .projects-grid { grid-template-columns: 1fr; }
        }

        /* ---- phones ---- */
        @media (max-width: 560px) {
          .nav-links { gap: 14px !important; font-size: 12px !important; }
          .leadership-grid,
          .achievements-grid,
          .clone-grid,
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .photo-circle { width: 104px; height: 104px; }
          section { padding-left: 18px !important; padding-right: 18px !important; }
        }

        @media (max-width: 400px) {
          .nav-links { gap: 10px !important; font-size: 11px !important; }
        }
      `}</style>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Leadership />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
