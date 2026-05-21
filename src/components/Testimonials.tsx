import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Check, AlertCircle } from "lucide-react";
import { getLanguageFromPath } from "@/lib/language";
import { Reveal } from "./Reveal";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/martina.roscioli@gmail.com";
const FORM_FALLBACK_ENDPOINT = "https://formsubmit.co/martina.roscioli@gmail.com";

const TESTIMONIALS = [
  {
    quote:
      "Marti... così autentica e magica da saper accogliere ogni tua cellula. Avvicinarsi a lei significa entrare in ascolto con se stessi: senza maschere e con dolcezza. Grazie ✨",
    name: "Letizia B.",
  },
  {
    quote:
      "Il percorso che sto facendo con Martina è un viaggio mai provato prima, una coccola che ognuno di noi dovrebbe concedersi ogni tanto. Apparentemente difficile da spiegare ma in realtà estremamente facile. Circa due anni fa per la prima volta c’è stata una prima “magia”, una prima connessione. Da un po’ di tempo stiamo lavorando a distanza, e ogni volta la realtà supera le aspettative. Martina mi ha fatto scoprire un modo di comunicare, di sentire e di ascoltare diverso dal solito.",
    name: "Giorgia R.",
  },
  {
    quote:
      "I worked with Martina as a student and booked multiple sessions with her. Her touch is soft yet powerful. And there is so much love and compassion in what she does as a space holder. I’d love to come back soon for another session. Thank you Martina, for who you are ✨🤍",
    name: "Chantal S.",
  },
  {
    quote:
      "I’ve known and worked with Martina for many years, and she brings such amazing energy to everything she does. Now that I have the pleasure of having her in my salon in Turin, the atmosphere, the flow of the salon, and the incredible feedback from my clients make me so happy and proud of her work and passion. I always highly recommend this incredible talent.",
    name: "Nico — Toei House Salon, Torino",
  },
];

const TESTIMONIALS_COPY = {
  en: {
    aria: "Client feedback",
    eyebrow: "Feedback",
    title: "From You",
    intro: "Words shared by people who have walked through this work with me.",
    carouselAria: "Client testimonials carousel",
    positionAria: "Feedback position",
    showFeedback: "Show feedback",
    thankYou: "Thank you. Your words have been received privately.",
    formTitle: "Share your words",
    formText: "It would be beautiful to receive a few words from you — a small trace of what we lived together, seen through your eyes.",
    name: "Name",
    email: "Email (optional)",
    words: "Your words",
    sending: "Sending…",
    send: "Send",
    error: "Opening a secure backup sending page. If it does not open, please send your words directly to martina.roscioli@gmail.com.",
  },
  it: {
    aria: "Feedback dei clienti",
    eyebrow: "Feedback",
    title: "Le vostre parole",
    intro: "Parole condivise da persone che hanno attraversato questo lavoro con me.",
    carouselAria: "Carosello delle testimonianze",
    positionAria: "Posizione feedback",
    showFeedback: "Mostra feedback",
    thankYou: "Grazie. Le tue parole sono state ricevute in privato.",
    formTitle: "Lascia le tue parole",
    formText: "Sarebbe bello ricevere qualche parola da te: una piccola traccia di ciò che abbiamo vissuto insieme, visto attraverso i tuoi occhi.",
    name: "Nome",
    email: "Email (opzionale)",
    words: "Le tue parole",
    sending: "Invio…",
    send: "Invia",
    error: "Si sta aprendo una pagina sicura alternativa per l’invio. Se non si apre, scrivimi direttamente a martina.roscioli@gmail.com.",
  },
};

const TestimonialQuote = ({ quote, name }: { quote: string; name: string }) => (
  <figure>
    <blockquote className="font-serif italic text-lg md:text-xl leading-[1.45] text-forest-deep text-pretty">
      “{quote}”
    </blockquote>
    <figcaption className="mt-5 text-sm text-foreground/55 tracking-wide">
      — {name}
    </figcaption>
  </figure>
);

export const Testimonials = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = TESTIMONIALS_COPY[language];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goPrevious = () => {
    setActive((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goNext = () => {
    setActive((current) => (current + 1) % TESTIMONIALS.length);
  };

  const visibleDesktopTestimonials = [0, 1, 2].map(
    (offset) => TESTIMONIALS[(active + offset) % TESTIMONIALS.length]
  );

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 40) return;

    if (distance > 0) {
      goPrevious();
    } else {
      goNext();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isWritingField = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.tagName === "SELECT";

      if (isWritingField) return;

      if (event.key === "ArrowLeft") {
        goPrevious();
      }

      if (event.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const submitWithFallback = (form: HTMLFormElement) => {
    form.action = FORM_FALLBACK_ENDPOINT;
    form.method = "POST";
    HTMLFormElement.prototype.submit.call(form);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) throw new Error("Unable to send your words");

      form.reset();
      setSubmitted(true);
      setLoading(false);
    } catch {
      setError(copy.error);
      submitWithFallback(form);
    }
  };

  return (
    <section id="from-you" className="bg-ivory pt-24 pb-10 px-6 md:pt-32 md:pb-14 md:px-10" aria-label={copy.aria}>
      <div className="container-soft">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">{copy.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6 text-balance">
            {copy.title}
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed text-pretty">
            {copy.intro}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div
            className="relative touch-pan-y"
            aria-label={copy.carouselAria}
            tabIndex={0}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="sm:hidden px-6 text-center min-h-[310px] flex items-center justify-center">
              <TestimonialQuote {...TESTIMONIALS[active]} />
            </div>

            <div className="hidden sm:grid sm:grid-cols-3 gap-8">
              {visibleDesktopTestimonials.map((item, index) => (
                <div key={`${item.name}-${index}`}>
                  <TestimonialQuote {...item} />
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2" aria-label={copy.positionAria}>
              {TESTIMONIALS.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === active ? "w-6 bg-forest" : "w-2 bg-forest/25"
                  }`}
                  aria-label={`${copy.showFeedback} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-10 max-w-2xl">
          <form
            onSubmit={onSubmit}
            action={FORM_FALLBACK_ENDPOINT}
            method="POST"
            className="border-t border-forest-deep/10 pt-8 space-y-4"
          >
            {submitted ? (
              <div className="flex items-start gap-3 text-foreground/70 animate-fade-in">
                <Check size={18} strokeWidth={1.5} className="mt-1 text-forest shrink-0" />
                <p>{copy.thankYou}</p>
              </div>
            ) : (
              <>
                <input type="hidden" name="_subject" value="New private words from TrasforMarti website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://trasformarti.com/#from-you" />

                <div>
                  <p className="font-serif text-2xl text-forest-deep mb-3">{copy.formTitle}</p>
                  <p className="text-foreground/65 leading-relaxed">
                    {copy.formText}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    name="name"
                    type="text"
                    placeholder={copy.name}
                    className="from-you-input"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder={copy.email}
                    className="from-you-input"
                  />
                </div>

                <textarea
                  name="words"
                  rows={4}
                  placeholder={copy.words}
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
                  {loading ? copy.sending : copy.send}
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
