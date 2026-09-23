import Reveal from "./Reveal";
import { useI18n } from "../i18n/LanguageContext";

/**
 * Section « Ils m'ont fait confiance » — 2 cartes témoignages,
 * placée juste avant le CTA final (#contact).
 * Design aligné sur les autres cartes : border-ember/10, bg-white
 * (→ surface sombre via les tokens), accent flame #ff7c30.
 */
export default function Testimonials() {
  const { T } = useI18n();

  return (
    <section id="temoignages" className="relative overflow-hidden bg-white">
      {/* ------- Halo décoratif très léger ------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -start-24 top-1/3 h-[300px] w-[300px] rounded-full bg-flame/[0.06] blur-3xl" />
        <div className="absolute -end-24 bottom-10 h-[300px] w-[300px] rounded-full bg-ember/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        {/* ------- En-tête de section ------- */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-ember">
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
            {T.testimonials.eyebrow}
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.14] tracking-tight text-ember sm:text-4xl lg:text-[44px]">
            {T.testimonials.titleStart}{" "}
            <span className="relative inline-block text-flame">
              {T.testimonials.titleAccent}
              <svg
                className="absolute -bottom-2 start-0 h-3 w-full"
                viewBox="0 0 320 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8.5C88 3 220 2.5 317 8"
                  stroke="#cd4c00"
                  strokeOpacity="0.4"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </Reveal>

        {/* ------- Grille des témoignages ------- */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2 lg:gap-8">
          {T.testimonials.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 110} className="h-full">
              <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ember/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame/40 hover:shadow-[0_28px_55px_-26px_rgba(255,124,48,0.4)] sm:p-8">
                {/* ----- Liseré supérieur dégradé ----- */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-flame via-flame to-ember opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* ----- Guillemets stylisés (accent orange #ff7c30) ----- */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute end-5 top-3 select-none font-display text-[88px] font-bold leading-none text-flame/20 transition-colors duration-300 group-hover:text-flame/30 rtl:rotate-180"
                >
                  &ldquo;
                </span>

                {/* ----- Icône Font Awesome en haut de carte ----- */}
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-flame/10 text-flame transition-all duration-300 group-hover:bg-flame group-hover:text-white group-hover:shadow-md group-hover:shadow-flame/25">
                  <i className={`${item.icon} text-[19px]`} aria-hidden="true" />
                </span>

                {/* ----- Citation ----- */}
                <blockquote className="relative z-10 mt-5 flex-1 text-[14.5px] leading-relaxed text-bark sm:text-[15px]">
                  <span
                    className="me-1 font-display text-[17px] font-bold text-flame"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  {item.quote}
                  <span
                    className="ms-0.5 font-display text-[17px] font-bold text-flame"
                    aria-hidden="true"
                  >
                    &rdquo;
                  </span>
                </blockquote>

                {/* ----- Nom + activité ----- */}
                <figcaption className="relative z-10 mt-6 flex items-center gap-3.5 border-t border-ember/10 pt-5">
                  {/* Initiales dans un cercle accent */}
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-flame/10 font-display text-[14px] font-bold text-flame transition-all duration-300 group-hover:bg-flame group-hover:text-white group-hover:shadow-md group-hover:shadow-flame/25"
                  >
                    {item.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[14.5px] font-semibold leading-snug text-ink">
                      {item.name}
                    </span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-bark">
                      {item.role}
                    </span>
                  </span>
                  {/* Étoiles pleines */}
                  <span
                    className="ms-auto shrink-0 text-[12px] tracking-[0.15em] text-flame"
                    aria-label="5/5"
                  >
                    <i className="fa-solid fa-star" aria-hidden="true" />
                    <i className="fa-solid fa-star ms-1" aria-hidden="true" />
                    <i className="fa-solid fa-star ms-1" aria-hidden="true" />
                    <i className="fa-solid fa-star ms-1" aria-hidden="true" />
                    <i className="fa-solid fa-star ms-1" aria-hidden="true" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
