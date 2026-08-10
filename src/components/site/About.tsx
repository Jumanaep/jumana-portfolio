import { STATS } from "./data";
import { Counter, Reveal, SectionHeading } from "./primitives";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            Quality is a habit,
            <br />
            <span className="gradient-text">not a final step.</span>
          </>
        }
      />
  
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass gradient-ring rounded-3xl p-8">
          <p className="mt-10 text-base leading-relaxed sm:text-lg">
            I am a Software QA Engineer passionate about delivering high-quality software
            experiences. I specialize in Manual Testing, Automation Testing, Functional Testing,
            Regression Testing, Smoke Testing, UI Testing, Selenium WebDriver, Playwright, API
            Testing using Postman, and Agile methodologies. I enjoy identifying defects before
            release, improving software reliability, and collaborating closely with developers to
            ensure excellent user experiences.
          </p>
          <div className="mt-12 flex flex-wrap gap-2">
            {["Manual", "Automation", "API", "Agile", "Regression", "UI"].map((tag) => (
              <span
                key={tag}
                 className="glass-soft rounded-full px-3 py-1.5 font-mono text-[0.7rem] tracking-wider uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.05}
              className="glass gradient-ring rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="font-display text-2xl font-semibold sm:text-3xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-muted-foreground mt-1.5 text-xs leading-snug">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
