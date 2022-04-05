import { useState,useEffect } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { useParams } from 'react-router-dom';
import { fetchQuestAction } from 'store/api-actions';
import { GENRE , LEVEL_QUEST } from 'const';
import maniac from 'img/cover-maniac.jpg';
import mars from 'img/cover-mars-2056.jpg';
import fatal from 'img/cover-fatal-exp.jpg';
import final from 'img/cover-final-frontier.jpg';
import qhost from 'img/cover-ghost-story.jpg';
import woods from 'img/cover-house-in-the-woods.jpg';
import metro from 'img/cover-metro2033.jpg';
import sclep from 'img/cover-sklep.jpg';
import ritual from 'img/cover-ritual.jpg';
import ceil from 'img/cover-old-ceil.jpg';
import house from 'img/cover-old-house.jpg';

const COVER_IMG = [maniac, fatal, final, mars, qhost, woods, metro, sclep, ritual, ceil, house];
let coverImg

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const dispatch = useAppDispatch();
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    if (id) {
      dispatch(fetchQuestAction(id));
    }
  }, [dispatch, id]);

  const quest = useAppSelector(({DATA}) => DATA.quest);
  coverImg = quest.coverImg;

  if ( coverImg) {
    COVER_IMG.slice().map((cover)=>  cover.includes(coverImg.substr(4).substring(0, coverImg.substr(4).length - 4)) ? coverImg= cover: '')
  }
  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
              src={coverImg}
              width="1366"
              height="768"
              alt={quest.title}
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{GENRE[quest.type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{quest.duration}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle></S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{ LEVEL_QUEST[quest.level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
            {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
