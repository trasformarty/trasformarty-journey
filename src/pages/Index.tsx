import { useEffect } from "react";
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
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const target = document.getElementById(hash);
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const initialScroll = window.setTimeout(scrollToHash, 250);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(initialScroll);
      window.removeEventListener("hashchange", scrollToHash);
    };
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
