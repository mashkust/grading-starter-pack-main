import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from '../quests-catalog.styled';
import { LEVEL_QUEST } from 'const';

const QuestMap = ({ quest }) => (
  <S.Quest>
    <S.QuestImage
          src = {quest.previewImg ?? ''}
          width="344"
          height="232"
          alt={quest.title ?? ''}
        />
    <S.QuestContent>
      <S.QuestTitle>{quest.title ?? ''}</S.QuestTitle>
      <S.QuestFeatures>
        <S.QuestFeatureItem>
          <IconPerson /> {quest.peopleCount && (quest.peopleCount[0] + '-' + quest.peopleCount[1])}
        </S.QuestFeatureItem>
        <S.QuestFeatureItem>
          <IconPuzzle /> { quest.level ? LEVEL_QUEST[quest.level] : ''}
        </S.QuestFeatureItem>
      </S.QuestFeatures>
    </S.QuestContent>
  </S.Quest>
)

export default QuestMap;
