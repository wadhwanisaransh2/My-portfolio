import React, { useState, useEffect, useRef } from 'react';
import {
  Phone, Mail, Award, Code2, Database, Layout,
  Terminal, BarChart2, GraduationCap, FolderGit2,
  Wrench, ChevronUp, Menu, X, ExternalLink, Send,
  MapPin, BookOpen, Cpu
} from 'lucide-react';
import './App.css';

/* ─── Inline SVG brand icons ─── */
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ─── Data ─── */
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const PROJECTS = [
  {
    num: '01',
    name: 'RecallFlow',
    subtitle: 'Smart Learning Revision & Consistency Platform',
    github: 'https://github.com/wadhwanisaransh2/RecallFlow.git',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
    color: '#3b82f6',
    points: [
      <>Developed a full-stack learning management platform using <strong>React.js, Node.js, Express.js, MongoDB, JWT, and REST APIs</strong> to help students record learning activities, organize subjects and topics, and manage notes and resources.</>,
      <>Implemented configurable rule-based revision scheduling using intervals such as <strong>1‑4‑7 days</strong>, automatically generating revision tasks from recorded learning activities.</>,
      <>Built progress and consistency tracking for revision history, completion status, study activity, streaks, and analytics to help users monitor learning progress and identify missed revisions.</>,
    ],
  },
  {
    num: '02',
    name: 'Smart Placement Tracker',
    subtitle: 'Campus Placement Management System',
    github: 'https://github.com/wadhwanisaransh2/Smart-Placement-Tracker.git',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC'],
    color: '#8b5cf6',
    points: [
      <>Developed a centralized placement management platform using <strong>React.js, Node.js, Express.js, MongoDB, JWT, and REST APIs</strong> for students to view eligible companies, track applications, and monitor placement progress.</>,
      <>Implemented <strong>role-based access control</strong> and placement workflows for students and administrators, including eligibility criteria, company-wise student management, application status tracking, and personalized dashboards.</>,
      <>Designed MongoDB data models and REST APIs for students, companies, eligibility requirements, and applications, enabling real-time updates across placement activities.</>,
    ],
  },
  {
    num: '03',
    name: 'AlgoTrack',
    subtitle: 'DSA Learning & Progress Tracking Platform',
    github: 'https://github.com/wadhwanisaransh2/AlgoTracker.git',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'LeetCode', 'GFG'],
    color: '#06b6d4',
    points: [
      <>Developed a centralized DSA preparation platform using <strong>React.js, Node.js, Express.js, MongoDB, JWT, and REST APIs</strong> to organize coding problems by topic and provide direct access to LeetCode and GeeksforGeeks resources.</>,
      <>Implemented personalized problem tracking with <strong>Not Started, Attempted, Solved, and Need Revision</strong> statuses, along with filters for topic, difficulty, platform, and progress status.</>,
      <>Added progress analytics and revision management to track solved and pending problems, monitor topic-wise preparation, maintain revision lists, and visualize overall learning progress.</>,
    ],
  },
];

const SKILLS = [
  {
    icon: <Layout size={22} />,
    label: 'Tech Stack',
    color: '#3b82f6',
    items: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MySQL'],
  },
  {
    icon: <Code2 size={22} />,
    label: 'Programming / Core',
    color: '#8b5cf6',
    items: ['C', 'C++', 'Data Structures & Algorithms'],
  },
  {
    icon: <Database size={22} />,
    label: 'Web Development',
    color: '#06b6d4',
    items: ['REST APIs', 'JWT Authentication', 'Role-Based Access Control'],
  },
  {
    icon: <BarChart2 size={22} />,
    label: 'Analytics / Visualization',
    color: '#f59e0b',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI', 'Excel', 'Statistics'],
  },
  {
    icon: <Terminal size={22} />,
    label: 'Tools / Systems',
    color: '#10b981',
    items: ['Git', 'GitHub', 'Linux', 'Red Hat Enterprise Linux', 'Jupyter Notebook'],
  },
];

const CERTS = [
  {
    title: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
    color: '#ef4444',
    icon: <Cpu size={20} />,
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'GeeksforGeeks — 160 Days',
    color: '#22c55e',
    icon: <Code2 size={20} />,
  },
  {
    title: 'MERN Stack Training Certification',
    issuer: 'GeeksforGeeks — 3 Months',
    color: '#3b82f6',
    icon: <Layout size={20} />,
  },
  {
    title: 'Data Analytics',
    issuer: 'GeeksforGeeks — 3 Months',
    color: '#f59e0b',
    icon: <BarChart2 size={20} />,
  },
];

