import { Instagram } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getLanguageFromPath, localizePath } from "@/lib/language";
import { Wordmark } from "./Wordmark";

const FOOTER_COPY = {
  en: {
    aria: "Footer",
    tagline: "Move, feel, transform.",
    text: "A space for emotional, somatic and holistic transformation through touch, movement, presence and deep listening.",
    navTitle: "Navigate",
    elsewhere: "Elsewhere",
    made: "Made with breath, body and presence.",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Approach", href: "#approach" },
      { label: "Work With Me", href: "#work" },
      { label: "Workshops", href: "#workshops" },
      { label: "Contact", href: "#contact" },
      { label: "Your Words", href: "#from-you" },
    ],
  },
  it: {
    aria: "Footer",
    tagline: "Muovere, sentire, trasformare.",
    text: "Uno spazio per la trasformazione emozionale, somatica e olistica attraverso il tocco, il movimento, la presenza e l’ascolto profondo.",
    navTitle: "Naviga",
    elsewhere: "Altrove",
    made: "Creato con respiro, corpo e presenza.",
    links: [
      { label: "Home", href: "#home" },
      { label: "Chi sono", href: "#about" },
      { label: "Il mio approccio", href: "#approach" },
      { label: "Work With Me", href: "#work" },
      { label: "Workshop", href: "#workshops" },
      { label: "Contatti", href: "#contact" },
      { label: "Le vostre parole", href: "#from-you" },
    ],
  },
};

export const Footer = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = FOOTER_COPY[language];

  const getHref = (href: string) => `${localizePath("/", language)}${href}`;

  return (
    <footer className="bg-forest-deep text-ivory/85 pt-20 pb-10 px-6 md:px-10" aria-label={copy.aria}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-6">
            <Wordmark size="md" className="text-ivory" />
            <p className="font-serif italic text-xl text-ivory/80 mt-5">
              {copy.tagline}
            </p>
            <p className="mt-4 text-ivory/60 max-w-md text-sm leading-relaxed">
              {copy.text}
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer navigation">
            <p className="text-xs uppercase tracking-[0.3em] text-ivory/50 mb-4">{copy.navTitle}</p>
            <ul className="space-y-2">
              {copy.links.map((l) => (
                <li key={l.href}>
                  <a href={getHref(l.href)} className="text-ivory/80 hover:text-ivory transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-ivory/50 mb-4">{copy.elsewhere}</p>
            <a
              href="https://www.instagram.com/trasformarti_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ivory/80 hover:text-ivory transition-colors text-sm"
            >
              <Instagram size={16} strokeWidth={1.5} />
              @trasformarti_
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} TrasforMarti — Martina Roscioli.</p>
          <p className="italic">{copy.made}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
