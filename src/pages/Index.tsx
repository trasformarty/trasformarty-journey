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
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
