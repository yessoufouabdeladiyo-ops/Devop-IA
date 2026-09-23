import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const THEME_KEY = "abdelsobou-theme";

/** Thème persisté — respecte la préférence système à la première visite */
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  /* Applique la classe .dark sur <html> + persistance */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  /* Bascule avec une transition douce (View Transitions API si disponible) */
  const toggleTheme = useCallback(() => {
    const apply = () =>
      setTheme((t) => (t === "dark" ? "light" : "dark"));
    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };
    if (doc.startViewTransition) doc.startViewTransition(apply);
    else apply();
  }, []);

  return { theme, toggleTheme, THEME_KEY };
}

export { THEME_KEY };
