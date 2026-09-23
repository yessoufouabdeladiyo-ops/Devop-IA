import { useState } from "react";
import Reveal from "./Reveal";
import { CALENDLY_URL } from "./Header";
import { useI18n } from "../i18n/LanguageContext";

export default function Faq() {
  const { T } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        {/* ------- En-tête de section ------- */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-ember">
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
            {T.faq.eyebrow}
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.14] tracking-tight text-ember sm:text-4xl lg:text-[44px]">
            {T.faq.titleStart}{" "}
            <span className="relative inline-block text-flame">
              {T.faq.titleAccent}
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

        {/* ------- Accordéon (une seule réponse ouverte à la fois) ------- */}
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {T.faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 80}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    open
                      ? "border-flame/40 shadow-[0_24px_50px_-28px_rgba(255,124,48,0.45)]"
                      : "border-ember/10 hover:border-flame/30"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className="group flex w-full items-center gap-4 px-5 py-5 text-start sm:px-7"
                    >
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all duration-300 ${
                          open
                            ? "bg-flame text-white shadow-md shadow-flame/25"
                            : "bg-flame/10 text-flame group-hover:bg-flame group-hover:text-white"
                        }`}
                      >
                        <i
                          className={`${item.icon} text-[17px]`}
                          aria-hidden="true"
                        />
                      </span>
                      <span
                        className={`flex-1 font-display text-[15.5px] font-semibold leading-snug transition-colors duration-200 sm:text-[17px] ${
                          open ? "text-ember" : "text-ink group-hover:text-ember"
                        }`}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          open
                            ? "rotate-180 border-flame/40 bg-flame/10 text-flame"
                            : "border-ember/15 text-ember group-hover:border-flame/40 group-hover:text-flame"
                        }`}
                        aria-hidden="true"
                      >
                        <i className="fa-solid fa-chevron-down text-[12px]" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-ember/10 px-5 py-5 text-[14px] leading-relaxed text-bark sm:px-7 sm:ps-[88px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ------- Renvoi vers l'appel découverte ------- */}
        <Reveal delay={240} className="mt-12 text-center">
          <p className="text-[14.5px] text-bark">{T.faq.note}</p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 inline-flex items-center gap-2.5 text-[15px] font-semibold text-flame transition-colors duration-200 hover:text-flame-deep"
          >
            {T.faq.cta}
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
