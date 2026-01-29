export type Locale = 'en' | 'ru';

const translations = {
  en: {
    nav: {
      about: 'About',
    },
    home: {
      greeting: "Hey, I'm Gulivan",
      tagline: 'Reflections on the journey.',
      postsHeading: 'Posts',
      noPosts: 'No posts yet. Check back soon!',
    },
    blog: {
      minRead: 'min read',
    },
    post: {
      tableOfContents: 'Table of Contents',
      previous: 'Previous',
      next: 'Next',
    },
    lang: {
      switchLabel: 'RU',
    },
  },
  ru: {
    nav: {
      about: 'Обо мне',
    },
    home: {
      greeting: 'Gulivan',
      tagline: 'Опыт и рефлексия о пройденном.',
      postsHeading: 'Посты',
      noPosts: 'Записей пока нет. Загляните позже!',
    },
    blog: {
      minRead: 'мин чтения',
    },
    post: {
      tableOfContents: 'Содержание',
      previous: 'Назад',
      next: 'Далее',
    },
    lang: {
      switchLabel: 'EN',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.en;
}

export function formatDate(date: Date, locale: Locale): string {
  const loc = locale === 'ru' ? 'ru-RU' : 'en-US';
  return new Date(date).toLocaleDateString(loc, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
