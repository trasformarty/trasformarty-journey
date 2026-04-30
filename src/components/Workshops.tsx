import { useState } from "react";
import { Reveal } from "./Reveal";
import ImageLightbox from "./ImageLightbox";

const WORKSHOPS = [
  {
    title: "The Importance of Touch",
    body:
      "For groups such as future yoga teachers, this workshop explores touch as presence, communication, grounding and support.",
    images: [
      "/workshops/touch-1.jpg",
      "/workshops/touch-2.jpg",
      "/workshops/touch-3.jpg",
      "/workshops/touch-4.jpg",
      "/workshops/touch-5.jpg",
      "/workshops/touch-6.jpg",
    ],
  },
  {
    title: "Mama yo te curo",
    body:
      "A workshop that brings massage, touch and playful connection into the relationship between parents and children. Designed for adults and children, it creates a space where touch becomes care, play, presence and connection.",
    images: [
      "/workshops/mama-1.jpg",
      "/workshops/mama-2.jpg",
      "/workshops/mama-3.jpg",
      "/workshops/mama-4.jpg",
      "/workshops/mama-5.jpg",
      "/workshops/mama-6.jpg",
    ],
  },
];

const WorkshopCarousel = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="lg:max-w-[430px] lg:ml-auto">
      <div
        className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-sage/45 via-ivory-warm to-gold-soft/35 shadow-soft cursor-zoom-in"
        onClick={() => setLightbox(images[active])}
      >
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${title} workshop moment ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              active === index && loaded[index] ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setLoaded((current) => ({ ...current, [index]: true }))}
            onError={() => setLoaded((current) => ({ ...current, [index]: false }))}
          />
        ))}
        {!loaded[active] && (
          <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-forest-deep/45">
              Add photos here
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === index ? "w-6 bg-forest" : "w-2 bg-forest/25"
            }`}
          />
        ))}
      </div>

      <ImageLightbox
        src={lightbox}
        alt={`${title} image preview`}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
};

export const Workshops = () => {
  return (
    <section id="workshops" className="section bg-ivory" aria-label="Workshops">
      <div className="container-soft">
        <Reveal className="max-w-3xl">
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
        </Reveal>

        <div className="mt-12 space-y-7">
          {WORKSHOPS.map((workshop, index) => (
            <Reveal key={workshop.title} delay={index * 150}>
              <article className="bg-card rounded-[2rem] p-6 md:p-8 shadow-card border border-border grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-6">
                  <p className="eyebrow mb-3">Workshop</p>
                  <h3 className="font-serif text-3xl md:text-[2.35rem] text-forest-deep mb-4">
                    {workshop.title}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed">
                    {workshop.body}
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <WorkshopCarousel title={workshop.title} images={workshop.images} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
