import React, { useState, useEffect } from 'react';
import QuizHeader from '../QuizHeader/QuizHeader';
import { useLanguage } from '../LocalizationComponent/LocolizationComponent';
import { useNavigate } from 'react-router-dom';
import {
  Question,
  QuestionContainer,
} from '../../styles/styles';
import LocalStorageService from '../../services/LocalStorageService/LocaleStorageService';
import { Checkbox, HateInBookItem, NextButton } from './styles';

const HateSelection = ({ messages }) => {
  const { language } = useLanguage();
  const { hateQuestion, logic, speed, humor, ending, multiType } =
    messages[language];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isButtonActive, setButtonActive] = useState(false);

  const navigate = useNavigate();
  const localeStorageService = new LocalStorageService();

  useEffect(() => {
    setButtonActive(selectedOptions.length > 0);
    const hateData = {
      question: hateQuestion,
      type: multiType,
      options: selectedOptions,
    };

    localeStorageService.saveData('selectedHateOptions', hateData);
  }, [selectedOptions]);

  const toggleOption = (option) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((item) => item !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  const handleNextClick = () => {
    navigate('/quiz/5');
  };

  const handleItemClick = (option) => {
    toggleOption(option);
  };

  const questionParts = hateQuestion.split(' ');
  const questionWithHighlightedWord = questionParts.map((word, index) => {
    if (index === 3) {
      return <span style={{ color: '#e4229c' }}>{word + ' '}</span>;
    } else {
      return word + ' ';
    }
  });

  return (
    <>
      <QuizHeader questionNumber={4} totalQuestions={5} showBackButton={true} />
      <QuestionContainer>
        <Question>{questionWithHighlightedWord}</Question>
        <div>
          <HateInBookItem onClick={() => handleItemClick(logic)}>
            <label htmlFor='logic'>{logic}</label>
            <Checkbox
              type='checkbox'
              id='logic'
              checked={selectedOptions.includes(logic)}
              onChange={() => toggleOption(logic)}
            />
          </HateInBookItem>
          <HateInBookItem onClick={() => handleItemClick(speed)}>
            <label htmlFor='speed'>{speed}</label>
            <Checkbox
              type='checkbox'
              id='speed'
              checked={selectedOptions.includes(speed)}
              onChange={() => toggleOption(speed)}
            />
          </HateInBookItem>
          <HateInBookItem onClick={() => handleItemClick(humor)}>
            <label htmlFor='humor'>{humor}</label>
            <Checkbox
              type='checkbox'
              id='humor'
              checked={selectedOptions.includes(humor)}
              onChange={() => toggleOption(humor)}
            />
          </HateInBookItem>
          <HateInBookItem onClick={() => handleItemClick(ending)}>
            <label htmlFor='ending'>{ending}</label>
            <Checkbox
              type='checkbox'
              id='ending'
              checked={selectedOptions.includes(ending)}
              onChange={() => toggleOption(ending)}
            />
          </HateInBookItem>
        </div>
        <NextButton onClick={() => handleNextClick()} active={isButtonActive} disabled={!isButtonActive}>
          Next
        </NextButton>
      </QuestionContainer>
    </>
  );
};

export default HateSelection;
