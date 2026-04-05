import { en } from "./en.ts";
import { zh } from "./zh.ts";
import type { Locale } from "./types.ts";

export type LocaleKey = "en" | "zh";

export const locales: Record<LocaleKey, Locale> = { en, zh };

export function getLocale(key: LocaleKey): Locale {
  return locales[key];
}

export type { Locale };