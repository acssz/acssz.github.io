import { en } from "./en.ts";
import { zh } from "./zh.ts";
import { de } from "./de.ts";
import { fr } from "./fr.ts";
import type { Locale } from "./types.ts";

export type LocaleKey = "en" | "zh" | "de" | "fr" ;

export const locales: Record<LocaleKey, Locale> = { en, zh, de, fr  };

export function getLocale(key: LocaleKey): Locale {
  return locales[key];
}

export type { Locale };