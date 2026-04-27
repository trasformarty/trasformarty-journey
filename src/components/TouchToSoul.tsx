import { Reveal } from "./Reveal";

export const TouchToSoul = () => {
  return (
    <section id="touch-to-soul" className="section bg-ivory" aria-label="A Touch to Soul">
      <div className="container-soft grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <Reveal className="md:col-span-6 order-2 md:order-1">
          <p className="eyebrow mb-5">Offering — Bodywork</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-4 text-balance">
            A Touch to Soul
          </h2>
          <p className="font-serif italic text-xl text-earth mb-8">A touch to the soul.</p>

          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed text-pretty">
            <p>
              This is my signature massage and bodywork treatment. Over the years,
              my clients began to describe it as a massage that reaches the soul.
              The name came from their words:{" "}
              <em className="text-forest-deep">
                &ldquo;No one had ever massaged my soul before.&rdquo;
              </em>
            </p>
            <p>
              A Touch to Soul is a space of deep listening through the hands —
              where the body is not treated as something to correct, but met as a
              living landscape of memory, sensation, emotion and presence.
            </p>
            <p className="text-foreground/55 italic text-base">
              More detailed information about the treatment will be added here soon.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-full bg-forest text-ivory px-7 py-3.5 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft"
          >
            Book a Session
          </a>
        </Reveal>

        <Reveal delay={150} className="md:col-span-6 order-1 md:order-2">
          {/* TREATMENT IMAGE PLACEHOLDER — Upload treatment image here */}
          <div className="relative">
            <div
              className="aspect-[5/6] w-full rounded-[3rem] overflow-hidden bg-gradient-to-br from-earth-soft/40 via-ivory-warm to-sage/40 shadow-organic flex items-center justify-center"
              role="img"
              aria-label="A Touch to Soul treatment image placeholder"
            >
              <span className="text-forest-deep/50 text-xs uppercase tracking-[0.3em] text-center px-6">
                Upload treatment image here
              </span>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-6 w-28 h-28 rounded-full bg-sage/50 blur-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TouchToSoul;
