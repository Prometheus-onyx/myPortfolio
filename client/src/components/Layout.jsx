import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GitBranch, Globe2, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import Footer from "./Footer";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/skills" },
  { label: "AI Lab", to: "/ai-lab" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.16),_transparent_30%),linear-gradient(135deg,_#09090B_0%,_#111827_45%,_#09090B_100%)] text-zinc-100">
      <div className="fixed inset-x-0 top-0 z-50">
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 ${isScrolled ? "backdrop-blur-xl bg-zinc-950/70 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" : "bg-transparent"}`}
        >
          <Link
            to="/"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.32em] text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
              SB
            </span>
            <span className="hidden sm:inline">STEVE OKUMU</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition ${isActive ? "text-emerald-300" : "text-zinc-300 hover:text-white"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="/Steve-Okumu-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200 transition hover:bg-emerald-500/20"
            >
              Resume <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            className="rounded-full border border-white/10 p-2 text-zinc-200 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-b border-white/10 bg-zinc-950/95 px-4 py-4 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-full px-3 py-2 text-sm ${isActive ? "bg-emerald-500/15 text-emerald-300" : "text-zinc-300 hover:text-white"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
