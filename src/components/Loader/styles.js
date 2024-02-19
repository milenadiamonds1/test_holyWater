import { styled } from 'styled-components';
import { Question } from '../../styles/styles';

export const Container = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: #36173d;
  stroke-width: 6;
`;

export const Circle = styled.circle`
  fill: none;
  stroke: #e4229c;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 251.2;
  transition: stroke-dashoffset 0.05s;
`;

export const Percentage = styled.text`
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 16px;
  fill: #fff;
`;

export const Title = styled(Question)`
font-size:45px;
`;