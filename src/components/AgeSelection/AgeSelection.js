import React from 'react';
import QuizHeader from '../QuizHeader/QuizHeader';
import { useLanguage } from '../LocalizationComponent/LocolizationComponent';
import { useNavigate } from 'react-router-dom';
import LocalStorageService from '../../services/LocalStorageService/LocaleStorageService';
import { Question, QuestionContainer } from '../../styles/styles';
import {
  OptionItem,
} from '../LanguageSelection/styles';

const AgeSelection = ({ messages }) => {
  const { language } = useLanguage();
  const { ageQuestion, years, singleType } = messages[language];

  const navigate = useNavigate();
  const localeStorageService = new LocalStorageService();

  const navigateToNextPage = (selectedAgeRange) => {
    const ageData = {
      question: ageQuestion,
      type: singleType,
      options: selectedAgeRange,
    };
    localeStorageService.saveData('selectedAgeRange', ageData);

    navigate('/quiz/4');
  };

  return (
    <>
      <QuizHeader questionNumber={3} totalQuestions={5} showBackButton={true}/>
      <QuestionContainer>
        <Question>{ageQuestion}</Question>
        <div>
          <OptionItem onClick={() => navigateToNextPage('18-29')}>
            18-29 {years}
          </OptionItem>
          <OptionItem onClick={() => navigateToNextPage('30-39')}>
            30-39 {years}
          </OptionItem>
          <OptionItem onClick={() => navigateToNextPage('40-49')}>
            40-49 {years}
          </OptionItem>
          <OptionItem onClick={() => navigateToNextPage('50+')}>50+</OptionItem>
        </div>
      </QuestionContainer>
    </>
  );
};

export default AgeSelection;
