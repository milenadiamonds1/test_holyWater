import styled from 'styled-components';

export const GenreOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
  width: 100px;
  height: 100px;
  border: 2px solid ${({ selected }) => (selected ? '#E4229C' : 'none')};
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  background-color: #36173d;

  span {
    font-size: 24px;
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked + p {
    color: #e4229c;
  }
`;

export const GridItem = styled.div`
  height: 100px;
  margin:10px;

  @media (min-width: 685px) {
    margin: 25px 0 0 0;

    &:nth-child(odd) {
      margin-top: 0;
    }
  }

  @media (max-width: 470px) {
    margin: 5px;
    &:nth-child(odd) {
      margin-top: 5px;
    }
  }
`;

export const TopicsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
