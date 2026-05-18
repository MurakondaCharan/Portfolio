import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiDownload,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiSend,
  FiChevronRight,
  FiMoon,
  FiSun,
} from 'react-icons/fi';
import { AiOutlineGithub, AiOutlineFileText, AiOutlineArrowUp } from 'react-icons/ai';

const roles = [
  'Full Stack Developer',
  'Frontend Developer',
  'Python Programmer',
  'Computer Science Student',
];

const progressData = [
  { name: 'Python', value: 92 },
  { name: 'JavaScript', value: 88 },
  { name: 'HTML', value: 95 },
  { name: 'CSS', value: 90 },
  { name: 'Node.js', value: 80 },
  { name: 'SQL', value: 78 },
  { name: 'MySQL', value: 82 },
];

const toolsData = ['GitHub', 'VS Code', 'PyCharm', 'Excel'];

const projects = [
  {
    title: 'PandaBytzs',
    description: 'Full Stack food ordering web application with responsive UI and Vercel deployment.',
    tech: 'HTML • CSS • JavaScript • Node.js',
    href: 'https://example.com',
  },
  {
    title: 'Learning Hub',
    description: 'Responsive e-learning platform with curated YouTube resources and modern navigation.',
    tech: 'React • Tailwind • API integration',
    href: 'https://example.com',
  },
];

