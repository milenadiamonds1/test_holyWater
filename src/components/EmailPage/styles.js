import styled from 'styled-components';
import { NextButton } from '../HateSelection/styles';

export const Input = styled.input`
  width: 350px;
  height: 70px;
  border: none;
  margin-bottom:20px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #36173d;
  color: #ccc;
  outline: none;
  ::placeholder {
    color: #ccc;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;

export const NewButton = styled(NextButton)`
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const EmailPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;