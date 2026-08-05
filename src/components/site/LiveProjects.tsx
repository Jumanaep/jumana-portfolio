import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { LIVE_PROJECTS } from "./data";
import { Reveal, SectionHeading } from "./primitives";

function ProjectCard({ project, index }: { project: (typeof LIVE_PROJECTS)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal
      delay={index * 0.06}
      className="glass gradient-ring group overflow-hidden rounded-[1.8rem]"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} — ${project.domain} interface`}
          loading="lazy"
          width={1200}
          height={750}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--card)] to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="glass-soft rounded-full px-3 py-1 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
            {project.role}
          </span>
          <span className="glass-soft text-signal-3 flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
            <span className="bg-signal-3 animate-pulse-glow h-1.5 w-1.5 rounded-full" />
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-muted-foreground mt-1 text-xs">
              {project.domain} · {project.platform}
            </p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-soft hover:border-signal inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium transition-colors"
          >
            Website <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span key={tag} className="glass-soft rounded-lg px-2.5 py-1 text-[0.7rem]">
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="text-signal mt-6 inline-flex items-center gap-1.5 text-xs font-medium"
        >
          {open ? "Hide QA scope" : "View QA scope"}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-x-4 gap-y-1.5 overflow-hidden sm:grid-cols-2"
            >
              {project.responsibilities.map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground flex items-start gap-2 pt-2 text-xs"
                >
                  <span className="bg-signal mt-1.5 h-1 w-1 shrink-0 rounded-full" />
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function LiveProjects() {
  return (
    <section id="live-projects" className="section-shell">
      <SectionHeading
        eyebrow="Live Client Projects"
        title={
          <>
            Products I helped <span className="gradient-text">ship with confidence</span>
          </>
        }
        lead="Four production applications across FinTech, marketplace, food delivery, and school ERP domains."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {LIVE_PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
