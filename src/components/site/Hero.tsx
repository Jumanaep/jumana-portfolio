import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Bug, Download, Gauge, Mail, ShieldCheck, TestTube2 } from "lucide-react";
import profile from "@/assets/profile.png";
import { CONTACT, ROLES } from "./data";

function RoleRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative block h-[1.25em] overflow-hidden">
      <motion.span
        key={i}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="gradient-text absolute inset-0"
      >
        {ROLES[i]}
      </motion.span>
    </span>
  );
}

const FLOATERS = [
  { Icon: Bug, className: "left-[5%] top-[22%]", delay: 0 },
  { Icon: TestTube2, className: "right-[9%] top-[18%]", delay: 1.2 },
  { Icon: ShieldCheck, className: "left-[12%] bottom-[3%]", delay: 0.6 },
  { Icon: Gauge, className: "right-[42%] bottom-[25%]", delay: 1.8 },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {FLOATERS.map(({ Icon, className, delay }, idx) => (
        <motion.div
          key={idx}
          aria-hidden
          className={`glass absolute hidden h-14 w-14 place-items-center rounded-2xl lg:grid ${className}`}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="text-signal h-5 w-5" />
        </motion.div>
      ))}

      <div className="section-shell grid items-center gap-14 pt-32 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <span className="bg-signal animate-pulse-glow h-1.5 w-1.5 rounded-full" />
            Open to QA opportunities
          </motion.span>

          <motion.p
            className="text-muted-foreground mt-8 text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            Hello 👋 I'm
          </motion.p>

          <motion.h1
            className="mt-2 text-5xl leading-[0.98] font-semibold sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Jumana Fathima EP
          </motion.h1>

          <motion.div
            className="font-display mt-4 text-2xl font-semibold sm:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <RoleRotator />
          </motion.div>

          <motion.p
            className="text-muted-foreground mt-7 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Passionate Software QA Engineer with hands-on experience in Manual Testing and
            Automation Testing. Skilled in Selenium WebDriver, Playwright, Postman, Jira, Functional
            Testing, Regression Testing, Smoke Testing, UI Testing, API Testing, and Agile
            methodologies. Dedicated to improving software quality through structured testing,
            defect analysis, and continuous collaboration with development teams.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.7 }}
          >
            <a
              href={CONTACT.resume}
              download
              className="text-primary-foreground inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-signal)" }}
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#live-projects"
              className="glass hover:border-signal inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="glass hover:border-signal inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors"
            >
              Hire Me
            </a>
            
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="glass gradient-ring relative overflow-hidden rounded-[2rem] p-3"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={profile}
              alt="Portrait of Jumana Fathima EP, Software QA Engineer"
              width={900}
              height={1100}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
            />
            
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
