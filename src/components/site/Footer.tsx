export function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)]">
      <div className="mx-auto flex max-w-[78rem] flex-col items-center gap-4 px-5 py-12 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline)]">
            <span
              className="absolute inset-0 rounded-full opacity-25 blur-md"
              style={{ background: "var(--gradient-signal)" }}
            />
            <span className="font-display gradient-text text-sm font-bold">JF</span>
          </span>
          <p className="text-muted-foreground text-sm">© 2026 Jumana Fathima EP</p>
        </div>
      
      </div>
    </footer>
  );
}
