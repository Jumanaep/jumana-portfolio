import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { EXPERIENCE } from "./data";
import { Reveal, SectionHeading } from "./primitives";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Where I've <span className="gradient-text">shipped quality</span>
          </>
        }
      />

      <div ref={ref} className="relative mt-14 pl-8 sm:pl-12">
        <div className="bg-border absolute top-0 bottom-0 left-[7px] w-px sm:left-[11px]">
          <motion.div
            className="w-px"
            style={{ height, background: "var(--gradient-signal)" }}
          />
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08} className="relative">
              <span className="glass absolute top-8 -left-8 grid h-4 w-4 place-items-center rounded-full sm:-left-12">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--gradient-signal)" }}
                />
              </span>
              <div className="glass gradient-ring rounded-3xl p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold">{job.company}</h3>
                  {job.current && (
                    <span className="text-signal-3 glass-soft rounded-full px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                      Current
                    </span>
                  )}
                </div>
                <p className="gradient-text mt-1 text-sm font-medium">{job.role}</p>
                <p className="text-muted-foreground mt-1 font-mono text-xs">{job.period}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.points.map((point) => (
                    <span key={point} className="glass-soft rounded-xl px-3 py-1.5 text-xs">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
