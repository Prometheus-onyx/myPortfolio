import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';
import PageSection from '../components/PageSection';

const categories = ['All', ...new Set(blogsData.map((post) => post.category))];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredPosts = useMemo(() => blogsData.filter((post) => selectedCategory === 'All' || post.category === selectedCategory), [selectedCategory]);

  return (
    <div>
      <PageSection eyebrow="Blog" title="Notes on building intelligent systems and thoughtful products." description="Short reflections on AI, backend architecture, and the craft of software delivery.">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`rounded-full px-4 py-2 text-sm transition ${selectedCategory === category ? 'bg-emerald-500 text-zinc-950' : 'border border-white/10 bg-zinc-950/70 text-zinc-300 hover:text-white'}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.article key={post.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-[1.75rem] border border-white/10 bg-zinc-900/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{post.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-sm text-zinc-500">
                <span>{post.readTime}</span>
                <span>{post.date}</span>
              </div>
              <Link to={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-medium text-cyan-300">Read article →</Link>
            </motion.article>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
