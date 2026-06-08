import { en } from "./en.ts";
import { zh } from "./zh.ts";
import { de } from "./de.ts";
import type { Locale } from "./types.ts";

export type LocaleKey = "en" | "zh" | "de";

export const locales: Record<LocaleKey, Locale> = { en, zh, de };

export function getLocale(key: LocaleKey): Locale {
  return locales[key];
}

export type { Locale };