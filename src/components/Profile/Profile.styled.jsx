import styled from 'styled-components';


export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto 0 auto;
  max-width: 250px;
  padding: ${props => props.theme.space[3]}px;
  background-color: ${props => props.theme.colors.grey};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const UserBox = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.s};
`;

export const UserImage = styled.img`
  width: 150px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.theme.colors.white};
`;

export const InfoText = styled.p`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  font-size: ${props => props.theme.fontSizes.s};
  background-color: ${props => props.theme.colors.yellow};
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[2]}px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.space[3]}px;
  outline: 1px solid #B0B9B3;
`;