import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "My Approach", href: "#approach" },
  { label: "Work With Me", href: "#work" },
  { label: "Workshops", href: "#workshops" },
  { label: "Retreats", href: "#retreats" },
  { label: "Courses", href: "#courses" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerTone = scrolled ? "text-forest-deep" : "text-ivory";
  const heroBookLink =
    "font-serif italic text-xl md:text-2xl tracking-wide text-ivory/95 hover:text-ivory transition-colors duration-300";
  const menuButtonBase =
    "group inline-flex items-center justify-center p-2 -mr-2 transition-all duration-500";

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
          href="#home"
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
            <nav className="flex items-center gap-7" aria-label="Primary">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors duration-300 relative group text-forest-deep/80 hover:text-forest-deep"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-500 bg-forest" />
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center rounded-full px-5 py-2.5 text-sm transition-all duration-500 shadow-soft bg-forest text-ivory hover:bg-forest-deep"
              >
                Book a Session
              </a>
            </nav>
          ) : (
            <div className="flex items-center gap-5 text-ivory drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]">
              <a href="#contact" className={heroBookLink}>
                Book a Session
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

        <div className="lg:hidden flex items-center gap-4">
          <a
            href="#contact"
            className={
              scrolled
                ? `font-serif italic text-lg tracking-wide transition-colors duration-700 ${headerTone}`
                : heroBookLink
            }
          >
            Book a Session
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
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="absolute inset-0 bg-forest-deep/45 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-ivory shadow-organic flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-forest-deep/10">
            <Wordmark size="sm" variant="dark" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2 text-forest-deep"
            >
              <X size={24} strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1" aria-label="Menu navigation">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl py-3 text-forest-deep border-b border-forest-deep/10 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-forest text-ivory px-6 py-3.5 text-sm shadow-soft"
            >
              Book a Session
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
