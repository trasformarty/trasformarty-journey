import { Reveal } from "./Reveal";

export const Retreats = () => {
  return (
    <section id="retreats" className="section bg-forest-deep text-ivory relative overflow-hidden" aria-label="Retreats">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsl(var(--sage)/0.2),transparent_55%),radial-gradient(ellipse_at_15%_85%,hsl(var(--gold)/0.12),transparent_55%)]"
      />
      <div className="container-soft relative">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <p className="eyebrow text-ivory/60">Offering — Immersive</p>
            <span className="text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full border border-gold-soft/50 text-gold-soft">
              In Creation
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-[1.05] mb-8 text-balance">
            Retreats
          </h2>
          <div className="space-y-5 text-lg text-ivory/80 leading-relaxed text-pretty">
            <p>
              Immersive spaces to slow down, reconnect with the body, move through
              emotions and experience transformation over several days.
            </p>
            <p>
              Future retreats will include both one-to-one and group formats,
              created as containers for rest, movement, emotional presence,
              touch-informed practices and deep reconnection with nature.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-full bg-ivory text-forest-deep px-7 py-3.5 text-sm hover:bg-gold-soft transition-colors duration-500"
          >
            Stay Updated
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Retreats;
