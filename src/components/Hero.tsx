import { ChevronDown } from "lucide-react";
import { Wordmark } from "./Wordmark";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center text-ivory"
      aria-label="Trasformarty — move, feel, transform"
    >
      {/* VIDEO BACKGROUND PLACEHOLDER
          Upload forest movement video here as /public/forest-hero.mp4
          and add a poster image at /public/forest-hero-poster.jpg */}
      <div className="absolute inset-0 z-0 bg-gradient-forest" aria-hidden="true">
        <video
          className="w-full h-full object-cover opacity-90"
          autoPlay
          muted
          loop
          playsInline
          // poster="/forest-hero-poster.jpg"
        >
          {/* <source src="/forest-hero.mp4" type="video/mp4" /> */}
        </video>
        {/* Decorative ambient leaves while video isn't uploaded yet */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,hsl(var(--sage)/0.25),transparent_60%),radial-gradient(ellipse_at_80%_80%,hsl(var(--gold)/0.15),transparent_55%)]" />
      </div>

      {/* Soft veil overlay for legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-veil" aria-hidden="true" />

      {/* Upload hint (visible only in dev/preview) */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 text-[11px] uppercase tracking-[0.3em] text-ivory/50 border border-ivory/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
        Upload forest movement video here
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center animate-fade-in-slow">
        <p className="eyebrow text-ivory/70 mb-8">A holistic & somatic practice</p>

        <h1 className="mb-8 flex justify-center">
          <Wordmark size="lg" variant="ivory" className="drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]" />
        </h1>

        <p className="font-serif italic text-2xl md:text-4xl text-ivory/95 mb-6 text-balance">
          Move, feel, transform.
        </p>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-ivory/80 leading-relaxed text-pretty mb-10">
          A space for emotional, somatic and holistic transformation through touch,
          movement, presence and deep listening.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center rounded-full bg-ivory text-forest-deep px-7 py-3.5 text-sm tracking-wide hover:bg-gold-soft transition-colors duration-500 shadow-organic"
          >
            Work With Me
          </a>
          <a
            href="#approach"
            className="inline-flex items-center rounded-full border border-ivory/50 text-ivory px-7 py-3.5 text-sm tracking-wide hover:bg-ivory/10 transition-colors duration-500"
          >
            Discover My Approach
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#essence"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-ivory/70 hover:text-ivory transition-colors flex flex-col items-center gap-2"
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <ChevronDown size={20} strokeWidth={1.2} className="animate-scroll-cue" />
      </a>
    </section>
  );
};

export default Hero;
