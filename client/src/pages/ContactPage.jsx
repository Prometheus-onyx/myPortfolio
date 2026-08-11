import { GitBranch, Mail, MapPin, Send } from "lucide-react";
import PageSection from "../components/PageSection";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function ContactPage() {
  const message = "Hi Steve, I found your portfolio and would like to get in touch.";

  return (
    <div>
      <PageSection
        eyebrow="Contact"
        title="Let’s build something worth remembering."
        description="Open to collaborations, product partnerships, and ambitious AI engineering work."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-zinc-300">
                <span className="mb-2 block">Name</span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 outline-none"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm text-zinc-300">
                <span className="mb-2 block">Email</span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 outline-none"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm text-zinc-300">
              <span className="mb-2 block">Subject</span>
              <input
                className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 outline-none"
                placeholder="Let’s discuss an opportunity"
              />
            </label>
            <label className="mt-4 block text-sm text-zinc-300">
              <span className="mb-2 block">Message</span>
              <textarea
                rows="6"
                className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 outline-none"
                placeholder="Tell me about the problem you want to solve."
              />
            </label>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-medium text-zinc-950">
              Send Message <Send size={16} />
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Connect</h3>
              <div className="mt-4 space-y-3 text-zinc-300">
                <a
                  className="flex items-center gap-3"
                  href="https://github.com/Prometheus-onyx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={18} /> GitHub
                </a>
                <a
                  className="flex items-center gap-3"
                  href="https://www.linkedin.com/in/steve-bicko-7b1460334/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={18} /> LinkedIn
                </a>
                <a
                  className="flex items-center gap-3"
                  href="https://x.com/ekron28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={18} /> X
                </a>
                <a
                  className="flex items-center gap-3"
                  href={`https://wa.me/254702896370?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={18} />
                  stevebickookumu@gmail.com
                </a>

                <div className="flex items-center gap-3">
                  <MapPin size={18} /> Nairobi, Kenya • Remote
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 p-6">
              <h3 className="text-xl font-semibold text-white">FAQ</h3>
              <div className="mt-4 space-y-3 text-zinc-300">
                <p>
                  <span className="font-medium text-white">Open to:</span>{" "}
                  Junior developer opportunities, Internships, Collaborations,
                  and interesting software & AI projects.
                </p>

                <p>
                  <span className="font-medium text-white">
                    What I enjoy working on:
                  </span>{" "}
                  Web development, AI/ML, NLP, Backend systems, and Secure
                  software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
