import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Database, ShieldCheck, Layers3, Code2, Cloud, Boxes, Sparkles } from 'lucide-react';
import skillsData from '../data/skills.json';
import PageSection from '../components/PageSection';

const iconMap = {
  LayoutGrid: 'LayoutGrid',
  Palette: 'Palette',
  Sparkles: 'Sparkles',
  ServerCog: 'ServerCog',
  ShieldCheck: 'ShieldCheck',
  Cpu: 'Cpu',
  BrainCircuit: 'BrainCircuit',
  Beaker: 'Beaker',
  Bot: 'Bot',
  Database: 'Database',
  Gauge: 'Gauge',
  Files: 'Files',
  Boxes: 'Boxes',
  Workflow: 'Workflow',
  Cloud: 'Cloud',
};

const categoryIconMap = {
  Frontend: <Code2 size={18} />,
  Backend: <Cpu size={18} />,
  'AI/ML': <BrainCircuit size={18} />,
  Databases: <Database size={18} />,
  DevOps: <Boxes size={18} />,
};

export default function SkillsPage() {
  return (
    <div>
      <PageSection eyebrow="Skills" title="An interactive skill dashboard for modern engineering and AI systems." description="The stack spans frontend, backend, distributed systems, AI, and product-focused delivery.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillsData.map((group, index) => (
            <motion.div key={group.category} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[1.75rem] border border-white/10 bg-zinc-900/70 p-6">
              <div className="flex items-center gap-2 text-emerald-300">
                {categoryIconMap[group.category]}
                <h3 className="text-xl font-semibold text-white">{group.category}</h3>
              </div>
              <div className="mt-5 space-y-4">
                {group.items.map((skill) => {
                  const Icon = skill.icon in iconMap ? () => null : () => null;
                  return (
                    <div key={skill.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 p-2 text-emerald-300">
                            {skill.icon === 'LayoutGrid' ? <Code2 size={16} /> : skill.icon === 'Palette' ? <Sparkles size={16} /> : skill.icon === 'ServerCog' ? <Cpu size={16} /> : skill.icon === 'ShieldCheck' ? <ShieldCheck size={16} /> : skill.icon === 'BrainCircuit' ? <BrainCircuit size={16} /> : skill.icon === 'Beaker' ? <Cpu size={16} /> : skill.icon === 'Bot' ? <BrainCircuit size={16} /> : skill.icon === 'Database' ? <Database size={16} /> : skill.icon === 'Gauge' ? <Cpu size={16} /> : skill.icon === 'Files' ? <Layers3 size={16} /> : skill.icon === 'Boxes' ? <Boxes size={16} /> : skill.icon === 'Workflow' ? <Layers3 size={16} /> : skill.icon === 'Cloud' ? <Cloud size={16} /> : <Cpu size={16} />}
                          </div>
                          <div>
                            <p className="font-medium text-white">{skill.name}</p>
                            <p className="text-xs text-zinc-500">{skill.years} • {skill.projects} projects</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-emerald-300">{skill.level}%</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-zinc-800">
                        <div className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
