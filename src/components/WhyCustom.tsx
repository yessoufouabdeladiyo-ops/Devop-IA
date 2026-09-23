import Reveal from "./Reveal";
import { CALENDLY_URL } from "./Header";
import { useI18n } from "../i18n/LanguageContext";

export default function WhyCustom() {
  const { T } = useI18n();

  return (
    <section id="pourquoi-sur-mesure" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        {/* ------- En-tête de section ------- */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-ember">
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
            {T.whyCustom.eyebrow}
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.14] tracking-tight text-ember sm:text-4xl lg:text-[44px]">
            {T.whyCustom.titleStart}{" "}
            <span className="relative inline-block text-flame">
              {T.whyCustom.titleAccent}
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
            .
          </h2>
        </Reveal>

        {/* ------- Contraste visuel : Template vs Approche Abdel ------- */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* ----- Colonne A : Template classique (neutre) ----- */}
          <Reveal delay={120} className="h-full">
            <article className="h-full rounded-2xl border border-stone-200 bg-stone-50 p-7 transition-all duration-300 hover:shadow-md sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                {T.whyCustom.colA.eyebrow}
              </p>
              <div className="mt-4 flex items-center gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-stone-200/80 text-stone-500">
                  <i className="fa-solid fa-box-open text-[17px]" aria-hidden="true" />
                </span>
                <h3 className="font-display text-[19px] font-semibold text-stone-600">
                  {T.whyCustom.colA.title}
                </h3>
              </div>
              <ul className="mt-7 space-y-4">
                {T.whyCustom.colA.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14.5px] leading-relaxed text-stone-500"
                  >
                    <i
                      className="fa-solid fa-xmark mt-[3px] shrink-0 text-[16px] text-stone-400"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* ----- Colonne B : Approche Abdel (accent orange) ----- */}
          <Reveal delay={240} className="h-full">
            <article className="relative h-full rounded-2xl border border-flame/35 bg-white p-7 shadow-[0_20px_45px_-26px_rgba(255,124,48,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-26px_rgba(255,124,48,0.45)] sm:p-9">
              <span className="absolute -top-3.5 start-7 rounded-full bg-flame px-3.5 py-[7px] text-[10.5px] font-bold uppercase tracking-[0.14em] text-white shadow-md shadow-flame/30">
                {T.whyCustom.colB.badge}
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ember/70">
                {T.whyCustom.colB.eyebrow}
              </p>
              <div className="mt-4 flex items-center gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-flame/10 text-flame">
                  <i className="fa-solid fa-compass-drafting text-[17px]" aria-hidden="true" />
                </span>
                <h3 className="font-display text-[19px] font-semibold text-ember">
                  {T.whyCustom.colB.title}
                </h3>
              </div>
              <ul className="mt-7 space-y-4">
                {T.whyCustom.colB.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14.5px] font-medium leading-relaxed text-ink/85"
                  >
                    <i
                      className="fa-solid fa-circle-check mt-[3px] shrink-0 text-[16px] text-flame"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        {/* ------- Conclusion + rappel CTA ------- */}
        <Reveal delay={300} className="mt-16 text-center">
          <p className="font-display text-[19px] font-semibold text-ember sm:text-[21px]">
            {T.whyCustom.conclusion}
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center gap-2.5 text-[15px] font-semibold text-flame transition-colors duration-200 hover:text-flame-deep"
          >
            {T.whyCustom.cta}
            <i
              className="fa-solid fa-arrow-right text-[16px] transition-transform duration-300 ltr:group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
