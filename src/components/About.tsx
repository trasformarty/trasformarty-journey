import { useLocation } from "react-router-dom";
import { getLanguageFromPath } from "@/lib/language";
import { Reveal } from "./Reveal";
import martinaPortrait from "@/assets/martina-portrait.png";

const ABOUT_COPY = {
  en: {
    aria: "About Martina Roscioli",
    eyebrow: "Who I Am",
    title: "I’m Martina.",
    imageAlt: "Portrait of Martina Roscioli",
    paragraphs: [
      "My work was born from my own path of transformation — learning to listen to the body, to trust emotions as movement, and to discover touch as a language of presence, care and reconnection.",
      "Through massage and bodywork, I began to understand that the hands can listen beyond technique. Touch opened a door into the body’s quiet intelligence, into what is held, protected, remembered and ready to soften.",
      "This experience led me to explore the nervous system and somatic therapy — not as abstract knowledge, but as living tools to support regulation, emotional integration and a more compassionate relationship with oneself.",
      "Over time, I have learned to give space to a sensitivity that has always been part of me — to the body, to subtle energy, and to the quieter layers of experience that are not always visible, but can be deeply felt.",
      "Today, this sensitivity can be expressed through touch, somatic listening and emotional accompaniment, becoming a way to meet others with presence, respect and care.",
      "I accompany people through processes of transformation, creating spaces where the body can speak, emotions can move, and the person can return to a deeper sense of presence and freedom.",
      "Each session is a meeting: between body and emotion, between what asks to be held and what is ready to move, between the person you have been and the life that is calling you forward.",
    ],
  },
  it: {
    aria: "Chi è Martina Roscioli",
    eyebrow: "Chi sono",
    title: "I’m Martina.",
    imageAlt: "Ritratto di Martina Roscioli",
    paragraphs: [
      "Il mio corpo sente. Con il tempo ho imparato ad ascoltarlo, a fidarmi dei suoi segnali, dei suoi silenzi, dei suoi movimenti.",
      "Il mio lavoro nasce da qui: dal corpo, dal tocco, dalla presenza e da una ricerca continua su ciò che ci attraversa quando smettiamo di voler controllare tutto.",
      "Ho scoperto il massaggio e il bodywork anche attraverso l’esperienza del ricevere: entrando in stati di ascolto profondo, connessione e presenza con me stessa. In quei momenti ho sentito quanto il corpo possa aprire spazi, memorie, emozioni e possibilità di trasformazione.",
      "Oggi accompagno le persone a ritornare a sé attraverso il massaggio, il bodywork, il movimento e l’ascolto somatico: a incontrare ciò che è vivo dentro, e a lasciare che qualcosa possa muoversi con più spazio, dolcezza e verità.",
      "Non lavoro per cambiare qualcuno. Creo uno spazio in cui il corpo possa sentirsi ascoltato, sostenuto e libero di rivelare il proprio ritmo.",
    ],
  },
};

export const About = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = ABOUT_COPY[language];

  return (
    <section id="about" className="section bg-ivory" aria-label={copy.aria}>
      <div className="container-soft grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-organic relative">
              <img
                src={martinaPortrait}
                alt={copy.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gold/40 blur-2xl"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -top-6 -left-6 w-20 h-20 rounded-full border border-sage/70"
            />
          </div>
        </Reveal>

        <Reveal delay={150} className="md:col-span-7">
          <p className="eyebrow mb-5">{copy.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 text-balance">
            {copy.title}
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-pretty">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
