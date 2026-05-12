import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import ImageLightbox from "./ImageLightbox";

const mamaImages = Array.from({ length: 44 }, (_, index) => `/workshops/mama-${index + 1}.jpg`);
const touchImages = Array.from({ length: 22 }, (_, index) => `/workshops/touch-${index + 1}.jpg`);

const WORKSHOPS = [
  {
    title: "The Importance of Touch",
    body: [
      "This workshop is created for yoga teachers, movement facilitators, body-based practitioners, support groups, families and anyone who works with people through the body, presence and relationship.",
      "Together, we explore touch as a conscious language — a way to offer support, grounding, calm or activation when it is truly needed.",
      "Through simple and respectful practices, we learn when touch can accompany a process, when it can become a resource, and when the most sensitive choice is simply not to touch.",
      "A space to bring more listening, clarity and care into the way we meet another body.",
    ],
    cta: "Explore More",
    images: touchImages,
    caption: "Workshop Kalena Yoga Teacher Training, Ibiza aprile 2026",
  },
  {
    title: "Mama yo te curo",
    body: [
      "Born from a simple and true gesture — my son’s spontaneous desire to care, share and teach something that, at home, is already a game, a moment of calm, contact and love.",
      "Mama yo te curo is a workshop for parents and children, created from my experience as a mother and often held with my children beside me. Through play, touch and presence, families are invited to slow down and find a sweeter, more natural way of being together.",
      "At the heart of the experience are the hands: small hands that listen, connect, calm and reassure. Small hands, big magic. Through simple gestures, children discover the subtle energy of touch — and the care and power they already carry within them.",
      "Parents and children leave with something they can bring home: a small massage sequence, a shared ritual of softness, a way to turn touch into a moment of intimacy, play and care.",
      "It is a warm and intimate space where care becomes play and play becomes care — a place to meet each other with more presence, sweetness and truth.",
    ],
    cta: "Ask for the Full Story",
    images: mamaImages,
  },
];

const WorkshopCarousel = ({
  title,
  images,
  caption,
}: {
  title: string;
  images: string[];
  caption?: string;
}) => {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goNext = () => {
    setActive((current) => (current + 1) % images.length);
  };

  const goPrevious = () => {
    setActive((current) => (current - 1 + images.length) % images.length);
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 35) return;

    if (distance > 0) {
      goPrevious();
    } else {
      goNext();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (lightboxOpen) return;

      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <div className="lg:max-w-[430px] lg:ml-auto">
      <div
        className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-sage/45 via-ivory-warm to-gold-soft/35 shadow-soft cursor-zoom-in"
        onClick={() => loaded[active] && setLightboxOpen(true)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
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

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            goPrevious();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-ivory/70 text-forest-deep backdrop-blur-sm flex items-center justify-center shadow-soft md:hidden"
          aria-label={`Previous ${title} photo`}
        >
          <ChevronLeft size={23} strokeWidth={1.5} />
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            goNext();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-ivory/70 text-forest-deep backdrop-blur-sm flex items-center justify-center shadow-soft md:hidden"
          aria-label={`Next ${title} photo`}
        >
          <ChevronRight size={23} strokeWidth={1.5} />
        </button>

        {!loaded[active] && (
          <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-forest-deep/45">
              Aggiungi qui le foto
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {[0, 1, 2].map((dot) => (
          <button
            key={dot}
            type="button"
            onClick={() => {
              const nextIndex = Math.min(dot, images.length - 1);
              setActive(nextIndex);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              dot === active % 3 ? "w-6 bg-forest" : "w-2 bg-forest/25"
            }`}
            aria-label={`Show ${title} photo group ${dot + 1}`}
          />
        ))}
      </div>

      {caption && (
        <p className="mt-3 text-center text-xs italic text-foreground/50">
          {caption}
        </p>
      )}

      <ImageLightbox
        src={lightboxOpen ? images[active] : null}
        alt={`${title} image preview`}
        onClose={() => setLightboxOpen(false)}
        onNext={goNext}
        onPrevious={goPrevious}
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
                  <div className="space-y-3 text-foreground/75 leading-relaxed">
                    {workshop.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {workshop.cta && (
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center rounded-full border border-forest/30 text-forest-deep px-5 py-2.5 text-sm hover:bg-sage/25 transition-colors duration-500"
                    >
                      {workshop.cta}
                    </a>
                  )}
                </div>

                <div className="lg:col-span-6">
                  <WorkshopCarousel title={workshop.title} images={workshop.images} caption={workshop.caption} />
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
