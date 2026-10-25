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
      className="inline-flex items-center rounded-full border border-[#272626] bg-[#111111] p-0.5 text-[11px] font-semibold tracking-[0.04em]"
    >
      <button
        type="button"
        onClick={() => setLocale("id")}
        aria-pressed={locale === "id"}
        className={`press-scale rounded-full px-2.5 py-1 cursor-pointer ${
          locale === "id"
            ? "bg-[#5c478a] text-[#ffffff] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
            : "text-[#918d8d] hover:text-[#ffffff]"
        }`}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`press-scale rounded-full px-2.5 py-1 cursor-pointer ${
          locale === "en"
            ? "bg-[#5c478a] text-[#ffffff] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
            : "text-[#918d8d] hover:text-[#ffffff]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
