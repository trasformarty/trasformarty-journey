import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote: "Your words here...",
    name: "Name S.",
  },
  {
    quote: "Your words here...",
    name: "Name S.",
  },
  {
    quote: "Your words here...",
    name: "Name S.",
  },
  {
    quote: "Your words here...",
    name: "Name S.",
  },
  {
    quote: "Your words here...",
    name: "Name S.",
  },
  {
    quote: "Your words here...",
    name: "Name S.",
  },
];

export const Testimonials = () => {
  return (
    <section id="from-you" className="section bg-ivory" aria-label="Client feedback">
      <div className="container-soft">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">Feedback</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6 text-balance">
            From You
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed text-pretty">
            Words shared by people who have walked through this work with me.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div
            className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Client testimonials carousel"
          >
            {TESTIMONIALS.map((item, index) => (
              <figure
                key={index}
                className="min-w-[78%] sm:min-w-[42%] lg:min-w-[19%] snap-start"
              >
                <blockquote className="font-serif italic text-2xl md:text-3xl leading-[1.22] text-forest-deep text-pretty">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-foreground/55 tracking-wide">
                  — {item.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
