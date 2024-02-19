import React from 'react';
import { useLanguage } from '../LocalizationComponent/LocolizationComponent';
import QuizHeader from '../QuizHeader/QuizHeader';
import { useNavigate } from 'react-router-dom';
import LocalStorageService from '../../services/LocalStorageService/LocaleStorageService';
import { Question, QuestionContainer, Task } from '../../styles/styles';
import { GendersList, GenderOption, GenderEmoji, GenderLabel } from './styles';

const GenderSelection = ({ messages }) => {
  const { language } = useLanguage();
  const { genderQuestion, genderTask, female, male, other, singleImageType } =
    messages[language];

  const navigate = useNavigate();
  const localeStorageService = new LocalStorageService();

  const navigateToNextQuestion = () => {
    navigate(`/quiz/3`);
  };

  const saveSelectedGender = (selectedGender) => {
    const genderData = {
      question: genderQuestion,
      type: singleImageType,
      options: selectedGender,
    };

    localeStorageService.saveData('selectedGender', genderData);

    navigateToNextQuestion();
  };
  return (
    <>
      <QuizHeader questionNumber={2} totalQuestions={5} showBackButton={true} />
      <QuestionContainer>
        <Question>{genderQuestion}</Question>
        <Task>{genderTask}</Task>
        <GendersList>
          <GenderOption onClick={() => saveSelectedGender('female')}>
            <GenderEmoji role='img' aria-label='female'>
              👩🏼
            </GenderEmoji>
            <GenderLabel>{female}</GenderLabel>
          </GenderOption>
          <GenderOption onClick={() => saveSelectedGender('male')}>
            <GenderEmoji role='img' aria-label='male'>
              👨🏼
            </GenderEmoji>
            <GenderLabel>{male}</GenderLabel>
          </GenderOption>
          <GenderOption onClick={() => saveSelectedGender('other')}>
            <GenderEmoji role='img' aria-label='other'>
              🤗
            </GenderEmoji>
            <GenderLabel>{other}</GenderLabel>
          </GenderOption>
        </GendersList>
      </QuestionContainer>
    </>
  );
};

export default GenderSelection;
