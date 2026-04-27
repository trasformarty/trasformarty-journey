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
              A Touch to Soul is a journey into one's own inner landscape —
              an experience of deep somatic listening, where the body can
              settle into relaxation and presence, the mind can grow quiet,
              and a more authentic sense of self can emerge.
            </p>

            <p>
              A safe space where emotions are free to flow and vital energy
              can move again with ease, opening at times into states of deep
              release.
            </p>

            <p>
              Through slow gestures, deeper pressures and a subtle touch, the
              body is met with care and respect — never forced, always
              listened to.
            </p>

            <p>
              The body holds memories. When the mind softens and listening
              deepens, what has been quietly stored can begin to surface —
              sometimes as an image, a sensation, a forgotten emotion, a
              fragment of memory. Nothing is sought, nothing is forced:
              there is simply space for what asks to be seen, welcomed, and
              gently released.
            </p>

            <p className="font-serif italic text-xl text-forest-deep pt-2">
              A gentle therapy. A sensory path where body and soul find each
              other again.
            </p>

            <p>
              An intimate encounter with one's own rhythm, one's own felt
              sense, with a quality of presence that daily life so often
              forgets. What remains is a state of well-being, peace and
              integration that can last in time —
              <span className="italic"> a small step on the path of knowing oneself.</span>
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
          <div className="relative md:sticky md:top-28">
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
