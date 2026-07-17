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
  accent: "#5eead4", // teal
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
    name: "TodoWeb",
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
  { title: "Backend", items: ["ASP.NET", "Entity Framework", "OOP", "SQL", "MySQL"] },
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

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20 px-6 sm:px-10 max-w-5xl mx-auto">
      {eyebrow && (
        <div
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ color: c.accent }}
        >
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8" style={{ color: c.text }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

function Tag({ children }) {
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-full"
      style={{ background: c.accentSoft, color: c.accent, border: `1px solid ${c.accent}33` }}
    >
      {children}
    </span>
  );
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
    <div
      className="w-full min-h-screen"
      style={{ background: c.bg, color: c.text, fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-thumb { background: ${c.border}; border-radius: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      {/* Nav */}
      <div
        className="sticky top-0 z-20 backdrop-blur-md"
        style={{
          background: scrolled ? "rgba(15,17,21,0.85)" : "transparent",
          borderBottom: scrolled ? `1px solid ${c.border}` : "1px solid transparent",
          transition: "all 0.2s ease",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
          <button
            onClick={() => goTo("top")}
            className="font-semibold tracking-tight"
            style={{ color: c.text, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Kondor Kristóf
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => goTo(n.id)}
                className="text-sm"
                style={{ color: c.dim }}
              >
                {n.label}
              </button>
            ))}

          </div>
          <a
              href="mailto:kkondor66@gmail.com"
              className="text-sm px-4 py-2 rounded-full font-medium"
              style={{ border: `1px solid ${c.accentSoft}`, color: c.accent }}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Hero */}
      <div id="top" className="max-w-5xl mx-auto px-6 sm:px-10 pt-16 sm:pt-24 pb-16">
        <div
          className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-6"
          style={{ background: c.elevated, color: c.dim, border: `1px solid ${c.border}` }}
        >
          Open to opportunities · Fresh Graduate 2026
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4">
          Kondor Kristóf
        </h1>
        <p className="text-lg sm:text-xl mb-6" style={{ color: c.accent }}>
          Entry-Level Full-Stack Developer
        </p>
        <p className="max-w-2xl text-base sm:text-lg leading-relaxed mb-8" style={{ color: c.dim }}>
          I enjoy tackling complex problems and finding clear, logical solutions. I learn quickly,
          adapt well to new challenges, and I'm motivated by seeing the real impact of my work.
          Graduated with BSc in Computer Science from the University of Debrecen, and open to
          backend, frontend, full-stack roles but I am open to other developer roles too.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:kkondor66@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full"
            style={{ border: `1px solid ${c.accentSoft}`, color: c.accent }}
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href="https://github.com/KKondor"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full"
            style={{ border: `1px solid ${c.border}`, color: c.text }}
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kristof-kondor-196006395"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full"
            style={{ border: `1px solid ${c.border}`, color: c.text }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Projects */}
      <Section id="projects" eyebrow="Selected work" title="Projects">
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl p-6 sm:p-8"
              style={{ background: c.panel, border: `1px solid ${c.border}` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
                  <p style={{ color: c.dim }}>{p.tagline}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ border: `1px solid ${c.border}`, color: c.text }}
                  >
                    <Github size={13} /> Code
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{ background: c.accentSoft, color: c.accent }}
                    >
                      Live demo <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              <ul className="flex flex-col gap-1.5">
                {p.bullets.map((b, i) => (
                  <li key={i} className="text-sm flex gap-2" style={{ color: c.dim }}>
                    <span style={{ color: c.accent }}>•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Toolbox" title="Skills">
        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl p-6"
              style={{ background: c.panel, border: `1px solid ${c.border}` }}
            >
              <h3 className="text-sm font-semibold mb-3" style={{ color: c.dim }}>
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
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
        <div className="flex flex-col gap-8">
          <div className="rounded-2xl p-6" style={{ background: c.panel, border: `1px solid ${c.border}` }}>
            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: c.faint }}>
              Education
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <span className="font-semibold">BSc, Computer Science</span>
              <span className="text-sm" style={{ color: c.dim }}>2023.09 – 2026.06</span>
            </div>
            <div style={{ color: c.dim }}>University of Debrecen</div>
          </div>

          <div className="rounded-2xl p-6" style={{ background: c.panel, border: `1px solid ${c.border}` }}>
            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: c.faint }}>
              Internship
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <span className="font-semibold">IT Intern, Coloplast</span>
              <span className="text-sm" style={{ color: c.dim }}>2025.07 – 2025.11</span>
            </div>
            <p className="text-sm mt-2" style={{ color: c.dim }}>
              Handled core IT operations — peripheral maintenance, workstation setup, and daily
              support for full-time IT staff. Contributed to a Python-based image processing tool,
              assisting with code adjustments to improve efficiency.
            </p>
          </div>

          <div className="rounded-2xl p-6" style={{ background: c.panel, border: `1px solid ${c.border}` }}>
            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: c.faint }}>
              Certifications
            </div>
            <ul className="flex flex-col gap-2">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex flex-wrap items-baseline justify-between gap-2">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium hover:underline flex items-center gap-1"
                    style={{ color: c.text }}
                  >
                    {cert.name} <ExternalLink size={11} style={{ color: c.faint }} />
                  </a>
                  <span className="text-xs" style={{ color: c.faint }}>{cert.org}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Let's talk" title="Contact">
        <p className="mb-8" style={{ color: c.dim }}>
          Open to entry-level developer roles. Feel free to reach out.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Mail, label: "kkondor66@gmail.com", href: "mailto:kkondor66@gmail.com" },
            { icon: Phone, label: "+36204404286", href: "tel:+36204404286" },
            { icon: Github, label: "github.com/KKondor", href: "https://github.com/KKondor" },
            {
              icon: Linkedin,
              label: "linkedin.com/in/kristof-kondor",
              href: "https://www.linkedin.com/in/kristof-kondor-196006395",
            },
          ].map((r) => (
            <a
              key={r.label}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-5 py-4 rounded-2xl"
              style={{ background: c.panel, border: `1px solid ${c.border}`, color: c.text }}
            >
              <r.icon size={18} style={{ color: c.accent }} />
              {r.label}
            </a>
          ))}
        </div>
      </Section>

      <div className="text-center text-xs py-8" style={{ color: c.faint }}>
        © 2026 Kondor Kristóf
      </div>
    </div>
  );
}
