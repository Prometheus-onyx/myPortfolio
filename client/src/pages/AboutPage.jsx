import { motion } from "framer-motion";
import {
  Download,
  Compass,
  Sparkles,
  ShieldCheck,
  Lightbulb,
  BookOpenText,
} from "lucide-react";
import PageSection from "../components/PageSection";
import cvFile from "../cv/Steve Bicko CV.pdf";

const timeline = [
  {
    year: "2025 - Present",
    title: "Artificial Intelligence",
    text: "Exploring and building AI-powered applications and machine learning solutions.",
  },
  {
    year: "2024 - 2025",
    title: "Machine Learning",
    text: "Built a predictive ML algorithm for House Prediction.",
  },
  {
    year: "2024 - Present",
    title: "BSc. Information Systems",
    text: "Am a 3rd-year student exploring the intersection of AI, ML, NLP, and ethical hacking. Passionate about building secure, reliable, and ethical AI-powered systems.",
  },
];

const values = [
  {
    title: "Innovation",
    icon: Lightbulb,
    text: "Designing systems that feel future-ready and useful now.",
  },
  {
    title: "Integrity",
    icon: ShieldCheck,
    text: "Building with care, transparency, and strong engineering habits.",
  },
  {
    title: "Continuous Learning",
    icon: BookOpenText,
    text: "Always refining craft through learning, building, and feedback.",
  },
  {
    title: "Problem Solving",
    icon: Compass,
    text: "Turning ambiguity into clear, reliable product decisions.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              About Me
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Learning, building, and exploring what technology can do.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              My work sits at the intersection of software development,
              artificial intelligence, and human-centered design. I build
              systems that feel calm and dependable while solving real
              operational and product needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                <p className="text-2xl font-bold text-white">2+ yrs</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Building software projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                <p className="text-2xl font-bold text-white">20+</p>
                <p className="mt-1 text-sm text-zinc-500">Projects built</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                  Mission
                </p>
                <p className="mt-2 max-w-md text-zinc-400">
                  Create intelligent tools that strengthen teams, improve
                  decision-making, and feel effortless in daily use.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  Vision
                </p>
                <p className="mt-2 max-w-md text-zinc-400">
                  Shape a future where software makes complex systems easier to
                  understand and safer to trust.
                </p>
              </div>
            </div>

            <a
              href={cvFile}
              download="Steve Bicko CV.pdf"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-emerald-400/40 hover:bg-emerald-500/10"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <PageSection
        eyebrow="Journey"
        title="A timeline of growth, craft, and curiosity."
        description="The path has been shaped by projects, learning, and a consistent focus on impact."
      >
        <div className="relative space-y-6 before:absolute before:left-[13px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-emerald-400/40 before:to-cyan-400/10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative ml-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute -left-[34px] top-6 flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-sm text-emerald-300">
                {index + 1}
              </div>

              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                {item.year}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-zinc-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Values"
        title="Principles that guide the work."
        description="Every build is approached with calm conviction and long-term quality in mind."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-white/10 bg-zinc-900/70 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                  <Icon size={18} />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {value.title}
                </h3>

                <p className="mt-2 text-zinc-400">{value.text}</p>
              </motion.div>
            );
          })}
        </div>
      </PageSection>
    </div>
  );
}
