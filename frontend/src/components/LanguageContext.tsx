"use client";

import React, { createContext, useContext, useState } from "react";
import {
  DEFAULT_LOCALE,
  DICTIONARY,
  ENABLE_LANGUAGE_TOGGLE,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (next: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: DEFAULT_LOCALE,
  t: DICTIONARY[DEFAULT_LOCALE],
  setLocale: () => undefined,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const activeLocale = ENABLE_LANGUAGE_TOGGLE ? locale : DEFAULT_LOCALE;

  return (
    <LanguageContext.Provider
      value={{
        locale: activeLocale,
        t: DICTIONARY[activeLocale],
        setLocale: setLocaleState,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  if (!ENABLE_LANGUAGE_TOGGLE) return null;

  return (
    <div
      role="group"
      aria-label={t.nav.langLabel}
      className="inline-flex items-center rounded-[30px] border border-[#272626] bg-[#111111] p-0.5 font-mono text-[11px] tracking-[0.025em]"
    >
      <button
        type="button"
        onClick={() => setLocale("id")}
        aria-pressed={locale === "id"}
        className={`rounded-[30px] px-2.5 py-1 transition-colors cursor-pointer ${
          locale === "id"
            ? "bg-[#5c478a] text-[#ffffff] font-medium"
            : "text-[#918d8d] hover:text-[#ffffff]"
        }`}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`rounded-[30px] px-2.5 py-1 transition-colors cursor-pointer ${
          locale === "en"
            ? "bg-[#5c478a] text-[#ffffff] font-medium"
            : "text-[#918d8d] hover:text-[#ffffff]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
