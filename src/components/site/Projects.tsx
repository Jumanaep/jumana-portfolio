import { FlaskConical } from "lucide-react";
import { TRAINING_PROJECTS, DASHBOARD } from "./data";
import { Counter, Reveal, SectionHeading } from "./primitives";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Training Projects"
        title={
          <>
            Where the <span className="gradient-text">fundamentals</span> were built
          </>
        }
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {TRAINING_PROJECTS.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 0.08}
            className="glass gradient-ring rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <span className="glass-soft grid h-11 w-11 place-items-center rounded-2xl">
              <FlaskConical className="text-signal h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{project.name}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="glass-soft rounded-lg px-2.5 py-1 text-[0.7rem]">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24">
        <SectionHeading
          eyebrow="QA Dashboard"
          title={
            <>
              A year of testing, <span className="gradient-text">in numbers</span>
            </>
          }
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DASHBOARD.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={i * 0.05}
              className="glass gradient-ring relative overflow-hidden rounded-3xl p-7"
            >
              <span
                className="absolute -top-16 -right-10 h-32 w-32 rounded-full blur-3xl"
                style={{ background: "var(--glow)" }}
              />
              <p className="text-muted-foreground font-mono text-[0.68rem] tracking-[0.2em] uppercase">
                {metric.label}
              </p>
              <p className="font-display mt-4 text-4xl font-semibold">
                <Counter value={metric.value} suffix={metric.suffix} />
              </p>
              <div className="bg-muted mt-5 h-1 overflow-hidden rounded-full">
                <div
                  className="h-full w-2/3 animate-pulse"
                  style={{ background: "var(--gradient-signal)" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
