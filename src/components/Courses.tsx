import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getLanguageFromPath } from "@/lib/language";
import { Reveal } from "./Reveal";
import ImageLightbox from "./ImageLightbox";

const COURSE_IMAGES = [
  "/deep-connection-1.jpg",
  "/deep-connection-2.jpg",
  "/deep-connection-3.jpg",
  "/deep-connection-4.jpg",
];

const COURSES_COPY = {
  en: {
    aria: "Courses and collaborations",
    eyebrow: "Offering — Collaborations",
    title: "Courses & Collaborations",
    paragraphs: [
      <>I assist and accompany the trainings of <span className="text-forest-deep font-medium">Lisandro Maseret</span>, creator of <em>Deep Connection Massage</em> — a bodywork practice that goes far beyond technique and has been an important part of my own personal path and growth. Its philosophy and way of working feel deeply aligned with mine: a way of touching and being touched where depth, presence and listening become one language.</>,
      <>In these trainings, we create a space where participants can slow down, return to the body and discover touch as a living language — something to feel, listen to and offer with respect. A space where vulnerability is welcomed, emotions can move, and each person is invited to reconnect with their own rhythm, sensitivity and authenticity.</>,
      <>My role is to hold this space alongside Lisandro: to accompany each participant with care, to support their process on and off the table, and to help create the safety needed for something honest and transformative to unfold.</>,
    ],
    galleryAria: "Deep Connection Massage course gallery",
    imageAlt: "Deep Connection Massage training moment",
    lightboxAlt: "Deep Connection Massage training image preview",
    boxEyebrow: "Trainings & Dates",
    boxTitle: "Explore Lisandro’s upcoming Deep Connection Massage trainings.",
    boxText: "Find the full schedule, locations and registration details on the official website.",
    cta: "View All Trainings",
  },
  it: {
    aria: "Corsi e collaborazioni",
    eyebrow: "Offerta — Collaborazioni",
    title: "Corsi e collaborazioni",
    paragraphs: [
      <>Assisto e accompagno i training di <span className="text-forest-deep font-medium">Lisandro Maseret</span>, creatore di <em>Deep Connection Massage</em>: una pratica di bodywork che va molto oltre la tecnica e che ha avuto un ruolo importante nel mio percorso personale e nella mia crescita. La sua filosofia e il suo modo di lavorare sono profondamente in risonanza con il mio sentire: un modo di toccare ed essere toccati in cui profondità, presenza e ascolto diventano un unico linguaggio.</>,
      <>In questi training creiamo uno spazio in cui i partecipanti possono rallentare, ritornare al corpo e scoprire il tocco come un linguaggio vivo: qualcosa da sentire, ascoltare e offrire con rispetto. Uno spazio in cui la vulnerabilità è accolta, le emozioni possono muoversi e ogni persona è invitata a riconnettersi con il proprio ritmo, la propria sensibilità e autenticità.</>,
      <>Il mio ruolo è sostenere questo spazio accanto a Lisandro: accompagnare ogni partecipante con cura, supportare il suo processo dentro e fuori dal lettino, e contribuire a creare la sicurezza necessaria perché qualcosa di autentico e trasformativo possa accadere.</>,
    ],
    galleryAria: "Galleria del training Deep Connection Massage",
    imageAlt: "Momento del training Deep Connection Massage",
    lightboxAlt: "Anteprima immagine del training Deep Connection Massage",
    boxEyebrow: "Training e date",
    boxTitle: "Scopri i prossimi training di Deep Connection Massage con Lisandro.",
    boxText: "Trovi calendario completo, luoghi e dettagli per l’iscrizione sul sito ufficiale.",
    cta: "Vedi tutti i training",
  },
};

export const Courses = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const copy = COURSES_COPY[language];
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="courses" className="section bg-ivory-warm" aria-label={copy.aria}>
      <div className="container-soft max-w-4xl">
        <Reveal>
          <p className="eyebrow mb-5">{copy.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 text-balance">
            {copy.title}
          </h2>
          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed text-pretty">
            {copy.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" aria-label={copy.galleryAria}>
            {COURSE_IMAGES.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightbox(src)}
                className="aspect-square overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sage/45 via-ivory to-gold-soft/35 shadow-soft cursor-zoom-in text-left"
                aria-label={`${copy.imageAlt} ${index + 1}`}
              >
                <img
                  src={src}
                  alt={`${copy.imageAlt} ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <div className="leaf-card border-dashed">
            <p className="eyebrow mb-3">{copy.boxEyebrow}</p>
            <p className="font-serif text-2xl text-forest-deep mb-3">
              {copy.boxTitle}
            </p>
            <p className="text-foreground/65 mb-6">
              {copy.boxText}
            </p>
            <a
              href="https://www.deepconnectionmassage.com/alltrainings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-forest text-ivory px-7 py-3.5 text-sm hover:bg-forest-deep transition-colors duration-500 shadow-soft"
            >
              {copy.cta}
            </a>
          </div>
        </Reveal>
      </div>

      <ImageLightbox
        src={lightbox}
        alt={copy.lightboxAlt}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
};

export default Courses;
