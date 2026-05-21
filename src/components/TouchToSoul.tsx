import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getLanguageFromPath } from "@/lib/language";
import { Reveal } from "./Reveal";
import ImageLightbox from "./ImageLightbox";

const WHATSAPP_BOOKING_URL =
  "https://wa.me/34691738479?text=Hi%20Martina%2C%20I%20would%20like%20to%20book%20a%20session.%0AMy%20name%20is%3A%0AI%27m%20interested%20in%3A%0AMy%20availability%20is%3A";

const IMAGES = [
  "/touch-to-soul-1.jpg",
  "/touch-to-soul-2.jpg",
  "/touch-to-soul-3.jpg",
  "/touch-to-soul-4.jpg",
  "/touch-to-soul-5.jpg",
  "/touch-to-soul-6.jpg",
  "/touch-to-soul-7.jpg",
  "/touch-to-soul-8.jpg",
  "/touch-to-soul-9.jpg",
];

const TOUCH_COPY = {
  en: {
    aria: "A Touch to Soul",
    eyebrow: "Offering — Bodywork",
    title: "A Touch to Soul",
    subtitle: "A full body massage and somatic experience.",
    paragraphs: [
      "A Touch to Soul is a journey into one's own inner landscape — an experience of deep somatic listening, where the body can settle into relaxation and presence, the mind can grow quiet, and a more authentic sense of self can emerge.",
      "A safe space where emotions are free to flow and vital energy can move again with ease, opening at times into states of deep release.",
      "Through slow gestures, deeper pressures and a subtle touch, the body is met with care and respect — never forced, always listened to.",
      "The body holds memories. When the mind softens and listening deepens, what has been quietly stored can begin to surface — sometimes as an image, a sensation, a forgotten emotion, a fragment of memory. Nothing is sought, nothing is forced: there is simply space for what asks to be seen, welcomed, and gently released.",
    ],
    highlight: "A gentle therapy. A sensory path where body and soul find each other again.",
    closing:
      "An intimate encounter with one's own rhythm and felt sense, with a quality of presence that daily life so often forgets. What remains is a state of well-being, peace and integration that can last in time —",
    closingItalic: " a small step on the path of knowing oneself.",
    timing: "I offer sessions from 60 to 120 minutes, allowing the time to follow the rhythm and depth of the work.",
    cta: "Book a Session",
    upload: "Upload treatment images here",
  },
  it: {
    aria: "A Touch to Soul",
    eyebrow: "Offerta — Lavoro sul corpo",
    title: "A Touch to Soul",
    subtitle: "Un massaggio a corpo intero e un’esperienza somatica.",
    paragraphs: [
      "A Touch to Soul è un viaggio nel proprio paesaggio interiore: un’esperienza di ascolto somatico profondo, dove il corpo può entrare in rilassamento e presenza, la mente può quietarsi e un senso più autentico di sé può emergere.",
      "Uno spazio sicuro dove le emozioni possono fluire e l’energia vitale può tornare a muoversi con più facilità, aprendo a volte stati di profondo rilascio.",
      "Attraverso gesti lenti, pressioni più profonde e un tocco sottile, il corpo viene incontrato con cura e rispetto: mai forzato, sempre ascoltato.",
      "Il corpo custodisce memorie. Quando la mente si ammorbidisce e l’ascolto si fa più profondo, ciò che è rimasto silenziosamente trattenuto può iniziare ad affiorare: un’immagine, una sensazione, un’emozione dimenticata, un frammento di memoria. Nulla viene cercato, nulla viene forzato: si apre semplicemente uno spazio per ciò che chiede di essere visto, accolto e delicatamente lasciato andare.",
    ],
    highlight: "Una terapia gentile. Un percorso sensoriale in cui corpo e anima possono ritrovarsi.",
    closing:
      "Un incontro intimo con il proprio ritmo e il proprio sentire, con una qualità di presenza che la vita quotidiana spesso dimentica. Ciò che resta è uno stato di benessere, pace e integrazione che può continuare nel tempo —",
    closingItalic: " un piccolo passo nel cammino del conoscersi.",
    timing: "Offro sessioni dai 60 ai 120 minuti, lasciando che il tempo segua il ritmo e la profondità del lavoro.",
    cta: "Prenota una sessione",
    upload: "Carica qui le immagini del trattamento",
  },
};

