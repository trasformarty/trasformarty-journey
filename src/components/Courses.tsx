import { Reveal } from "./Reveal";

export const Courses = () => {
  return (
    <section id="courses" className="section bg-ivory-warm" aria-label="Courses and collaborations">
      <div className="container-soft max-w-4xl">
        <Reveal>
          <p className="eyebrow mb-5">Offering — Collaborations</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 text-balance">
            Courses &amp; Collaborations
          </h2>
          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed text-pretty">
            <p>
              You can also find me assisting and accompanying the trainings of{" "}
              <span className="text-forest-deep font-medium">Lisandro Maseret</span>,
              creator of <em>Deep Connection Massage</em> &mdash; a bodywork
              technique that weaves deep tissue, presence and conscious touch
              into a profound dialogue between giver and receiver.
            </p>
            <p>
              Assisting these trainings is an important part of my work:
              supporting, holding the space and accompanying participants so
              they can feel guided, safe and present in their own process.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <div className="leaf-card border-dashed">
            <p className="eyebrow mb-3">Trainings &amp; Dates</p>
            <p className="font-serif text-2xl text-forest-deep mb-3">
              Explore Lisandro&rsquo;s upcoming Deep Connection Massage trainings.
            </p>
            <p className="text-foreground/65 mb-6">
              Find the full schedule, locations and registration details on the
              official website.
            </p>
            <a
              href="https://www.deepconnectionmassage.com/alltrainings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-forest text-ivory px-7 py-3.5 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft"
            >
              View All Trainings
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Courses;
