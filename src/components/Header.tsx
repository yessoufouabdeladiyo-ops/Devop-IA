import { useEffect, useState } from "react";
import LangSwitcher from "./LangSwitcher";
import { useI18n } from "../i18n/LanguageContext";
import { useTheme } from "../hooks/useTheme";

/* Liens externes & coordonnées — réutilisés dans tout le site */
export const CALENDLY_URL = "https://calendly.com/tonlien";
export const WHATSAPP_URL = "https://wa.me/22947749968";
export const EMAIL = "yessoufoua06@gmail.com";
export const GITHUB_URL = "https://github.com/yessoufoua06coder";
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61591739067018";

export default function Header() {
  const { T } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Ombre discrète une fois la page scrollée */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Bloque le scroll du body quand le menu mobile est ouvert */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-b border-ember/10 shadow-[0_12px_32px_-20px_rgba(205,76,0,0.35)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* ------- Logo ------- */}
        <a href="#accueil" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-flame font-display text-[17px] font-bold text-white shadow-sm shadow-flame/25 transition-transform duration-300 group-hover:scale-105">
            AS
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[16.5px] font-semibold tracking-tight text-ink">
              {T.common.brand}
            </span>
            <span className="block text-[9.5px] font-semibold uppercase tracking-[0.18em] text-ember">
              {T.common.role}
            </span>
          </span>
        </a>

        {/* ------- Navigation desktop ------- */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label={T.header.navMain}
        >
          {T.header.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 text-[13.5px] font-medium text-ink/70 transition-colors duration-200 hover:text-ember"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-[2px] w-0 rounded-full bg-flame transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* ------- Sélecteur de langue (desktop) ------- */}
          <div className="hidden lg:block">
            <LangSwitcher variant="dropdown" />
          </div>

          {/* ------- Bascule mode clair / sombre ------- */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={
              theme === "dark" ? T.common.themeLight : T.common.themeDark
            }
            title={theme === "dark" ? T.common.themeLight : T.common.themeDark}
            className="grid h-11 w-11 place-items-center rounded-xl border border-ember/15 text-ember transition-all duration-300 hover:border-flame/40 hover:bg-flame/5 hover:text-flame"
          >
            <i
              className={`fa-solid ${
                theme === "dark" ? "fa-sun" : "fa-moon"
              } text-[16px] transition-transform duration-500 ${
                theme === "dark" ? "rotate-[360deg]" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {/* ------- CTA appel (desktop / tablette) ------- */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2.5 rounded-full bg-flame px-5 py-[11px] text-[13.5px] font-semibold text-white shadow-md shadow-flame/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame-deep hover:shadow-lg hover:shadow-flame/30 sm:inline-flex"
          >
            <i
              className="fa-solid fa-calendar-check text-[16px]"
              aria-hidden="true"
            />
            {T.common.ctaCallShort}
          </a>

          {/* ------- Bouton menu mobile ------- */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? T.header.closeMenu : T.header.openMenu}
            className="grid h-11 w-11 place-items-center rounded-xl border border-ember/15 text-ember transition-all duration-300 hover:border-flame/40 hover:bg-flame/5 hover:text-flame lg:hidden"
          >
            <i
              className={`fa-solid ${
                menuOpen ? "fa-xmark" : "fa-bars"
              } text-[18px]`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* ------- Menu mobile déroulant ------- */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            className="space-y-1 border-t border-ember/10 bg-white px-5 pb-7 pt-3 sm:px-8"
            aria-label={T.header.navMobile}
          >
            {T.header.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium text-ink/80 transition-colors duration-200 hover:bg-flame/5 hover:text-ember"
              >
                {link.label}
                <i
                  className="fa-solid fa-arrow-right text-[16px] text-flame opacity-0 transition-all duration-300 ltr:group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
            ))}

            {/* Sélecteur de langue (mobile) */}
            <div className="px-4 pt-3">
              <LangSwitcher variant="pills" />
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2.5 rounded-full bg-flame px-5 py-3.5 text-[15px] font-semibold text-white shadow-md shadow-flame/25 transition-all duration-300 hover:bg-flame-deep"
            >
              <i
                className="fa-solid fa-calendar-check text-[16px]"
                aria-hidden="true"
              />
              {T.common.ctaCallShort}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
