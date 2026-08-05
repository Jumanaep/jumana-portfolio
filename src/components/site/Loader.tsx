import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(100, ((t - start) / 1250) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 260);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="bg-background fixed inset-0 z-[100] flex flex-col items-center justify-center"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex h-28 w-28 items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ background: "var(--gradient-signal)", opacity: 0.25, filter: "blur(18px)" }}
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute inset-2 rounded-full border"
              style={{ borderColor: "var(--hairline)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="border-signal absolute inset-2 rounded-full border-2 border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
            />
            <span className="font-display gradient-text text-3xl font-bold tracking-tight">JF</span>
          </div>

          <div className="bg-muted mt-10 h-px w-56 overflow-hidden rounded-full">
            <div
              className="h-full"
              style={{ width: `${progress}%`, background: "var(--gradient-signal)" }}
            />
          </div>
          <p className="text-muted-foreground mt-4 font-mono text-[0.7rem] tracking-[0.28em] uppercase">
            Running test suite {Math.round(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
