import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/locales/en.json";
import ru from "@/locales/ru.json";
import ua from "@/locales/ua.json";
import de from "@/locales/de.json";
import nl from "@/locales/nl.json";

export const supportedLngs = ["en", "ru", "ua", "de", "nl"] as const;
export type SupportedLng = (typeof supportedLngs)[number];

export const languageNames: Record<SupportedLng, string> = {
  en: "English",
  ru: "Русский",
  ua: "Українська",
  de: "Deutsch",
  nl: "Nederlands",
};

export const i18nReady = i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      ua: { translation: ua },
      uk: { translation: ua },
      de: { translation: de },
      nl: { translation: nl },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ru", "ua", "uk", "de", "nl"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  });

export default i18n;
