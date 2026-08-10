import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  GitBranch,
  Play,
  Sparkles,
  Cpu,
  Brain,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import projectsData from "../data/projects.json";
import PageSection from "../components/PageSection";
import Logomarquee from "../components/LogoMarque";
import DecryptText from "../components/DecryptText";

const featuredTech = [
  "React",
  "FastAPI",
  "Django",
  "Node.js",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Docker",
  "PostgreSQL",
  "Tailwind CSS",
];
const stats = [
  { label: "Projects", value: "20+" },
  { label: "Technologies", value: "10+" },
  { label: "AI Enthusiast", value: "∞" },
  { label: "Open Source", value: "100%" },
];

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

function DynamicText({
  words = [],
  className = "inline-block",
  interval = 2500,
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  const word = words[index] || "";

  return (
    <span className={className} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 6, scale: 0.98, ["--blur"]: "6px" }}
          animate={{ opacity: 1, y: 0, scale: 1, ["--blur"]: "0px" }}
          exit={{ opacity: 0, y: -6, scale: 0.98, ["--blur"]: "6px" }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          style={{
            display: "inline-block",
            filter: "blur(var(--blur))",
            willChange: "transform, opacity, filter",
          }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function HomePage() {
  const featuredProjects = useMemo(
    () => projectsData.filter((project) => project.featured).slice(0, 3),
    [],
  );

  return (
    <div className="overflow-hidden">
      <section className="relative isolate mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute right-[-5%] top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent_20%,transparent_80%,rgba(255,255,255,0.03))]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
              <Sparkles size={15} />
              ML Enthusiast • AI/NLP Enthusiast • PyReact
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building{" "}
              <DynamicText
                words={[
                  "AI-Powered",
                  "Intelligent",
                  "Practical",
                  "Innovative",
                  "Meaningful",
                ]}
                className="text-emerald-300 font-extrabold"
              />{" "}
              Solutions for Real-World Problems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
              <DecryptText
                text="Name's Steve Bicko, a junior developer passionate about AI/ML, NLP, and secure systems. I’m constantly learning, building, and exploring how technology can solve real-world problems."
                duration={2500}
              />
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-medium text-zinc-950 transition hover:scale-[1.01]"
              >
                Explore Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Let’s Connect <Play size={16} />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_80px_rgba(6,182,212,0.12)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 p-6">
                <div className="flex items-center justify-between text-sm text-zinc-300">
                  <span>AI systems / ML engineering</span>
                  <span className="rounded-full border border-emerald-400/20 px-2 py-1 text-emerald-300">
                    Live
                  </span>
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/70 p-3">
                    <Brain className="text-cyan-300" size={18} />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Adaptive AI workflows
                      </p>
                      <p className="text-xs text-zinc-400">
                        Context-aware orchestration
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/70 p-3">
                    <ShieldCheck className="text-emerald-300" size={18} />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Secure by design
                      </p>
                      <p className="text-xs text-zinc-400">
                        Data governance and trust
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/70 p-3">
                    <Cpu className="text-cyan-300" size={18} />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Reliable systems
                      </p>
                      <p className="text-xs text-zinc-400">
                        Fast APIs, resilient infra
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="relative aspect-square w-full max-w-md lg:max-w-lg"
                  initial="hidden"
                  animate="visible"
                  variants={imageVariant}
                >
                  <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-full border border-white/10 bg-slate-800/50 blur-3xl" />
                  <div className="relative overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(30,41,59,0.92))] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.48)]">
                    <img
                      src="https://i.ibb.co/7tNkF56c/Whats-App-Image-2026-08-09-at-19-42-31.jpg"
                      alt="Steve"
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <PageSection
        eyebrow="Featured Technologies"
        title="Built with modern tools and thoughtful engineering."
        description="The stack is selected to ship quickly, scale responsibly, and feel premium on every screen."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-none">
          <Logomarquee />
        </div>
      </PageSection>

      <PageSection
        eyebrow="Selected Work"
        title="Projects that blend product thinking with technical depth."
        description="Each experience is shaped to be useful, polished, and ready for real-world deployment."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.slug}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900/70 shadow-[0_0_40px_rgba(255,255,255,0.03)]"
            >
              <div className="h-44 bg-gradient-to-br from-emerald-500/30 to-cyan-500/20 p-6">
                <div className="h-full rounded-[1.2rem] border border-white/10 bg-zinc-950/70">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full rounded-[1.2rem] object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-zinc-500">
                  <span>{project.category}</span>
                  <span className="rounded-full border border-emerald-400/20 px-2 py-1 text-emerald-300">
                    Featured
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:text-white"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200"
                    >
                      <GitBranch size={16} /> GitHub
                    </a>
                  )}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-white"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Testimonials"
        title="Trusted by founders, teams, and collaborators."
        description="The work is shaped to make complex ideas feel clear, usable, and valuable."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              quote:
                "Steve combines product clarity and technical rigor in a way that feels rare.",
              name: "Amina Njenga",
              role: "Product Lead",
            },
            {
              quote:
                "A calm, thoughtful engineer who builds AI systems people actually want to use.",
              name: "Daniel Mwangi",
              role: "Founder",
            },
            {
              quote:
                "From architecture to delivery, every detail feels premium and deliberate.",
              name: "Lina Patel",
              role: "CTO",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <p className="text-lg leading-8 text-zinc-300">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-zinc-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
