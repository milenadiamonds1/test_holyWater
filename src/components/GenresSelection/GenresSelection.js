import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LocalizationComponent/LocolizationComponent';
import QuizHeader from '../QuizHeader/QuizHeader';
import { Question, QuestionContainer, Task } from '../../styles/styles';
import { TopicsGrid } from './styles';
import { GridItem } from './styles';
import { GenreOption } from './styles';
import { NextButton } from '../HateSelection/styles';
import LocalStorageService from '../../services/LocalStorageService/LocaleStorageService';

const GenresSelection = ({ messages }) => {
  const language = useLanguage();
  const navigate = useNavigate();
  const localeStorageService = new LocalStorageService();

  const {
    topicsQuestion,
    topicsTask,
    werewolf,
    vampire,
    romance,
    billionare,
    youngAdult,
    badBoy,
    psychology,
    loveHate,
    multiType,
    mystery,
    historical,
    science,
    biography,
    adventure,
    royal,
  } = messages[language.language];
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [isButtonActive, setButtonActive] = useState(false);

  const ageGroupsGenres = {
    '18-29': [
      { name: werewolf, icon: '🐺' },
      { name: vampire, icon: '🧛' },
      { name: romance, icon: '💕' },
      { name: youngAdult, icon: '📚' },
      { name: mystery, icon: '🔍' },
      { name: badBoy, icon: '🔥' },
    ],
    '30-39': [
      { name: billionare, icon: '💰' },
      { name: psychology, icon: '🧠' },
      { name: youngAdult, icon: '📚' },
      { name: royal, icon: '👑' },
      { name: adventure, icon: '🚀' },
      { name: vampire, icon: '🧛' },
    ],
    '40-49': [
      { name: psychology, icon: '🧠' },
      { name: biography, icon: '📖' },
      { name: adventure, icon: '🚀' },
      { name: science, icon: '🔬' },
      { name: historical, icon: '🏰' },
      { name: romance, icon: '💕' },
    ],
    '50+': [
      { name: psychology, icon: '🧠' },
      { name: biography, icon: '📖' },
      { name: adventure, icon: '🚀' },
      { name: science, icon: '🔬' },
      { name: historical, icon: '🏰' },
      { name: romance, icon: '💕' },
    ],
  };

  const age = localeStorageService.getData('selectedAgeRange').options;
  const availableGenres = ageGroupsGenres[age];
  console.log(availableGenres);

  useEffect(() => {
    setButtonActive(selectedGenres.length > 0);
    const genresData = {
      question: topicsQuestion,
      type: multiType,
      options: selectedGenres,
    };

    localeStorageService.saveData('selectedGenres', genresData);
  }, [selectedGenres]);

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      );
    } else {
      if (selectedGenres.length < 3) {
        setSelectedGenres([...selectedGenres, genre]);
      }
    }
  };

  const handleNextClick = () => {
    navigate('/quiz/loader');
  };

  return (
    <>
      <QuizHeader questionNumber={5} totalQuestions={5} showBackButton={true} />
      <QuestionContainer>
        <Question>{topicsQuestion}</Question>
        <Task>{topicsTask}</Task>
        <TopicsGrid>
          {ageGroupsGenres[age].map((genre) => (
            <GridItem key={genre.name}>
              <GenreOption
                selected={selectedGenres.includes(genre.name)}
                onClick={() => toggleGenre(genre.name)}
              >
                <span>{genre.icon}</span>
                <p>{genre.name}</p>
                <input
                  type='checkbox'
                  checked={selectedGenres.includes(genre.name)}
                  readOnly
                />
              </GenreOption>
            </GridItem>
          ))}
        </TopicsGrid>
        <NextButton
          onClick={() => handleNextClick()}
          disabled={!isButtonActive}
          active={isButtonActive}
        >
          Next
        </NextButton>
      </QuestionContainer>
    </>
  );
};

export default GenresSelection;
