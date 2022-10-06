import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/getRandomColor';

// export const StatisticsBox = styled.section`
//   max-width: 350px;
//   margin: 20px auto 0 auto;
//   background-color: ${props => props.theme.colors.lightGrey};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
// `;
export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.space[5]}px;
  margin: ${props => props.theme.space[0]}px;
`;

export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: ${props => props.theme.space[0]}px;
  padding: ${props => props.theme.space[0]}px;
`;

export const StatisticsItem = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   background-color: ${getRandomHexColor};
   padding: ${props => props.theme.space[3]}px;
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSizes.s};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Percentage = styled.span`
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.white};
`;