import { useEffect, useRef, useState } from "react";
import { LANG_OPTIONS, useI18n } from "../i18n/LanguageContext";

/**
 * Sélecteur de langue FR / EN / AR — deux variantes :
 * - "dropdown" : bouton + liste déroulante (header desktop)
 * - "pills"    : groupe de boutons segmentés (menu mobile, footer)
 */
export default function LangSwitcher({
  variant,
}: {
  variant: "dropdown" | "pills";
}) {
  const { lang, setLang, T } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  /* Fermeture du déroulant : clic à l'extérieur ou touche Échap */
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (variant === "pills") {
    return (
      <div className="flex items-center gap-2">
        <i
          className="fa-solid fa-globe shrink-0 text-[15px] text-ember"
          aria-hidden="true"
        />
        <div
          className="flex flex-1 items-center gap-1.5"
          role="group"
          aria-label={T.common.chooseLang}
        >
          {LANG_OPTIONS.map((l) => (
            <button
              key={l.code}
              type="button"
              aria-pressed={lang === l.code}
              onClick={() => setLang(l.code)}
              className={`flex-1 rounded-full px-3 py-2 text-[12.5px] font-semibold transition-all duration-200 ${
                lang === l.code
                  ? "bg-flame text-white shadow-sm shadow-flame/25"
                  : "border border-ember/15 text-ink/65 hover:border-flame/40 hover:bg-flame/5 hover:text-ember"
              }`}
            >
              {l.code}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={T.common.chooseLang}
        className="inline-flex items-center gap-2 rounded-full border border-ember/15 px-3.5 py-[9px] text-[12.5px] font-semibold text-ink/75 transition-all duration-300 hover:border-flame/40 hover:bg-flame/5 hover:text-flame"
      >
        <i
          className="fa-solid fa-globe text-[14px] text-ember"
          aria-hidden="true"
        />
        {lang}
        <i
          className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        role="listbox"
        aria-label={T.common.langsAvailable}
        className={`absolute end-0 top-full z-50 mt-2 w-44 rounded-2xl border border-ember/10 bg-white p-1.5 shadow-[0_24px_50px_-20px_rgba(205,76,0,0.35)] transition-all duration-200 ltr:origin-top-right rtl:origin-top-left ${
          open
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0"
        }`}
      >
        {LANG_OPTIONS.map((l) => (
          <button
            key={l.code}
            type="button"
            role="option"
            aria-selected={lang === l.code}
            onClick={() => {
              setLang(l.code);
              setOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-colors duration-200 ${
              lang === l.code
                ? "bg-flame/5 font-semibold text-ember"
                : "text-ink/70 hover:bg-flame/5 hover:text-ember"
            }`}
          >
            <span className="flex items-center gap-2.5">
              <span className="w-7 text-[11px] font-bold uppercase text-flame">
                {l.code}
              </span>
              {l.label}
            </span>
            {lang === l.code && (
              <i
                className="fa-solid fa-check text-[12px] text-flame"
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
