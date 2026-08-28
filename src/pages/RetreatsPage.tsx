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
    intro: ["Some experiences are not born in a single day.", "They live quietly within us until the moment they ask to be shared.", "TU is one of them."],
    first: [
      "For years, I have carried the desire to create a space where people could truly be welcomed.", "A space to meet.", "Where time slows down.", "Where the body finds its voice again.", "Where nature feels like home.", "And where each person feels free to be exactly as they are.", "Imagine allowing the water to hold you. To hold someone else. Or to let yourself be held.", "I don't imagine TU as a place to step away from life.", "I imagine it as a space to rediscover something you can carry back with you, every single day.", "Because the most important journey is not the one we will live together.", "It is the one that continues once you return home."
    ],
    second: [
      "Throughout these days, we will be accompanied by movement, touch, nature, water, earth, fire, silence and relationship.", "Not as activities.", "But as experiences to live.", "Collecting wildflowers in a field, in silence, with an intention.", "Remembering something that has been waiting quietly inside you. And writing it down.", "I have always dreamed of creating a place where I could welcome people, walk beside them for a while and be part of their transformation, while they, in their own way, become part of mine.", "Because I believe every authentic encounter leaves something in both people.", "Imagine feeling the fire within you again. Stomping your feet on the earth. Dancing. Breathing. Feeling alive. Connected."
    ],
    exploreTitle: "What We Will Explore Together",
    exploreIntro: "We will move through different experiences and try to listen to what moves inside us.",
    explore: [
      { title: "Touch. A safe space.", paragraphs: ["Touch as support, containment, presence. Contact with another person, but also with ourselves. What happens when we receive? And what happens when we are the ones accompanying someone else, with care?"] },
      { title: "Water.", paragraphs: ["Allowing ourselves to be held and gently rocked. Letting go of the weight, even if only for a moment, and allowing someone else to accompany us. And then becoming the one who holds, who supports, who creates a sense of safety for another body."] },
      { title: "Voice.", paragraphs: ["We will make space for that scream, for that broken sound that sometimes remains there and does not know how to come out. Without needing to explain it. Simply allowing it to find a way through."] },
      { title: "Earth.", paragraphs: ["We will touch the earth, the grass, the trees. We will walk barefoot. We will stop and feel our roots, the weight of the body, the sensation of being here. Now. Present."] },
      { title: "Fire.", paragraphs: ["The fire that moves and transforms. The one outside and the one within us. The one that can be anger, desire, strength, energy. The fire that needs to be expressed or released. The fire that, perhaps, needs to come alive again."] },
      { title: "Movement.", paragraphs: ["Through movement on the outside, we will listen to what is moving inside, without immediately trying to understand it. We will let the body speak, find its own rhythm, its own gesture. We will allow ourselves to be moved through."] },
      { title: "Silence.", paragraphs: ["We will listen to what remains when we do not need to fill the space. We will bring presence into simple things: eating, breathing, picking a flower, walking, cooking, sitting beside someone.", "This is where we will also rediscover that sensitivity that, sometimes, we forget."] },
      { title: "The group.", paragraphs: ["All of this will happen together, with depth but also with lightness. There will be circles, eye contact, hearts, laughter and silence.", "What happens when we allow ourselves to truly be seen in front of others? And what happens when we are the ones who remain present in front of someone who opens up?", "The group as a space to give and to receive. To support and to allow ourselves to be supported. To discover how much of the other, sometimes, also lives within us."] },
      { title: "And then, bringing it home.", paragraphs: ["Presence. Relationship. Touch. Movement. Everything the body will have encountered and recognized.", "How can we bring it into everyday life?", "What are those beautiful resources that are already within reach and that, perhaps, we have simply forgotten how to recognize?", "How can we remember to stop, breathe, feel, ask for support and offer it?", "And how can we remember, once we are back home, what the body encountered here?", "Because TU does not end here.", "Something comes home with us."] }
    ],
    closing: ["And I believe that, sometimes, people forget they are \"beautiful.\"", "I would love for TU to become a place where we remember.", "A different way of listening to the body.", "Of being in relationship.", "Of moving through emotions.", "Of breathing.", "Of slowing down.", "Of inhabiting life.", "If, while reading these words, you felt something move inside you...", "perhaps this journey has already begun.", "I look forward to welcoming you."],
    image: "Image coming soon", video: "Video coming soon", signature: "Martina"
  },
  it: {
    eyebrow: "Italia · Maggio 2027", title: "TU", subtitle: "Dove il corpo ricorda.",
    intro: ["Ci sono esperienze che non nascono in un giorno.", "Vivono dentro di noi per molto tempo, finché arriva il momento in cui chiedono di essere condivise.", "TU è una di queste."],
    first: ["Per anni ho sentito il desiderio di creare uno spazio dove poter accogliere le persone.", "Uno spazio in cui incontrarsi davvero.", "Dove il tempo rallenta.", "Dove il corpo torna ad avere voce.", "Dove la natura diventa casa.", "E dove ogni persona possa sentirsi libera di essere esattamente com'è.", "Immagina di lasciarti cullare nell'acqua. Dall'acqua. Di sostenere qualcuno. O di lasciare che qualcuno sostenga te.", "Non immagino TU come un luogo in cui allontanarsi dalla propria vita.", "Lo immagino come uno spazio in cui riscoprire qualcosa da portare con sé, ogni giorno.", "Perché il viaggio più importante non è quello che vivremo insieme.", "È quello che continuerà quando ognuno tornerà a casa."],
    second: ["Durante questi giorni ci accompagneranno il movimento, il tocco, la natura, l'acqua, la terra, il fuoco, il silenzio e la relazione.", "Non come attività da fare.", "Ma come esperienze da vivere.", "Raccogliere fiori in un campo, in silenzio, con un'intenzione.", "Ricordare qualcosa che era rimasto lì, fermo. Scriverlo.", "Uno spazio verde dove incontrare le persone, camminare al loro fianco per un tratto ed essere parte della loro trasformazione, mentre loro, in qualche modo, diventeranno parte della mia.", "Perché credo che ogni incontro autentico lasci qualcosa in entrambe le direzioni.", "Immagina di sentire il fuoco dentro, dopo tanto tempo. Di battere i piedi sulla terra. Di ballare. Di respirare. Di sentirti vivo. Connesso."],
    closing: ["E credo che, a volte, le persone dimentichino di essere \"belle\".", "Mi piacerebbe che TU fosse anche questo.", "Uno spazio dove poterlo ricordare.", "Un modo diverso di ascoltare il proprio corpo.", "Di stare nelle relazioni.", "Di attraversare le emozioni.", "Di respirare.", "Di rallentare.", "Di abitare la propria vita.", "Se, leggendo queste parole, hai sentito qualcosa muoversi dentro di te...", "forse questo viaggio è già iniziato.", "Ti aspetto."],
    image: "Immagine in arrivo", video: "Video in arrivo", signature: "Martina"
  }
};

