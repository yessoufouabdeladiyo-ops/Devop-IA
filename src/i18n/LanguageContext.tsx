import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LANG_OPTIONS, translations, type Dict, type Lang } from "./translations";

const STORAGE_KEY = "abdelsobou-lang";

/** Langue persistée — le français reste la langue par défaut */
function getInitialLang(): Lang {
  if (typeof window === "undefined") return "FR";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return LANG_OPTIONS.some((l) => l.code === stored) ? (stored as Lang) : "FR";
}

export type Direction = "ltr" | "rtl";

type I18nValue = {
  lang: Lang;
  dir: Direction;
  setLang: (lang: Lang) => void;
  T: Dict;
};

const LanguageContext = createContext<I18nValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const dir: Direction = lang === "AR" ? "rtl" : "ltr";

  /* Persistance + attributs lang / dir du document (RTL complet pour l'arabe) */
  useLayoutEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang.toLowerCase();
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const value = useMemo<I18nValue>(
    () => ({ lang, dir, setLang, T: translations[lang] }),
    [lang, dir]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useI18n doit être utilisé à l'intérieur de <LanguageProvider>");
  return ctx;
}

export { LANG_OPTIONS, STORAGE_KEY };
