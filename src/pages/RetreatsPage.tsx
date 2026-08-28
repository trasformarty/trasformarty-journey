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
      "For years, I have carried the desire to create a space where people could truly be welcomed. A space to meet, where time slows down, where the body finds its voice again, where nature feels like home, and where each person can feel free to be exactly as they are.",
      "Imagine allowing the water to hold you. To hold someone else. Or to let yourself be held. I don't imagine TU as a place to step away from life, but as a space to rediscover something you can carry back with you, every single day. Because the most important journey is not the one we will live together. It is the one that continues once you return home.",
    ],
    second: [
      "Throughout these days, we will be accompanied by movement, touch, nature, water, earth, fire, silence and relationship.",
      "Not as activities. But as experiences to live.",
      "Collecting wildflowers in a field, in silence, with an intention. Remembering something that has been waiting quietly inside you. And writing it down.",
      "I have always dreamed of creating a place where I could welcome people, walk beside them for a while and be part of their transformation, while they, in their own way, become part of mine. Because I believe every authentic encounter leaves something in both people.",
      "Imagine feeling the fire within you again. Stomping your feet on the earth. Dancing. Breathing. Feeling alive. Connected.",
    ],
    exploreTitle: "What We Will Explore Together",
    exploreIntro: "We will move through different experiences and try to listen to what moves inside us.",
    explore: [
      { title: "Touch. A safe space.", tag: "TOUCH", tone: "warm", paragraphs: ["Touch as support, containment, presence. Contact with another person, but also with ourselves. What happens when we receive? And what happens when we are the ones accompanying someone else, with care?"] },
      { title: "Water.", tag: "WATER", tone: "water", paragraphs: ["Allowing ourselves to be held and gently rocked. Letting go of the weight, even if only for a moment, and allowing someone else to accompany us. And then becoming the one who holds, who supports, who creates a sense of safety for another body."] },
      { title: "Voice.", tag: "VOICE", tone: "rose", paragraphs: ["We will make space for that scream, for that broken sound that sometimes remains there and does not know how to come out. Without needing to explain it. Simply allowing it to find a way through."] },
      { title: "Earth.", tag: "EARTH", tone: "earth", paragraphs: ["We will touch the earth, the grass, the trees. We will walk barefoot. We will stop and feel our roots, the weight of the body, the sensation of being here. Now. Present."] },
      { title: "Fire.", tag: "FIRE", tone: "fire", paragraphs: ["The fire that moves and transforms. The one outside and the one within us. The one that can be anger, desire, strength, energy. The fire that needs to be expressed or released. The fire that, perhaps, needs to come alive again."] },
      { title: "Movement.", tag: "MOVE", tone: "move", paragraphs: ["Through movement on the outside, we will listen to what is moving inside, without immediately trying to understand it. We will let the body speak, find its own rhythm, its own gesture. We will allow ourselves to be moved through."] },
      { title: "Silence.", tag: "STILL", tone: "quiet", paragraphs: ["We will listen to what remains when we do not need to fill the space. We will bring presence into simple things: eating, breathing, picking a flower, walking, cooking, sitting beside someone.", "This is where we will also rediscover that sensitivity that, sometimes, we forget."] },
      { title: "The group.", tag: "WE", tone: "group", paragraphs: ["All of this will happen together, with depth but also with lightness. There will be circles, eye contact, hearts, laughter and silence.", "What happens when we allow ourselves to truly be seen in front of others? And what happens when we are the ones who remain present in front of someone who opens up?", "The group as a space to give and to receive. To support and to allow ourselves to be supported. To discover how much of the other, sometimes, also lives within us."] },
      { title: "And then, bringing it home.", tag: "HOME", tone: "home", paragraphs: ["Presence. Relationship. Touch. Movement. Everything the body will have encountered and recognized.", "How can we bring it into everyday life?", "What are those beautiful resources that are already within reach and that, perhaps, we have simply forgotten how to recognize?", "How can we remember to stop, breathe, feel, ask for support and offer it?", "And how can we remember, once we are back home, what the body encountered here?", "Because TU does not end here.", "Something comes home with us."] }
    ],
    closing: [
      "And I believe that, sometimes, people forget they are \"beautiful.\"",
      "I would love for TU to become a place where we remember.",
      "A different way of listening to the body. Of being in relationship. Of moving through emotions. Of breathing. Of slowing down. Of inhabiting life.",
      "If, while reading these words, you felt something move inside you... perhaps this journey has already begun.",
      "I look forward to welcoming you.",
    ],
    image: "Image coming soon",
    video: "Video coming soon",
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
      "Per anni ho sentito il desiderio di creare uno spazio dove poter accogliere le persone. Uno spazio in cui incontrarsi davvero, dove il tempo rallenta, il corpo torna ad avere voce, la natura diventa casa e ogni persona possa sentirsi libera di essere esattamente com'è.",
      "Immagina di lasciarti cullare nell'acqua. Dall'acqua. Di sostenere qualcuno. O di lasciare che qualcuno sostenga te. Non immagino TU come un luogo in cui allontanarsi dalla propria vita, ma come uno spazio in cui riscoprire qualcosa da portare con sé, ogni giorno. Perché il viaggio più importante non è quello che vivremo insieme. È quello che continuerà quando ognuno tornerà a casa.",
    ],
    second: [
      "Durante questi giorni ci accompagneranno il movimento, il tocco, la natura, l'acqua, la terra, il fuoco, il silenzio e la relazione.",
      "Non come attività da fare. Ma come esperienze da vivere.",
      "Raccogliere fiori in un campo, in silenzio, con un'intenzione. Ricordare qualcosa che era rimasto lì, fermo. Scriverlo.",
      "Uno spazio verde dove incontrare le persone, camminare al loro fianco per un tratto ed essere parte della loro trasformazione, mentre loro, in qualche modo, diventeranno parte della mia. Perché credo che ogni incontro autentico lasci qualcosa in entrambe le direzioni.",
      "Immagina di sentire il fuoco dentro, dopo tanto tempo. Di battere i piedi sulla terra. Di ballare. Di respirare. Di sentirti vivo. Connesso.",
    ],
    closing: [
      "E credo che, a volte, le persone dimentichino di essere \"belle\".",
      "Mi piacerebbe che TU fosse anche questo. Uno spazio dove poterlo ricordare.",
      "Un modo diverso di ascoltare il proprio corpo. Di stare nelle relazioni. Di attraversare le emozioni. Di respirare. Di rallentare. Di abitare la propria vita.",
      "Se, leggendo queste parole, hai sentito qualcosa muoversi dentro di te... forse questo viaggio è già iniziato.",
      "Ti aspetto.",
    ],
    image: "Immagine in arrivo",
    video: "Video in arrivo",
    signature: "Martina",
  },
};

