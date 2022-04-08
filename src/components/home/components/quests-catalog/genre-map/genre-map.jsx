import * as S from '../quests-catalog.styled';
import GenreItem from './genre-item/genre-item';
import { useAppSelector } from 'hooks/hooks';

const GenreMap = ({ genres }) => {
  const activeGenre = useAppSelector(({ QUEST }) => QUEST.activeGenre);
  return <S.Tabs>
    {genres.map((genreObj) => <GenreItem key={genreObj.id}  {...{ genreObj, activeGenre }} />)}
  </S.Tabs>
}

export default GenreMap;
