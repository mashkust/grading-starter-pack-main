import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { AppRoute } from 'const';

const Header = () => {
  let isActive = true;
  return (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          <S.LinkItem>
            <S.Link to={AppRoute.Main} $isActiveLink = {document.location.pathname.includes(AppRoute.Contacts) ? !isActive : isActive}>
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.Beginner}>Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.Reviews}>Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.Stock}>Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.Contacts} $isActiveLink = {document.location.pathname.includes(AppRoute.Contacts) ? isActive : !isActive} >Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
  )
}

export default Header;
