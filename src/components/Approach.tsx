import { Reveal } from "./Reveal";

const PILLARS = [
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
];

export const Approach = () => {
  return (
    <section id="approach" className="section bg-forest text-ivory relative overflow-hidden" aria-label="My approach">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,hsl(var(--sage)/0.18),transparent_55%),radial-gradient(ellipse_at_85%_90%,hsl(var(--gold)/0.12),transparent_55%)]"
      />

      <div className="container-soft relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-ivory/60 mb-5">My Approach</p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-[1.05] mb-8 text-balance">
            The work moves through the body, not around it.
          </h2>
          <p className="text-lg md:text-xl text-ivory/80 leading-relaxed text-pretty">
            It begins with listening — to breath, sensation, emotion, rhythm and
            the quiet intelligence of the body.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 mt-16">
          {PILLARS.map((p, i) => (
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
