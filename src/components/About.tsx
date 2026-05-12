import { Reveal } from "./Reveal";
import martinaPortrait from "@/assets/martina-portrait.png";

export const About = () => {
  return (
    <section id="about" className="section bg-ivory" aria-label="About Martina Roscioli">
      <div className="container-soft grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-organic relative">
              <img
                src={martinaPortrait}
                alt="Portrait of Martina Roscioli"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
            I&rsquo;m Martina.
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-pretty">
            <p>
              My work was born from my own path of transformation — learning to
              listen to the body, to trust emotions as movement, and to discover
              touch as a language of presence, care and reconnection.
            </p>
            <p>
              Through massage and bodywork, I began to understand that the hands
              can listen beyond technique. Touch opened a door into the body&rsquo;s
              quiet intelligence, into what is held, protected, remembered and
              ready to soften.
            </p>
            <p>
              This experience led me to explore the nervous system and somatic
              therapy — not as abstract knowledge, but as living tools to support
              regulation, emotional integration and a more compassionate
              relationship with oneself.
            </p>
            <p>
              Over time, I have learned to give space to a sensitivity that has
              always been part of me — to the body, to subtle energy, and to the
              quieter layers of experience that are not always visible, but can
              be deeply felt.
            </p>
            <p>
              Today, this sensitivity can be expressed through touch, somatic
              listening and emotional accompaniment, becoming a way to meet others
              with presence, respect and care.
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
