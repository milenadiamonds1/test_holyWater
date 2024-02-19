import { styled } from 'styled-components';

export const GendersList = styled.div`
  display:flex;
`;

export const GenderOption = styled.button`
  height: 120px;
  border-radius: 10px;
  background-color: #36173D;
  padding:30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  &:last-child{
    margin-right:0;
  }
  border: none;
  cursor: pointer;
`;

export const GenderEmoji = styled.span`
  font-size: 48px;
`;

export const GenderLabel = styled.span`
  font-size: 16px;
  color: #fff;
  margin-top: 5px;
`;