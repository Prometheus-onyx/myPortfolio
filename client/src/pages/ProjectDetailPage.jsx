import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, GitBranch, ExternalLink, BookOpenText, Cpu, Layers3 } from 'lucide-react';
import projectsData from '../data/projects.json';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = useMemo(() => projectsData.find((item) => item.slug === slug), [slug]);

  if (!project) {
    return <div className="mx-auto max-w-7xl px-4 py-24 text-center text-zinc-400">Project not found.</div>;
  }

  const relatedProjects = projectsData.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <div className="pb-20">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          <ArrowLeft size={16} /> Back to projects
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{project.category}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-zinc-300"><GitBranch size={16} /> GitHub</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-medium text-zinc-950"><ExternalLink size={16} /> Visit Live</a>}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-6">
            <div className="h-60 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10">
                <img src={project.image} alt={project.title} className="h-full w-full rounded-[1.5rem] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-emerald-300"><BookOpenText size={18} /> <h2 className="text-xl font-semibold text-white">Overview</h2></div>
            <p className="mt-4 text-zinc-400">{project.problem}</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-cyan-300"><Cpu size={18} /> <h2 className="text-xl font-semibold text-white">Solution</h2></div>
            <p className="mt-4 text-zinc-400">{project.solution}</p>
          </div>
        </div>
        <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-zinc-900/70 p-6">
          <div className="flex items-center gap-2 text-emerald-300"><Layers3 size={18} /> <h2 className="text-xl font-semibold text-white">Architecture</h2></div>
          <p className="mt-4 text-zinc-400">{project.architecture}</p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Technologies</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-sm text-zinc-300">{tech}</span>)}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Challenges</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-400">
              {project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Lessons Learned</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-400">
              {project.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {project.gallery.map((image, index) => (
            <div 
            key={image + index} 
            className="h-40 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/15" >
              <img 
              src={image} 
              alt={`Gallery ${index + 1}`} 
              className="h-full w-full rounded-[1.5rem] object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">Related Projects</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {relatedProjects.map((item) => (
            <Link key={item.slug} to={`/projects/${item.slug}`} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{item.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-400">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
