import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { getLanguageFromPath } from "@/lib/language";

const COPY = {
  en: {
    eyebrow: "Italy · May 2027",
    title: "TU",
    subtitle: "Where the Body Remembers.",
    intro: [
      "Some experiences are not born in a single day.",
      "They live quietly within us until the moment they ask to be shared.",
      "TU is one of them.",
    ],
    first: [
      "For years, I have carried the desire to create a space where people could truly be welcomed.",
      "A space to meet.",
      "Where time slows down.",
      "Where the body finds its voice again.",
      "Where nature feels like home.",
      "And where each person feels free to be exactly as they are.",
      "Imagine allowing the water to hold you. To hold someone else. Or to let yourself be held.",
      "I don't imagine TU as a place to step away from life.",
      "I imagine it as a space to rediscover something you can carry back with you, every single day.",
      "Because the most important journey is not the one we will live together.",
      "It is the one that continues once you return home.",
    ],
    second: [
      "Throughout these days, we will be accompanied by movement, touch, nature, water, earth, fire, silence and relationship.",
      "Not as activities.",
      "But as experiences to live.",
      "Collecting wildflowers in a field, in silence, with an intention.",
      "Remembering something that has been waiting quietly inside you. And writing it down.",
      "I have always dreamed of creating a place where I could welcome people, walk beside them for a while and be part of their transformation, while they, in their own way, become part of mine.",
      "Because I believe every authentic encounter leaves something in both people.",
      "Imagine feeling the fire within you again. Stomping your feet on the earth. Dancing. Breathing. Feeling alive. Connected.",
    ],
    closing: [
      "And I believe that, sometimes, people forget they are \"beautiful.\"",
      "I would love for TU to become a place where we remember.",
      "A different way of listening to the body.",
      "Of being in relationship.",
      "Of moving through emotions.",
      "Of breathing.",
      "Of slowing down.",
      "Of inhabiting life.",
      "If, while reading these words, you felt something move inside you...",
      "perhaps this journey has already begun.",
      "I look forward to welcoming you.",
    ],
    image: "Image coming soon",
    signature: "Martina",
  },
  it: {
    eyebrow: "Italia · Maggio 2027",
    title: "TU",
    subtitle: "Dove il corpo ricorda.",
    intro: [
      "Ci sono esperienze che non nascono in un giorno.",
      "Vivono dentro di noi per molto tempo, finché arriva il momento in cui chiedono di essere condivise.",
      "TU è una di queste.",
    ],
    first: [
      "Per anni ho sentito il desiderio di creare uno spazio dove poter accogliere le persone.",
      "Uno spazio in cui incontrarsi davvero.",
      "Dove il tempo rallenta.",
      "Dove il corpo torna ad avere voce.",
      "Dove la natura diventa casa.",
      "E dove ogni persona possa sentirsi libera di essere esattamente com'è.",
      "Immagina di lasciarti cullare nell'acqua. Dall'acqua. Di sostenere qualcuno. O di lasciare che qualcuno sostenga te.",
      "Non immagino TU come un luogo in cui allontanarsi dalla propria vita.",
      "Lo immagino come uno spazio in cui riscoprire qualcosa da portare con sé, ogni giorno.",
      "Perché il viaggio più importante non è quello che vivremo insieme.",
      "È quello che continuerà quando ognuno tornerà a casa.",
    ],
    second: [
      "Durante questi giorni ci accompagneranno il movimento, il tocco, la natura, l'acqua, la terra, il fuoco, il silenzio e la relazione.",
      "Non come attività da fare.",
      "Ma come esperienze da vivere.",
      "Raccogliere fiori in un campo, in silenzio, con un'intenzione.",
      "Ricordare qualcosa che era rimasto lì, fermo. Scriverlo.",
      "Uno spazio verde dove incontrare le persone, camminare al loro fianco per un tratto ed essere parte della loro trasformazione, mentre loro, in qualche modo, diventeranno parte della mia.",
      "Perché credo che ogni incontro autentico lasci qualcosa in entrambe le direzioni.",
      "Immagina di sentire il fuoco dentro, dopo tanto tempo. Di battere i piedi sulla terra. Di ballare. Di respirare. Di sentirti vivo. Connesso.",
    ],
    closing: [
      "E credo che, a volte, le persone dimentichino di essere \"belle\".",
      "Mi piacerebbe che TU fosse anche questo.",
      "Uno spazio dove poterlo ricordare.",
      "Un modo diverso di ascoltare il proprio corpo.",
      "Di stare nelle relazioni.",
      "Di attraversare le emozioni.",
      "Di respirare.",
      "Di rallentare.",
      "Di abitare la propria vita.",
      "Se, leggendo queste parole, hai sentito qualcosa muoversi dentro di te...",
      "forse questo viaggio è già iniziato.",
      "Ti aspetto.",
    ],
    image: "Immagine in arrivo",
    signature: "Martina",
  },
};

const ImageSpace = ({ label, tall = false }: { label: string; tall?: boolean }) => (
  <div
    className={`relative overflow-hidden rounded-[2rem] border border-forest/10 bg-gradient-to-br from-sage/20 via-ivory to-gold-soft/20 ${
      tall ? "min-h-[440px]" : "min-h-[320px] md:min-h-[520px]"
    }`}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="eyebrow text-forest/40">{label}</span>
    </div>
  </div>
);

const RetreatsPage = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = COPY[language];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-forest-deep">
      <Header />
      <main>
        <section className="pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="container-soft">
            <Reveal className="max-w-4xl">
              <p className="eyebrow text-forest/55 mb-6">{copy.eyebrow}</p>
              <h1 className="font-serif text-7xl md:text-9xl leading-none mb-4">{copy.title}</h1>
              <p className="font-serif italic text-3xl md:text-5xl text-forest/70 mb-14">{copy.subtitle}</p>
              <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-forest/80 max-w-3xl">
                {copy.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-24 md:pb-36">
          <div className="container-soft">
            <Reveal><ImageSpace label={copy.image} /></Reveal>
          </div>
        </section>

        <section className="pb-24 md:pb-40">
          <div className="container-soft grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-20 items-start">
            <Reveal className="space-y-6 text-lg md:text-xl leading-relaxed text-forest/80">
              {copy.first.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </Reveal>
            <Reveal className="md:sticky md:top-28"><ImageSpace label={copy.image} tall /></Reveal>
          </div>
        </section>

        <section className="bg-forest-deep text-ivory py-24 md:py-36">
          <div className="container-soft">
            <Reveal className="max-w-4xl mx-auto space-y-7 text-xl md:text-2xl leading-relaxed text-ivory/82">
              {copy.second.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </Reveal>
          </div>
        </section>

        <section className="py-24 md:py-36">
          <div className="container-soft">
            <Reveal><ImageSpace label={copy.image} /></Reveal>
          </div>
        </section>

        <section className="pb-28 md:pb-44">
          <div className="container-soft">
            <Reveal className="max-w-3xl mx-auto text-center">
              <div className="space-y-5 font-serif text-2xl md:text-4xl leading-relaxed text-forest-deep">
                {copy.closing.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <p className="mt-16 font-serif italic text-3xl text-forest/70">{copy.signature}</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RetreatsPage;