/* ─── Typing effect hook ─── */
function useTypingEffect(words, speed = 90, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ─── Intersection observer hook for scroll reveal ─── */
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return [ref, visible];
}

/* ─── Reveal wrapper ─── */
function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' reveal--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN APP
══════════════════════════════════════════ */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  const typed = useTypingEffect([
    'Full Stack Developer',
    'MERN Stack Engineer',
    'Problem Solver',
    'DSA Enthusiast',
  ]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 500);

      const sections = ['about', 'education', 'projects', 'skills', 'certifications', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* ── Navbar ── */}
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} aria-label="Main navigation">
        <a href="#about" className="navbar-logo" onClick={() => handleNavClick('#about')}>
          SW
        </a>

        {/* Desktop links */}
        <ul className="navbar-links" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${menuOpen ? ' mobile-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`mobile-nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {menuOpen && (
        <div className="drawer-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}

      <main className="app-container">

        {/* ════ HERO ════ */}
        <section id="about" className="hero">
          {/* Floating orbs */}
          <div className="orb orb--blue" aria-hidden="true" />
          <div className="orb orb--purple" aria-hidden="true" />
          <div className="orb orb--cyan" aria-hidden="true" />

          <div className="hero-inner">
            {/* Avatar */}
            <div className="avatar" aria-hidden="true">
              <span>SW</span>
              <div className="avatar-ring" />
            </div>

            <div className="hero-badge">
              <span className="badge-dot" />
              Open to Work
            </div>

            <h1 className="hero-name text-gradient">Saransh Wadhwani</h1>

            <p className="hero-typed" aria-live="polite">
              {typed}
              <span className="cursor" aria-hidden="true">|</span>
            </p>

            <p className="hero-sub">
              Building scalable MERN-stack applications with clean architecture,
              real-time features, and intuitive user experiences.
            </p>

            <div className="hero-cta">
              <a
                href="#projects"
                className="btn btn--primary"
                onClick={(e) => { e.preventDefault(); handleNavClick('#projects'); }}
              >
                <FolderGit2 size={17} /> View Projects
              </a>
              <a
                href="#contact"
                className="btn btn--outline"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              >
                <Send size={17} /> Get in Touch
              </a>
            </div>

            <div className="contact-links">
              <a href="tel:+916377145586" className="contact-pill">
                <Phone size={14} /> +91 6377145586
              </a>
              <a href="mailto:wadhwanisaransh2@gmail.com" className="contact-pill">
                <Mail size={14} /> wadhwanisaransh2@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/saransh-wadhwani-4b30bb32b" target="_blank" rel="noreferrer" className="contact-pill">
                <LinkedinIcon size={14} /> LinkedIn
              </a>
              <a href="https://github.com/wadhwanisaransh2/" target="_blank" rel="noreferrer" className="contact-pill">
                <GithubIcon size={14} /> GitHub
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator" aria-hidden="true">
            <div className="scroll-mouse">
              <div className="scroll-wheel" />
            </div>
          </div>
        </section>

        {/* ════ EDUCATION ════ */}
        <section id="education">
          <Reveal>
            <h2 className="section-title">
              <GraduationCap size={26} className="section-icon" />
              Education
            </h2>
          </Reveal>

          <div className="edu-grid">
            <Reveal delay={80}>
              <div className="glass-panel edu-card">
                <div className="edu-left">
                  <div className="edu-icon-wrap" style={{ '--edu-color': '#3b82f6' }}>
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3>Techno NJR Institute of Technology</h3>
                    <span className="edu-degree">B.Tech in Computer Science and Engineering</span>
                  </div>
                </div>
                <div className="edu-score-badge" style={{ '--score-color': '#3b82f6' }}>
                  9.4 / 10 CGPA
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="glass-panel edu-card">
                <div className="edu-left">
                  <div className="edu-icon-wrap" style={{ '--edu-color': '#8b5cf6' }}>
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <h3>N.C.A Senior Secondary School</h3>
                    <span className="edu-degree">Senior Secondary Education</span>
                  </div>
                </div>
                <div className="edu-scores">
                  <span className="edu-score-badge" style={{ '--score-color': '#8b5cf6' }}>12th: 87%</span>
                  <span className="edu-score-badge" style={{ '--score-color': '#06b6d4' }}>10th: 93%</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ════ PROJECTS ════ */}
        <section id="projects">
          <Reveal>
            <h2 className="section-title">
              <FolderGit2 size={26} className="section-icon" />
              Projects
            </h2>
          </Reveal>

          <div className="projects-list">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.num} delay={i * 80}>
                <div className="project-card" style={{ '--proj-color': p.color }}>
                  <div className="project-num" aria-hidden="true">{p.num}</div>

                  <div className="project-body">
                    <div className="project-top">
                      <div className="project-title-group">
                        <h3>{p.name}</h3>
                        <span className="project-subtitle">{p.subtitle}</span>
                      </div>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="github-btn"
                        aria-label={`View ${p.name} on GitHub`}
                      >
                        <GithubIcon size={15} /> GitHub
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span className="project-tag" key={t}>{t}</span>
                      ))}
                    </div>

                    <ul className="project-points">
                      {p.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════ SKILLS ════ */}
        <section id="skills">
          <Reveal>
            <h2 className="section-title">
              <Wrench size={26} className="section-icon" />
              Technical Skills
            </h2>
          </Reveal>

          <div className="skills-grid">
            {SKILLS.map(({ icon, label, color, items }, i) => (
              <Reveal key={label} delay={i * 60}>
                <div className="skill-card" style={{ '--skill-color': color }}>
                  <div className="skill-card-header">
                    <span className="skill-icon-wrap">{icon}</span>
                    <h4>{label}</h4>
                  </div>
                  <div className="skill-tags">
                    {items.map((item) => (
                      <span className="skill-tag" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════ CERTIFICATIONS ════ */}
        <section id="certifications">
          <Reveal>
            <h2 className="section-title">
              <Award size={26} className="section-icon" />
              Certifications
            </h2>
          </Reveal>

          <div className="cert-grid">
            {CERTS.map(({ title, issuer, color, icon }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="cert-card glass-panel" style={{ '--cert-color': color }}>
                  <div className="cert-icon-wrap">{icon}</div>
                  <div className="cert-body">
                    <p className="cert-title">{title}</p>
                    <p className="cert-issuer">{issuer}</p>
                  </div>
                  <div className="cert-ribbon" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════ CONTACT ════ */}
        <section id="contact">
          <Reveal>
            <h2 className="section-title">
              <Send size={26} className="section-icon" />
              Get in Touch
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="contact-section glass-panel">
              <div className="contact-text">
                <h3>Let's work together</h3>
                <p>
                  I'm currently open to full-time roles and internship opportunities.
                  Whether you have a project in mind, a question, or just want to say hi — feel free to reach out.
                </p>
              </div>

              <div className="contact-cards">
                <a href="tel:+916377145586" className="contact-card">
                  <Phone size={20} />
                  <div>
                    <span className="contact-card-label">Phone</span>
                    <span className="contact-card-value">+91 6377145586</span>
                  </div>
                </a>

                <a href="mailto:wadhwanisaransh2@gmail.com" className="contact-card">
                  <Mail size={20} />
                  <div>
                    <span className="contact-card-label">Email</span>
                    <span className="contact-card-value">wadhwanisaransh2@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/saransh-wadhwani-4b30bb32b"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <LinkedinIcon size={20} />
                  <div>
                    <span className="contact-card-label">LinkedIn</span>
                    <span className="contact-card-value">saransh-wadhwani</span>
                  </div>
                </a>

                <a
                  href="https://github.com/wadhwanisaransh2/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <GithubIcon size={20} />
                  <div>
                    <span className="contact-card-label">GitHub</span>
                    <span className="contact-card-value">wadhwanisaransh2</span>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-logo">SW</span>
          <p>Designed &amp; built by <strong>Saransh Wadhwani</strong> · React &amp; Vite</p>
          <div className="footer-links">
            <a href="https://github.com/wadhwanisaransh2/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/saransh-wadhwani-4b30bb32b" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:wadhwanisaransh2@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll-to-top */}
      <button
        className={`scroll-top${showTop ? ' scroll-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </>
  );
}
