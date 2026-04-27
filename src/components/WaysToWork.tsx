import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const OFFERINGS = [
  {
    title: "A Touch to Soul",
    desc: "Signature massage and bodywork — a touch that reaches the soul.",
    href: "#touch-to-soul",
  },
  {
    title: "Moving Through",
    desc: "Emotional & Somatic One-to-one accompaniment, online or in person, through body-based listening.",
    href: "#sessions",
  },
  {
    title: "Workshops",
    desc: "Group spaces around touch, body awareness and emotional presence.",
    href: "#workshops",
  },
  {
    title: "Retreats",
    desc: "Immersive days to slow down, move, feel and reconnect with nature.",
    href: "#retreats",
  },
  {
    title: "Courses & Collaborations",
    desc: "Assisting and accompanying Lisandro&rsquo;s courses and collaborations.",
    href: "#courses",
  },
];

export const WaysToWork = () => {
  return (
    <section id="work" className="section bg-ivory-warm" aria-label="Ways to work with me">
      <div className="container-soft">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">Ways to Work With Me</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 text-balance">
            Different doors into the same movement.
          </h2>
          <p className="text-lg md:text-xl text-foreground/75 leading-relaxed text-pretty">
            Returning to the body, listening to what is alive, and allowing
            transformation to unfold with care.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {OFFERINGS.map((o, i) => (
            <Reveal key={o.title} delay={i * 100}>
              <a
                href={o.href}
                className="group leaf-card flex flex-col h-full"
                aria-label={`Learn more about ${o.title}`}
              >
                <h3 className="font-serif text-2xl md:text-3xl text-forest-deep mb-3">
                  {o.title}
                </h3>
                <p
                  className="text-foreground/70 leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: o.desc }}
                />
                <span className="mt-6 inline-flex items-center gap-1.5 text-forest text-sm">
                  Explore
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToWork;