export const TouchToSoul = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = TOUCH_COPY[language];
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);

  const activeDot = Math.min(2, Math.floor((active / IMAGES.length) * 3));

  const goPrevious = () => {
    setActive((current) => {
      const next = current === 0 ? IMAGES.length - 1 : current - 1;
      if (lightbox) setLightbox(IMAGES[next]);
      return next;
    });
  };

  const goNext = () => {
    setActive((current) => {
      const next = current === IMAGES.length - 1 ? 0 : current + 1;
      if (lightbox) setLightbox(IMAGES[next]);
      return next;
    });
  };

  const goToDot = (dot: number) => {
    const next = Math.min(IMAGES.length - 1, dot * Math.ceil(IMAGES.length / 3));
    setActive(next);
    if (lightbox) setLightbox(IMAGES[next]);
  };

  useEffect(() => {
    if (lightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if (isTyping) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) return;

    if (distance > 0) {
      goPrevious();
    } else {
      goNext();
    }
  };

  const dotClass = (dot: number) =>
    `h-2 rounded-full transition-all duration-300 ${activeDot === dot ? "w-6 bg-forest" : "w-2 bg-forest/30"}`;

  return (
    <section id="touch-to-soul" className="section bg-ivory" aria-label={copy.aria}>
      <div className="container-soft grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <Reveal className="md:col-span-6">
          <p className="eyebrow mb-5">{copy.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-4 text-balance">
            {copy.title}
          </h2>
          <p className="font-serif italic text-xl text-earth mb-8">
            {copy.subtitle}
          </p>

          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed text-pretty">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <p className="font-serif italic text-xl text-forest-deep pt-2">
              {copy.highlight}
            </p>

            <p>
              {copy.closing}
              <span className="italic">{copy.closingItalic}</span>
            </p>

            <p className="text-base text-foreground/70 pt-1">
              {copy.timing}
            </p>
          </div>

          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-full bg-forest text-ivory px-7 py-3.5 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft"
          >
            {copy.cta}
          </a>
        </Reveal>

        <Reveal delay={150} className="md:col-span-6">
          <div className="relative md:sticky md:top-28">
            <div
              className="relative aspect-[5/4] w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-earth-soft/40 via-ivory-warm to-sage/40 shadow-organic cursor-zoom-in touch-pan-y"
              onClick={() => setLightbox(IMAGES[active])}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={IMAGES[active]}
                alt={`Touch to Soul image ${active + 1}`}
                className="h-full w-full object-cover"
                style={{ objectPosition: active === 8 ? "65% center" : "center" }}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center px-8 text-center pointer-events-none">
                <span className="text-[11px] uppercase tracking-[0.3em] text-forest-deep/45">
                  {copy.upload}
                </span>
              </div>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goPrevious();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/28 text-forest-deep backdrop-blur-sm transition-colors hover:bg-ivory/45 md:h-10 md:w-10"
                aria-label="Previous Touch to Soul image"
              >
                <ChevronLeft size={22} strokeWidth={1.4} />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/28 text-forest-deep backdrop-blur-sm transition-colors hover:bg-ivory/45 md:h-10 md:w-10"
                aria-label="Next Touch to Soul image"
              >
                <ChevronRight size={22} strokeWidth={1.4} />
              </button>
            </div>

            <div className="mt-3 flex justify-center gap-2" aria-label="Touch to Soul carousel position">
              <button
                type="button"
                onClick={() => goToDot(0)}
                className={dotClass(0)}
                aria-label="Show Touch to Soul image group 1"
              />
              <button
                type="button"
                onClick={() => goToDot(1)}
                className={dotClass(1)}
                aria-label="Show Touch to Soul image group 2"
              />
              <button
                type="button"
                onClick={() => goToDot(2)}
                className={dotClass(2)}
                aria-label="Show Touch to Soul image group 3"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-6 w-28 h-28 rounded-full bg-sage/50 blur-2xl"
            />
          </div>
        </Reveal>
      </div>

      <ImageLightbox
        src={lightbox}
        alt="Touch to Soul preview"
        onClose={() => setLightbox(null)}
        onPrevious={goPrevious}
        onNext={goNext}
      />
    </section>
  );
};

export default TouchToSoul;
