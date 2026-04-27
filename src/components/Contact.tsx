import { useState } from "react";
import { Instagram, Mail, MapPin, Check } from "lucide-react";
import { Reveal } from "./Reveal";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Graceful no-backend submit state
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="section bg-ivory" aria-label="Contact and booking">
      <div className="container-soft grid md:grid-cols-12 gap-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <p className="eyebrow mb-5">Contact</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 text-balance">
            Begin the Conversation
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
            If you feel called to begin, write to me. We can find the way of
            working together that best supports your moment.
          </p>

          <ul className="mt-10 space-y-5 text-foreground/80">
            <li className="flex items-start gap-4">
              <Mail size={18} strokeWidth={1.4} className="text-forest mt-1 shrink-0" />
              <a href="mailto:hello@trasformarty.com" className="hover:text-forest-deep">
                hello@trasformarty.com
                <span className="block text-xs text-foreground/50 italic">placeholder</span>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <Instagram size={18} strokeWidth={1.4} className="text-forest mt-1 shrink-0" />
              <a
                href="https://instagram.com/trasformarty"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-forest-deep"
              >
                @trasformarty
                <span className="block text-xs text-foreground/50 italic">
                  Instagram link coming soon
                </span>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MapPin size={18} strokeWidth={1.4} className="text-forest mt-1 shrink-0" />
              <span>
                Location / city to be added
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={150} className="md:col-span-7">
          <form
            onSubmit={onSubmit}
            className="leaf-card space-y-5"
            aria-label="Contact form"
          >
            {submitted ? (
              <div className="text-center py-12 px-4 animate-fade-in">
                <div className="mx-auto w-14 h-14 rounded-full bg-sage/40 flex items-center justify-center mb-5">
                  <Check size={26} strokeWidth={1.5} className="text-forest-deep" />
                </div>
                <h3 className="font-serif text-3xl text-forest-deep mb-3">Thank you.</h3>
                <p className="text-foreground/70 max-w-md mx-auto leading-relaxed">
                  Your message has been received in spirit. I&rsquo;ll write back as
                  soon as I can.
                </p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" id="name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Email" id="email" required>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="form-input"
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="What are you interested in?" id="interest">
                    <select id="interest" name="interest" className="form-input" defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option>A Touch to Soul</option>
                      <option>One-to-One Sessions</option>
                      <option>Workshops</option>
                      <option>Retreats</option>
                      <option>Courses</option>
                      <option>Other</option>
                    </select>
                  </Field>
                  <Field label="Online or in person?" id="format">
                    <select id="format" name="format" className="form-input" defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option>Online</option>
                      <option>In person</option>
                      <option>Not sure yet</option>
                    </select>
                  </Field>
                </div>

                <Field label="Message" id="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Share what feels alive for you right now…"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-forest text-ivory px-8 py-3.5 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </>
            )}

            <style>{`
              .form-input {
                width: 100%;
                background: hsl(var(--ivory));
                border: 1px solid hsl(var(--border));
                border-radius: 0.85rem;
                padding: 0.85rem 1rem;
                font-size: 0.95rem;
                color: hsl(var(--foreground));
                transition: border-color .3s, box-shadow .3s;
              }
              .form-input:focus {
                outline: none;
                border-color: hsl(var(--forest));
                box-shadow: 0 0 0 3px hsl(var(--sage) / 0.4);
              }
            `}</style>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

const Field = ({
  label,
  id,
  required,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <label htmlFor={id} className="block">
    <span className="block text-sm text-foreground/70 mb-2">
      {label}
      {required && <span className="text-earth ml-1" aria-hidden="true">*</span>}
    </span>
    {children}
  </label>
);

export default Contact;
