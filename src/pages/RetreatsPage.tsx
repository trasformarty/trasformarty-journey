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
    exploreTitle: "What We Will Explore Together",
    exploreIntro: "We will move through different experiences and try to listen to what moves inside us.",
    explore: [
      {
        title: "Touch. A safe space.",
        paragraphs: [
          "Touch as support, containment, presence. Contact with another person, but also with ourselves. What happens when we receive? And what happens when we are the ones accompanying someone else, with care?",
        ],
      },
      {
        title: "Water.",
        paragraphs: [
          "Allowing ourselves to be held and gently rocked. Letting go of the weight, even if only for a moment, and allowing someone else to accompany us. And then becoming the one who holds, who supports, who creates a sense of safety for another body.",
        ],
      },
      {
        title: "Voice.",
        paragraphs: [
          "We will make space for that scream, for that broken sound that sometimes remains there and does not know how to come out. Without needing to explain it. Simply allowing it to find a way through.",
        ],
      },
      {
        title: "Earth.",
        paragraphs: [
          "We will touch the earth, the grass, the trees. We will walk barefoot. We will stop and feel our roots, the weight of the body, the sensation of being here. Now. Present.",
        ],
      },
      {
        title: "Fire.",
        paragraphs: [
          "The fire that moves and transforms. The one outside and the one within us. The one that can be anger, desire, strength, energy. The fire that needs to be expressed or released. The fire that, perhaps, needs to come alive again.",
        ],
      },
      {
        title: "Movement.",
        paragraphs: [
          "Through movement on the outside, we will listen to what is moving inside, without immediately trying to understand it. We will let the body speak, find its own rhythm, its own gesture. We will allow ourselves to be moved through.",
        ],
      },
      {
        title: "Silence.",
        paragraphs: [
          "We will listen to what remains when we do not need to fill the space. We will bring presence into simple things: eating, breathing, picking a flower, walking, cooking, sitting beside someone.",
          "This is where we will also rediscover that sensitivity that, sometimes, we forget.",
        ],
      },
      {
        title: "The group.",
        paragraphs: [
          "All of this will happen together, with depth but also with lightness. There will be circles, eye contact, hearts, laughter and silence.",
          "What happens when we allow ourselves to truly be seen in front of others? And what happens when we are the ones who remain present in front of someone who opens up?",
          "The group as a space to give and to receive. To support and to allow ourselves to be supported. To discover how much of the other, sometimes, also lives within us.",
        ],
      },
      {
        title: "And then, bringing it home.",
        paragraphs: [
          "Presence. Relationship. Touch. Movement. Everything the body will have encountered and recognized.",
          "How can we bring it into everyday life?",
          "What are those beautiful resources that are already within reach and that, perhaps, we have simply forgotten how to recognize?",
          "How can we remember to stop, breathe, feel, ask for support and offer it?",
          "And how can we remember, once we are back home, what the body encountered here?",
          "Because TU does not end here.",
          "Something comes home with us.",
        ],
      },
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

        {language === "en" && (
          <section className="py-24 md:py-36 bg-ivory">
            <div className="container-soft">
              <Reveal className="max-w-3xl mx-auto">
                <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">{copy.exploreTitle}</h2>
                <p className="text-lg md:text-xl leading-relaxed text-forest/75 mb-14">{copy.exploreIntro}</p>
                <div className="space-y-12">
                  {copy.explore.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-serif text-2xl md:text-3xl mb-4">{item.title}</h3>
                      <div className="space-y-4 text-lg md:text-xl leading-relaxed text-forest/80">
                        {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

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
