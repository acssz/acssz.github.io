import * as React from "react";
import { getLocale, type Locale, type LocaleKey } from "../locales/index.ts";

interface LocaleContextValue {
  locale: Locale;
  localeKey: LocaleKey;
  setLocaleKey: (key: LocaleKey) => void;
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [localeKey, setLocaleKey] = React.useState<LocaleKey>("en");
  const locale = getLocale(localeKey);

  return (
    <LocaleContext.Provider value={{ locale, localeKey, setLocaleKey }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}