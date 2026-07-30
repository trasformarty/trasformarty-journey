import { useLocation } from "react-router-dom";
import { getLanguageFromPath } from "@/lib/language";
import { Reveal } from "./Reveal";

const RETREATS_COPY = {
  en: {
    aria: "TU retreat",
    eyebrow: "Retreat — Italy",
    badge: "May 2027",
    title: "TU",
    subtitle: "Where the Body Remembers.",
    paragraphs: [
      "TU was born from the desire to create a space where people can truly meet.",
      "A place to slow down, breathe, and rediscover something to carry back into everyday life.",
      "I believe that, sometimes, people forget they are \"beautiful.\" I hope TU can become a place where we remember.",
      "A journey through the body, nature, movement, touch, and authentic connection.",
      "An experience to live. And to carry home.",
    ],
    cta: "Discover More",
  },
  it: {
    aria: "Retreat TU",
    eyebrow: "Retreat — Italia",
    badge: "Maggio 2027",
    title: "TU",
    subtitle: "Dove il corpo ricorda.",
    paragraphs: [
      "TU nasce dal desiderio di creare uno spazio in cui le persone possano incontrarsi davvero.",
      "Un luogo in cui rallentare, respirare e riscoprire qualcosa da portare con sé nella vita di tutti i giorni.",
      "Credo che, a volte, le persone dimentichino di essere \"belle.\" Spero che TU possa diventare un luogo in cui ricordarlo.",
      "Un viaggio attraverso il corpo, la natura, il movimento, il tocco e una connessione autentica.",
      "Un'esperienza da vivere. E da portare a casa.",
    ],
    cta: "Scopri di più",
  },
};

export const Retreats = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = RETREATS_COPY[language];

  return (
    <section id="retreats" className="section bg-forest-deep text-ivory relative overflow-hidden" aria-label={copy.aria}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsl(var(--sage)/0.2),transparent_55%),radial-gradient(ellipse_at_15%_85%,hsl(var(--gold)/0.12),transparent_55%)]"
      />
      <div className="container-soft relative">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <p className="eyebrow text-ivory/60">{copy.eyebrow}</p>
            <span className="text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full border border-gold-soft/50 text-gold-soft">
              {copy.badge}
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-[1.05] mb-3 text-balance">
            {copy.title}
          </h2>
          <p className="font-serif italic text-2xl md:text-3xl text-gold-soft mb-8">
            {copy.subtitle}
          </p>
          <div className="space-y-4 text-base md:text-lg text-ivory/80 leading-relaxed text-pretty">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-full bg-ivory text-forest-deep px-7 py-3.5 text-sm hover:bg-gold-soft transition-colors duration-500"
          >
            {copy.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Retreats;
