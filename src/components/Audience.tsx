import Reveal from "./Reveal";
import { CALENDLY_URL } from "./Header";
import { useI18n } from "../i18n/LanguageContext";

export default function Audience() {
  const { T } = useI18n();

  return (
    <section id="pour-qui" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        {/* ------- En-tête de section ------- */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-ember">
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
            {T.audience.eyebrow}
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.14] tracking-tight text-ember sm:text-4xl lg:text-[44px]">
            {T.audience.titleStart}{" "}
            <span className="relative inline-block text-flame">
              {T.audience.titleAccent}
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
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-bark sm:text-base">
            {T.audience.intro}{" "}
            <span className="font-semibold text-ink">
              {T.audience.introBold}
            </span>
          </p>
        </Reveal>

        {/* ------- Grille des profils : 3 cartes puis 2 cartes ------- */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          {T.audience.profiles.map((profile, i) => (
            <Reveal
              key={profile.title}
              delay={i * 90}
              className={`h-full ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <article className="group flex h-full flex-col rounded-2xl border border-ember/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame/40 hover:shadow-[0_28px_55px_-26px_rgba(255,124,48,0.4)] sm:p-8">
                {/* ----- Icône + titre ----- */}
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-flame/10 text-flame transition-all duration-300 group-hover:bg-flame group-hover:text-white group-hover:shadow-md group-hover:shadow-flame/25">
                    <i
                      className={`${profile.icon} text-[19px]`}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="font-display text-[18px] font-semibold leading-snug text-ember">
                    {profile.title}
                  </h3>
                </div>

                {/* ----- Phrase de reconnaissance ----- */}
                <p className="mt-5 border-s-2 border-flame/30 ps-4 text-[14px] italic leading-relaxed text-bark">
                  {profile.recognition}
                </p>

                {/* ----- Bénéfice ----- */}
                <p className="mt-4 flex items-start gap-2.5 text-[13.5px] font-medium leading-relaxed text-ink/85">
                  <i
                    className="fa-solid fa-circle-check mt-[3px] shrink-0 text-[15px] text-flame"
                    aria-hidden="true"
                  />
                  {profile.benefit}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ------- Rappel CTA ------- */}
        <Reveal delay={300} className="mt-16 text-center">
          <p className="font-display text-[19px] font-semibold text-ember sm:text-[21px]">
            {T.audience.noteTitle}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-[14px] leading-relaxed text-bark">
            {T.audience.noteText}
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2.5 text-[15px] font-semibold text-flame transition-colors duration-200 hover:text-flame-deep"
          >
            {T.audience.noteCta}
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
