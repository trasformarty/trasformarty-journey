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
  const isRetreatPage = location.pathname === "/retreats" || location.pathname === "/it/retreats";

  const getHref = (href: string) => `${localizePath("/", language)}${href}`;

  const footerClass = isRetreatPage
    ? "bg-[#756858] text-[#f3eee6]/88 pt-12 pb-7 px-6 md:px-10"
    : "bg-forest-deep text-ivory/85 pt-20 pb-10 px-6 md:px-10";

  const contentText = isRetreatPage ? "text-[#f3eee6]" : "text-ivory";
  const softText = isRetreatPage ? "text-[#f3eee6]/62" : "text-ivory/60";
  const navText = isRetreatPage ? "text-[#f3eee6]/78 hover:text-[#f3eee6]" : "text-ivory/80 hover:text-ivory";
  const eyebrowText = isRetreatPage ? "text-[#f3eee6]/48" : "text-ivory/50";
  const borderColor = isRetreatPage ? "border-[#f3eee6]/14" : "border-ivory/15";

  return (
    <footer className={footerClass} aria-label={copy.aria}>
      <div className="max-w-6xl mx-auto">
        <div className={`grid md:grid-cols-12 ${isRetreatPage ? "gap-7" : "gap-10"} items-start`}>
          <div className="md:col-span-6">
            <Wordmark size={isRetreatPage ? "sm" : "md"} className={contentText} />
            <p className={`font-serif italic ${isRetreatPage ? "text-lg mt-3" : "text-xl mt-5"} ${isRetreatPage ? "text-[#f3eee6]/80" : "text-ivory/80"}`}>
              {copy.tagline}
            </p>
            <p className={`${isRetreatPage ? "mt-3 max-w-sm text-xs" : "mt-4 max-w-md text-sm"} ${softText} leading-relaxed`}>
              {copy.text}
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer navigation">
            <p className={`text-xs uppercase tracking-[0.3em] ${eyebrowText} ${isRetreatPage ? "mb-3" : "mb-4"}`}>{copy.navTitle}</p>
            <ul className={isRetreatPage ? "space-y-1.5" : "space-y-2"}>
              {copy.links.map((l) => (
                <li key={l.href}>
                  <a href={getHref(l.href)} className={`${navText} transition-colors ${isRetreatPage ? "text-xs" : "text-sm"}`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className={`text-xs uppercase tracking-[0.3em] ${eyebrowText} ${isRetreatPage ? "mb-3" : "mb-4"}`}>{copy.elsewhere}</p>
            <a
              href="https://www.instagram.com/trasformarti_"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${navText} transition-colors ${isRetreatPage ? "text-xs" : "text-sm"}`}
            >
              <Instagram size={isRetreatPage ? 14 : 16} strokeWidth={1.5} />
              @trasformarti_
            </a>
          </div>
        </div>

        <div className={`${isRetreatPage ? "mt-9 pt-5" : "mt-16 pt-8"} border-t ${borderColor} flex flex-col sm:flex-row gap-3 items-center justify-between text-xs ${eyebrowText}`}>
          <p>© {new Date().getFullYear()} TrasforMarti — Martina Roscioli.</p>
          <p className="italic">{copy.made}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
