import { styled } from 'styled-components';
import { ErrorText } from '../components/EmailPage/styles';
import { GratitudeText, GratitudeTitle } from '../components/GratitudePage/styles';

export const Question = styled.h1`
  font-size: 30px;
  margin-bottom:30px;
  font-weight: 800;
`;

export const Task = styled.p`
  margin: 20px;
  color: #c4c8cc;
  font-size: 17px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppBackground = styled.div`
  background-color: #1f002b;
`;

export const AppContainer = styled.div`
  box-sizing: border-box;
  color: #fff;
  font-weight: 400;

  height: 100vh;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  p,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ${Question} {
    margin-bottom: 30px;
  }

  ${Task},
  ${ErrorText} {
    margin-bottom: 20px;
  }

  ${GratitudeTitle} {
    margin-bottom: 10px;
  }

  ${GratitudeText} {
    margin-bottom: 60px;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 20px;
  font-family: 'Albert Sans', sans-serif;
`;