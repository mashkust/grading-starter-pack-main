import React from 'react';
import { useAppDispatch } from 'hooks/hooks';
import * as S from './../quests-catalog.styled';
import { DEFAULT_GENRE, GENRE } from 'const';
import { setActiveGenre } from 'store/quest-process';
import {getGenreIcon} from './utils';

const GenreItem = ({genreObj, activeGenre}) => {
  const { id, genre } = genreObj;
  const dispatch = useAppDispatch();
  return <S.TabItem key={id}>
    <S.TabBtn isActive={genre === activeGenre.genre ? 'isActive' : ''} onClick={() => {
      dispatch(setActiveGenre(genreObj));
    }}>
      {getGenreIcon(genre)}
      <S.TabTitle>{genre !== DEFAULT_GENRE.genre ? GENRE[genre] : DEFAULT_GENRE.genre}</S.TabTitle>
    </S.TabBtn>
  </S.TabItem>
}

export default GenreItem;
