import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "./data";
import { Reveal, SectionHeading } from "./primitives";

const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { name: "subject", label: "Subject", type: "text", placeholder: "QA role / project enquiry" },
] as const;

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message ready to send", {
        description: `Reach me directly at ${CONTACT.email} — I reply within a day.`,
      });
      form.reset();
    }, 900);
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let's talk about <span className="gradient-text">your release quality</span>
          </>
        }
        lead="Available for QA Engineer roles and contract testing engagements."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <Reveal className="glass gradient-ring rounded-[1.8rem] p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            {FIELDS.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="text-muted-foreground font-mono text-[0.68rem] tracking-[0.2em] uppercase"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="glass-soft focus:border-signal placeholder:text-muted-foreground/60 mt-2 w-full rounded-2xl px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="text-muted-foreground font-mono text-[0.68rem] tracking-[0.2em] uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the product and the testing scope…"
                className="glass-soft focus:border-signal placeholder:text-muted-foreground/60 mt-2 w-full resize-none rounded-2xl px-4 py-3 text-sm outline-none transition-colors"
              />
            </div>
            <motion.button
              type="submit"
              disabled={sending}
              whileTap={{ scale: 0.97 }}
              className="text-primary-foreground inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-medium disabled:opacity-70"
              style={{ background: "var(--gradient-signal)" }}
            >
              {sending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {sending ? "Sending…" : "Send Message"}
            </motion.button>
          </form>
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={0.05} className="glass gradient-ring rounded-[1.8rem] p-7">
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-signal flex items-center gap-3 transition-colors"
                >
                  <Mail className="text-signal h-4 w-4" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="hover:text-signal flex items-center gap-3 transition-colors"
                >
                  <Phone className="text-signal h-4 w-4" /> {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-signal h-4 w-4" /> {CONTACT.location}
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glass-soft hover:border-signal grid h-10 w-10 place-items-center rounded-xl transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass-soft hover:border-signal grid h-10 w-10 place-items-center rounded-xl transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="Email"
                className="glass-soft hover:border-signal grid h-10 w-10 place-items-center rounded-xl transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="glass overflow-hidden rounded-[1.8rem] p-1.5">
            <iframe
              title="Map showing Calicut, Kerala, India"
              src="https://www.openstreetmap.org/export/embed.html?bbox=75.6%2C11.15%2C76.0%2C11.42&layer=mapnik&marker=11.2588%2C75.7804"
              loading="lazy"
              className="h-[260px] w-full rounded-[1.5rem] border-0 grayscale-[35%]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
