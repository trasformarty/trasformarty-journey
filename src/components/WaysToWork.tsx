import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURED = {
  title: "A Touch to Soul",
  desc: "Signature massage and bodywork through touch, presence and deep listening.",
  href: "#touch-to-soul",
  image: "/work-with-me/touch-to-soul.jpg",
};

const OFFERINGS = [
  {
    title: "Moving Through",
    desc: "Somatic and emotional accompaniment to meet what is moving inside you.",
    href: "#sessions",
    image: "/work-with-me/moving-through.jpg",
  },
  {
    title: "Workshops",
    desc: "Group experiences around touch, body awareness and conscious relationship.",
    href: "#workshops",
    image: "/work-with-me/workshops.jpg",
  },
  {
    title: "Retreats",
    desc: "Immersive spaces to slow down, feel, move and reconnect with nature.",
    href: "#retreats",
    image: "/work-with-me/retreats.jpg",
  },
  {
    title: "Courses & Collaborations",
    desc: "Trainings and collaborations where touch becomes a living language of care.",
    href: "#courses",
    image: "/work-with-me/courses.jpg",
  },
];

const WorkCard = ({
  title,
  desc,
  href,
  image,
  featured = false,
}: {
  title: string;
  desc: string;
  href: string;
  image: string;
  featured?: boolean;
}) => {
  return (
    <a
      href={href}
      className={`group relative isolate flex overflow-hidden rounded-[2rem] shadow-organic border border-ivory/30 bg-forest-deep text-ivory ${
        featured ? "min-h-[470px] md:min-h-[620px]" : "min-h-[250px] md:min-h-[295px]"
      }`}
      aria-label={`Explore ${title}`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35 transition-all duration-700 group-hover:scale-105 group-hover:opacity-45"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/45 to-earth/20" />
      <div className="absolute inset-0 bg-sage/10 mix-blend-soft-light" />

      <div className={`relative z-10 flex h-full w-full flex-col justify-end ${featured ? "p-8 md:p-10" : "p-6"}`}>
        <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-ivory/65">
          Work with me
        </p>
        <h3 className={`font-serif leading-[1.05] text-balance ${featured ? "text-4xl md:text-6xl" : "text-3xl"}`}>
          {title}
        </h3>
        <p className={`mt-4 max-w-md leading-relaxed text-ivory/78 text-pretty ${featured ? "text-lg" : "text-sm"}`}>
          {desc}
        </p>
        <span className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-ivory/30 px-4 py-2 text-xs text-ivory/85 transition-colors duration-500 group-hover:bg-ivory group-hover:text-forest-deep">
          Explore
          <ArrowUpRight
            size={15}
            strokeWidth={1.5}
            className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </span>
      </div>
    </a>
  );
};

export const WaysToWork = () => {
  return (
    <section id="work" className="section bg-ivory-warm" aria-label="Ways to work with me">
      <div className="container-soft">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">Ways to Work With Me</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 text-balance">
            Choose the way your body is asking to be met.
          </h2>
          <p className="text-lg md:text-xl text-foreground/75 leading-relaxed text-pretty">
            Different doors into the same movement: returning to the body,
            listening to what is alive, and allowing transformation to unfold
            with care.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_1.45fr] lg:gap-6">
          <Reveal>
            <WorkCard {...FEATURED} featured />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {OFFERINGS.map((offering, index) => (
              <Reveal key={offering.title} delay={(index + 1) * 90}>
                <WorkCard {...offering} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysToWork;