const MediaSpace = ({ label, video = false }: { label: string; video?: boolean }) => (
  <div className="relative overflow-hidden rounded-[1.75rem] border border-forest/10 bg-gradient-to-br from-sage/25 via-ivory to-gold-soft/20 shadow-[0_18px_50px_rgba(34,54,42,0.07)] aspect-[4/3]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--gold)/0.12),transparent_30%),radial-gradient(circle_at_75%_75%,hsl(var(--sage)/0.22),transparent_35%)]" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        {video && <div className="mx-auto mb-4 h-14 w-14 rounded-full border border-forest/15 bg-ivory/70 backdrop-blur flex items-center justify-center text-xl">▶</div>}
        <span className="eyebrow text-forest/40">{label}</span>
      </div>
    </div>
  </div>
);

const RetreatsPage = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = COPY[language];

  useLayoutEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-ivory text-forest-deep">
      <Header />
      <main>
        <section className="pt-32 pb-14 md:pt-36 md:pb-16">
          <div className="container-soft">
            <Reveal className="max-w-4xl">
              <p className="eyebrow text-forest/55 mb-4">{copy.eyebrow}</p>
              <h1 className="font-serif text-6xl md:text-8xl leading-none mb-3">{copy.title}</h1>
              <p className="font-serif italic text-2xl md:text-4xl text-forest/70 mb-9">{copy.subtitle}</p>
              <div className="space-y-2.5 text-lg md:text-xl leading-relaxed text-forest/80 max-w-2xl">{copy.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </Reveal>
          </div>
        </section>

        <section className="pb-14 md:pb-18">
          <div className="container-soft grid gap-5 md:grid-cols-2">
            <Reveal><MediaSpace label={copy.image} /></Reveal>
            <Reveal><MediaSpace label={copy.image} /></Reveal>
          </div>
        </section>

        <section className="py-14 md:py-18">
          <div className="container-soft">
            <Reveal className="max-w-4xl mx-auto columns-1 md:columns-2 md:gap-14 space-y-4 text-base md:text-lg leading-relaxed text-forest/80">
              {copy.first.map((paragraph) => <p className="break-inside-avoid" key={paragraph}>{paragraph}</p>)}
            </Reveal>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="container-soft">
            <Reveal className="max-w-5xl mx-auto"><MediaSpace label={copy.video} video /></Reveal>
          </div>
        </section>

        <section className="bg-forest-deep text-ivory py-16 md:py-20">
          <div className="container-soft">
            <Reveal className="max-w-4xl mx-auto">
              <div className="grid gap-x-12 gap-y-4 md:grid-cols-2 text-base md:text-lg leading-relaxed text-ivory/82">
                {copy.second.map((paragraph, index) => (
                  <p key={paragraph} className={`${index < 3 ? "md:col-span-2 font-serif text-xl md:text-2xl text-gold-soft" : ""}`}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {language === "en" && (
          <section className="py-16 md:py-20 bg-ivory">
            <div className="container-soft">
              <Reveal className="max-w-3xl mb-10">
                <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-4">{copy.exploreTitle}</h2>
                <p className="text-base md:text-lg leading-relaxed text-forest/75">{copy.exploreIntro}</p>
              </Reveal>
              <div className="grid gap-4 md:grid-cols-2">
                {copy.explore.map((item, index) => (
                  <Reveal key={item.title} className={index === copy.explore.length - 1 ? "md:col-span-2" : ""}>
                    <div className="h-full rounded-[1.5rem] border border-forest/10 bg-white/40 p-6 md:p-7 shadow-[0_12px_35px_rgba(34,54,42,0.05)]">
                      <h3 className="font-serif text-xl md:text-2xl mb-3">{item.title}</h3>
                      <div className="space-y-3 text-sm md:text-base leading-relaxed text-forest/78">{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 md:py-20">
          <div className="container-soft grid gap-5 md:grid-cols-2">
            <Reveal><MediaSpace label={copy.image} /></Reveal>
            <Reveal><MediaSpace label={copy.image} /></Reveal>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container-soft">
            <Reveal className="max-w-3xl mx-auto text-center">
              <div className="space-y-3 font-serif text-xl md:text-3xl leading-relaxed text-forest-deep">{copy.closing.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <p className="mt-10 font-serif italic text-2xl text-forest/70">{copy.signature}</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RetreatsPage;