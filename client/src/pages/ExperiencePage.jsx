import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap, Sparkles, Trophy } from 'lucide-react';
import experienceData from '../data/experience.json';
import PageSection from '../components/PageSection';

export default function ExperiencePage() {
  return (
    <div>
      <PageSection eyebrow="Experience" title="A career shaped by product delivery, research, and thoughtful engineering." description="Highlights across independent work, research, and academic foundations.">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 p-8">
            <h3 className="text-2xl font-semibold text-white">Achievements</h3>
            <ul className="mt-5 space-y-3 text-zinc-300">
              <li className="flex items-start gap-3"><Trophy size={16} className="mt-1 text-emerald-300" /> Delivered product-grade AI experiences across multiple domains.</li>
              <li className="flex items-start gap-3"><Trophy size={16} className="mt-1 text-emerald-300" /> Built systems with a strong emphasis on clarity, maintainability, and security.</li>
              <li className="flex items-start gap-3"><Trophy size={16} className="mt-1 text-emerald-300" /> Helped teams move from prototype to dependable software.</li>
            </ul>
          </div>
          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <motion.div key={item.role} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{item.type}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-zinc-400">{item.company} • {item.location}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-sm text-zinc-300">{item.period}</span>
                </div>
                <p className="mt-4 text-zinc-400">{item.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-400">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </PageSection>
    </div>
  );
}