const certificates = [
  'Microsoft Azure Fundamentals (AZ-900)',
  'Python Programming – Reliance Foundation',
  'RPA Essentials – Automation Anywhere',
  'Cambridge Linguaskill English Test – A2',
];

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [activeText, setActiveText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedIndex, setTypedIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      if (!isDeleting) {
        setActiveText(currentRole.slice(0, typedIndex + 1));
        setTypedIndex(typedIndex + 1);
      } else {
        setActiveText(currentRole.slice(0, typedIndex - 1));
        setTypedIndex(typedIndex - 1);
      }

      if (!isDeleting && typedIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      }
      if (isDeleting && typedIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 80 : 110);
    return () => clearTimeout(timeout);
  }, [typedIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, index) => ({
        size: 8 + Math.random() * 18,
        x: Math.random() * 92,
        y: Math.random() * 92,
        delay: Math.random() * 6,
        opacity: 0.12 + Math.random() * 0.18,
      })),
    []
  );

  return (
    <div className={isLight ? 'bg-slate-900 text-slate-100' : 'bg-midnight text-slate-100'}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="particle"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: 'rgba(84, 216, 255, 0.25)',
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-slate-300 sm:px-8">
          <div className="font-semibold tracking-[0.2em] text-cyan-300">MCT</div>
          <div className="hidden items-center gap-6 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`transition duration-200 ${
                  activeSection === section.id ? 'text-cyan-300' : 'hover:text-slate-100'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLight((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              aria-label="Toggle theme"
            >
              {isLight ? <FiMoon size={18} /> : <FiSun size={18} />}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200 transition hover:bg-cyan-400/20 sm:inline-flex"
            >
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      </header>

      <main className="relative overflow-hidden">
        <section id="home" className="relative mx-auto flex min-h-[calc(100vh-84px)] max-w-6xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-10">
          <div className="glass-card relative overflow-hidden rounded-[2rem] border-cyan-400/10 p-8 shadow-neon md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-hero-glow opacity-90"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200 backdrop-blur-md">
                  Premium Placement Portfolio
                </span>
                <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                  Murakonda Charan Tej
                </h1>
                <div className="max-w-xl space-y-5 text-slate-300 sm:text-lg">
                  <p className="text-cyan-200">I build cinematic, recruiter-ready digital experiences for the modern web.</p>
                  <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 shadow-[0_0_60px_-30px_rgba(56,189,248,0.8)]">
                    <span className="text-slate-400">I am a</span>
                    <span className="font-semibold text-cyan-200">{activeText}</span>
                    <span className="cursor-fade text-cyan-300">|</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    <FiSend /> Contact Me
                  </a>
                  <a
                    href="/resume.pdf"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:border-cyan-300 hover:bg-cyan-400/10"
                  >
                    <FiDownload /> Download Resume
                  </a>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative mx-auto w-full max-w-sm"
              >
                <div className="absolute -right-10 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="relative mx-auto h-[360px] w-[360px] overflow-hidden rounded-full border border-cyan-300/15 bg-slate-950/80 shadow-[0_0_60px_rgba(56,189,248,0.22)] sm:h-[380px] sm:w-[380px]">
                  <div className="absolute inset-0 m-7 rounded-full border border-cyan-200/10 bg-gradient-to-br from-cyan-500/15 via-transparent to-sky-400/5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-56 w-56 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950/90 shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card rounded-[2rem] p-8 shadow-neon"
            >
              <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">About</span>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">Professional Summary</h2>
              <p className="mt-6 text-slate-300 leading-8">
                Computer Science undergraduate at KL University with CGPA 8.79, skilled in Python, JavaScript, and Full Stack Web Development. Passionate about crafting responsive applications, building automation projects, and designing modern UI/UX experiences that stand out.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Responsive Apps', value: 'Pixel-perfect designs' },
                  { title: 'Automation', value: 'Workflow efficiency' },
                  { title: 'UI/UX Design', value: 'Modern, clean interfaces' },
                  { title: 'Team Ready', value: 'Collaboration focus' },
                ].map((card) => (
                  <div key={card.title} className="glass-card rounded-[1.6rem] border-cyan-300/10 px-5 py-6">
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-slate-300">{card.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-[2rem] p-8 shadow-neon">
                <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">Experience</span>
                <h3 className="mt-4 text-2xl font-semibold text-white">Developing real-world solutions</h3>
                <p className="mt-4 text-slate-300 leading-7">
                  I design systems that blend powerful backend logic with polished front-end experiences. My focus is on fast, accessible, and visually compelling applications.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-card rounded-[2rem] border-cyan-300/10 px-6 py-7">
                  <p className="text-3xl font-semibold text-cyan-300">8.79</p>
                  <p className="mt-2 text-slate-300">B.Tech CGPA</p>
                </div>
                <div className="glass-card rounded-[2rem] border-cyan-300/10 px-6 py-7">
                  <p className="text-3xl font-semibold text-cyan-300">2023-2027</p>
                  <p className="mt-2 text-slate-300">Degree Timeline</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="space-y-6 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">Education</span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Academic journey in motion</h2>
            <p className="mx-auto max-w-2xl text-slate-300">Timelines and milestones that showcase consistent academic excellence and technical training.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { title: 'B.Tech CSE', subtitle: 'KL University', detail: 'CGPA 8.79 (2023–2027)' },
              { title: 'MPC', subtitle: 'Bhashyam Junior College', detail: '923/1000' },
              { title: 'SSC', subtitle: 'Bhashyam School', detail: '600/600' },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 180 }}
                className="glass-card rounded-[2rem] border-cyan-300/10 p-7"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Academic Record</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.subtitle}</p>
                <p className="mt-4 text-slate-200">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_0.9fr]">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">Skills</span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Technical proficiency & tools</h2>
              <p className="max-w-xl text-slate-300">
                Crafting full stack solutions with a blend of programming languages, frameworks, and developer tools that accelerate product delivery.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {toolsData.map((tool) => (
                  <div key={tool} className="glass-card rounded-[1.8rem] border-cyan-300/10 px-5 py-6 text-center">
                    <p className="text-lg font-semibold text-white">{tool}</p>
                    <p className="mt-2 text-slate-300">Modern workflow expertise</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              {progressData.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="glass-card rounded-[1.8rem] border-cyan-300/10 p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">{skill.name}</p>
                    <span className="text-sm text-cyan-200">{skill.value}%</span>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_18px_rgba(56,189,248,0.45)]" style={{ width: `${skill.value}%` }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="space-y-6 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">Projects</span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Highlighted work</h2>
            <p className="mx-auto max-w-2xl text-slate-300">Projects designed for real users, built with clean code, responsive layouts, and strong communication flow.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 170 }}
                className="glass-card rounded-[2rem] border-cyan-300/10 p-7"
              >
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.35em] text-cyan-300">
                  <span>Live Project</span>
                  <span>{project.tech}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300 leading-7">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
                  >
                    View Live <FiChevronRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="certifications" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="space-y-6 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">Certifications</span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Verified learning achievements</h2>
            <p className="mx-auto max-w-2xl text-slate-300">Certificates showcasing cloud fundamentals, Python, automation, and English communication.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((cert) => (
              <motion.div
                key={cert}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="glass-card rounded-[2rem] border-cyan-300/10 p-6"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200">
                  <AiOutlineFileText size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-card rounded-[2rem] border-cyan-300/10 p-8 shadow-neon">
              <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</span>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s build something together</h2>
              <p className="mt-4 max-w-xl text-slate-300 leading-7">
                I&apos;m available for internships, placements, and collaborative full stack web development roles. Reach out for portfolio reviews, technical conversations, or hiring discussions.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 px-5 py-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Email</p>
                  <p className="mt-3 text-lg font-semibold text-white">murakondacharantej9@gmail.com</p>
                </div>
                <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 px-5 py-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Phone</p>
                  <p className="mt-3 text-lg font-semibold text-white">8341626684</p>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-cyan-200 transition hover:bg-cyan-400/15">
                  <FiLinkedin size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-cyan-200 transition hover:bg-cyan-400/15">
                  <AiOutlineGithub size={20} />
                </a>
              </div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="glass-card rounded-[2rem] border-cyan-300/10 p-8"
            >
              <div className="grid gap-6">
                <div>
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project"
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Send Message <FiSend />
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-8 text-slate-400 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Murakonda Charan Tej. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100">
            <AiOutlineArrowUp /> Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
