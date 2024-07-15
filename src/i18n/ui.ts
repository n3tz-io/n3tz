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
    'nav.blog': 'Blog',
    'action.contact': 'Contact us',
    'href.home': '/',
    tarik: 'Tarik',
  },
  fr: {
    'nav.languages': 'Langues',
    'nav.home': 'Accueil',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'action.contact': 'Contact',
    tarik: 'Tarik',
  },
  es: {
    'nav.languages': 'Idiomas',
    'nav.home': 'Inicio',
    'nav.contact': 'Contacto',
    'nav.blog': 'Blog',
    'action.contact': 'Contáctenos',
    tarik: 'Tarik',
  },
  de: {
    'nav.languages': 'Sprachen',
    'nav.home': 'Startseite',
    'nav.contact': 'Kontakt',
    'nav.blog': 'Blog',
    'action.contact': 'Kontakt',
    tarik: 'Tarik',
  },
} as const;

export const showDefaultLang = false;
