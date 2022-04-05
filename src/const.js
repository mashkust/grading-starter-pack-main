export const NameSpace = {
  data: 'DATA',
  quest: 'QUEST'
}

export const AppRoute = {
  Main: '/',
  Quests:'/quests',
  Quest: '/detailed-quest/:id',
  Orders: '/orders'
}

export const APIRoute = {
  Quests: '/quests',
  Quest: '/quests/',
  Orders: '/orders'
}

export const GENRE = {
  'all': 'Все квесты',
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
}

export const GENRE_QUEST = {
  adventures: 'adventures',
  horror: 'horror',
  mystic: 'mystic',
  detective: 'detective',
  scifi: 'sci-fi',
}

export const LEVEL_QUEST = {
  'easy': 'простой',
  'medium': 'средний',
  'hard': 'сложный',
}

export const DEFAULT_GENRE = {
   id: 100,
   genre:  GENRE.all
  };
