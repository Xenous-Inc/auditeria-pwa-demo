import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { CookieKey, IS_DEV, cookies } from '../lib';

export const locales = ['en', 'ru'] as const;

export const changeLocale = (locale: (typeof locales)[number]) => {
    void i18next.changeLanguage(locale);
    cookies.set(CookieKey.LOCALE, locale, { path: '/' });
};

void i18next
    .use(initReactI18next)
    .use(HttpApi)
    .use(LanguageDetector)
    .init({
        detection: { order: ['cookie', 'navigator'] },
        supportedLngs: locales,
        fallbackLng: 'ru',
        ns: ['app'],
        defaultNS: 'app',
        interpolation: { escapeValue: false },
        debug: IS_DEV,
    });
