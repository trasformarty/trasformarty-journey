import { Reveal } from "./Reveal";

const ESSENCE = ["Body", "Touch", "Movement", "Presence"];

export const Essence = () => {
  return (
    <section id="essence" className="section bg-gradient-ivory relative overflow-hidden" aria-label="The essence of Trasformarty">
      {/* organic floating shape */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-sage/30 blur-3xl animate-breath"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 w-[360px] h-[360px] rounded-full bg-gold-soft/30 blur-3xl animate-breath"
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

        <Reveal delay={200} className="mt-16 flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {ESSENCE.map((word) => (
            <span
              key={word}
              className="font-serif italic text-lg md:text-2xl text-forest-deep px-6 py-2 rounded-full border border-sage/70 bg-card/50 backdrop-blur-sm"
            >
              {word}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Essence;
