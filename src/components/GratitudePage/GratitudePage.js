import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../LocalizationComponent/LocolizationComponent';
import {
  GratitudeTitle,
  RetakeButton,
  TransparentButton,
  TransparentButtonIcon,
  GratitudeBlockContainer,
  GratitudeText,
  GraritudeContainer,
} from './styles';
import LocalStorageService from '../../services/LocalStorageService/LocaleStorageService';
import { EmailContainer } from '../EmailPage/styles';

const GratitudePage = ({ answers, messages }) => {
  const navigate = useNavigate();
  const language = useLanguage();

  const localStorageService = new LocalStorageService();

  const { thankYou, forSupport, retake, downloadQuiz } =
    messages[language.language];

  const handleDownloadClick = () => {
    const dataKeys = [
      'selectedLanguage',
      'selectedAgeRange',
      'selectedGender',
      'selectedHateOptions',
      'selectedGenres',
      'email',
    ];

    const csvRows = dataKeys.map((key, index) => {
      const data = localStorageService.getData(key);
      const options = Array.isArray(data.options)
        ? data.options.join(',')
        : data.options;
      return `${index + 1},${data.question},${data.type},${options}`;
    });

    const csvContent = `order,title,type,answer\n${csvRows.join('\n')}`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'quiz_answers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRetakeClick = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <GraritudeContainer>
      <GratitudeBlockContainer>
        <GratitudeTitle>{thankYou}</GratitudeTitle>
        <GratitudeText>{forSupport}</GratitudeText>
        <img
          src={process.env.PUBLIC_URL + '/images/checkmark.png'}
          alt='checkmark'
        ></img>
      </GratitudeBlockContainer>
      <GratitudeBlockContainer>
        <TransparentButton onClick={handleDownloadClick}>
          <TransparentButtonIcon
            src={process.env.PUBLIC_URL + '/images/download.svg'}
            alt='download'
          ></TransparentButtonIcon>
          {downloadQuiz}
        </TransparentButton>
        <RetakeButton onClick={handleRetakeClick}>{retake}</RetakeButton>
      </GratitudeBlockContainer>
    </GraritudeContainer>
  );
};

export default GratitudePage;
