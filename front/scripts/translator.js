// script.js
import translations from './translations.js';

document.addEventListener("DOMContentLoaded", () => {
    // Detect the browser language
    const browserLanguage = navigator.language || navigator.userLanguage;
    const language = browserLanguage.split('-')[0]; // Use language code, e.g., 'en'

    // Get the translations for the detected language, or fall back to English
    const langTranslations = translations[language] || translations['en'];

    // Select all elements with the data-i18n attribute
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    // Iterate over each element and set its text content based on the translation key
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-i18n');
        if (langTranslations[translationKey]) {
            element.textContent = langTranslations[translationKey];
        }
    });
});