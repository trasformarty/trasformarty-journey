import { Reveal } from "./Reveal";

const ESSENCE = [
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
];

export const Essence = () => {
  return (
    <section id="essence" className="section bg-gradient-ivory relative overflow-hidden" aria-label="The essence of Trasformarty">
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
          <p className="eyebrow mb-8">Essence</p>
          <p className="font-serif text-3xl md:text-5xl leading-[1.2] text-forest-deep text-balance">
            Trasformarty is an invitation to move through life with more
            <em className="text-earth"> presence</em>,
            <em className="text-earth"> softness </em>
            and <em className="text-earth">freedom</em>.
          </p>
          <span className="breath-divider my-10" />
          <p className="text-lg md:text-xl text-foreground/75 leading-relaxed text-pretty">
            Here, transformation is not forced. It is listened to, felt through the body,
            supported by touch, and allowed to unfold in its own rhythm.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-forest-deep/10">
            {ESSENCE.map((item, index) => (
              <div
                key={item.word}
                className={`py-8 sm:px-7 ${
                  index !== ESSENCE.length - 1 ? "lg:border-r lg:border-forest-deep/10" : ""
                } ${index < 2 ? "sm:border-b sm:border-forest-deep/10 lg:border-b-0" : ""}`}
              >
                <p className="font-serif italic text-3xl md:text-4xl text-forest-deep mb-3">
                  {item.word}
                </p>
                <p className="text-sm leading-relaxed text-foreground/65 max-w-xs">
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
