import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useAppSelector, useAppDispatch } from 'hooks/hooks';
import { generatePath } from 'react-router-dom';
import { AppRoute, DEFAULT_GENRE, LEVEL_QUEST } from 'const';
import { useState, useEffect } from 'react';
import GenreItem from './genre-item/genre-item';

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
      <S.Tabs>
        {genres.map((genreObj) => <GenreItem key = {genreObj.id}  {...{ genreObj, activeGenre }} />)}
      </S.Tabs>
      <S.QuestsList>
        {filteredQuests && filteredQuests.slice().map((quest) => (
          <S.QuestItem key={quest.id}>
            <S.QuestItemLink to={generatePath(AppRoute.Quest, { id: String(quest.id) })}>
              <S.Quest>
                <S.QuestImage
                  src = {quest.previewImg}
                  width="344"
                  height="232"
                  alt={quest.title}
                />
                <S.QuestContent>
                  <S.QuestTitle>{quest.title}</S.QuestTitle>
                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {quest.peopleCount[0]}-{quest.peopleCount[1]}
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      { LEVEL_QUEST[quest.level]}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        ))}
      </S.QuestsList>
    </>
  );
}

export default QuestsCatalog;
