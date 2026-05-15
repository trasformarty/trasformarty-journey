import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import martinaPortrait from "@/assets/martina-portrait.png";

const CALENDLY_URL = "https://calendly.com/martinaroscioli-discovery-call/30min";

const Events = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-forest px-6 pb-20 pt-36 text-ivory md:px-10 md:pb-28 md:pt-44">
          <div
            aria-hidden="true"
            className="absolute -right-24 top-28 h-80 w-80 rounded-full bg-gold-soft/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-sage/20 blur-3xl"
          />

          <div className="container-soft relative">
            <Reveal className="max-w-3xl">
              <p className="eyebrow mb-5 text-ivory/65">Events</p>
              <h1 className="font-serif text-5xl leading-[0.98] text-ivory text-balance md:text-7xl">
                Upcoming Events
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ivory/75 text-pretty md:text-xl">
                Spaces to meet, practice, listen and move together — online and in
                person, in the rhythm of what is alive.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory px-6 py-16 md:px-10 md:py-24" aria-label="Upcoming events list">
          <div className="container-soft">
            <Reveal>
              <article className="grid gap-8 overflow-hidden rounded-[2rem] border border-forest/15 bg-ivory-warm/70 p-6 shadow-card md:grid-cols-[0.8fr_1.2fr] md:p-8 lg:p-10">
                <div className="flex items-center justify-center">
                  <div className="relative h-52 w-52 overflow-hidden rounded-full border border-gold/45 bg-gold-soft/30 shadow-organic md:h-64 md:w-64">
                    <img
                      src={martinaPortrait}
                      alt="Martina Roscioli"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center text-center md:text-left">
                  <p className="eyebrow mb-4">Online · 30 minutes</p>
                  <h2 className="font-serif text-4xl leading-[1.05] text-forest-deep text-balance md:text-5xl">
                    Free Call
                  </h2>
                  <p className="mt-4 font-serif text-2xl leading-tight text-earth text-balance md:text-3xl">
                    What if you could dance through life?
                  </p>
                  <p className="mt-6 max-w-xl text-foreground/75 leading-relaxed text-pretty">
                    A free 30-minute online call to stay in contact, ask your
                    questions, and discover together how we can work.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit items-center justify-center gap-2 self-center rounded-full bg-forest px-7 py-3.5 text-sm text-ivory shadow-soft transition-colors duration-500 hover:bg-forest-deep md:self-start"
                  >
                    Let&rsquo;s Talk
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </article>
            </Reveal>

            <Reveal delay={120} className="mt-8">
              <div className="rounded-[2rem] border border-dashed border-forest/20 bg-ivory px-6 py-10 text-center md:px-10">
                <p className="eyebrow mb-4">More soon</p>
                <p className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-forest-deep text-balance md:text-4xl">
                  Workshops, online gatherings and special dates will appear here.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
