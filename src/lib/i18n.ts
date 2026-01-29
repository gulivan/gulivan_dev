export type Locale = 'en' | 'ru';

const translations = {
  en: {
    nav: {
      blog: 'Blog',
      about: 'About',
    },
    home: {
      greeting: "Hey, I'm Gulivan",
      tagline: 'Welcome to my blog. I write about software engineering, tech, and things I find interesting.',
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
      blog: 'Блог',
      about: 'Обо мне',
    },
    home: {
      greeting: 'Gulivan',
      tagline: 'Опыт и рефлексия о пройденном.',
      postsHeading: 'Записи',
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
