import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GitBranch, ExternalLink, Search } from 'lucide-react';
import projectsData from '../data/projects.json';
import PageSection from '../components/PageSection';

const categories = ['All', ...new Set(projectsData.map((project) => project.category))];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const haystack = `${project.title} ${project.description} ${project.tech.join(' ')}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  return (
    <div>
      <PageSection eyebrow="Projects" title="A portfolio shaped around shipping high-impact systems." description="Browse work across AI, machine learning, products, and secure backend engineering.">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`rounded-full px-4 py-2 text-sm transition ${selectedCategory === category ? 'bg-emerald-500 text-zinc-950' : 'border border-white/10 bg-zinc-950/70 text-zinc-300 hover:text-white'}`}>
                {category}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-400">
            <Search size={16} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" className="w-full bg-transparent outline-none" />
          </label>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.article key={project.slug} whileHover={{ y: -4, scale: 1.01 }} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900/70 shadow-[0_0_40px_rgba(255,255,255,0.03)]">
              <div className="h-40 bg-gradient-to-br from-emerald-500/20 to-cyan-500/15 p-6">
                <div className="h-full rounded-[1.2rem] border border-white/10 bg-zinc-950/70">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-zinc-500">
                  <span>{project.category}</span>
                  {project.featured && <span className="rounded-full border border-emerald-400/20 px-2 py-1 text-emerald-300">Featured</span>}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{tech}</span>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:text-white"><GitBranch size={16} /> GitHub</a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200"><ExternalLink size={16} /> Demo</a>}
                  <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-white">Details</Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
