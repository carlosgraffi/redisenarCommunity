
export const defaultLocale = 'es-AR';
export const locales = ['es-AR', 'en'] as const;

export type Locale = typeof locales[number];

export function getTranslation(locale: Locale) {
  switch (locale) {
    case 'es-AR':
      return import('../locales/es-AR.json').then((module) => module.default);
    case 'en':
      return import('../locales/en.json').then((module) => module.default);
    default:
      return import('../locales/es-AR.json').then((module) => module.default);
  }
}
