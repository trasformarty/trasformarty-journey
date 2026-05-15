import { Reveal } from "./Reveal";
import martinaPortrait from "@/assets/martina-portrait.png";

const CALENDLY_URL = "https://calendly.com/martinaroscioli-discovery-call/30min";

export const FreeCall = () => {
  return (
    <section id="free-call" className="bg-ivory-warm py-16 px-6 md:py-24 md:px-10" aria-label="Free online call">
      <div className="container-soft">
        <Reveal>
          <div className="relative grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12 items-center">
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-52 w-52 md:h-72 md:w-72 rounded-full overflow-hidden border border-gold/45 shadow-organic bg-gold-soft/30">
                <img
                  src={martinaPortrait}
                  alt="Martina Roscioli smiling"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-forest/20 bg-ivory/70 px-6 py-8 md:px-12 md:py-12 text-center shadow-card backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="hidden lg:block absolute left-[-13px] top-1/2 h-6 w-6 -translate-y-1/2 rotate-45 border-b border-l border-forest/20 bg-ivory/70"
              />

              <p className="eyebrow mb-5">Free Call</p>
              <p className="font-serif text-3xl md:text-5xl leading-[1.15] text-forest-deep text-balance">
                What if you could dance through life?
              </p>
              <div className="mt-7 text-foreground/75 leading-relaxed max-w-xl mx-auto">
                <p>
                  A free 30-minute online call to stay in contact, ask your
                  questions, and discover together how we can work.
                </p>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-forest/35 bg-gold-soft/70 text-forest-deep px-8 py-3 text-sm tracking-[0.08em] hover:bg-gold-soft transition-colors duration-500 shadow-soft"
              >
                Let&rsquo;s Talk
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FreeCall;
