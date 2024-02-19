import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LocalizationComponent/LocolizationComponent';
import { Question } from '../../styles/styles';
import { Container, CircleBackground, Circle, Percentage, Svg } from './styles';
import { useNavigate } from 'react-router-dom';

const Loader = ({ messages }) => {
  const language = useLanguage();
  const { loaderQuestion } = messages[language.language];

  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  console.log(messages, language, loaderQuestion);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/quiz/email')
          }, );
          return prevProgress;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container>
        <Svg viewBox='0 0 100 100'>
          <CircleBackground cx='50' cy='50' r='40' />
          <Circle
            cx='50'
            cy='50'
            r='40'
            strokeDashoffset={251.2 - progress * 2.512}
          />
          <Percentage x='50' y='50'>
            {progress}%
          </Percentage>
        </Svg>
        <Question>{loaderQuestion}</Question>
      </Container>
    </>
  );
};

export default Loader;
