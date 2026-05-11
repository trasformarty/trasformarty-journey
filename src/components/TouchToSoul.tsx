import { useState } from "react";
import { Reveal } from "./Reveal";
import ImageLightbox from "./ImageLightbox";

const IMAGES = [
  "/touch-to-soul-1.jpg",
  "/touch-to-soul-2.jpg",
  "/touch-to-soul-3.jpg",
  "/touch-to-soul-4.jpg",
];

export const TouchToSoul = () => {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="touch-to-soul" className="section bg-ivory" aria-label="A Touch to Soul">
      <div className="container-soft grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <Reveal className="md:col-span-6">
          <p className="eyebrow mb-5">Offering — Bodywork</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-4 text-balance">
            A Touch to Soul
          </h2>
          <p className="font-serif italic text-xl text-earth mb-8">
            A full body massage and somatic experience.
          </p>

          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed text-pretty">
            <p>
              A Touch to Soul is a journey into one&apos;s own inner landscape —
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
              An intimate encounter with one&apos;s own rhythm and felt sense, with
              a quality of presence that daily life so often forgets. What
              remains is a state of well-being, peace and integration that can
              last in time —
              <span className="italic"> a small step on the path of knowing oneself.</span>
            </p>

            <p className="text-base text-foreground/70 pt-1">
              I offer sessions from 60 to 120 minutes, allowing the time to
              follow the rhythm and depth of the work.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-full bg-forest text-ivory px-7 py-3.5 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft"
          >
            Book a Session
          </a>
        </Reveal>

        <Reveal delay={150} className="md:col-span-6">
          <div className="relative md:sticky md:top-28">
            <div
              className="aspect-[5/4] w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-earth-soft/40 via-ivory-warm to-sage/40 shadow-organic cursor-zoom-in"
              onClick={() => setLightbox(IMAGES[active])}
            >
              <img
                src={IMAGES[active]}
                alt={`Touch to Soul image ${active + 1}`}
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center px-8 text-center pointer-events-none">
                <span className="text-[11px] uppercase tracking-[0.3em] text-forest-deep/45">
                  Upload treatment images here
                </span>
              </div>
            </div>

            <div className="mt-3 flex justify-center gap-2">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-forest" : "w-2 bg-forest/30"}`}
                  aria-label={`Show Touch to Soul image ${i + 1}`}
                />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-6 w-28 h-28 rounded-full bg-sage/50 blur-2xl"
            />
          </div>
        </Reveal>
      </div>

      <ImageLightbox src={lightbox} alt="Touch to Soul preview" onClose={() => setLightbox(null)} />
    </section>
  );
};

export default TouchToSoul;
