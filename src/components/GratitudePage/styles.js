import { styled } from 'styled-components';
import { EmailContainer } from '../EmailPage/styles';

export const GratitudeTitle = styled.h1`
  font-family: 'Niconne', cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
`;

export const RetakeButton = styled.button`
  width: 400px;

  @media (max-width: 500px) {
    width: 100%;
  }
  background-color: #e4229c;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 13px 0;
  margin-top: 20px;
`;

export const TransparentButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const TransparentButtonIcon = styled.img`
  margin-right: 7px;
`;

export const GratitudeBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GratitudeText = styled.p``;

export const GraritudeContainer = styled(EmailContainer)`
  justify-content: space-evenly;
`;
