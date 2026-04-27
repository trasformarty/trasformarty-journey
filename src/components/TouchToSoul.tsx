import { Reveal } from "./Reveal";

export const TouchToSoul = () => {
  return (
    <section id="touch-to-soul" className="section bg-ivory" aria-label="A Touch to Soul">
      <div className="container-soft grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <Reveal className="md:col-span-6 order-2 md:order-1">
          <p className="eyebrow mb-5">Offering — Bodywork</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-4 text-balance">
            A Touch to Soul
          </h2>
          <p className="font-serif italic text-xl text-earth mb-8">A touch to the soul.</p>

          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed text-pretty">
            <p>
              A Touch to Soul is an experience of deep listening — a sensory
              journey that accompanies the body into a state of relaxation and
              presence, where mind, emotions and sensations can finally slow
              down and begin to speak with one another.
            </p>
            <p>
              It is a space where the mind grows quiet and a more honest
              listening of the self can emerge. A safe place where the body is
              free to express itself without being guided or forced, where
              emotions can flow and vital energy returns to move with ease.
            </p>

            <p className="font-serif italic text-xl text-forest-deep pt-2">
              My work is born from movement. <br />
              I am movement. I feel movement. I observe movement.
            </p>

            <p>
              What moves within us travels through body, heart and soul,
              creating harmony between what we feel and what we are ready to
              live. In this treatment, touch becomes a language — subtle,
              sensitive, born from listening and presence.
            </p>
            <p>
              Slow, deep movements alternate with gestures so light they are
              almost imperceptible, following the rhythm of the breath and the
              needs of the body in that precise moment. Each gesture rises
              from an inner movement and, in turn, moves something in the
              other.
            </p>
            <p>
              Touch opens space, shifts perception, and accompanies the
              nervous system toward greater safety, calm and integration.
              Sometimes it is a soft caress that makes the difference, other
              times a deeper pressure — what guides is always the listening.
            </p>

            <p>
              Through movement, I accompany what is asking to happen — in the
              body, in the emotions, in the sensations. The passage from one
              state to another: from control to release, from tension to
              fluidity.
            </p>

            <p className="font-serif italic text-xl text-forest-deep">
              A Touch to Soul is not only a massage. It is an encounter.
            </p>

            <p>
              An encounter with one's own felt sense, with one's own rhythm,
              with a quality of presence that daily life often forgets. What
              remains is a state of well-being that can last in time: a
              feeling of peace, of clarity, of openness. Sometimes a release,
              other times a deep silence. Always a small step on the path of
              reconnection with the self.
            </p>

            <p>
              My intention is to open a space where expression is welcome in
              all its forms — an emotion, a breath, a gesture of the body, an
              inner movement. Because it is in flowing, in feeling and in
              welcoming that we find harmony again.
            </p>

            <p className="font-serif italic text-xl text-earth">
              Movement and calm. Presence and depth. <br />
              A touch to the soul, to return to dancing life with more freedom.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-full bg-forest text-ivory px-7 py-3.5 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft"
          >
            Book a Session
          </a>
        </Reveal>

        <Reveal delay={150} className="md:col-span-6 order-1 md:order-2">
          {/* TREATMENT IMAGE PLACEHOLDER — Upload treatment image here */}
          <div className="relative md:sticky md:top-28">
            <div
              className="aspect-[5/6] w-full rounded-[3rem] overflow-hidden bg-gradient-to-br from-earth-soft/40 via-ivory-warm to-sage/40 shadow-organic flex items-center justify-center"
              role="img"
              aria-label="A Touch to Soul treatment image placeholder"
            >
              <span className="text-forest-deep/50 text-xs uppercase tracking-[0.3em] text-center px-6">
                Upload treatment image here
              </span>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-6 w-28 h-28 rounded-full bg-sage/50 blur-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TouchToSoul;
