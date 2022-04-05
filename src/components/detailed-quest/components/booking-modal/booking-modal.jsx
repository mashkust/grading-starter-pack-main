import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
// import {useNavigate, useParams} from 'react-router-dom';
import {useState} from 'react';
import {sendOrderAction} from 'store/api-actions'

const BookingModal = () => {
  // const params = useParams();
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isOrderSending = useAppSelector(({DATA}) => DATA.isDataSending);
  const [userName, setUserName] = useState('');
  const [userPeopleCount, setUserPeopleCount] = useState();
  const [userPhone, setUserPhone] = useState('');
  const [userLegal, setUserLegal] = useState(false);

  return(
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
      onSubmit={(evt)=> {
        evt.preventDefault();
        dispatch(sendOrderAction({
          name: userName,
          peopleCount: userPeopleCount,
          phone: userPhone,
          isLegal: userLegal
        }));
      }}
        action="#"
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            value={userName}
            onChange = {(evt) => setUserName(evt.currentTarget.value)}
            disabled = {isOrderSending}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон: 9990000000"
            value={userPhone}
            onChange = {(evt) => setUserPhone(evt.currentTarget.value)}
            disabled = {isOrderSending}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            value={userPeopleCount}
            onChange = {(evt) => setUserPeopleCount(Number(evt.currentTarget.value))}
            disabled = {isOrderSending}
            required
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            checked = {userLegal}
            onChange = {(evt) => setUserLegal(evt.target.checked)}
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
  );
}

export default BookingModal;
