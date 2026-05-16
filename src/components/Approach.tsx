import { useLocation } from "react-router-dom";
import { getLanguageFromPath } from "@/lib/language";
import { Reveal } from "./Reveal";

const APPROACH_COPY = {
  en: {
    aria: "My approach",
    eyebrow: "My Approach",
    title: "The work moves through the body, not around it.",
    intro:
      "It begins with listening — to breath, sensation, emotion, rhythm and the quiet intelligence of the body.",
    pillars: [
      {
        title: "Movement",
        body:
          "Movement as a natural language of the body, energy and emotions. A way to let what is inside become visible, felt and free to transform.",
      },
      {
        title: "Touch",
        body:
          "Touch as a way of listening, grounding and reconnecting. A respectful language that can bring safety, presence and a deeper contact with oneself.",
      },
      {
        title: "Emotional Accompaniment",
        body:
          "A gentle space to feel, express and integrate emotions without needing to rush, fix or explain everything with the mind.",
      },
      {
        title: "Transformation",
        body:
          "A process of becoming more free, present and connected to life — step by step, through the wisdom of the body and the rhythm of the person.",
      },
    ],
  },
  it: {
    aria: "Il mio approccio",
    eyebrow: "Il mio approccio",
    title: "Un ritorno morbido verso di te.",
    intro:
      "Il mio approccio nasce dall’ascolto del corpo. Non cerca di correggere, spingere o forzare un processo, ma di aprire uno spazio sicuro, vivo e accogliente, dove ogni espressione possa essere benvenuta.\n\nOgni incontro è diverso. A volte serve morbidezza. A volte profondità. A volte movimento. A volte semplicemente uno spazio dove sentirsi accolti senza dover spiegare tutto.",
    pillars: [
      {
        title: "Movimento",
        body:
          "Per lasciare che emozioni, energia e sensazioni trovino una via attraverso il corpo.",
      },
      {
        title: "Tocco",
        body:
          "Per portare presenza, radicamento e ascolto dove il corpo chiede di essere incontrato.",
      },
      {
        title: "Accompagnamento emotivo",
        body:
          "Per stare vicino a ciò che si muove dentro, senza giudizio e senza fretta.",
      },
      {
        title: "Trasformazione",
        body:
          "Per permettere al cambiamento di accadere in modo naturale, attraverso il corpo, il sentire e la presenza.",
      },
    ],
  },
};

export const Approach = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = APPROACH_COPY[language];

  return (
    <section id="approach" className="section bg-forest text-ivory relative overflow-hidden" aria-label={copy.aria}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,hsl(var(--sage)/0.18),transparent_55%),radial-gradient(ellipse_at_85%_90%,hsl(var(--gold)/0.12),transparent_55%)]"
      />

      <div className="container-soft relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-ivory/60 mb-5">{copy.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-[1.05] mb-8 text-balance">
            {copy.title}
          </h2>
          <div className="space-y-5 text-lg md:text-xl text-ivory/80 leading-relaxed text-pretty">
            {copy.intro.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 mt-16">
          {copy.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="h-full rounded-[2rem] p-8 md:p-10 bg-ivory/[0.04] backdrop-blur-sm border border-ivory/15 hover:bg-ivory/[0.08] transition-colors duration-500">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-4">{p.title}</h3>
                <p className="text-ivory/75 leading-relaxed text-pretty">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
