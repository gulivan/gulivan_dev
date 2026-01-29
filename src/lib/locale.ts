import type { Locale } from './i18n';

export function getLocaleFromPostId(id: string): Locale {
  return id.endsWith('.ru') ? 'ru' : 'en';
}

export function getBaseSlug(id: string): string {
  return id.replace(/\.ru$/, '');
}

export function localizedPath(path: string, locale: Locale): string {
  if (locale === 'ru') {
    return `/ru${path}`;
  }
  return path;
}

export function getAlternateUrl(currentPath: string, currentLocale: Locale): string {
  if (currentLocale === 'ru') {
    return currentPath.replace(/^\/ru/, '') || '/';
  }
  return `/ru${currentPath}`;
}
