import styled from 'styled-components';

export const FriendsBox = styled.div`
  max-width: 350px;
  margin: 20px auto 0 auto;
`;

export const FriendsList = styled.ul`
  list-style: none;
  padding: ${props => props.theme.space[0]}px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.lightGrey};
  padding-left: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
`;

export const FriendStatus = styled.span`
  margin-right: ${props => props.theme.space[5]}px;
  width: ${props => props.theme.space[4]}px;
  height: ${props => props.theme.space[4]}px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => (props.status ? props.theme.colors.green : props.theme.colors.red)};
`;

export const FriendImg = styled.img`
   width: ${props => props.theme.space[6]}px;
   margin-right: ${props => props.theme.space[4]}px;
`;

export const FriendName = styled.p`
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.text};
`;