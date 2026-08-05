import { SKILL_GROUPS } from "./data";
import { Reveal, SectionHeading } from "./primitives";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title={
          <>
            The toolkit behind <span className="gradient-text">reliable releases</span>
          </>
        }
        lead="Testing craft, automation frameworks, and the process discipline that keeps regressions out of production."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.06}
            className="glass gradient-ring group h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <span className="text-muted-foreground font-mono text-[0.7rem]">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="glass-soft hover:border-signal rounded-xl px-3 py-1.5 text-xs transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
