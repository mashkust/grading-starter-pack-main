import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import {useAppSelector, useAppDispatch} from 'hooks/hooks';
import {generatePath} from 'react-router-dom';
import {AppRoute, DEFAULT_GENRE, GENRE} from 'const';
import { useState, useEffect} from 'react';
import {setActiveGenre} from 'store/quest-process';

const QuestsCatalog = () => {
  const initialQuests = useAppSelector(({DATA}) => DATA.quests);
  const activeGenre = useAppSelector(({QUEST}) => QUEST.activeGenre);
  const filteredQuests = activeGenre === DEFAULT_GENRE ? initialQuests : initialQuests.filter((quest) => quest.type === activeGenre);
  const dispatch = useAppDispatch();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setGenres([DEFAULT_GENRE, ...new Set(initialQuests && initialQuests.map((quest) => quest.type))]);
  }, [initialQuests]);
  console.log(genres)
  return(
  <>
  <S.Tabs>
  {genres.map((genre) => (
        <S.TabItem>
          <S.TabBtn isActive = {genre === activeGenre ? 'isActive' : ''} onClick = {() => {
            dispatch(setActiveGenre(genre));
          }}>
            <IconAllQuests />
            <S.TabTitle>{genre !== DEFAULT_GENRE ? GENRE[genre] : DEFAULT_GENRE}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
  ))}
     </S.Tabs>
    <S.QuestsList>
    {filteredQuests && filteredQuests.slice().map((quest) => (
      <S.QuestItem>
        <S.QuestItemLink to={generatePath(AppRoute.Quest,{id: String(quest.id)})}>
          <S.Quest>
            <S.QuestImage
              src={quest.previewImg}
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
                  {quest.level}
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
