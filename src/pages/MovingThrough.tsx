import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import ImageLightbox from "@/components/ImageLightbox";

const WHATSAPP_BOOKING_URL =
  "https://wa.me/34691738479?text=Hi%20Martina%2C%20I%20would%20like%20to%20book%20a%20session.%0AMy%20name%20is%3A%0AI%27m%20interested%20in%3A%0AMy%20availability%20is%3A";

const IMAGES = [
  "/moving-through/moving-1.jpg",
  "/moving-through/moving-2.jpg",
  "/moving-through/moving-3.jpg",
  "/moving-through/moving-4.jpg",
  "/moving-through/moving-5.jpg",
  "/moving-through/moving-6.jpg",
];

const FORMATS = [
  { title: "Single Session", note: "A space to meet what is present and begin listening from the body." },
  { title: "5-Session Journey", note: "A first arc of support to open a process and begin recognizing your resources." },
  { title: "10-Session Journey", note: "A deeper unfolding, with more continuity, integration and emotional capacity." },
  { title: "9-Month Journey", note: "A long-form path that supports transformation over time." },
];

const PHASES = [
  { range: "Months 1 — 3", detail: "One session per week.", text: "Close accompaniment, rhythm and safety. We begin to listen to the body, recognize resources and create a stable ground for the process.", image: "/moving-through/journey-1.jpg" },
  { range: "Months 4 — 6", detail: "One session every two weeks.", text: "The work begins to breathe. There is more space for integration, autonomy and the capacity to return to yourself between sessions.", image: "/moving-through/journey-2.jpg" },
  { range: "Months 7 — 9", detail: "One session per month.", text: "Support becomes lighter. You continue walking with more trust, resilience and inner strength, carrying the work into daily life.", image: "/moving-through/journey-3.jpg" },
];

const SIGNS = [
  "When emotions feel present, but difficult to name or express.",
  "When your body carries tension, restlessness or a sense of holding something inside.",
  "When you are moving through a transition and need a space to feel, integrate and listen.",
  "When you want to build more trust, resilience and inner resources without forcing yourself.",
];

