import { motion } from 'framer-motion';
import { Download, Compass, Sparkles, ShieldCheck, Lightbulb, BookOpenText } from 'lucide-react';
import PageSection from '../components/PageSection';

const timeline = [
  { year: '2022', title: 'Independent Engineering Studio', text: 'Built software products for AI, data, and modern product teams.' },
  { year: '2020', title: 'Research and Applied AI', text: 'Explored machine learning systems for predictions, vision, and operations.' },
  { year: '2018', title: 'Computer Science Studies', text: 'Developed a strong foundation in systems, algorithms, and product engineering.' },
];

const values = [
  { title: 'Innovation', icon: Lightbulb, text: 'Designing systems that feel future-ready and useful now.' },
  { title: 'Integrity', icon: ShieldCheck, text: 'Building with care, transparency, and strong engineering habits.' },
  { title: 'Continuous Learning', icon: BookOpenText, text: 'Always refining craft through research, shipping, and feedback.' },
  { title: 'Problem Solving', icon: Compass, text: 'Turning ambiguity into clear, reliable product decisions.' },
];

export default function AboutPage() {
  return (
    <div>
      <PageSection eyebrow="About" title="A product-minded engineer shaping intelligent experiences." description="The work combines technical depth with a strong sense of clarity, reliability, and modern product thinking.">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-lg leading-8 text-zinc-300">My work sits at the intersection of software engineering, artificial intelligence, and human-centered design. I build systems that feel calm and dependable while solving real operational and product needs.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
                <p className="text-2xl font-semibold text-white">8+ yrs</p>
                <p className="mt-1 text-sm text-zinc-400">Building software products</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
                <p className="text-2xl font-semibold text-white">20+</p>
                <p className="mt-1 text-sm text-zinc-400">Products shipped</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 p-8">
            <h3 className="text-2xl font-semibold text-white">Mission</h3>
            <p className="mt-3 text-zinc-300">Create intelligent tools that strengthen teams, improve decision-making, and feel effortless in daily use.</p>
            <h3 className="mt-8 text-2xl font-semibold text-white">Vision</h3>
            <p className="mt-3 text-zinc-300">Shape a future where software makes complex systems easier to understand and safer to trust.</p>
            <a href="/Steve-Okumu-Resume.pdf" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 font-medium text-zinc-950">Download Resume <Download size={16} /></a>
          </div>
        </div>
      </PageSection>

      <PageSection eyebrow="Journey" title="A timeline of growth, craft, and curiosity." description="The path has been shaped by products, research, and a consistent focus on impact.">
        <div className="relative space-y-6 before:absolute before:left-[13px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-emerald-400/40 before:to-cyan-400/10">
          {timeline.map((item, index) => (
            <motion.div key={item.year} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative ml-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <div className="absolute -left-[34px] top-6 flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-sm text-emerald-300">{index + 1}</div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{item.year}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-zinc-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageSection eyebrow="Values" title="Principles that guide the work." description="Every build is approached with calm conviction and long-term quality in mind.">
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-[1.5rem] border border-white/10 bg-zinc-900/70 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-zinc-400">{value.text}</p>
              </motion.div>
            );
          })}
        </div>
      </PageSection>
    </div>
  );
}
