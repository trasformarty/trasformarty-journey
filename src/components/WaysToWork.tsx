import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getLanguageFromPath, localizePath } from "@/lib/language";
import { Reveal } from "./Reveal";

const WORK_IMAGE_VERSION = "20260527";
const workImage = (file: string) => `/work-with-me/${file}.jpg?v=${WORK_IMAGE_VERSION}`;

const WORK_COPY = {
  en: {
    aria: "Ways to work with me",
    eyebrow: "Ways to Work With Me",
    title: "Different doors into the same movement.",
    paragraphs: [
      "Returning to the body, listening to what is alive, and allowing transformation to unfold with care.",
      "Choose the way your body is asking to be met.",
    ],
    cardLabel: "Work with me",
    explore: "Explore",
    featured: {
      title: "A Touch to Soul",
      desc: "Signature massage and bodywork through touch, presence and deep listening.",
      href: "#touch-to-soul",
      image: workImage("touch-to-soul"),
    },
    offerings: [
      {
        title: "Moving Through",
        desc: "Somatic and emotional accompaniment to meet what is moving inside you. Available online and in person.",
        href: "/moving-through",
        route: true,
        image: workImage("moving-through"),
      },
      {
        title: "Workshops",
        desc: "Group experiences around touch, body awareness and conscious relationship.",
        href: "#workshops",
        image: workImage("workshops"),
      },
      {
        title: "Retreats",
        desc: "Immersive spaces to slow down, feel, move and reconnect with nature.",
        href: "#retreats",
        image: workImage("retreats"),
      },
      {
        title: "Courses & Collaborations",
        desc: "Trainings and collaborations where touch becomes a living language of care.",
        href: "#courses",
        image: workImage("courses"),
      },
    ],
  },
  it: {
    aria: "Modi per lavorare con me",
    eyebrow: "Work With Me",
    title: "Porte diverse verso lo stesso movimento.",
    paragraphs: [
      "Ritornare al corpo, ascoltare ciò che è vivo e lasciare che la trasformazione possa accadere con cura.",
      "Scegli il modo in cui il tuo corpo chiede di essere incontrato.",
    ],
    cardLabel: "Work With Me",
    explore: "Esplora",
    featured: {
      title: "A Touch to Soul",
      desc: "Massaggio e bodywork attraverso il tocco, la presenza e l’ascolto profondo.",
      href: "#touch-to-soul",
      image: workImage("touch-to-soul"),
    },
    offerings: [
      {
        title: "Moving Through",
        desc: "Accompagnamento somatico ed emozionale per incontrare ciò che si muove dentro di te. Disponibile online e in presenza.",
        href: "/moving-through",
        route: true,
        image: workImage("moving-through"),
      },
      {
        title: "Workshop",
        desc: "Esperienze di gruppo intorno al tocco, alla consapevolezza del corpo e alla relazione consapevole.",
        href: "#workshops",
        image: workImage("workshops"),
      },
      {
        title: "Ritiri",
        desc: "Spazi immersivi per rallentare, sentire, muoversi e riconnettersi alla natura.",
        href: "#retreats",
        image: workImage("retreats"),
      },
      {
        title: "Corsi e collaborazioni",
        desc: "Percorsi e collaborazioni dove il tocco diventa un linguaggio vivo di cura.",
        href: "#courses",
        image: workImage("courses"),
      },
    ],
  },
};

const WorkCardContent = ({
  title,
  desc,
  image,
  label,
  explore,
  featured = false,
}: {
  title: string;
  desc: string;
  image: string;
  label: string;
  explore: string;
  featured?: boolean;
}) => (
  <>
    <img
      src={image}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
      loading="lazy"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/18 to-transparent" />
    <div className="absolute inset-0 bg-ivory/5 mix-blend-soft-light" />

    <div className={`relative z-10 flex h-full w-full flex-col justify-end ${featured ? "p-8 md:p-10" : "p-6"}`}>
      <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-white/80 drop-shadow-sm">
        {label}
      </p>
      <h3 className={`font-serif leading-[1.05] text-white drop-shadow-md text-balance ${featured ? "text-4xl md:text-6xl" : "text-3xl"}`}>
        {title}
      </h3>
      <p className={`mt-4 max-w-md leading-relaxed text-white/88 drop-shadow-sm text-pretty ${featured ? "text-lg" : "text-sm"}`}>
        {desc}
      </p>
      <span className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/45 px-4 py-2 text-xs text-white/95 backdrop-blur-[2px] transition-colors duration-500 group-hover:bg-white group-hover:text-forest-deep">
        {explore}
        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
          className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </span>
    </div>
  </>
);

const WorkCard = ({
  title,
  desc,
  href,
  image,
  label,
  explore,
  featured = false,
  route = false,
}: {
  title: string;
  desc: string;
  href: string;
  image: string;
  label: string;
  explore: string;
  featured?: boolean;
  route?: boolean;
}) => {
  const baseClass = `group relative isolate flex overflow-hidden rounded-[2rem] shadow-organic border border-ivory/30 bg-earth/20 text-ivory ${
    featured ? "min-h-[470px] md:min-h-[620px]" : "min-h-[250px] md:min-h-[295px]"
  }`;

  const content = <WorkCardContent title={title} desc={desc} image={image} label={label} explore={explore} featured={featured} />;

  if (route) {
    return (
      <Link to={href} className={baseClass} aria-label={`${explore} ${title}`}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={baseClass} aria-label={`${explore} ${title}`}>
      {content}
    </a>
  );
};

export const WaysToWork = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = WORK_COPY[language];
  const localizedOfferings = copy.offerings.map((offering) =>
    offering.route ? { ...offering, href: localizePath(offering.href, language) } : offering
  );

  return (
    <section id="work" className="section bg-ivory-warm" aria-label={copy.aria}>
      <div className="container-soft">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">{copy.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 text-balance">
            {copy.title}
          </h2>

          <div className="space-y-4 text-lg md:text-xl text-foreground/75 leading-relaxed text-pretty">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_1.45fr] lg:gap-6">
          <Reveal>
            <WorkCard {...copy.featured} label={copy.cardLabel} explore={copy.explore} featured />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {localizedOfferings.map((offering, index) => (
              <Reveal key={offering.title} delay={(index + 1) * 90}>
                <WorkCard {...offering} label={copy.cardLabel} explore={copy.explore} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysToWork;
