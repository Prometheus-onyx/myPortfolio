import { motion } from 'framer-motion';

export default function PageSection({ eyebrow, title, description, children, align = 'left' }) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : ''}`}>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {eyebrow}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {description && <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">{description}</p>}
      </motion.div>
      {children}
    </section>
  );
}
