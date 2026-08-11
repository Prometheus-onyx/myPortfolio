import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  Database,
  ShieldCheck,
  Layers3,
  Code2,
  Cloud,
  Boxes,
  Sparkles,
} from "lucide-react";
import { 
  SiReact,
  SiFastapi,
  SiDjango,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiPostgresql,
  SiTailwindcss,
  SiFlask,
  SiJavascript,
  SiMysql,
  SiSqlite,
  SiFramer,
  SiGithubactions,
  SiGooglecloud,
} from "react-icons/si";
import skillsData from "../data/skills.json";
import PageSection from "../components/PageSection";

const iconMap = {
  SiReact: "SiReact",
  SiTailwindcss: "SiTailwindcss",
  SiFastapi: "SiFastapi",
  SiDjango: "SiDjango",
  SiPytorch: "SiPytorch",
  SiTensorflow: "SiTensorflow",
  SiDocker: "SiDocker",
  SiPostgresql: "SiPostgresql",
  SiFlask: "SiFlask",
  SiJavascript: "SiJavascript",
  SiMysql: "SiMysql",
  SiSqlite: "SiSqlite",
  SiFramer: "SiFramer",
  SiGithubactions: "SiGithubactions",
  SiGooglecloud: "SiGooglecloud",
};

const categoryIconMap = {
  Frontend: <Code2 size={18} />,
  Backend: <Cpu size={18} />,
  "AI/ML": <BrainCircuit size={18} />,
  Databases: <Database size={18} />,
  DevOps: <Boxes size={18} />,
};

export default function SkillsPage() {
  return (
    <div>
      <PageSection
        eyebrow="Skills"
        title="An interactive overview of the technologies I’m learning and building with."
        description="My skills span frontend, backend, AI/ML, NLP, databases, and secure software development."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-zinc-900/70 p-6"
            >
              <div className="flex items-center gap-2 text-emerald-300">
                {categoryIconMap[group.category]}
                <h3 className="text-xl font-semibold text-white">
                  {group.category}
                </h3>
              </div>
              <div className="mt-5 space-y-4">
                {group.items.map((skill) => {
                  const Icon = skill.icon in iconMap ? () => null : () => null;
                  return (
                    <div
                      key={skill.name}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 p-2 text-emerald-300">
                            {skill.icon === "SiReact" ? (
                              <SiReact size={16} />
                            ) : skill.icon === "SiTailwindcss" ? (
                              <SiTailwindcss size={16} />
                            ) : skill.icon === "SiFastapi" ? (
                              <SiFastapi size={16} />
                            ) : skill.icon === "SiDjango" ? (
                              <SiDjango size={16} />
                            ) : skill.icon === "SiPytorch" ? (
                              <SiPytorch size={16} />
                            ) : skill.icon === "SiTensorflow" ? (
                              <SiTensorflow size={16} />
                            ) : skill.icon === "SiFramer" ? (
                              <SiFramer size={16} />
                            ) : skill.icon === "SiPostgresql" ? (
                              <SiPostgresql size={16} />
                            ) : skill.icon === "SiDocker" ? (
                              <SiDocker size={16} />
                            ) : skill.icon === "SiMysql" ? (
                              <SiMysql size={16} />
                            ) : skill.icon === "SiGithubactions" ? (
                              <SiGithubactions size={16} />
                            ) : skill.icon === "SiGooglecloud" ? (
                              <SiGooglecloud size={16} />
                            ) : skill.icon === "SiSqlite" ? (
                              <SiSqlite size={16} />
                            ) : (
                              <Cpu size={16} />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-white">
                              {skill.name}
                            </p>
                            <p className="text-xs text-zinc-500">
                              {skill.years} • {skill.projects} projects
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-emerald-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-zinc-800">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                          style={{ width: `${skill.level}%` }}
                        />
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
