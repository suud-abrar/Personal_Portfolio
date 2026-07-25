import React from "react";
import { ACCENT, AMBER } from "../constants";

export function GlobalStyles() {
  return (
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
  );
}
