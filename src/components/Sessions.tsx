import { Reveal } from "./Reveal";

const FORMATS = [
  { title: "Single Session", note: "An open meeting to begin." },
  { title: "5-Session Journey", note: "A first arc of listening." },
  { title: "10-Session Journey", note: "A deeper unfolding." },
  { title: "9-Month Journey", note: "A path that mirrors a rebirth." },
];

const PHASES = [
  {
    range: "Months 1 — 3",
    detail: "One session per week.",
  },
  {
    range: "Months 4 — 6",
    detail: "One session every two weeks.",
  },
  {
    range: "Months 7 — 9",
    detail: "One session per month.",
  },
];

export const Sessions = () => {
  return (
    <section id="sessions" className="section bg-sage/30" aria-label="Emotional and somatic accompaniment">
      <div className="container-soft">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">Offering — One-to-One</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-4 text-balance">
            Moving Through
          </h2>
          <p className="font-serif italic text-foreground/55 mb-8">
            One-to-one emotional &amp; somatic accompaniment.
          </p>
          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed text-pretty">
            <p>
              One-to-one sessions, available both online and in person, where I
              accompany emotional processes through a somatic, body-based and
              touch-informed approach.
            </p>
            <p>
              Together, we create a space where emotions can be felt safely, where
              the body can express what words may not yet know, and where
              transformation can happen with presence and respect.
            </p>
          </div>
        </Reveal>

        {/* Formats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {FORMATS.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="leaf-card text-center h-full">
                <h3 className="font-serif text-xl md:text-2xl text-forest-deep mb-2">
                  {f.title}
                </h3>
                <p className="text-foreground/65 text-sm">{f.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 9-month detailed */}
        <Reveal delay={150} className="mt-16">
          <div className="rounded-[2.5rem] bg-gradient-forest text-ivory p-10 md:p-14 shadow-organic relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold-soft/15 blur-3xl"
            />
            <div className="relative grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <p className="eyebrow text-ivory/60 mb-4">Featured Path</p>
                <h3 className="font-serif text-3xl md:text-4xl text-ivory leading-[1.1] mb-5 text-balance">
                  9-Month Transformation Journey
                </h3>
                <p className="text-ivory/80 text-lg leading-relaxed text-pretty">
                  A 9-month path that mirrors a process of rebirth.
                </p>
                <p className="text-ivory/70 mt-5 leading-relaxed text-pretty">
                  At the beginning, I accompany you closely. Gradually, the support
                  becomes lighter, until you can continue walking with more autonomy,
                  trust and inner strength.
                </p>
              </div>

              <ol className="lg:col-span-7 space-y-5">
                {PHASES.map((p, i) => (
                  <li
                    key={p.range}
                    className="rounded-2xl bg-ivory/[0.06] border border-ivory/15 p-5"
                  >
                    <p className="font-serif text-xl text-ivory">{p.range}</p>
                    <p className="text-ivory/75">{p.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center rounded-full bg-ivory text-forest-deep px-7 py-3.5 text-sm hover:bg-gold-soft transition-colors duration-500"
            >
              Start Your Journey
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Sessions;
