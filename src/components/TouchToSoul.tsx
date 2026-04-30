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
        <Reveal className="md:col-span-6 order-2 md:order-1">
          <p className="eyebrow mb-5">Offering — Bodywork</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-4 text-balance">
            A Touch to Soul
          </h2>
          <p className="font-serif italic text-xl text-earth mb-8">A touch to the soul.</p>

          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed text-pretty">
            <p>...
            </p>
          </div>

          <a href="#contact" className="mt-10 inline-flex items-center rounded-full bg-forest text-ivory px-7 py-3.5 text-sm">
            Book a Session
          </a>
        </Reveal>

        <Reveal delay={150} className="md:col-span-6 order-1 md:order-2">
          <div className="relative md:sticky md:top-28">
            <div
              className="aspect-[5/4] w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-earth-soft/40 via-ivory-warm to-sage/40 shadow-organic cursor-zoom-in"
              onClick={() => setLightbox(IMAGES[active])}
            >
              <img
                src={IMAGES[active]}
                alt={`Touch to Soul image ${active + 1}`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-3 flex justify-center gap-2">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full ${active === i ? "w-6 bg-forest" : "w-2 bg-forest/30"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <ImageLightbox src={lightbox} alt="Touch to Soul preview" onClose={() => setLightbox(null)} />
    </section>
  );
};

export default TouchToSoul;
