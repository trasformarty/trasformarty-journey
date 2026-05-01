import { useState } from "react";
import { Check, AlertCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/martina.roscioli@gmail.com";

const TESTIMONIALS = [
  {
    quote:
      "Marti... così autentica e magica da saper accogliere ogni tua cellula. Avvicinarsi a lei significa entrare in ascolto con se stessi: senza maschere e con dolcezza. Grazie ✨",
    name: "Letizia B.",
  },
];

export const Testimonials = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "New private words from TrasforMarti website");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) throw new Error("Unable to send your words");

      form.reset();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please send your words directly to martina.roscioli@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="from-you" className="section bg-ivory" aria-label="Client feedback">
      <div className="container-soft">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">Feedback</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6 text-balance">
            From You
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed text-pretty">
            Words shared by people who have walked through this work with me.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div
            className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Client testimonials carousel"
          >
            {TESTIMONIALS.map((item, index) => (
              <figure
                key={index}
                className="min-w-[78%] sm:min-w-[42%] lg:min-w-[38%] snap-start"
              >
                <blockquote className="font-serif italic text-2xl md:text-3xl leading-[1.22] text-forest-deep text-pretty">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-foreground/55 tracking-wide">
                  — {item.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-10 max-w-2xl">
          <form onSubmit={onSubmit} className="border-t border-forest-deep/10 pt-8 space-y-4">
            {submitted ? (
              <div className="flex items-start gap-3 text-foreground/70 animate-fade-in">
                <Check size={18} strokeWidth={1.5} className="mt-1 text-forest shrink-0" />
                <p>Thank you. Your words have been received privately.</p>
              </div>
            ) : (
              <>
                <div>
                  <p className="font-serif text-2xl text-forest-deep mb-3">Share your words</p>
                  <p className="text-foreground/65 leading-relaxed">
                    It would be beautiful to receive a few words from you — a small trace of what we lived together, seen through your eyes.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="from-you-input"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email (optional)"
                    className="from-you-input"
                  />
                </div>

                <textarea
                  name="words"
                  rows={4}
                  placeholder="Your words"
                  className="from-you-input resize-none"
                  required
                />

                {error && (
                  <p className="flex items-start gap-2 text-sm text-destructive" role="alert">
                    <AlertCircle size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center rounded-full bg-forest text-ivory px-6 py-3 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send"}
                </button>
              </>
            )}
          </form>

          <style>{`
            .from-you-input {
              width: 100%;
              background: transparent;
              border: 1px solid hsl(var(--border));
              border-radius: 0.85rem;
              padding: 0.8rem 1rem;
              font-size: 0.95rem;
              color: hsl(var(--foreground));
              transition: border-color .3s, box-shadow .3s;
            }
            .from-you-input:focus {
              outline: none;
              border-color: hsl(var(--forest));
              box-shadow: 0 0 0 3px hsl(var(--sage) / 0.35);
            }
          `}</style>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
