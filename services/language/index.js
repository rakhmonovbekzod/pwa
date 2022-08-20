import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from 'react-i18next';
import uzbek from './uz.js'
import english from './eng.js'

i18n.use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: "uz",
        fallbackLng: "uz",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        resources: {
            uz: {
                translation: uzbek
            },
            eng: {
                translation: english
            }
        },
        react: {
            useSuspense: false,
            wait: true
        }
    })
export default i18n;