const MovingThrough = () => {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goPrevious = () => {
    setActive((current) => {
      const next = current === 0 ? IMAGES.length - 1 : current - 1;
      if (lightbox) setLightbox(IMAGES[next]);
      return next;
    });
  };

  const goNext = () => {
    setActive((current) => {
      const next = current === IMAGES.length - 1 ? 0 : current + 1;
      if (lightbox) setLightbox(IMAGES[next]);
      return next;
    });
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchEndX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 45) return;
    if (distance > 0) goPrevious();
    else goNext();
  };

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    const scrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    scrollTop();
    const frame = window.requestAnimationFrame(scrollTop);
    const attempts = [50, 150, 350, 700].map((delay) => window.setTimeout(scrollTop, delay));
    return () => {
      window.cancelAnimationFrame(frame);
      attempts.forEach((attempt) => window.clearTimeout(attempt));
    };
  }, []);

  const activeDot = Math.min(2, Math.floor((active / IMAGES.length) * 3));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-forest px-6 pb-16 pt-28 text-ivory md:px-10 md:pb-22 md:pt-34 lg:pt-36">
          <div aria-hidden="true" className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-gold-soft/15 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-sage/20 blur-3xl" />
          <div className="container-soft relative grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal className="max-w-3xl">
              <p className="eyebrow mb-5 text-ivory/65">Moving Through</p>
              <h1 className="font-serif text-5xl leading-[0.98] text-ivory text-balance md:text-7xl">
                One-to-one emotional & somatic accompaniment.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ivory/75 text-pretty md:text-xl">
                A space to explore what is moving inside you through the body, emotional presence and deep listening — online or in person.
              </p>
            </Reveal>
            <Reveal delay={120} className="mx-auto w-full max-w-[330px] lg:max-w-[360px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-ivory/20 bg-ivory/10 shadow-organic">
                <img src="/moving-through/intro.jpg" alt="Moving Through session" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory px-6 py-14 md:px-10 md:py-20" aria-label="What Moving Through is">
          <div className="container-soft grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-5">The work</p>
              <h2 className="font-serif text-4xl leading-[1.05] text-forest-deep text-balance md:text-6xl">
                A gentle way to meet what is alive inside.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-7">
              <div className="space-y-5 text-lg leading-relaxed text-foreground/78 text-pretty">
                <p>Moving Through is a one-to-one space where emotional processes are explored through the body, sensation and presence.</p>
                <p>It is not about analyzing everything with the mind or pushing yourself to feel more than you are ready to feel. It is about slowing down enough to notice what is present, what your body is saying, and what your system needs in order to feel safer.</p>
                <p>Sometimes the work begins from a sensation in the body. Sometimes from an emotion, a tension, an image, a memory, a question, or simply something that is difficult to name.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory-warm px-6 py-14 md:px-10 md:py-20" aria-label="Who Moving Through is for">
          <div className="container-soft grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-5">Who it may speak to</p>
              <h2 className="font-serif text-4xl leading-[1.05] text-forest-deep text-balance md:text-6xl">
                When something inside asks for space.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-7">
              <div className="space-y-5 text-lg leading-relaxed text-foreground/78 text-pretty">
                <p>This work can be for anyone who feels the desire to understand themselves through the body, not only through words.</p>
                <p>You may feel called to it when something is moving inside you and you do not yet know how to meet it — an emotion, a sensation, a transition, a repeated pattern, or a part of you that needs more care.</p>
              </div>
              <div className="mt-8 space-y-4 border-l border-forest/20 pl-5 md:pl-7">
                {SIGNS.map((sign) => (
                  <p key={sign} className="font-serif text-xl leading-snug text-forest-deep/82 text-balance md:text-2xl">
                    {sign}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-sage/25 px-6 py-14 md:px-10 md:py-20" aria-label="What happens in a session">
          <div className="container-soft grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-5">In a session</p>
              <h2 className="font-serif text-4xl leading-[1.05] text-forest-deep text-balance md:text-6xl">
                What happens, simply.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-7">
              <div className="space-y-5 text-lg leading-relaxed text-foreground/78 text-pretty">
                <p>Together, we explore what is moving inside you and create space for it to be felt without forcing it to become something else.</p>
                <p>We look for the resources that are already present: places, sensations, gestures, images, memories or inner qualities that can support you. Little by little, you learn how to access them and how to return to them.</p>
                <p>The work creates enough space and safety so that what feels delicate can be approached with care, while your capacity, resilience and trust begin to grow.</p>
                <p>This can happen through words, movement, silence, breath, visualization or subtle energetic contact. The body guides the rhythm.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory px-6 py-14 md:px-10 md:py-20" aria-label="Moving Through images">
          <div className="container-soft">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-5">Touch · Presence · Field</p>
              <h2 className="font-serif text-4xl leading-[1.05] text-forest-deep text-balance md:text-5xl">
                A contact that can also be subtle.
              </h2>
            </Reveal>
            <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-earth-soft/40 via-ivory-warm to-sage/40 shadow-organic cursor-zoom-in touch-pan-y md:aspect-[16/9]" onClick={() => setLightbox(IMAGES[active])} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <img src={IMAGES[active]} alt={`Moving Through image ${active + 1}`} className="h-full w-full object-cover" loading="lazy" />
                <button type="button" onClick={(event) => { event.stopPropagation(); goPrevious(); }} className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/28 text-forest-deep backdrop-blur-sm transition-colors hover:bg-ivory/45" aria-label="Previous Moving Through image"><ChevronLeft size={22} strokeWidth={1.4} /></button>
                <button type="button" onClick={(event) => { event.stopPropagation(); goNext(); }} className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/28 text-forest-deep backdrop-blur-sm transition-colors hover:bg-ivory/45" aria-label="Next Moving Through image"><ChevronRight size={22} strokeWidth={1.4} /></button>
              </div>
              <div className="mt-3 flex justify-center gap-2">
                {[0, 1, 2].map((dot) => {
                  const target = Math.min(IMAGES.length - 1, dot * Math.ceil(IMAGES.length / 3));
                  return <button key={dot} type="button" onClick={() => setActive(target)} className={`h-2 rounded-full transition-all duration-300 ${activeDot === dot ? "w-6 bg-forest" : "w-2 bg-forest/30"}`} aria-label={`Show Moving Through image group ${dot + 1}`} />;
                })}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory-warm px-6 py-14 md:px-10 md:py-20" aria-label="Ways to enter Moving Through">
          <div className="container-soft">
            <Reveal className="max-w-3xl">
              <p className="eyebrow mb-5">Ways to enter</p>
              <h2 className="font-serif text-4xl leading-[1.05] text-forest-deep text-balance md:text-6xl">
                Different rhythms for different moments.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FORMATS.map((format, index) => (
                <Reveal key={format.title} delay={index * 90}>
                  <article className="leaf-card h-full">
                    <h3 className="font-serif text-2xl text-forest-deep mb-3">{format.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/68">{format.note}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-forest px-6 py-16 text-ivory md:px-10 md:py-24" aria-label="Nine month journey">
          <div className="container-soft">
            <Reveal className="max-w-3xl">
              <p className="eyebrow mb-5 text-ivory/60">Featured Path</p>
              <h2 className="font-serif text-4xl leading-[1.05] text-ivory text-balance md:text-6xl">9-Month Transformation Journey</h2>
              <p className="mt-6 text-lg leading-relaxed text-ivory/78 text-pretty md:text-xl">A 9-month path that supports transformation over time. At the beginning, I accompany you closely. Gradually, the support becomes lighter, until you can continue walking with more autonomy, trust and inner strength.</p>
            </Reveal>
            <div className="mt-12 space-y-10 md:space-y-14">
              {PHASES.map((phase, index) => (
                <Reveal key={phase.range} delay={index * 100}>
                  <article className={`grid items-center gap-7 md:grid-cols-12 md:gap-10 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className="md:col-span-5">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ivory/15 bg-ivory/[0.06] shadow-organic">
                        <img
                          src={phase.image}
                          alt={phase.range}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/45 via-transparent to-transparent" />
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <p className="font-serif text-3xl text-ivory md:text-4xl">{phase.range}</p>
                      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ivory/55">{phase.detail}</p>
                      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75 text-pretty">{phase.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={180} className="mt-12">
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-sm text-forest-deep shadow-soft transition-colors duration-500 hover:bg-gold-soft">Start Your Journey <ArrowUpRight size={16} strokeWidth={1.5} /></a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ImageLightbox src={lightbox} alt="Moving Through preview" onClose={() => setLightbox(null)} onPrevious={goPrevious} onNext={goNext} />
    </div>
  );
};

export default MovingThrough;
