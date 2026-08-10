import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';
import { ArrowLeft } from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = useMemo(() => blogsData.find((item) => item.slug === slug), [slug]);

  if (!post) {
    return <div className="mx-auto max-w-3xl px-4 py-24 text-center text-zinc-400">Article not found.</div>;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <Link to="/blog" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
        <ArrowLeft size={16} /> Back to blog
      </Link>
      <article className="mt-8 rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{post.category}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{post.title}</h1>
        <div className="mt-4 flex gap-4 text-sm text-zinc-500">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <div className="mt-8 space-y-4 text-lg leading-8 text-zinc-400">
          {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </article>
    </div>
  );
}
