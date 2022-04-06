import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFoundPage from 'components/notfound-page';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from '../../const';

const App = () => <ThemeProvider theme={appTheme}>
  <S.GlobalStyle />
  <Router>
    <Switch>
      <Route path={AppRoute.Quest}>
        <DetailedQuest />
      </Route>
      <Route path={AppRoute.Contacts}>
        <Contacts />
      </Route>
      <Route exact path={AppRoute.Main}>
        <Home />
      </Route>
      <Route path="/*">
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
</ThemeProvider>;

export default App;
