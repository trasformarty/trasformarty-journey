import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { getLanguageFromPath, localizePath, toggleLanguagePath } from "@/lib/language";

const WHATSAPP_BOOKING_URL =
  "https://wa.me/34691738479?text=Hi%20Martina%2C%20I%20would%20like%20to%20book%20a%20session.%0AMy%20name%20is%3A%0AI%27m%20interested%20in%3A%0AMy%20availability%20is%3A";

const NAV_LABELS = {
  en: {
    home: "Home",
    about: "About",
    approach: "My Approach",
    events: "Events",
    words: "Your Words",
    contact: "Contact",
    work: "Work With Me",
    touch: "A Touch to Soul",
    moving: "Moving Through",
    workshops: "Workshops",
    retreats: "Retreats",
    courses: "Courses",
    book: "book a session",
    bookDesktop: "Book a Session",
  },
  it: {
    home: "Home",
    about: "Chi sono",
    approach: "Il mio approccio",
    events: "Eventi",
    words: "Le vostre parole",
    contact: "Contatti",
    work: "Work With Me",
    touch: "A Touch to Soul",
    moving: "Moving Through",
    workshops: "Workshop",
    retreats: "Ritiri",
    courses: "Corsi",
    book: "prenota una sessione",
    bookDesktop: "Prenota una sessione",
  },
};

const navLinkClass = "text-sm transition-colors duration-300 relative group text-forest-deep/80 hover:text-forest-deep";

const DesktopNavItem = ({ item }: { item: { label: string; href: string; route?: boolean } }) => {
  const content = (
    <>
      {item.label}
      <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-500 bg-forest" />
    </>
  );

  if (item.route) {
    return (
      <Link to={item.href} className={navLinkClass}>
        {content}
      </Link>
    );
  }

  return (
    <a href={item.href} className={navLinkClass}>
      {content}
    </a>
  );
};

const MobileNavItem = ({
  item,
  onClick,
}: {
  item: { label: string; href: string; route?: boolean };
  onClick: () => void;
}) => {
  const className = "font-serif text-2xl py-3 text-forest-deep border-b border-forest-deep/10 last:border-0";

  if (item.route) {
    return (
      <Link to={item.href} onClick={onClick} className={className}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.href} onClick={onClick} className={className}>
      {item.label}
    </a>
  );
};

