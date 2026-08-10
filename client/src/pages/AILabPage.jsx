import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BrainCircuit, Microscope, Sparkles, Bot, ScanSearch, ShieldCheck, ArrowRight } from 'lucide-react';
import PageSection from '../components/PageSection';

const experiments = [
  { title: 'Medical AI Assistant', description: 'Interactive clinical copilots for context-aware support.', icon: BrainCircuit, slug: 'medical-ai-assistant' },
  { title: 'Agricultural AI', description: 'Crop stress detection and intervention guidance loops.', icon: Microscope, slug: 'agricultural-ai' },
  { title: 'Disease Detection', description: 'Computer vision workflows with explainable confidence.', icon: ScanSearch, slug: 'disease-detection' },
  { title: 'LLM Chatbot', description: 'Secure assistant architecture with tools and governance.', icon: Bot, slug: 'llm-chatbot-platform' },
  { title: 'Vision Models', description: 'Containerized deployment of production-grade vision models.', icon: ScanSearch, slug: 'vision-models-lab' },
  { title: 'Recommendation Systems', description: 'Hybrid personalization engines and ranking loops.', icon: Sparkles, slug: 'recommendation-engines' },
];

export default function AILabPage() {
  return (
    <div>
      <PageSection eyebrow="AI Lab" title="A studio for experiments that move from idea to usable product." description="The lab focuses on applied intelligence, thoughtful deployment, and elegant user experiences.">
        <div className="grid gap-6 lg:grid-cols-2">
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon;
            return (
              <motion.div key={experiment.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-[1.75rem] border border-white/10 bg-zinc-900/70 p-6">
                <div className="flex items-center gap-3 text-emerald-300">
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 p-3"><Icon size={18} /></div>
                  <h3 className="text-xl font-semibold text-white">{experiment.title}</h3>
                </div>
                <p className="mt-4 text-zinc-400">{experiment.description}</p>
                <Link to={`/projects/${experiment.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                  Explore Case Study <ArrowRight size={15} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </PageSection>

      <PageSection eyebrow="Currently Building" title="Focused on the next generation of applied AI systems." description="The current work emphasizes responsible deployment, trustworthy experiences, and deeper product integration.">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">Responsible AI copilots</h3>
              <p className="mt-3 text-zinc-300">Building assistants that combine retrieval, workflow automation, and clear human review loops.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Secure AI infrastructure</h3>
              <p className="mt-3 text-zinc-300">Designing resilient systems with observability, governance, and graceful failure handling.</p>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
