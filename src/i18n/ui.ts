export const languages = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
};

export const locales = Object.keys(languages);

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.languages': 'Languages',
    'nav.home': 'Home',
    'nav.contact': 'Contact',
    'action.contact': 'Contact us',
    'href.home': '/',
  },
  fr: {
    'nav.languages': 'Langues',
    'nav.home': 'Accueil',
    'nav.contact': 'Contact',
    'action.contact': 'Contact',
  },
  es: {
    'nav.languages': 'Idiomas',
    'nav.home': 'Inicio',
    'nav.contact': 'Contacto',
    'action.contact': 'Contáctenos',
  },
  de: {
    'nav.languages': 'Sprachen',
    'nav.home': 'Startseite',
    'nav.contact': 'Kontakt',
    'action.contact': 'Kontakt',
  },
} as const;

export const showDefaultLang = false;
