import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Scroll reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Animated counter */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* Section heading */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-4xl leading-[1.05] font-semibold sm:text-5xl">{title}</h2>
      {lead ? <p className="text-muted-foreground mt-4 text-base leading-relaxed">{lead}</p> : null}
    </Reveal>
  );
}

/* Aurora + mesh + grid + noise background */
export function AuroraBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-background absolute inset-0" />
      <div
        className="animate-drift absolute -top-[30%] -left-[15%] h-[70vh] w-[70vw] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 65%)" }}
      />
      <div
        className="animate-float-slow absolute top-[10%] -right-[10%] h-[55vh] w-[55vw] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--signal-2) 35%, transparent), transparent 65%)",
        }}
      />
      <div
        className="animate-drift absolute bottom-[-20%] left-[20%] h-[60vh] w-[60vw] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--signal-3) 25%, transparent), transparent 65%)",
        }}
      />
      <div className="grid-lines absolute inset-0 opacity-70" />
      <div className="noise-layer" />
    </div>
  );
}

/* Cursor glow + custom cursor dot */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 220, damping: 26 });
  const sy = useSpring(y, { stiffness: 220, damping: 26 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          x: sx,
          y: sy,
          background: "radial-gradient(circle, var(--glow), transparent 60%)",
        }}
      />
      <motion.div
        aria-hidden
        className="bg-signal pointer-events-none fixed top-0 left-0 z-[80] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
        style={{ x, y }}
      />
    </>
  );
}
