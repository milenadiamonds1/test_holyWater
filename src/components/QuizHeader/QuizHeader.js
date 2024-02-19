import React from 'react';
import {
  ProgressBar,
  Progress,
  Header,
  BackButton,
  ProgressText,
  ProgressContainer,
  MainContainer,
} from './styles';
import { useNavigate } from 'react-router-dom';

const QuizHeader = ({
  children,
  questionNumber,
  totalQuestions,
  showBackButton,
}) => {
  const progress = (questionNumber / totalQuestions) * 100;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Header>
      <MainContainer>
        {showBackButton ? (
          <BackButton onClick={() => handleGoBack()}>{'<'}</BackButton>
        ) : (
          <span></span>
        )}
        <ProgressContainer>
          <ProgressText style={{ color: '#e4229c' }}>
            {questionNumber}
          </ProgressText>
          <ProgressText>/{totalQuestions}</ProgressText>
        </ProgressContainer>
        <span></span>
      </MainContainer>
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>
      {children}
    </Header>
  );
};

export default QuizHeader;
