import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getLanguageFromPath, localizePath } from "@/lib/language";
import { Reveal } from "./Reveal";

const FORMATS = [
  { title: "Single Session", note: "An open meeting to begin." },
  { title: "5-Session Journey", note: "A first arc of listening." },
  { title: "10-Session Journey", note: "A deeper unfolding." },
  { title: "9-Month Journey", note: "A path that supports transformation over time." },
];

export const Sessions = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const movingThroughPath = localizePath("/moving-through", language);

  return (
    <section id="sessions" className="section bg-sage/30" aria-label="Moving Through">
      <div className="container-soft">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-5">Offering — One-to-One</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-4 text-balance">
              Moving Through
            </h2>
            <p className="font-serif italic text-foreground/55 mb-8">
              One-to-one emotional &amp; somatic accompaniment.
            </p>
            <div className="space-y-5 text-lg text-foreground/80 leading-relaxed text-pretty">
              <p>
                A space to explore what is moving inside you through the body,
                emotional presence and deep listening — online or in person.
              </p>
              <p>
                Together, we create a safe and welcoming space where sensations,
                emotions and expression can be met with care, without forcing the
                process to become something else.
              </p>
            </div>

            <Link
              to={movingThroughPath}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest text-ivory px-7 py-3.5 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft"
            >
              Explore Moving Through
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6">
            <Link
              to={movingThroughPath}
              className="group relative block aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-earth-soft/40 via-ivory-warm to-sage/40 shadow-organic"
              aria-label="Explore Moving Through"
            >
              <img
                src="/moving-through/intro.jpg"
                alt="Moving Through session"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/45 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <p className="text-[10px] uppercase tracking-[0.28em] text-ivory/75">Touch · presence · field</p>
                <p className="mt-3 font-serif text-3xl leading-tight text-balance">A contact that can also be subtle.</p>
              </div>
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {FORMATS.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <Link to={movingThroughPath} className="leaf-card text-center h-full block hover:-translate-y-1 transition-transform duration-500">
                <h3 className="font-serif text-xl md:text-2xl text-forest-deep mb-2">
                  {f.title}
                </h3>
                <p className="text-foreground/65 text-sm">{f.note}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sessions;
