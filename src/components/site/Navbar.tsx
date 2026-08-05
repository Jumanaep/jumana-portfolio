import { motion, useScroll, useSpring } from "motion/react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV, CONTACT } from "./data";
import { cn } from "@/lib/utils";

function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("jf-theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("jf-theme", next ? "dark" : "light");
      return next;
    });
  };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "t" && !e.metaKey && !e.ctrlKey) {
        const el = document.activeElement;
        if (el && ["INPUT", "TEXTAREA"].includes(el.tagName)) return;
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
  return { dark, toggle };
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[70] h-[2px] w-full origin-left"
      style={{ scaleX, background: "var(--gradient-signal)" }}
    />
  );
}

export function Navbar() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.05, 0.3, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-[60] px-4">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full py-2 pr-2 pl-4">
        <a href="#home" className="flex items-center gap-2" aria-label="Home">
          <span className="relative grid h-9 w-9 place-items-center rounded-full border border-[var(--hairline)]">
            <span
              className="absolute inset-0 rounded-full opacity-30 blur-md"
              style={{ background: "var(--gradient-signal)" }}
            />
            <span className="font-display gradient-text text-sm font-bold">JF</span>
          </span>
          <span className="font-display hidden text-sm font-semibold sm:block">
            Jumana Fathima EP
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[0.8rem] transition-colors",
                  active === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="bg-secondary absolute inset-0 -z-10 rounded-full"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            onClick={toggle}
            aria-label="Toggle theme (T)"
            title="Toggle theme — press T"
            className="hover:bg-secondary grid h-9 w-9 place-items-center rounded-full border border-[var(--hairline)] transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={CONTACT.resume}
            download
            className="text-primary-foreground hidden items-center gap-2 rounded-full px-4 py-2 text-[0.8rem] font-medium transition-transform hover:scale-[1.03] sm:inline-flex"
            style={{ background: "var(--gradient-signal)" }}
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="hover:bg-secondary grid h-9 w-9 place-items-center rounded-full border border-[var(--hairline)] lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl p-2 lg:hidden"
        >
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="hover:bg-secondary block rounded-2xl px-4 py-2.5 text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
