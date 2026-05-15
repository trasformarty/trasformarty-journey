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

  const pathSection = pathname.replace(/^\//, "").replace(/\/$/, "");
  return SECTION_ALIASES[pathSection] ?? "home";
};

const Index = () => {
  const location = useLocation();

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
    const freeCallSection = document.getElementById("free-call");
    if (!freeCallSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const freeCallUrl = "/free-call";
        if (window.location.pathname !== freeCallUrl) {
          window.history.replaceState(null, "", freeCallUrl);
        }
      },
      { threshold: 0.55 }
    );

    observer.observe(freeCallSection);

    return () => observer.disconnect();
  }, []);

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
