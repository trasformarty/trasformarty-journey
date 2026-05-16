import { useLocation } from "react-router-dom";
import { getLanguageFromPath } from "@/lib/language";
import { Reveal } from "./Reveal";

const ESSENCE_COPY = {
  en: {
    aria: "The essence of TrasforMarti",
    eyebrow: "Essence",
    mainBefore: "TrasforMarti is an invitation to move through life with more",
    presence: "presence",
    softness: "softness",
    freedom: "freedom",
    and: "and",
    body: "Body",
    touch: "Touch",
    movement: "Movement",
    presenceWord: "Presence",
    text: "Here, transformation is not forced. It is listened to, felt through the body, supported by touch, and allowed to unfold in its own rhythm.",
    pillars: [
      {
        word: "Body",
        text: "A place to listen to what lives beneath words.",
      },
      {
        word: "Touch",
        text: "A language of care, grounding and reconnection.",
      },
      {
        word: "Movement",
        text: "A way for energy and emotion to find their rhythm.",
      },
      {
        word: "Presence",
        text: "A quiet return to the body, the breath and the now.",
      },
    ],
  },
  it: {
    aria: "L’essenza di TrasforMarti",
    eyebrow: "Essenza",
    mainBefore: "TrasforMarti è un invito ad attraversare la vita con più",
    presence: "presenza",
    softness: "morbidezza",
    freedom: "libertà",
    and: "e",
    body: "Corpo",
    touch: "Tocco",
    movement: "Movimento",
    presenceWord: "Presenza",
    text: "Qui la trasformazione non viene forzata. Si ascolta, si sente attraverso il corpo, si sostiene con il tocco e si lascia accadere nel suo ritmo.",
    pillars: [
      {
        word: "Corpo",
        text: "Un luogo dove ascoltare ciò che vive sotto le parole.",
      },
      {
        word: "Tocco",
        text: "Un linguaggio di cura, radicamento e riconnessione.",
      },
      {
        word: "Movimento",
        text: "Un modo per lasciare che energia ed emozioni trovino il loro ritmo.",
      },
      {
        word: "Presenza",
        text: "Un ritorno quieto al corpo, al respiro e al momento presente.",
      },
    ],
  },
};

export const Essence = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = ESSENCE_COPY[language];

  return (
    <section id="essence" className="section bg-gradient-ivory relative overflow-hidden" aria-label={copy.aria}>
      {/* organic floating shape */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-sage/25 blur-3xl animate-breath"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 w-[360px] h-[360px] rounded-full bg-gold-soft/25 blur-3xl animate-breath"
        style={{ animationDelay: "2s" }}
      />

      <div className="container-soft relative">
        <Reveal className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-8">{copy.eyebrow}</p>
          <p className="font-serif text-3xl md:text-5xl leading-[1.2] text-forest-deep text-balance">
            {copy.mainBefore}
            <em className="text-earth"> {copy.presence}</em>,
            <em className="text-earth"> {copy.softness} </em>
            {copy.and} <em className="text-earth">{copy.freedom}</em>.
          </p>
          <span className="breath-divider my-10" />
          <p className="text-lg md:text-xl text-foreground/75 leading-relaxed text-pretty">
            {copy.text}
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-10 md:mt-20">
          <div className="grid grid-cols-2 gap-3 sm:hidden">
            {copy.pillars.map((item) => (
              <div
                key={item.word}
                className="min-h-[118px] rounded-[1.35rem] border border-forest/12 bg-ivory/55 px-3.5 py-4 text-center shadow-soft backdrop-blur-sm flex flex-col justify-center"
              >
                <p className="font-serif italic text-[1.7rem] leading-none text-forest-deep mb-2">
                  {item.word}
                </p>
                <p className="text-[11px] leading-[1.45] text-foreground/62">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10">
            {copy.pillars.map((item) => (
              <div key={item.word} className="text-center lg:text-left">
                <p className="font-serif italic text-3xl md:text-4xl text-forest-deep mb-3">
                  {item.word}
                </p>
                <p className="text-sm leading-relaxed text-foreground/65 max-w-xs mx-auto lg:mx-0">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Essence;
