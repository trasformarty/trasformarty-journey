import { Reveal } from "./Reveal";

const EXAMPLES = [
  {
    title: "The Importance of Touch",
    body:
      "For groups such as future yoga teachers, this workshop explores touch as presence, communication, grounding and support.",
  },
  {
    title: "Mama yo te curo",
    body:
      "A workshop that brings massage, touch and playful connection into the relationship between parents and children. Designed for adults and children, it creates a space where touch becomes care, play, presence and connection.",
  },
];

export const Workshops = () => {
  return (
    <section id="workshops" className="section bg-ivory" aria-label="Workshops">
      <div className="container-soft grid md:grid-cols-12 gap-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <p className="eyebrow mb-5">Offering — Groups</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 text-balance">
            Workshops
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
            Workshops around touch, body awareness, emotional presence and
            connection. These spaces are created for groups who want to explore
            the body not as an idea, but as a living place of relationship, care
            and transformation.
          </p>

          {/* WORKSHOP IMAGE PLACEHOLDER — Upload workshop image here */}
          <div
            className="mt-8 aspect-[5/4] w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-sage/50 via-ivory-warm to-gold-soft/30 shadow-soft flex items-center justify-center"
            role="img"
            aria-label="Workshop image placeholder"
          >
            <span className="text-forest-deep/50 text-xs uppercase tracking-[0.3em] text-center px-6">
              Upload workshop image here
            </span>
          </div>
        </Reveal>

        <div className="md:col-span-7 flex flex-col gap-6 md:pt-20">
          {EXAMPLES.map((w, i) => (
            <Reveal key={w.title} delay={i * 150}>
              <article className="leaf-card">
                <h3 className="font-serif text-2xl md:text-3xl text-forest-deep mb-4">
                  {w.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed">{w.body}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={400}>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-forest text-ivory px-7 py-3.5 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft self-start"
            >
              Explore Workshops
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
