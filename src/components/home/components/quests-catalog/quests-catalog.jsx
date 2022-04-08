import * as S from './quests-catalog.styled';
import { useAppSelector } from 'hooks/hooks';
import { generatePath } from 'react-router-dom';
import { AppRoute, DEFAULT_GENRE} from 'const';
import { useState, useEffect } from 'react';
import  GenreMap from './genre-map/genre-map';
import  QuestMap from './quest-map/quest-map';

const QuestsCatalog = () => {
  const initialQuests = useAppSelector(({ DATA }) => DATA.quests);
  const activeGenre = useAppSelector(({ QUEST }) => QUEST.activeGenre);
  const filteredQuests = activeGenre.genre === DEFAULT_GENRE.genre ? initialQuests : initialQuests.filter((quest) => quest.type === activeGenre.genre);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const defaultGenres = [];
    if (initialQuests) {
      initialQuests.forEach(el => {
         const candidat = defaultGenres.find(elem => el.type === elem.genre );
         if (!candidat) {
          defaultGenres.push({ id: el.id, genre: el.type });
         }
      })
    }
    setGenres([DEFAULT_GENRE,...defaultGenres]);
  }, [initialQuests]);
  return (
    <>
      <GenreMap {...{ genres }} />
      <S.QuestsList>
        {filteredQuests && filteredQuests.map((quest) => (
          <S.QuestItem key={quest.id}>
            <S.QuestItemLink to={generatePath(AppRoute.Quest, { id: String(quest.id) })}>
              <QuestMap {...{ quest }}/>
            </S.QuestItemLink>
          </S.QuestItem>
        ))}
      </S.QuestsList>
    </>
  );
}

export default QuestsCatalog;
