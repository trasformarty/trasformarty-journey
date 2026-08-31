import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { getLanguageFromPath } from "@/lib/language";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/martina.roscioli@gmail.com";

const COPY = {
  en: {
    eyebrow: "Italy · May 2027",
    title: "TU",
    subtitle: "Where the Body Remembers.",
    intro: ["Some experiences are not born in a single day.", "They live quietly within us until the moment they ask to be shared.", "TU is one of them."],
    first: [
      "For years, I have carried the desire to create a space where people could truly be welcomed. A space to meet, where time slows down, where the body finds its voice again, where nature feels like home, and where each person can feel free to be exactly as they are.",
      "Imagine allowing the water to hold you. To hold someone else. Or to let yourself be held. I don't imagine TU as a place to step away from life, but as a space to rediscover something you can carry back with you, every single day. Because the most important journey is not the one we will live together. It is the one that continues once you return home."
    ],
    second: [
      "Throughout these days, we will be accompanied by movement, touch, nature, water, earth, fire, silence and relationship.",
      "Not as activities. But as experiences to live.",
      "Collecting wildflowers in a field, in silence, with an intention. Remembering something that has been waiting quietly inside you. And writing it down.",
      "I have always dreamed of creating a place where I could welcome people, walk beside them for a while and be part of their transformation, while they, in their own way, become part of mine. Because I believe every authentic encounter leaves something in both people.",
      "Imagine feeling the fire within you again. Stomping your feet on the earth. Dancing. Breathing. Feeling alive. Connected."
    ],
    exploreEyebrow: "THE EXPERIENCE",
    exploreTitle: "What We Will Explore Together",
    exploreIntro: "We will move through different experiences and listen to what moves inside us.",
    homeEyebrow: "BRING IT WITH YOU",
    homeWord: "HOME",
    explore: [
      { title: "Touch. A safe space.", tone: "sand", paragraphs: ["Touch as support, containment, presence. Contact with another person, but also with ourselves. What happens when we receive? And what happens when we are the ones accompanying someone else, with care?"] },
      { title: "Water.", tone: "water", paragraphs: ["Allowing ourselves to be held and gently rocked. Letting go of the weight, even if only for a moment, and allowing someone else to accompany us. And then becoming the one who holds, who supports, who creates a sense of safety for another body."] },
      { title: "Voice.", tone: "rose", paragraphs: ["We will make space for that scream, for that broken sound that sometimes remains there and does not know how to come out. Without needing to explain it. Simply allowing it to find a way through."] },
      { title: "Earth.", tone: "sage", paragraphs: ["We will touch the earth, the grass, the trees. We will walk barefoot. We will stop and feel our roots, the weight of the body, the sensation of being here. Now. Present."] },
      { title: "Fire.", tone: "clay", paragraphs: ["The fire that moves and transforms. The one outside and the one within us. The one that can be anger, desire, strength, energy. The fire that needs to be expressed or released. The fire that, perhaps, needs to come alive again."] },
      { title: "Movement.", tone: "moss", paragraphs: ["Through movement on the outside, we will listen to what is moving inside, without immediately trying to understand it. We will let the body speak, find its own rhythm, its own gesture. We will allow ourselves to be moved through."] },
      { title: "Silence.", tone: "ivory", paragraphs: ["We will listen to what remains when we do not need to fill the space. We will bring presence into simple things: eating, breathing, picking a flower, walking, cooking, sitting beside someone.", "This is where we will also rediscover that sensitivity that, sometimes, we forget."] },
      { title: "The group.", tone: "earth", paragraphs: ["All of this will happen together, with depth but also with lightness. There will be circles, eye contact, hearts, laughter and silence.", "What happens when we allow ourselves to truly be seen in front of others? And what happens when we are the ones who remain present in front of someone who opens up?", "The group as a space to give and to receive. To support and to allow ourselves to be supported. To discover how much of the other, sometimes, also lives within us."] },
      { title: "And then, bringing it home.", tone: "home", paragraphs: ["Presence. Relationship. Touch. Movement. Everything the body will have encountered and recognized.", "How can we bring it into everyday life?", "What are those beautiful resources that are already within reach and that, perhaps, we have simply forgotten how to recognize?", "How can we remember to stop, breathe, feel, ask for support and offer it?", "And how can we remember, once we are back home, what the body encountered here?", "Because TU does not end here.", "Something comes home with us."] }
    ],
    closing: ["And I believe that, sometimes, people forget they are \"beautiful.\"", "I would love for TU to become a place where we remember.", "A different way of listening to the body. Of being in relationship. Of moving through emotions. Of breathing. Of slowing down. Of inhabiting life.", "If, while reading these words, you felt something move inside you... perhaps this journey has already begun.", "I look forward to welcoming you."],
    form: {
      eyebrow: "TU · FULL PROGRAM",
      title: "Request the full program",
      text: "Leave your details and I’ll send you the complete information for TU.",
      name: "Name",
      surname: "Surname",
      email: "Email",
      phone: "Phone number",
      send: "Request full program",
      sending: "Sending…",
      thanks: "Thank you. Your request has been sent.",
      error: "Something went wrong. Please try again or write to me directly."
    },
    image: "Image coming soon", video: "Video coming soon", signature: "Martina"
  },
  it: {
    eyebrow: "Italia · Maggio 2027",
    title: "TU",
    subtitle: "Dove il corpo ricorda.",
    intro: ["Ci sono esperienze che non nascono in un giorno.", "Vivono dentro di noi per molto tempo, finché arriva il momento in cui chiedono di essere condivise.", "TU è una di queste."],
    first: [
      "Per anni ho sentito il desiderio di creare uno spazio dove poter accogliere le persone. Uno spazio in cui incontrarsi davvero, dove il tempo rallenta, il corpo torna ad avere voce, la natura diventa casa e ogni persona possa sentirsi libera di essere esattamente com'è.",
      "Immagina di lasciarti cullare nell'acqua. Dall'acqua. Di sostenere qualcuno. O di lasciare che qualcuno sostenga te. Non immagino TU come un luogo in cui allontanarsi dalla propria vita, ma come uno spazio in cui riscoprire qualcosa da portare con sé, ogni giorno. Perché il viaggio più importante non è quello che vivremo insieme. È quello che continuerà quando ognuno tornerà a casa."
    ],
    second: [
      "Durante questi giorni ci accompagneranno il movimento, il tocco, la natura, l'acqua, la terra, il fuoco, il silenzio e la relazione.",
      "Non come attività da fare. Ma come esperienze da vivere.",
      "Raccogliere fiori in un campo, in silenzio, con un'intenzione. Ricordare qualcosa che era rimasto lì, fermo. Scriverlo.",
      "Uno spazio verde dove incontrare le persone, camminare al loro fianco per un tratto ed essere parte della loro trasformazione, mentre loro, in qualche modo, diventeranno parte della mia. Perché credo che ogni incontro autentico lasci qualcosa in entrambe le direzioni.",
      "Immagina di sentire il fuoco dentro, dopo tanto tempo. Di battere i piedi sulla terra. Di ballare. Di respirare. Di sentirti vivo. Connesso."
    ],
    exploreEyebrow: "L'ESPERIENZA",
    exploreTitle: "Cosa esploreremo insieme",
    exploreIntro: "Attraverseremo esperienze diverse e proveremo ad ascoltare cosa si muove dentro di noi.",
    homeEyebrow: "PORTALO CON TE",
    homeWord: "CASA",
    explore: [
      { title: "Il tocco. Uno spazio sicuro.", tone: "sand", paragraphs: ["Il tocco come sostegno, contenimento, presenza. Il contatto con l'altro, ma anche con noi stessi. Cosa accade quando riceviamo? E cosa accade quando siamo noi ad accompagnare qualcuno, con cura?"] },
      { title: "L'acqua.", tone: "water", paragraphs: ["Lasciarsi cullare e sostenere. Lasciare andare il peso, anche solo per un momento, e permettere a qualcun altro di accompagnarci. E poi essere noi a cullare, a sostenere, a creare sicurezza per un altro corpo."] },
      { title: "La voce.", tone: "rose", paragraphs: ["Daremo spazio a quel grido, a quel suono spezzato che a volte rimane lì e non sa come uscire. Senza doverlo spiegare. Permettendogli semplicemente di trovare una via."] },
      { title: "La terra.", tone: "sage", paragraphs: ["Toccheremo la terra, l'erba, gli alberi. Cammineremo scalzi. Ci fermeremo a sentire le radici, il peso del corpo, la sensazione di essere qui. Ora. Presenti."] },
      { title: "Il fuoco.", tone: "clay", paragraphs: ["Il fuoco che muove e trasforma. Quello fuori e quello dentro di noi. Quello che può essere rabbia, desiderio, forza, energia. Il fuoco da esprimere o da lasciare andare. Il fuoco che, forse, ha bisogno di tornare a vivere."] },
      { title: "Il movimento.", tone: "moss", paragraphs: ["Attraverso il movimento fuori andremo ad ascoltare cosa si muove dentro, senza cercare subito di capirlo. Lasceremo che sia il corpo a parlare, a trovare il suo ritmo, il suo gesto. Ci lasceremo attraversare."] },
      { title: "Il silenzio.", tone: "ivory", paragraphs: ["Ascolteremo cosa rimane quando non abbiamo bisogno di riempire. Porteremo presenza nelle cose semplici: mangiare, respirare, raccogliere un fiore, camminare, cucinare, stare accanto a qualcuno.", "È lì che ritroveremo anche quella sensibilità che, a volte, dimentichiamo."] },
      { title: "Il gruppo.", tone: "earth", paragraphs: ["Tutto questo accadrà insieme, con profondità ma anche con leggerezza. Ci saranno cerchi, sguardi, cuori, risate e silenzi.", "Cosa succede quando ci permettiamo di essere davvero davanti agli altri? E cosa accade quando siamo noi a rimanere presenti davanti a qualcuno che si apre?", "Il gruppo come spazio per dare e per ricevere. Per sostenere e lasciarsi sostenere. Per scoprire quanto dell'altro, a volte, vive anche dentro di noi."] },
      { title: "E poi, portarlo a casa.", tone: "home", paragraphs: ["La presenza. La relazione. Il tocco. Il movimento. Tutto ciò che il corpo avrà incontrato e riconosciuto.", "Come possiamo portarlo nella vita di tutti i giorni?", "Quali sono quelle risorse meravigliose che abbiamo già a portata di mano e che, forse, abbiamo semplicemente dimenticato di riconoscere?", "Come possiamo ricordarci di fermarci, respirare, sentire, chiedere sostegno e offrirlo?", "E come possiamo ricordare, una volta tornati a casa, ciò che il corpo ha incontrato qui?", "Perché TU non finisce qui.", "Qualcosa torna a casa con noi."] }
    ],
    closing: ["E credo che, a volte, le persone dimentichino di essere \"belle\".", "Mi piacerebbe che TU fosse anche questo. Uno spazio dove poterlo ricordare.", "Un modo diverso di ascoltare il proprio corpo. Di stare nelle relazioni. Di attraversare le emozioni. Di respirare. Di rallentare. Di abitare la propria vita.", "Se, leggendo queste parole, hai sentito qualcosa muoversi dentro di te... forse questo viaggio è già iniziato.", "Ti aspetto."],
    form: {
      eyebrow: "TU · PROGRAMMA COMPLETO",
      title: "Richiedi il programma completo",
      text: "Lascia i tuoi dati e ti invierò tutte le informazioni complete su TU.",
      name: "Nome",
      surname: "Cognome",
      email: "Email",
      phone: "Numero di telefono",
      send: "Richiedi il programma",
      sending: "Invio…",
      thanks: "Grazie. La tua richiesta è stata inviata.",
      error: "Qualcosa non ha funzionato. Riprova oppure scrivimi direttamente."
    },
    image: "Immagine in arrivo", video: "Video in arrivo", signature: "Martina"
  }
};

