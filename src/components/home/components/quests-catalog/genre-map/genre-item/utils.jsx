import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { DEFAULT_GENRE, GENRE_QUEST } from 'const';

export const getGenreIcon = (genre) => {
  switch (genre) {
    case DEFAULT_GENRE.genre: return <IconAllQuests />;
    case GENRE_QUEST.adventures: return <IconAdventures />;
    case GENRE_QUEST.horror: return <IconHorrors />;
    case GENRE_QUEST.mystic: return <IconMystic />;
    case GENRE_QUEST.detective: return <IconDetective />;
    default: return <IconScifi />;
  }
}
