import React, { useState, useEffect } from "react";
import { Mail, Phone, ExternalLink, ArrowUpRight, Menu, X } from "lucide-react";

const c = {
  bg: "#0f1115",
  panel: "#15181e",
  elevated: "#1a1e26",
  border: "#262b34",
  text: "#e6e8eb",
  dim: "#9aa1ac",
  faint: "#5b6270",
  accent: "#5eead4",
  accentSoft: "#5eead422",
};

function Github({ size = 18, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.42.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}
function Linkedin({ size = 18, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const projects = [
  {
    name: "JobFollower",
    color: "#ef4444",
    tagline: "A drag-and-drop Kanban board for tracking job applications, with full JWT auth",
    stack: ["ASP.NET Core", "PostgreSQL", "React", "TypeScript", "@dnd-kit"],
    github: "https://github.com/KKondor/JobFollower",
    demo: "https://job-follower.vercel.app",
    bullets: [
      "Built JWT auth with hashed passwords and rotating, single-use refresh tokens stored server-side",
      "Designed a Kanban board with drag-and-drop status updates, backed by ownership-scoped REST endpoints",
      "Deployed as three independent services: React frontend, ASP.NET API, and PostgreSQL",
      "Layered the API with Repository → Service → Endpoint separation and DTOs to keep sensitive fields out of responses",
    ],
  },
  {
    name: "TodoWeb",
    color: "#5eead4",
    tagline: "Full-stack task manager with a .NET API and React frontend",
    stack: ["ASP.NET Core", "Entity Framework", "SQL Server", "React", "xUnit"],
    github: "https://github.com/KKondor/Todoweb",
    demo: "https://todoweb-tau.vercel.app",
    bullets: [
      "Designed a RESTful .NET backend with a React (Vite) frontend",
      "Built the data layer with EF Core, including migrations and SQL Server integration",
      "Covered backend logic with xUnit and Moq unit tests",
      "Documented and tested the API with Swagger UI",
    ],
  },
  {
    name: "Weather Web App",
    color: "#a78bfa",
    tagline: "A layered Angular + Spring Boot app wrapping a third-party weather API",
    stack: ["Java 17", "Spring Boot", "Angular", "TypeScript", "Gradle"],
    github: "https://github.com/KKondor/WeatherWebApp",
    demo: "https://weather-web-app-rose-one.vercel.app",
    bullets: [
      "Built a Spring Boot API layer so the frontend never talks to the external service directly",
      "Normalized OpenWeatherMap data behind stable DTOs to insulate the frontend from API changes",
      "Kept API keys server-side only, with unified JSON error handling",
      "Used modern Angular: standalone components, signals, zoneless change detection",
    ],
  },
  {
    name: "Restaurant Webshop",
    color: "#fbbf24",
    tagline: "A team-built ordering platform with an AI chatbot, 4 developers",
    stack: ["Python", "Flask", "MySQL", "HTML/CSS", "OpenRouter API"],
    github: "https://github.com/KKondor/RestaurantWebshop",
    demo: null,
    bullets: [
      "Owned the UI (HTML/CSS) as primary responsibility, plus backend and database work",
      "Designed the MySQL schema and stored procedures for orders, users, and food items",
      "Built user authentication and an admin panel for managing orders and food",
      "Integrated an AI chatbot via the OpenRouter API",
    ],
  },
];

const skillGroups = [
  { title: "Languages", items: ["C#", "Java", "Python", "JavaScript", "TypeScript", "C++"] },
  { title: "Backend", items: ["ASP.NET", "Entity Framework", "OOP", "SQL", "MySQL", "PostgreSQL"] },
  { title: "Frontend", items: ["Angular", "React", "HTML", "CSS", "SASS"] },
  { title: "Tools", items: ["Git & GitHub", "Linux", "Swagger", "Unit Testing"] },
];

const certifications = [
  { name: "IT Specialist — Software Development", org: "Certiport (Pearson VUE), 2026", url: "https://www.credly.com/badges/e275b481-7d24-4f55-8357-8d818f74873f/public_url" },
  { name: "IT Specialist — Python", org: "Certiport (Pearson VUE), 2026", url: "https://www.credly.com/badges/3b3b4e72-ba01-499e-a7be-67ee1872e36b/public_url" },
  { name: "IT Specialist — HTML and CSS", org: "Certiport (Pearson VUE), 2026", url: "https://www.credly.com/badges/da2f4038-813f-4843-a922-362fcd0f34bb/public_url" },
  { name: "IT Specialist — Java", org: "Certiport (Pearson VUE), 2026", url: "https://www.credly.com/badges/2980f83d-4019-418d-aba9-48a1de5a3317/public_url" },
  { name: "Unity Certified User: Programmer", org: "Unity Technologies, 2026", url: "https://www.credly.com/badges/44e0e885-f441-45e4-9417-9e847aa2cb01/public_url" },
];

const stats = [
  { value: "4", label: "Shipped projects" },
  { value: "5", label: "Certifications" },
  { value: "2026", label: "Graduated" },
];

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="kk-section">
      {eyebrow && <div className="kk-eyebrow">{eyebrow}</div>}
      {title && <h2 className="kk-h2">{title}</h2>}
      {children}
    </section>
  );
}

function Tag({ children }) {
  return <span className="kk-tag">{children}</span>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="kk-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .kk-root {
          width: 100%;
          min-height: 100vh;
          background: ${c.bg};
          color: ${c.text};
          font-family: 'Inter', sans-serif;
        }
        .kk-root * { box-sizing: border-box; }
        .kk-root a { text-decoration: none; }
        .kk-root button { font-family: inherit; background: none; border: none; cursor: pointer; }
        html { scroll-behavior: smooth; }
        .kk-root ::-webkit-scrollbar { width: 10px; }
        .kk-root ::-webkit-scrollbar-thumb { background: ${c.border}; border-radius: 5px; }

        /* Nav */
        .kk-nav {
          position: sticky; top: 0; z-index: 20;
          backdrop-filter: blur(10px);
          transition: all .2s ease;
        }
        .kk-nav.scrolled { background: rgba(15,17,21,0.85); border-bottom: 1px solid ${c.border}; }
        .kk-nav-inner {
          max-width: 960px; margin: 0 auto; padding: 0 24px;
          height: 64px; display: flex; align-items: center; justify-content: space-between;
        }
        .kk-logo { font-weight: 600; letter-spacing: -0.02em; color: ${c.text}; font-family: 'JetBrains Mono', monospace; font-size: 15px; }
        .kk-nav-links { display: none; align-items: center; gap: 32px; }
        .kk-nav-link { font-size: 14px; color: ${c.dim}; }
        .kk-nav-cta {
          font-size: 14px; padding: 10px 20px; border-radius: 999px; font-weight: 500;
          background: ${c.accent}; color: ${c.bg}; transition: filter .15s ease, transform .15s ease;
        }
        .kk-nav-cta:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .kk-menu-btn { display: block; color: ${c.text}; }
        .kk-mobile-menu { display: flex; flex-direction: column; gap: 4px; padding: 0 24px 16px; border-top: 1px solid ${c.border}; }
        .kk-mobile-link { text-align: left; padding: 8px 0; font-size: 14px; color: ${c.dim}; }

        @media (min-width: 768px) {
          .kk-nav-links { display: flex; }
          .kk-menu-btn { display: none; }
        }

        /* Hero */
        .kk-hero { max-width: 960px; margin: 0 auto; padding: 64px 24px 48px; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .kk-badge { display: inline-block; font-size: 12px; font-weight: 500; padding: 4px 12px; border-radius: 999px; margin-bottom: 24px; background: ${c.elevated}; color: ${c.dim}; border: 1px solid ${c.border}; }
        .kk-title { font-size: 36px; font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 16px; }
        .kk-role { font-size: 19px; margin: 0 0 24px; color: ${c.accent}; }
        .kk-desc { max-width: 640px; font-size: 16px; line-height: 1.7; margin: 0 auto 32px; color: ${c.dim}; }
        .kk-btn-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 56px; }
        .kk-btn {
          display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500;
          padding: 10px 20px; border-radius: 999px; border: 1px solid ${c.border}; color: ${c.text};
          transition: transform .15s ease, border-color .15s ease;
        }
        .kk-btn:hover { transform: translateY(-2px); border-color: ${c.accent}88; }
        .kk-btn-solid { background: ${c.accent}; color: ${c.bg}; border: none; }
        .kk-btn-solid:hover { filter: brightness(1.08); }

        .kk-stats { display: flex; flex-wrap: wrap; width: 100%; border-top: 1px solid ${c.border}; border-bottom: 1px solid ${c.border}; }
        .kk-stat { flex: 1; min-width: 140px; padding: 24px 8px; text-align: center; }
        .kk-stat + .kk-stat { border-left: 1px solid ${c.border}; }
        .kk-stat-value { font-size: 28px; font-weight: 700; color: ${c.text}; }
        .kk-stat-label { font-size: 13px; margin-top: 4px; color: ${c.faint}; }

        /* Sections */
        .kk-section { max-width: 960px; margin: 0 auto; padding: 64px 24px; }
        .kk-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 12px; color: ${c.accent}; }
        .kk-h2 { font-size: 26px; font-weight: 600; margin: 0 0 32px; color: ${c.text}; }

        /* Cards */
        .kk-card { border-radius: 16px; overflow: hidden; background: ${c.panel}; border: 1px solid ${c.border}; transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease; }
        .kk-card:hover { transform: translateY(-4px); border-color: #3a4150; box-shadow: 0 12px 30px -10px rgba(0,0,0,0.5); }

        .kk-projects-list { display: flex; flex-direction: column; gap: 28px; }
        .kk-thumb { height: 112px; display: flex; align-items: center; padding: 0 24px; border-bottom: 1px solid ${c.border}; }
        .kk-thumb-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; }
        .kk-card-body { padding: 24px; }
        .kk-card-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
        .kk-card-title { font-size: 19px; font-weight: 600; margin: 0 0 4px; }
        .kk-card-tagline { margin: 0; color: ${c.dim}; }
        .kk-card-actions { display: flex; gap: 8px; flex-shrink: 0; }
        .kk-pill-btn { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500; padding: 6px 12px; border-radius: 999px; transition: transform .15s ease; }
        .kk-pill-btn:hover { transform: translateY(-2px); }
        .kk-tag-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .kk-tag { font-size: 12px; padding: 4px 10px; border-radius: 999px; background: ${c.accentSoft}; color: ${c.accent}; border: 1px solid ${c.accent}33; }
        .kk-bullets { display: flex; flex-direction: column; gap: 6px; margin: 0; padding: 0; list-style: none; }
        .kk-bullets li { display: flex; gap: 8px; font-size: 14px; color: ${c.dim}; }

        .kk-skills-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 640px) { .kk-skills-grid { grid-template-columns: 1fr 1fr; } }
        .kk-skill-card { padding: 24px; }
        .kk-skill-title { font-size: 14px; font-weight: 600; margin: 0 0 12px; color: ${c.dim}; }

        .kk-resume-list { display: flex; flex-direction: column; gap: 24px; }
        .kk-resume-card { padding: 24px; }
        .kk-resume-label { font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 12px; color: ${c.faint}; }
        .kk-resume-row { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; margin-bottom: 4px; }
        .kk-resume-org { color: ${c.dim}; }
        .kk-resume-desc { font-size: 14px; margin-top: 8px; color: ${c.dim}; line-height: 1.6; }
        .kk-cert-list { display: flex; flex-direction: column; gap: 10px; margin: 0; padding: 0; list-style: none; }
        .kk-cert-item { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; }
        .kk-cert-link { font-size: 14px; font-weight: 500; display: inline-flex; align-items: center; gap: 5px; color: ${c.text}; }
        .kk-cert-link:hover { text-decoration: underline; }
        .kk-cert-org { font-size: 12px; color: ${c.faint}; }

        .kk-contact-lead { margin-bottom: 32px; color: ${c.dim}; }
        .kk-contact-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .kk-contact-grid { grid-template-columns: 1fr 1fr; } }
        .kk-contact-card { display: flex; align-items: center; gap: 12px; padding: 16px 20px; border-radius: 16px; background: ${c.panel}; border: 1px solid ${c.border}; color: ${c.text}; transition: background .15s ease, border-color .15s ease, transform .15s ease; }
        .kk-contact-card:hover { background: ${c.elevated}; border-color: #3a4150; transform: translateY(-2px); }

        .kk-footer { text-align: center; font-size: 12px; padding: 32px 0; color: ${c.faint}; }
      `}</style>

      {/* Nav */}
      <div className={`kk-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="kk-nav-inner">
          <button className="kk-logo" onClick={() => goTo("top")}>
            Kondor Kristóf
          </button>
          <div className="kk-nav-links">
            {navItems.map((n) => (
              <button key={n.id} className="kk-nav-link" onClick={() => goTo(n.id)}>
                {n.label}
              </button>
            ))}
            <a href="mailto:kkondor66@gmail.com" className="kk-nav-cta">
              Get in touch
            </a>
          </div>
          <button className="kk-menu-btn" onClick={() => setMenuOpen((m) => !m)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="kk-mobile-menu">
            {navItems.map((n) => (
              <button key={n.id} className="kk-mobile-link" onClick={() => goTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Hero */}
      <div id="top" className="kk-hero">
        <div className="kk-badge">Open to opportunities · BSc Computer Science, 2026</div>
        <h1 className="kk-title">Kondor Kristóf</h1>
        <p className="kk-role">Entry-Level Full-Stack Developer</p>
        <p className="kk-desc">
          I enjoy tackling complex problems and finding clear, logical solutions. I learn quickly,
          adapt well to new challenges, and I'm motivated by seeing the real impact of my work.
          Graduated in June 2026 with a BSc in Computer Science from the University of Debrecen,
          and open to backend, frontend, full-stack or other developer roles.
        </p>
        <div className="kk-btn-row">
          <a href="mailto:kkondor66@gmail.com" className="kk-btn kk-btn-solid">
            <Mail size={16} /> Email me
          </a>
          <a href="https://github.com/KKondor" target="_blank" rel="noreferrer" className="kk-btn">
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kristof-kondor-196006395"
            target="_blank"
            rel="noreferrer"
            className="kk-btn"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <div className="kk-stats">
          {stats.map((s) => (
            <div key={s.label} className="kk-stat">
              <div className="kk-stat-value">{s.value}</div>
              <div className="kk-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <Section id="projects" eyebrow="Selected work" title="Projects">
        <div className="kk-projects-list">
          {projects.map((p) => (
            <div key={p.name} className="kk-card">
              <div
                className="kk-thumb"
                style={{ background: `linear-gradient(135deg, ${p.color}33, ${p.color}0d)` }}
              >
                <div
                  className="kk-thumb-icon"
                  style={{ background: `${p.color}22`, color: p.color, border: `1px solid ${p.color}55` }}
                >
                  {p.name.charAt(0)}
                </div>
              </div>
              <div className="kk-card-body">
                <div className="kk-card-head">
                  <div>
                    <h3 className="kk-card-title">{p.name}</h3>
                    <p className="kk-card-tagline">{p.tagline}</p>
                  </div>
                  <div className="kk-card-actions">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="kk-pill-btn"
                      style={{ border: `1px solid ${c.border}`, color: c.text }}
                    >
                      <Github size={13} /> Code
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="kk-pill-btn"
                        style={{ background: `${p.color}22`, color: p.color }}
                      >
                        Live demo <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="kk-tag-row">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                <ul className="kk-bullets">
                  {p.bullets.map((b, i) => (
                    <li key={i}>
                      <span style={{ color: p.color }}>•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Toolbox" title="Skills">
        <div className="kk-skills-grid">
          {skillGroups.map((g) => (
            <div key={g.title} className="kk-card kk-skill-card">
              <h3 className="kk-skill-title">{g.title}</h3>
              <div className="kk-tag-row" style={{ marginBottom: 0 }}>
                {g.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Resume */}
      <Section id="resume" eyebrow="Background" title="Resume">
        <div className="kk-resume-list">
          <div className="kk-card kk-resume-card">
            <div className="kk-resume-label">Education</div>
            <div className="kk-resume-row">
              <span style={{ fontWeight: 600 }}>BSc, Computer Science</span>
              <span style={{ fontSize: 14, color: c.dim }}>2023.09 – 2026.06</span>
            </div>
            <div className="kk-resume-org">University of Debrecen</div>
          </div>

          <div className="kk-card kk-resume-card">
            <div className="kk-resume-label">Internship</div>
            <div className="kk-resume-row">
              <span style={{ fontWeight: 600 }}>IT Intern, Coloplast</span>
              <span style={{ fontSize: 14, color: c.dim }}>2025.07 – 2025.11</span>
            </div>
            <p className="kk-resume-desc">
              Handled core IT operations — peripheral maintenance, workstation setup, and daily
              support for full-time IT staff. Contributed to a Python-based image processing tool,
              assisting with code adjustments to improve efficiency.
            </p>
          </div>

          <div className="kk-card kk-resume-card">
            <div className="kk-resume-label">Certifications</div>
            <ul className="kk-cert-list">
              {certifications.map((cert) => (
                <li key={cert.name} className="kk-cert-item">
                  <a href={cert.url} target="_blank" rel="noreferrer" className="kk-cert-link">
                    {cert.name} <ExternalLink size={11} style={{ color: c.faint }} />
                  </a>
                  <span className="kk-cert-org">{cert.org}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Let's talk" title="Contact">
        <p className="kk-contact-lead">
          Open to entry-level full-stack, backend, frontend or other developer roles. Feel free to reach out.
        </p>
        <div className="kk-contact-grid">
          {[
            { icon: Mail, label: "kkondor66@gmail.com", href: "mailto:kkondor66@gmail.com" },
            { icon: Phone, label: "+36 20 440 4286", href: "tel:+36204404286" },
            { icon: Github, label: "github.com/KKondor", href: "https://github.com/KKondor" },
            {
              icon: Linkedin,
              label: "linkedin.com/in/kristof-kondor",
              href: "https://www.linkedin.com/in/kristof-kondor-196006395",
            },
          ].map((r) => (
            <a key={r.label} href={r.href} target="_blank" rel="noreferrer" className="kk-contact-card">
              <r.icon size={18} style={{ color: c.accent }} />
              {r.label}
            </a>
          ))}
        </div>
      </Section>

      <div className="kk-footer">© 2026 Kondor Kristóf</div>
    </div>
  );
}
