import { styled } from 'styled-components';
import { OptionItem } from '../LanguageSelection/styles';

export const Checkbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #e4229b;
  border-radius: 7px;
  background-color: #6d4376;
  margin-left: 100px;

  @media (max-width: 420px) {
    margin-left: 70px;
  }
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: #e4229b;
    border-color: #e4229b;
  }

  &:checked::after {
    content: '\\2713';
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

export const HateInBookItem = styled(OptionItem)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NextButton = styled.button`
  width: 400px;

  @media (max-width: 500px) {
    width: 100%;
  }
  background-color: #e4229c;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 13px 0;
  margin-top: 30px;
  opacity: ${(props) => (props.active ? '1' : '0.4')};
  cursor: ${(props) => (props.active ? 'pointer' : 'default')};
`;