const TONES: Record<string, string> = {
  warm: "bg-[#dec7ad]",
  water: "bg-[#c9dcda]",
  rose: "bg-[#dcc5c1]",
  earth: "bg-[#ccd2bb]",
  fire: "bg-[#c98f6b]",
  move: "bg-[#cfd6cb]",
  quiet: "bg-[#e5ddcf]",
  group: "bg-[#c8d2c5]",
  home: "bg-[#d3aa83]",
};

const MediaSpace = ({ label, video = false, accent = "water" }: { label: string; video?: boolean; accent?: "water" | "fire" }) => (
  <div className="relative">
    <div className={`absolute -inset-2 md:-inset-3 rounded-[1.8rem] ${accent === "fire" ? "bg-[#9d6b50]" : "bg-[#adcac8]"} opacity-65 rotate-[-1.25deg]`} />
    <div className="relative overflow-hidden rounded-[1.4rem] border border-forest/10 bg-gradient-to-br from-sage/20 via-ivory to-gold-soft/15 shadow-[0_16px_42px_rgba(34,54,42,0.07)] aspect-[4/3]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.48),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.2),transparent_32%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          {video && <div className="mx-auto mb-4 h-12 w-12 rounded-full border border-forest/15 bg-ivory/80 backdrop-blur flex items-center justify-center text-lg shadow-sm">▶</div>}
          <span className="eyebrow text-forest/45">{label}</span>
        </div>
      </div>
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
        <section className="pt-28 pb-12 md:pt-32 md:pb-14 relative overflow-hidden">
          <div className="absolute right-[-8%] top-20 h-40 w-40 md:h-64 md:w-64 rounded-full bg-[#c9b5aa]/25 blur-3xl" />
          <div className="absolute left-[-6%] bottom-0 h-32 w-32 md:h-48 md:w-48 rounded-full bg-[#adcac8]/30 blur-3xl" />
          <div className="container-soft relative">
            <Reveal className="max-w-3xl">
              <p className="eyebrow text-forest/55 mb-3">{copy.eyebrow}</p>
              <div className="flex items-end gap-4 mb-3">
                <h1 className="font-serif text-5xl md:text-7xl leading-none">{copy.title}</h1>
                <span className="hidden md:inline-block mb-2 h-3 w-20 rounded-full bg-[#9d6b50]" />
              </div>
              <p className="font-serif italic text-xl md:text-3xl text-forest/70 mb-7">{copy.subtitle}</p>
              <div className="space-y-2 text-base md:text-lg leading-relaxed text-forest/80 max-w-2xl">
                {copy.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-12 md:pb-14">
          <div className="container-soft grid gap-7 md:grid-cols-2">
            <Reveal><MediaSpace label={copy.image} accent="water" /></Reveal>
            <Reveal><MediaSpace label={copy.image} accent="fire" /></Reveal>
          </div>
        </section>

        <section className="py-12 md:py-14">
          <div className="container-soft">
            <Reveal className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed text-forest/80">
              <p>{copy.first[0]}</p>
              <div className="my-7 h-px w-20 bg-[#9d6b50]" />
              <p>{copy.first[1]}</p>
            </Reveal>
          </div>
        </section>

        <section className="pb-14 md:pb-16">
          <div className="container-soft">
            <Reveal className="max-w-5xl mx-auto"><MediaSpace label={copy.video} video accent="water" /></Reveal>
          </div>
        </section>

        <section className="bg-forest-deep text-ivory py-14 md:py-16 relative overflow-hidden">
          <div className="absolute right-8 top-8 text-[7rem] md:text-[11rem] font-serif leading-none text-[#9d6b50]/10 select-none">TU</div>
          <div className="container-soft relative">
            <Reveal className="max-w-4xl mx-auto space-y-5 text-base md:text-lg leading-relaxed text-ivory/82">
              <p className="font-serif text-xl md:text-2xl text-[#d6b495]">{copy.second[0]}</p>
              <p className="font-serif italic text-lg md:text-xl text-[#c5dcda]">{copy.second[1]}</p>
              {copy.second.slice(2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </Reveal>
          </div>
        </section>

        {language === "en" && (
          <section className="py-14 md:py-16 bg-[#f3eee6]">
            <div className="container-soft">
              <Reveal className="max-w-3xl mx-auto text-center mb-10">
                <p className="eyebrow text-[#7f5846] mb-3">THE EXPERIENCE</p>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-3">{copy.exploreTitle}</h2>
                <p className="text-sm md:text-base leading-relaxed text-forest/75">{copy.exploreIntro}</p>
              </Reveal>

              <div className="grid gap-4 md:grid-cols-2">
                {copy.explore.slice(0, -1).map((item, index) => (
                  <Reveal key={item.title} className={index === 1 || index === 4 ? "md:translate-y-5" : ""}>
                    <div className={`relative h-full overflow-hidden rounded-[1.35rem] border border-forest/10 p-5 md:p-6 shadow-[0_10px_28px_rgba(34,54,42,0.04)] ${TONES[item.tone]}`}>
                      <div className="absolute right-5 top-3 text-3xl md:text-4xl font-serif text-forest/7 tracking-tight select-none">{item.tag}</div>
                      <div className="relative">
                        <h3 className="font-serif text-lg md:text-xl mb-2.5 pr-16">{item.title}</h3>
                        <div className="space-y-2.5 text-sm md:text-[15px] leading-relaxed text-forest/78">
                          {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal className="max-w-3xl mx-auto mt-14 text-center">
                <div className="relative overflow-hidden rounded-[1.7rem] border border-[#8f644e]/20 bg-[#d6b08d] px-6 py-10 md:px-12 md:py-12 shadow-[0_18px_42px_rgba(85,60,45,0.08)]">
                  <div className="relative z-10">
                    <p className="eyebrow text-[#6f4c3d] mb-4">BRING IT WITH YOU</p>
                    <h3 className="font-serif text-xl md:text-2xl mb-4">{copy.explore[copy.explore.length - 1].title}</h3>
                    <div className="space-y-3 text-sm md:text-base leading-relaxed text-forest/80 max-w-2xl mx-auto">
                      {copy.explore[copy.explore.length - 1].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-3 text-[5rem] md:text-[7rem] font-serif leading-none text-white/12 select-none">HOME</div>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        <section className="py-14 md:py-16 bg-[#edf1ec]">
          <div className="container-soft grid gap-7 md:grid-cols-2">
            <Reveal><MediaSpace label={copy.image} accent="fire" /></Reveal>
            <Reveal><MediaSpace label={copy.image} accent="water" /></Reveal>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#d5b08f] relative overflow-hidden">
          <div className="container-soft relative">
            <Reveal className="max-w-2xl mx-auto text-center">
              <div className="space-y-3 font-serif text-lg md:text-2xl leading-relaxed text-forest-deep">
                {copy.closing.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mx-auto mt-7 h-2 w-16 rounded-full bg-[#adcac8]" />
              <p className="mt-6 font-serif italic text-xl text-forest/70">{copy.signature}</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RetreatsPage;
