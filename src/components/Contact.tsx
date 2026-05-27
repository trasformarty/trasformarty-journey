import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone, Check, AlertCircle } from "lucide-react";
import { getLanguageFromPath } from "@/lib/language";
import { Reveal } from "./Reveal";

const CONTACT_EMAIL = "martina.roscioli@gmail.com";
const FORM_ENDPOINT = "https://formsubmit.co/ajax/martina.roscioli@gmail.com";

const CONTACT_COPY = {
  en: {
    aria: "Contact and booking",
    eyebrow: "Contact",
    title: "Begin the Conversation",
    intro:
      "If you feel called to begin, write to me. We can find the way of working together that best supports your moment.",
    location: "Ibiza & more",
    formAria: "Contact form",
    thankTitle: "Thank you.",
    thankText: "Your message has been sent. I’ll write back as soon as I can.",
    labels: {
      name: "Name",
      email: "Email",
      interest: "What are you interested in?",
      format: "Online or in person?",
      message: "Message",
    },
    select: "Select…",
    interests: ["A Touch to Soul", "One-to-One Sessions", "Workshops", "Retreats", "Courses", "Other"],
    formats: ["Online", "In person", "Not sure yet"],
    placeholder: "Share what feels alive for you right now…",
    sending: "Sending…",
    send: "Send Message",
    error:
      "Something went wrong while sending your message. Please write directly to martina.roscioli@gmail.com.",
  },
  it: {
    aria: "Contatti e prenotazioni",
    eyebrow: "Contatti",
    title: "Inizia la conversazione",
    intro:
      "Se senti che è il momento di iniziare, scrivimi. Possiamo trovare insieme il modo di lavorare che sostiene meglio questo momento della tua vita.",
    location: "Ibiza e oltre",
    formAria: "Modulo di contatto",
    thankTitle: "Grazie.",
    thankText: "Il tuo messaggio è stato inviato. Ti risponderò appena possibile.",
    labels: {
      name: "Nome",
      email: "Email",
      interest: "A cosa sei interessata/o?",
      format: "Online o in presenza?",
      message: "Messaggio",
    },
    select: "Seleziona…",
    interests: ["A Touch to Soul", "Sessioni one-to-one", "Workshop", "Ritiri", "Corsi", "Altro"],
    formats: ["Online", "In presenza", "Non lo so ancora"],
    placeholder: "Raccontami cosa senti vivo in questo momento…",
    sending: "Invio…",
    send: "Invia messaggio",
    error:
      "Qualcosa non ha funzionato durante l’invio. Scrivimi direttamente a martina.roscioli@gmail.com.",
  },
};

export const Contact = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = CONTACT_COPY[language];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();

    formData.append("_subject", "New message from TrasforMarti website");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    if (email) {
      formData.append("_replyto", email);
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Unable to send the message");
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError(copy.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-ivory pt-10 pb-24 px-6 md:pt-14 md:pb-32 md:px-10" aria-label={copy.aria}>
      <div className="container-soft grid md:grid-cols-12 gap-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <p className="eyebrow mb-5">{copy.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 text-balance">
            {copy.title}
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
            {copy.intro}
          </p>

          <ul className="mt-10 space-y-5 text-foreground/80">
            <li className="flex items-start gap-4">
              <Mail size={18} strokeWidth={1.4} className="text-forest mt-1 shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-forest-deep">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-4">
              <Instagram size={18} strokeWidth={1.4} className="text-forest mt-1 shrink-0" />
              <a
                href="https://www.instagram.com/trasformarti_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-forest-deep"
              >
                @trasformarti_
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MapPin size={18} strokeWidth={1.4} className="text-forest mt-1 shrink-0" />
              <span>{copy.location}</span>
            </li>
            <li className="flex items-start gap-4">
              <Phone size={18} strokeWidth={1.4} className="text-forest mt-1 shrink-0" />
              <a
                href="https://wa.me/34691738479"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-forest-deep"
              >
                +34 691 73 84 79
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={150} className="md:col-span-7">
          <form onSubmit={onSubmit} className="leaf-card space-y-5" aria-label={copy.formAria}>
            {submitted ? (
              <div key="thanks" className="text-center py-12 px-4 animate-fade-in">
                <div className="mx-auto w-14 h-14 rounded-full bg-sage/40 flex items-center justify-center mb-5">
                  <Check size={26} strokeWidth={1.5} className="text-forest-deep" />
                </div>
                <h3 className="font-serif text-3xl text-forest-deep mb-3">{copy.thankTitle}</h3>
                <p className="text-foreground/70 max-w-md mx-auto leading-relaxed">
                  {copy.thankText}
                </p>
              </div>
            ) : (
              <div key="form-fields" className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={copy.labels.name} id="name" required>
                    <input id="name" name="name" type="text" required autoComplete="name" className="form-input" />
                  </Field>
                  <Field label={copy.labels.email} id="email" required>
                    <input id="email" name="email" type="email" required autoComplete="email" className="form-input" />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={copy.labels.interest} id="interest">
                    <select id="interest" name="interest" className="form-input" defaultValue="">
                      <option value="" disabled>{copy.select}</option>
                      {copy.interests.map((interest) => <option key={interest}>{interest}</option>)}
                    </select>
                  </Field>
                  <Field label={copy.labels.format} id="format">
                    <select id="format" name="format" className="form-input" defaultValue="">
                      <option value="" disabled>{copy.select}</option>
                      {copy.formats.map((format) => <option key={format}>{format}</option>)}
                    </select>
                  </Field>
                </div>

                <Field label={copy.labels.message} id="message">
                  <textarea id="message" name="message" rows={5} className="form-input resize-none" placeholder={copy.placeholder} />
                </Field>

                {error && (
                  <p className="flex items-start gap-2 text-sm text-destructive" role="alert">
                    <AlertCircle size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-forest text-ivory px-8 py-3.5 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft disabled:opacity-60"
                >
                  {loading ? copy.sending : copy.send}
                </button>
              </div>
            )}
          </form>
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