const TONES: Record<string, string> = { sand: "bg-[#d8c8b4]", water: "bg-[#b9cfcb]", rose: "bg-[#d3bbb5]", sage: "bg-[#c4cab4]", clay: "bg-[#a96f53] text-[#f7f1e8]", moss: "bg-[#79806a] text-[#f7f1e8]", ivory: "bg-[#efe9df]", earth: "bg-[#4d4942] text-[#f7f1e8]", home: "bg-[#c8aa8d]" };

const MediaSpace = ({ label, video = false, dark = false }: { label: string; video?: boolean; dark?: boolean }) => (
  <div className={`relative overflow-hidden border border-forest/10 ${dark ? "bg-[#4d4942] text-ivory" : "bg-[#dfe7e2] text-forest-deep"} aspect-[4/3]`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.38),transparent_28%),radial-gradient(circle_at_78%_78%,rgba(255,255,255,0.16),transparent_30%)]" />
    <div className="absolute inset-0 flex items-center justify-center"><div className="text-center px-6">{video && <div className="mx-auto mb-4 h-11 w-11 rounded-full border border-current/25 flex items-center justify-center text-base">▶</div>}<span className="eyebrow opacity-55">{label}</span></div></div>
  </div>
);

const RetreatsPage = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = COPY[language];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useLayoutEffect(() => { window.scrollTo(0, 0); }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();

    formData.append("_subject", "TU retreat · Full program request");
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    if (email) formData.append("_replyto", email);

    try {
      const response = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: formData });
      if (!response.ok) throw new Error("Unable to send request");
      form.reset();
      setSubmitted(true);
    } catch {
      setError(copy.form.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3eee6] text-forest-deep"><Header /><main>
      <section className="pt-28 md:pt-32"><div className="container-soft"><Reveal className="grid gap-0 md:grid-cols-[0.9fr_1.1fr] border border-forest/10 bg-[#dbe5df]">
        <div className="order-2 md:order-1 p-8 md:p-12 bg-[#dbe5df] flex flex-col justify-start min-h-[390px] md:min-h-[560px]"><div><p className="eyebrow text-forest/55 mb-5">{copy.eyebrow}</p><h1 className="font-serif text-6xl md:text-8xl leading-none tracking-[-0.03em]">{copy.title}</h1><p className="font-serif italic text-2xl md:text-4xl text-forest/72 mt-3 max-w-xl">{copy.subtitle}</p></div><div className="mt-8 md:mt-10 space-y-1.5 text-base md:text-lg leading-relaxed text-forest/80 max-w-xl">{copy.intro.map(p => <p key={p}>{p}</p>)}</div></div>
        <div className="order-1 md:order-2 relative min-h-[280px] md:min-h-[560px] bg-[#8aa49d] overflow-hidden border-b md:border-b-0 md:border-l border-forest/10"><div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(43,58,49,0.14)),radial-gradient(circle_at_65%_28%,rgba(255,255,255,0.28),transparent_34%)]" /><div className="absolute inset-0 flex items-center justify-center"><span className="eyebrow text-ivory/65">{copy.image}</span></div></div>
      </Reveal></div></section>

      <section className="py-12 md:py-16"><div className="container-soft grid gap-0 md:grid-cols-2 border border-forest/10 bg-[#f4f0e8]"><Reveal><MediaSpace label={copy.image} /></Reveal><Reveal className="p-8 md:p-12 flex items-center"><div className="space-y-6 text-base md:text-[17px] leading-[1.75] text-forest/80 max-w-xl"><p>{copy.first[0]}</p><p className="font-serif italic text-lg md:text-xl leading-relaxed text-forest-deep">{copy.first[1]}</p></div></Reveal></div></section>

      <section className="pb-12 md:pb-16"><div className="container-soft grid gap-0 md:grid-cols-[0.72fr_1.28fr] border border-forest/10"><Reveal className="bg-[#b9cfcb] p-8 md:p-12 flex items-center min-h-[360px]"><div className="space-y-5 text-base md:text-lg leading-relaxed text-forest-deep/82"><p className="font-serif text-2xl md:text-3xl">{copy.second[0]}</p><p className="font-serif italic text-xl md:text-2xl">{copy.second[1]}</p></div></Reveal><Reveal><MediaSpace label={copy.video} video dark /></Reveal></div></section>

      <section className="bg-[#4d4942] text-ivory py-14 md:py-20"><div className="container-soft"><Reveal className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-[1.8] text-ivory/84">{copy.second.slice(2).map((p,i) => <p key={p} className={i === 2 ? "font-serif italic text-xl md:text-2xl text-[#d7c3aa]" : ""}>{p}</p>)}</Reveal></div></section>

      <section className="py-14 md:py-20 bg-[#f3eee6]"><div className="container-soft"><Reveal className="max-w-3xl mx-auto text-center mb-12 md:mb-16"><p className="eyebrow text-[#7c5d4d] mb-4">{copy.exploreEyebrow}</p><h2 className="font-serif text-3xl md:text-5xl leading-tight mb-4">{copy.exploreTitle}</h2><p className="text-sm md:text-base leading-relaxed text-forest/72 max-w-2xl mx-auto">{copy.exploreIntro}</p></Reveal>
        <div className="border border-forest/10">{copy.explore.slice(0,-1).map((item,index) => { const reverse=index%2===1; const darkTone=["clay","moss","earth"].includes(item.tone); return <Reveal key={item.title}><div className={`grid md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}><div className={`${TONES[item.tone]} min-h-[250px] md:min-h-[320px] flex items-center p-8 md:p-11`}><div className="max-w-md"><h3 className="font-serif text-2xl md:text-3xl leading-tight mb-5">{item.title}</h3><div className={`space-y-3 text-sm md:text-[15px] leading-[1.75] ${darkTone ? "text-ivory/82" : "text-forest/78"}`}>{item.paragraphs.map(p => <p key={p}>{p}</p>)}</div></div></div><div className={`${index%3===0 ? "bg-[#e7ece7]" : index%3===1 ? "bg-[#d8c8b4]" : "bg-[#c7d5d1]"} min-h-[250px] md:min-h-[320px] flex items-center justify-center p-8`}><div className="w-2/3 md:w-3/5 aspect-[4/5] border border-forest/10 bg-[#f4f0e8] flex items-center justify-center text-center"><span className="eyebrow text-forest/40">{copy.image}</span></div></div></div></Reveal>})}</div>
        <Reveal className="mt-14 md:mt-16"><div className="grid md:grid-cols-[0.36fr_0.64fr] border border-forest/10 bg-[#c8aa8d]"><div className="bg-[#7a6654] text-ivory p-8 md:p-10 flex items-start md:items-center"><div><p className="eyebrow text-ivory/60 mb-3">{copy.homeEyebrow}</p><div className="font-serif text-5xl md:text-7xl leading-none">{copy.homeWord}</div></div></div><div className="p-8 md:p-12"><h3 className="font-serif text-2xl md:text-3xl mb-5">{copy.explore[copy.explore.length-1].title}</h3><div className="space-y-3 text-sm md:text-base leading-[1.75] text-forest/82 max-w-2xl">{copy.explore[copy.explore.length-1].paragraphs.map(p => <p key={p}>{p}</p>)}</div></div></div></Reveal>
      </div></section>

      <section className="py-14 md:py-20 bg-[#e8e4db]"><div className="container-soft grid gap-0 md:grid-cols-2 border border-forest/10"><Reveal className="bg-[#f3eee6] p-8 md:p-12 flex items-center justify-center min-h-[360px]"><div className="w-3/5 max-w-[260px] aspect-[3/4] border border-forest/10 bg-[#dfe7e2] flex items-center justify-center"><span className="eyebrow text-forest/40">{copy.image}</span></div></Reveal><Reveal><MediaSpace label={copy.image} /></Reveal></div></section>

      <section className="py-16 md:py-20 bg-[#4d4942] text-ivory"><div className="container-soft"><Reveal className="max-w-2xl mx-auto text-center"><div className="space-y-4 font-serif text-lg md:text-2xl leading-relaxed text-ivory/90">{copy.closing.map(p => <p key={p}>{p}</p>)}</div><div className="mx-auto mt-8 h-px w-16 bg-[#b9cfcb]" /><p className="mt-6 font-serif italic text-xl text-ivory/70">{copy.signature}</p></Reveal></div></section>

      <section className="py-14 md:py-16 bg-[#f3eee6]"><div className="container-soft"><Reveal className="max-w-4xl mx-auto border border-[#7a6654]/20 bg-[#d8c8b4] p-7 md:p-10"><div className="grid gap-8 md:grid-cols-[0.38fr_0.62fr] md:items-start"><div><p className="eyebrow text-[#6f5144] mb-3">{copy.form.eyebrow}</p><h2 className="font-serif text-3xl md:text-4xl leading-tight mb-3">{copy.form.title}</h2><p className="text-sm md:text-base leading-relaxed text-forest/72 max-w-sm">{copy.form.text}</p></div><div>{submitted ? <div className="min-h-[220px] flex items-center justify-center text-center"><p className="font-serif text-2xl text-forest-deep">{copy.form.thanks}</p></div> : <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2"><label className="block"><span className="block text-sm text-forest/70 mb-2">{copy.form.name}</span><input name="name" type="text" required autoComplete="given-name" className="w-full bg-[#f3eee6] border border-forest/15 px-4 py-3 text-sm outline-none focus:border-forest/40" /></label><label className="block"><span className="block text-sm text-forest/70 mb-2">{copy.form.surname}</span><input name="surname" type="text" required autoComplete="family-name" className="w-full bg-[#f3eee6] border border-forest/15 px-4 py-3 text-sm outline-none focus:border-forest/40" /></label><label className="block"><span className="block text-sm text-forest/70 mb-2">{copy.form.email}</span><input name="email" type="email" required autoComplete="email" className="w-full bg-[#f3eee6] border border-forest/15 px-4 py-3 text-sm outline-none focus:border-forest/40" /></label><label className="block"><span className="block text-sm text-forest/70 mb-2">{copy.form.phone}</span><input name="phone" type="tel" required autoComplete="tel" className="w-full bg-[#f3eee6] border border-forest/15 px-4 py-3 text-sm outline-none focus:border-forest/40" /></label><div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 pt-2"><button type="submit" disabled={loading} className="inline-flex items-center justify-center bg-[#4d4942] text-ivory px-7 py-3 text-sm hover:bg-[#3e3a35] transition-colors disabled:opacity-60">{loading ? copy.form.sending : copy.form.send}</button>{error && <p className="text-sm text-[#7a3f32]">{error}</p>}</div></form>}</div></div></Reveal></div></section>
    </main><Footer /></div>
  );
};

export default RetreatsPage;
