import { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "./data";
import { Reveal, SectionHeading } from "./primitives";

const FIELDS = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "QA role / project enquiry",
  },
] as const;

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "3b466fb8-87b6-450d-ae88-77c20c704e4d"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    setSending(false);

    if (result.success) {
      toast.success("Message sent successfully!", {
        description:
          "Thank you for contacting me. I'll get back to you soon.",
      });

      form.reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-shell !pb-8">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let's talk about{" "}
            <span className="gradient-text">
              your release quality
            </span>
          </>
        }
        lead="Available for QA Engineer roles and contract testing engagements."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] items-stretch">

        {/* LEFT FORM */}
        <Reveal className="glass gradient-ring rounded-[2rem] p-8 h-full">
          <form
            onSubmit={onSubmit}
            className="flex h-full flex-col"
          >
            <input
              type="hidden"
              name="subject"
              value="New Portfolio Contact Message"
            />

            <input
              type="hidden"
              name="from_name"
              value="Jumana Portfolio"
            />

            <div className="space-y-5 flex-1">
              {FIELDS.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="text-muted-foreground font-mono text-[11px] uppercase tracking-[0.2em]"
                  >
                    {field.label}
                  </label>

                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    className="glass-soft mt-2 w-full rounded-2xl px-4 py-3 text-sm outline-none transition-all focus:border-[var(--signal)]"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="text-muted-foreground font-mono text-[11px] uppercase tracking-[0.2em]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the product and the testing scope..."
                  className="glass-soft mt-2 w-full resize-none rounded-2xl px-4 py-3 text-sm outline-none transition-all focus:border-[var(--signal)]"
                />
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              disabled={sending}
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-medium text-primary-foreground disabled:opacity-70"
              style={{
                background: "var(--gradient-signal)",
              }}
            >
              {sending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}

              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </Reveal>

        {/* RIGHT CARD */}
        <Reveal className="glass gradient-ring rounded-[2rem] p-15 flex flex-col justify-between h-full">

          <div>
            <h3 className="text-2xl font-semibold">
              Contact Me
            </h3>

            <p className="text-muted-foreground mt-2 text-sm leading-7">
              Looking for a Manual QA Engineer or need help
              testing your web application?
              <br />
              I'd love to hear about your project.
            </p>

            <div className="mt-8 space-y-6">

              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 hover:text-[var(--signal)] transition-colors"
              >
                <div className="glass-soft flex h-11 w-11 items-center justify-center rounded-full">
                  <Mail className="h-5 w-5 text-[var(--signal)]" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Email
                  </p>

                  <p>{CONTACT.email}</p>
                </div>
              </a>

              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 hover:text-[var(--signal)] transition-colors"
              >
                <div className="glass-soft flex h-11 w-11 items-center justify-center rounded-full">
                  <Phone className="h-5 w-5 text-[var(--signal)]" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Phone
                  </p>

                  <p>{CONTACT.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="glass-soft flex h-11 w-11 items-center justify-center rounded-full">
                  <MapPin className="h-5 w-5 text-[var(--signal)]" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Location
                  </p>

                  <p>{CONTACT.location}</p>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-soft hover:border-[var(--signal)] grid h-11 w-11 place-items-center rounded-xl transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-soft hover:border-[var(--signal)] grid h-11 w-11 place-items-center rounded-xl transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}