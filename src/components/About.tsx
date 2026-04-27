import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section id="about" className="section bg-ivory" aria-label="About Martina Roscioli">
      <div className="container-soft grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <Reveal className="md:col-span-5">
          <div className="relative">
            {/* PORTRAIT PLACEHOLDER — Upload Martina portrait here as /public/martina.jpg */}
            <div
              className="aspect-[4/5] w-full rounded-[3rem] overflow-hidden bg-gradient-to-br from-sage/60 via-ivory-warm to-earth-soft/40 shadow-organic relative"
              role="img"
              aria-label="Portrait placeholder of Martina Roscioli"
            >
              <div className="absolute inset-0 flex items-center justify-center text-forest-deep/50 text-xs uppercase tracking-[0.3em] text-center px-6">
                Upload Martina portrait here
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gold/40 blur-2xl"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -top-6 -left-6 w-20 h-20 rounded-full border border-sage/70"
            />
          </div>
        </Reveal>

        <Reveal delay={150} className="md:col-span-7">
          <p className="eyebrow mb-5">Who I Am</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 text-balance">
            I&rsquo;m Martina Roscioli.
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-pretty">
            <p>
              My work was born from my own path of transformation — from learning
              to listen to the body, to trust emotions as movement, and to discover
              touch as a language of presence, care and reconnection.
            </p>
            <p>
              I accompany people through processes of transformation, creating
              spaces where the body can speak, emotions can move, and the person
              can return to a deeper sense of presence and freedom.
            </p>
            <p>
              Each session is a meeting: between body and emotion, between what
              asks to be held and what is ready to move, between the person you
              have been and the life that is calling you forward.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
