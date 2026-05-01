import { Instagram } from "lucide-react";
import { Wordmark } from "./Wordmark";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Work With Me", href: "#work" },
  { label: "Workshops", href: "#workshops" },
  { label: "Contact", href: "#contact" },
  { label: "Your Words", href: "#from-you" },
];

export const Footer = () => {
  return (
    <footer className="bg-forest-deep text-ivory/85 pt-20 pb-10 px-6 md:px-10" aria-label="Footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-6">
            <Wordmark size="md" className="text-ivory" />
            <p className="font-serif italic text-xl text-ivory/80 mt-5">
              Move, feel, transform.
            </p>
            <p className="mt-4 text-ivory/60 max-w-md text-sm leading-relaxed">
              A space for emotional, somatic and holistic transformation through
              touch, movement, presence and deep listening.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer navigation">
            <p className="text-xs uppercase tracking-[0.3em] text-ivory/50 mb-4">Navigate</p>
            <ul className="space-y-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory/80 hover:text-ivory transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-ivory/50 mb-4">Elsewhere</p>
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
          <p className="italic">Made with breath, body and presence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
