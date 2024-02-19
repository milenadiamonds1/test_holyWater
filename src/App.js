import React from 'react';
import { LanguageProvider } from './components/LocalizationComponent/LocolizationComponent';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { messages } from './locales/messages';

import { AppBackground, AppContainer } from './styles/styles';

import LanguageSelection from './components/LanguageSelection/LanguageSelection';
import GenderSelection from './components/GenderSelection/GenderSelection';
import HateSelection from './components/HateSelection/HateSelection';
import AgeSelection from './components/AgeSelection/AgeSelection';
import Loader from './components/Loader/Loader';
import GenresSelection from './components/GenresSelection/GenresSelection';
import EmailPage from './components/EmailPage/EmailPage';
import GratitudePage from './components/GratitudePage/GratitudePage';

function App() {
  return (
    <LanguageProvider>
      <IntlProvider locale='en' messages={messages['en']}>
        <AppBackground>
          <AppContainer>
            <Router>
              <Routes>
                <Route
                  path='*'
                  element={<LanguageSelection messages={messages} />}
                />
                <Route
                  path='/quiz/2'
                  element={<GenderSelection messages={messages} />}
                />
                <Route
                  path='/quiz/3'
                  element={<AgeSelection messages={messages} />}
                />
                <Route
                  path='/quiz/4'
                  element={<HateSelection messages={messages} />}
                />
                <Route
                  path='/quiz/5'
                  element={<GenresSelection messages={messages} />}
                />
                <Route
                  path='/quiz/loader'
                  element={<Loader messages={messages} />}
                />
                <Route
                  path='/quiz/email'
                  element={<EmailPage messages={messages} />}
                />
                <Route
                  path='/quiz/thankyou'
                  element={<GratitudePage messages={messages} />}
                />
              </Routes>
            </Router>
          </AppContainer>
        </AppBackground>
      </IntlProvider>
    </LanguageProvider>
  );
}

export default App;
