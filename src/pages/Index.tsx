import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Essence } from "@/components/Essence";
import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { WaysToWork } from "@/components/WaysToWork";
import { TouchToSoul } from "@/components/TouchToSoul";
import { Sessions } from "@/components/Sessions";
import { Workshops } from "@/components/Workshops";
import { Retreats } from "@/components/Retreats";
import { Courses } from "@/components/Courses";
import { Testimonials } from "@/components/Testimonials";
import { FreeCall } from "@/components/FreeCall";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getLanguageFromPath, localizePath, stripLanguageFromPath } from "@/lib/language";

const SECTION_ALIASES: Record<string, string> = {
  "": "home",
  home: "home",
  essence: "essence",
  about: "about",
  approach: "approach",
  work: "work",
  "work-with-me": "work",
  "touch-to-soul": "touch-to-soul",
  sessions: "sessions",
  workshops: "workshops",
  retreats: "retreats",
  courses: "courses",
  "from-you": "from-you",
  "your-words": "from-you",
  "free-call": "free-call",
  "lets-talk": "free-call",
  contact: "contact",
};

const getSectionFromLocation = (pathname: string, hash: string) => {
  const hashSection = hash.replace("#", "");
  if (hashSection) return SECTION_ALIASES[hashSection] ?? hashSection;

  const pathSection = stripLanguageFromPath(pathname).replace(/^\//, "").replace(/\/$/, "");
  return SECTION_ALIASES[pathSection] ?? "home";
};

const getSectionUrl = (sectionId: "from-you" | "free-call", language: "en" | "it") => {
  return `${localizePath("/", language)}#${sectionId}`;
};

const Index = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);

  useEffect(() => {
    const sectionId = getSectionFromLocation(location.pathname, location.hash);
    if (!sectionId || sectionId === "home") return;

    const scrollToSection = () => {
      const target = document.getElementById(sectionId);
      if (!target) return;

      const headerOffset = 88;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(targetPosition, 0), behavior: "smooth" });
    };

    const scrollAttempts = [120, 350, 700, 1200].map((delay) =>
      window.setTimeout(scrollToSection, delay)
    );

    return () => {
      scrollAttempts.forEach((attempt) => window.clearTimeout(attempt));
    };
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const trackedSections = ["from-you", "free-call"] as const;
    const ratios = new Map<(typeof trackedSections)[number], number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id as (typeof trackedSections)[number], entry.intersectionRatio);
        });

        const bestSection = trackedSections.reduce((best, sectionId) => {
          const currentRatio = ratios.get(sectionId) ?? 0;
          const bestRatio = ratios.get(best) ?? 0;
          return currentRatio > bestRatio ? sectionId : best;
        }, trackedSections[0]);

        const bestRatio = ratios.get(bestSection) ?? 0;
        if (bestRatio < 0.45) return;

        const nextUrl = getSectionUrl(bestSection, language);
        const currentUrl = `${window.location.pathname}${window.location.hash}`;

        if (currentUrl !== nextUrl) {
          window.history.replaceState(null, "", nextUrl);
        }
      },
      { threshold: [0, 0.25, 0.45, 0.6, 0.75, 1] }
    );

    trackedSections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [language]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Essence />
        <About />
        <Approach />
        <WaysToWork />
        <TouchToSoul />
        <Sessions />
        <Workshops />
        <Retreats />
        <Courses />
        <Testimonials />
        <FreeCall />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
