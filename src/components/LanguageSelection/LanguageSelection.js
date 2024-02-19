import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizHeader from '../QuizHeader/QuizHeader';
import { useLanguage } from '../LocalizationComponent/LocolizationComponent';
import LocalStorageService from '../../services/LocalStorageService/LocaleStorageService';
import { OptionItem } from './styles';
import { Question, QuestionContainer, Task } from '../../styles/styles';

const LanguageSelection = ({ messages }) => {
  const navigate = useNavigate();
  const { changeLanguage } = useLanguage();

  const localStorageService = new LocalStorageService();

  const handleLanguageSelect = (language) => {
    changeLanguage(language);

    const languageData = {
      question: 'What is your preffered language?',
      type: 'single-select',
      options: language,
    };
    localStorageService.saveData('selectedLanguage', languageData);

    navigate(`/quiz/2`);
  };

  return (
    <>
      <QuizHeader
        questionNumber={1}
        totalQuestions={5}
        showBackButton={false}
      />
      <QuestionContainer>
        <Question>What is your preferred language?</Question>
        <Task>Choose language</Task>
        <div>
          <OptionItem onClick={() => handleLanguageSelect('en')}>
            English
          </OptionItem>
          <OptionItem onClick={() => handleLanguageSelect('fr')}>
            French
          </OptionItem>
          <OptionItem onClick={() => handleLanguageSelect('de')}>
            German
          </OptionItem>
          <OptionItem onClick={() => handleLanguageSelect('es')}>
            Spanish
          </OptionItem>
        </div>
      </QuestionContainer>
    </>
  );
};

export default LanguageSelection;