export const Header = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const labels = NAV_LABELS[language];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  const NAV = useMemo(
    () => [
      { label: labels.home, href: `${localizePath("/", language)}#home` },
      { label: labels.about, href: `${localizePath("/", language)}#about` },
      { label: labels.approach, href: `${localizePath("/", language)}#approach` },
      { label: labels.events, href: localizePath("/events", language), route: true },
      { label: labels.words, href: `${localizePath("/", language)}#from-you` },
      { label: labels.contact, href: `${localizePath("/", language)}#contact` },
    ],
    [labels, language]
  );

  const WORK_LINKS = useMemo(
    () => [
      { label: labels.work, href: `${localizePath("/", language)}#work` },
      { label: labels.touch, href: `${localizePath("/", language)}#touch-to-soul` },
      { label: labels.moving, href: `${localizePath("/", language)}#sessions` },
      { label: labels.workshops, href: `${localizePath("/", language)}#workshops` },
      { label: labels.retreats, href: `${localizePath("/", language)}#retreats` },
      { label: labels.courses, href: `${localizePath("/", language)}#courses` },
    ],
    [labels, language]
  );

  const languageToggleHref = toggleLanguagePath(location.pathname, location.hash);
  const languageToggleLabel = language === "it" ? "EN" : "IT";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerTone = scrolled ? "text-forest-deep" : "text-ivory";
  const bookLinkBase =
    "text-[10px] md:text-[11px] lowercase tracking-[0.14em] font-normal transition-colors duration-500";
  const menuButtonBase =
    "group inline-flex items-center justify-center p-2 -mr-2 transition-all duration-500";
  const languageLinkClass = `text-[10px] md:text-[11px] tracking-[0.18em] transition-colors duration-500 ${headerTone} hover:opacity-80`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ivory/86 backdrop-blur-xl border-b border-forest-deep/10 shadow-soft"
          : "bg-gradient-to-b from-forest-deep/30 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 md:py-5">
        <a
          href={`${localizePath("/", language)}#home`}
          className={`${headerTone} transition-colors duration-700`}
          aria-label="TrasforMarti — back to top"
        >
          <Wordmark
            size="sm"
            variant={scrolled ? "dark" : "ivory"}
            className={!scrolled ? "drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]" : ""}
          />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {scrolled ? (
            <nav className="flex items-center gap-6" aria-label="Primary">
              {NAV.slice(0, 3).map((item) => (
                <DesktopNavItem key={item.href} item={item} />
              ))}

              <div className="relative group">
                <a
                  href={`${localizePath("/", language)}#work`}
                  className="text-sm transition-colors duration-300 relative text-forest-deep/80 hover:text-forest-deep inline-flex items-center gap-1.5"
                >
                  {labels.work}
                  <ChevronDown size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-500 bg-forest" />
                </a>
                <div className="absolute left-1/2 top-full z-20 min-w-[210px] -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-300">
                  <div className="rounded-[1.25rem] border border-forest/15 bg-ivory/95 p-3 shadow-organic backdrop-blur-xl">
                    {WORK_LINKS.map((item, index) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className={`block rounded-full px-4 py-2.5 text-sm hover:bg-sage/20 hover:text-forest-deep transition-colors duration-300 ${
                          index === 0
                            ? "uppercase tracking-[0.16em] text-xs text-forest-deep/55"
                            : "text-forest-deep/75"
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {NAV.slice(3).map((item) => (
                <DesktopNavItem key={item.href} item={item} />
              ))}
              <Link to={languageToggleHref} className="text-xs tracking-[0.18em] text-forest-deep/70 hover:text-forest-deep transition-colors duration-300">
                {languageToggleLabel}
              </Link>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center rounded-full px-5 py-2.5 text-sm transition-all duration-500 shadow-soft bg-forest text-ivory hover:bg-forest-deep"
              >
                {labels.bookDesktop}
              </a>
            </nav>
          ) : (
            <div className="flex items-center gap-3 text-ivory drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]">
              <Link to={languageToggleHref} className="text-[10px] md:text-[11px] tracking-[0.18em] text-ivory/90 hover:text-ivory transition-colors duration-500">
                {languageToggleLabel}
              </Link>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bookLinkBase} text-ivory/90 hover:text-ivory`}
              >
                {labels.book}
              </a>
              <button
                className={`${menuButtonBase} text-ivory hover:text-ivory/80 hover:scale-105`}
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
              >
                <Menu size={34} strokeWidth={1.2} className="transition-transform duration-500 group-hover:scale-110" />
              </button>
            </div>
          )}
        </div>

        <div className="lg:hidden flex items-center gap-2.5">
          <Link to={languageToggleHref} className={languageLinkClass}>
            {languageToggleLabel}
          </Link>
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bookLinkBase} ${headerTone} hover:opacity-80`}
          >
            {labels.book}
          </a>
          <button
            className={`${menuButtonBase} ${headerTone} hover:opacity-80 hover:scale-105`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={scrolled ? 31 : 34} strokeWidth={1.2} className="transition-transform duration-500 group-hover:scale-110" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[90] transition-all duration-500 ${
          open ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="absolute inset-0 bg-forest-deep/55 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[hsl(var(--ivory))] shadow-organic flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-forest-deep/10 bg-[hsl(var(--ivory))]">
            <Wordmark size="sm" variant="dark" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2 text-forest-deep"
            >
              <X size={24} strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1 bg-[hsl(var(--ivory))] flex-1 overflow-y-auto" aria-label="Menu navigation">
            {NAV.slice(0, 3).map((item) => (
              <MobileNavItem key={item.href} item={item} onClick={() => setOpen(false)} />
            ))}

            <div className="border-b border-forest-deep/10">
              <button
                type="button"
                onClick={() => setWorkOpen((current) => !current)}
                className="w-full font-serif text-2xl py-3 text-forest-deep flex items-center justify-between"
                aria-expanded={workOpen}
              >
                {labels.work}
                <ChevronDown
                  size={20}
                  strokeWidth={1.4}
                  className={`transition-transform duration-300 ${workOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${workOpen ? "max-h-96 pb-3" : "max-h-0"}`}>
                {WORK_LINKS.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block pl-4 py-2.5 ${
                      index === 0
                        ? "text-sm uppercase tracking-[0.18em] text-forest-deep/55"
                        : "font-serif text-xl text-forest-deep/80"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {NAV.slice(3).map((item) => (
              <MobileNavItem key={item.href} item={item} onClick={() => setOpen(false)} />
            ))}
            <Link
              to={languageToggleHref}
              onClick={() => setOpen(false)}
              className="mt-4 text-center text-xs tracking-[0.18em] text-forest-deep/60"
            >
              {languageToggleLabel}
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-forest text-ivory px-6 py-3.5 text-sm shadow-soft"
            >
              {labels.bookDesktop}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
