import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getLanguageFromPath, localizePath } from "@/lib/language";
import { Reveal } from "./Reveal";

const SESSIONS_COPY = {
  en: {
    aria: "Moving Through",
    eyebrow: "Offering — One-to-One",
    subtitle: "One-to-one emotional & somatic accompaniment. Online and in person.",
    paragraphs: [
      "A space to explore what is moving inside you through the body, emotional presence and deep listening — online or in person.",
      "Together, we create a safe and welcoming space where sensations, emotions and expression can be met with care, without forcing the process to become something else.",
    ],
    cta: "Explore Moving Through",
    formats: [
      { title: "Single Session", note: "An open meeting to begin." },
      { title: "5-Session Journey", note: "A first arc of listening." },
      { title: "10-Session Journey", note: "A deeper unfolding." },
      { title: "9-Month Journey", note: "A path that supports transformation over time." },
    ],
  },
  it: {
    aria: "Moving Through",
    eyebrow: "Offerta — One-to-one",
    subtitle: "Accompagnamento emozionale e somatico one-to-one. Online e in presenza.",
    paragraphs: [
      "Uno spazio per esplorare ciò che si muove dentro di te attraverso il corpo, la presenza emotiva e un ascolto profondo — online o in presenza.",
      "Insieme creiamo uno spazio sicuro e accogliente dove sensazioni, emozioni ed espressione possono essere incontrate con cura, senza forzare il processo a diventare qualcos’altro.",
    ],
    cta: "Esplora Moving Through",
    formats: [
      { title: "Sessione singola", note: "Un primo incontro per iniziare." },
      { title: "Percorso di 5 sessioni", note: "Un primo arco di ascolto." },
      { title: "Percorso di 10 sessioni", note: "Un’apertura più profonda." },
      { title: "Percorso di 9 mesi", note: "Un percorso che sostiene la trasformazione nel tempo." },
    ],
  },
};

export const Sessions = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = SESSIONS_COPY[language];
  const movingThroughPath = localizePath("/moving-through", language);

  return (
    <section id="sessions" className="section bg-sage/30" aria-label={copy.aria}>
      <div className="container-soft">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-5">{copy.eyebrow}</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-4 text-balance">
              Moving Through
            </h2>
            <p className="font-serif italic text-foreground/55 mb-8">
              {copy.subtitle}
            </p>
            <div className="space-y-5 text-lg text-foreground/80 leading-relaxed text-pretty">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              to={movingThroughPath}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest text-ivory px-7 py-3.5 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft"
            >
              {copy.cta}
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <Link
              to={movingThroughPath}
              className="group relative mx-auto block aspect-[5/4] w-full max-w-[430px] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-earth-soft/40 via-ivory-warm to-sage/40 shadow-soft"
              aria-label={copy.cta}
            >
              <img
                src="/moving-through/intro.jpg"
                alt="Moving Through session"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {copy.formats.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <Link to={movingThroughPath} className="leaf-card text-center h-full block hover:-translate-y-1 transition-transform duration-500">
                <h3 className="font-serif text-xl md:text-2xl text-forest-deep mb-2">
                  {f.title}
                </h3>
                <p className="text-foreground/65 text-sm">{f.note}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sessions;
