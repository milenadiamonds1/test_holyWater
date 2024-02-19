import { styled } from 'styled-components';

export const Header = styled.div`
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
`;

export const Progress = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #d0006e;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressText = styled.p``;

export const MainContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
`;
