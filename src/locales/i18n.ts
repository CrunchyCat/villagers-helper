import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en/translation.json'
// import de from './de/translation.json' //TODO: Add translations (1/2)
import { convertLanguageJsonToObject } from './translations'

export const translationsJson = {
  en: { translation: en }
  // de: { translation: de } //TODO: Add translations (2/2)
}

// Create the 'translations' object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(en)

export const i18n = i18next
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Detect user language: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // Init i18next (more options: https://www.i18next.com/overview/configuration-options)
  .init({
    resources: translationsJson,
    fallbackLng: 'en',
    //lng: 'en', // Default language
    debug:
      process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',

    interpolation: {
      escapeValue: false // Not needed for react as it escapes by default
    }
  })
