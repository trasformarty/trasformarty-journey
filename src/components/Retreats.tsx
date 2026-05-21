import { useLocation } from "react-router-dom";
import { getLanguageFromPath } from "@/lib/language";
import { Reveal } from "./Reveal";

const RETREATS_COPY = {
  en: {
    aria: "Retreats",
    eyebrow: "Offering — Immersive",
    badge: "In Creation",
    title: "Retreats",
    paragraphs: [
      "Immersive spaces to slow down, reconnect with the body, move through emotions and experience transformation over several days.",
      "Future retreats will include both one-to-one and group formats, created as containers for rest, movement, emotional presence, touch-informed practices and deep reconnection with nature.",
    ],
    cta: "Stay Updated",
  },
  it: {
    aria: "Ritiri",
    eyebrow: "Offerta — Immersiva",
    badge: "In creazione",
    title: "Ritiri",
    paragraphs: [
      "Spazi immersivi per rallentare, ritornare al corpo, attraversare ciò che si muove dentro e vivere un processo di trasformazione in più giorni.",
      "I prossimi ritiri potranno includere sia momenti one-to-one sia esperienze di gruppo, come contenitori di riposo, movimento, presenza emotiva, pratiche ispirate al tocco e riconnessione profonda con la natura.",
    ],
    cta: "Rimani aggiornata/o",
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
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-[1.05] mb-8 text-balance">
            {copy.title}
          </h2>
          <div className="space-y-5 text-lg text-ivory/80 leading-relaxed text-pretty">
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
